'use server'

import { cookies } from 'next/headers'

export async function createCookies(username: string) {
  const halfHour = 0.5 * 60 * 60 * 1000
  cookies().set('LoginInfos', username, { expires: Date.now() - halfHour });

  return cookies().get('LoginInfos')
}

export async function getCookies(name:string) {
  const cookieStore = cookies()
  const TheCookies = cookieStore.get(name)
  return TheCookies ? cookies().toString() : null
}