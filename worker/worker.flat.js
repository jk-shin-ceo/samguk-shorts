// Samguk Shorts Uploader backend (Cloudflare Worker).
// Keeps the TikTok client secret off the website and relays API calls.
// Env: TIKTOK_CLIENT_KEY, TIKTOK_CLIENT_SECRET (secrets). Optional KV binding: TOKENS.
const ORIGIN = "https://jk-shin-ceo.github.io";
const REDIRECT_URI = "https://jk-shin-ceo.github.io/samguk-shorts/callback.html";
const API = "https://open.tiktokapis.com";
const ALLOWED = new Set([
"/v2/user/info/",
"/v2/post/publish/creator_info/query/",
"/v2/post/publish/video/init/",
"/v2/post/publish/inbox/video/init/",
"/v2/post/publish/status/fetch/",
"/v2/video/list/",
]);

function cors(extra = {}) {
return {
"Access-Control-Allow-Origin": ORIGIN,
"Access-Control-Allow-Methods": "GET,POST,PUT,OPTIONS",
"Access-Control-Allow-Headers": "Authorization,Content-Type,Content-Range,X-Upload-Url",
"Access-Control-Max-Age": "86400",
...extra,
};
}
const json = (obj, status = 200) =>
new Response(JSON.stringify(obj), { status, headers: cors({ "Content-Type": "application/json" }) });

async function saveToken(env, tok) {
if (env.TOKENS && tok.open_id) {
await env.TOKENS.put(tok.open_id, JSON.stringify({ ...tok, saved_at: Date.now() }));
}
}

export default {
async fetch(req, env) {
const url = new URL(req.url);
if (req.method === "OPTIONS") return new Response(null, { headers: cors() });

// Exchange the authorization code for tokens.
if (url.pathname === "/api/token" && req.method === "POST") {
const { code, code_verifier } = await req.json();
const body = new URLSearchParams({
client_key: env.TIKTOK_CLIENT_KEY,
client_secret: env.TIKTOK_CLIENT_SECRET,
code,
grant_type: "authorization_code",
redirect_uri: REDIRECT_URI,
});
if (code_verifier) body.set("code_verifier", code_verifier);
const r = await fetch(API + "/v2/oauth/token/", {
method: "POST",
headers: { "Content-Type": "application/x-www-form-urlencoded" },
body,
});
const tok = await r.json();
if (tok.access_token) await saveToken(env, tok);
// The refresh token stays on the server.
const { refresh_token, refresh_expires_in, ...pub } = tok;
return json(pub, r.status);
}

// Relay an allowed TikTok API call with the creator's access token.
if (url.pathname === "/api/proxy" && req.method === "POST") {
const auth = req.headers.get("Authorization") || "";
const { path, query = "", body } = await req.json();
if (!ALLOWED.has(path)) return json({ error: "path not allowed" }, 400);
const r = await fetch(API + path + (query ? "?" + query : ""), {
method: body ? "POST" : "GET",
headers: { Authorization: auth, "Content-Type": "application/json; charset=UTF-8" },
body: body ? JSON.stringify(body) : undefined,
});
return new Response(await r.text(), { status: r.status, headers: cors({ "Content-Type": "application/json" }) });
}

// Stream the video file to TikTok's upload URL.
if (url.pathname === "/api/upload" && req.method === "PUT") {
const target = new URL(req.headers.get("X-Upload-Url") || "");
if (!target.hostname.endsWith(".tiktokapis.com")) return json({ error: "bad upload url" }, 400);
const r = await fetch(target.toString(), {
method: "PUT",
headers: {
"Content-Type": req.headers.get("Content-Type") || "video/mp4",
"Content-Range": req.headers.get("Content-Range"),
"Content-Length": req.headers.get("Content-Length"),
},
body: req.body,
});
return new Response(await r.text(), { status: r.status, headers: cors() });
}

if (url.pathname === "/") return new Response("Samguk Shorts Uploader API", { headers: cors() });
return json({ error: "not found" }, 404);
},
};
