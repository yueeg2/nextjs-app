import { createCookies } from "@/app/action";

export async function GET(
  request: Request,
  context: { params: any }) {
  const { searchParams } = new URL(request.url);

  if (request.headers.get('cookies')) {
    return new Response(JSON.stringify({ message: 'Logged in' }), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  } else {
    return new Response(
      JSON.stringify({ message: 'Need login' }),
      {
        status: 400,
        headers: {
          'content-type': 'application/json',
        },
      });
  }

};

export async function POST(
  request: Request,
  context: { params: any }) {
  const { searchParams } = new URL(request.url);
  const { username, password } = (await request.json());

  if (username && password) {


    return new Response(
      JSON.stringify({
        message: 'success',
        data: (await createCookies(username))
      }),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      });
  } else {
    return new Response(JSON.stringify({ message: 'username or password is missing' }), {
      status: 400,
      headers: {
        'content-type': 'application/json',
      },
    });
  }


}
