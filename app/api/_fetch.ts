export const Headers = {
  'Content-Type': 'application/json',
}
/**
 * (back) defined fetch method, then & catch
 * @param method 
 * @param url 
 * @returns 
 */
export async function fetchBy(
  Method: "GET" | "POST" | "PATCH",
  RequestInfo: { url: string, cookies?: any, body?: any }) {

  if (!RequestInfo.url) {
    throw new Error('RequestInfo Undefind')
  }

  return fetch(RequestInfo.url, {
    method: Method,
    body: JSON.stringify(RequestInfo.body) || null,
    headers: { ...Headers, Cookie: RequestInfo.cookies || '' },
    credentials: "include",
  }).then(async (Response: Response) => {
    console.log('---- Start ----')
    console.log(`fetch: ${Method} ${Response.url} ${Response.status} ${Response.ok ? `成功` : `失敗`}`)
    
    return ({
      ...(await Response.json()),
      status: Response.status,
      headers: Response.headers
    });
    
  });

};