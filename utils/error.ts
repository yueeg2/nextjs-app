export const resolve = (_err: any) => new Response(
  JSON.stringify({ error: 'failed to load data' }),
  {
    status: 500,
    headers: {
      'content-type': 'application/json',
    },
  });
