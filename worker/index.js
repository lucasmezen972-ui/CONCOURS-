const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);
    if (url.pathname !== '/progress') {
      return new Response('Not Found', { status: 404, headers: CORS });
    }

    if (request.method === 'GET') {
      const data = await env.CONCOURS_PROGRESS.get('progress');
      return new Response(data || '{}', {
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    if (request.method === 'PUT') {
      const body = await request.text();
      try {
        JSON.parse(body);
      } catch {
        return new Response('Invalid JSON', { status: 400, headers: CORS });
      }
      await env.CONCOURS_PROGRESS.put('progress', body);
      return new Response('{"ok":true}', {
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    return new Response('Method Not Allowed', { status: 405, headers: CORS });
  },
};
