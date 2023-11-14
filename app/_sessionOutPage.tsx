"use client"
import Image from 'next/image'

export default function SessionOut() {
  return <>
    <div className="grid grid-rows-2 gap-8">
      <div className="slide-in-right ">
        <div className="after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"></div></div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-['']  before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[380px] z-[-1] pl-8 pt-4">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="flex flex-row items-center ">
        <h1 className="text-xl py-5 px-2 font-mono">Please</h1>
        <a className="group rounded-lg border px-5 py-3 hover:border-gray-100 hover:text-sky-400 dark:bg-slate-200 text-sky-600 font-bold hover:dark:bg-slate-50"
          href="/login"> Sign In</a>
        <h1 className="text-xl py-5 px-2 font-mono">First</h1>
      </div>
      <div>
        <h1 className="font-mono text-xl py-5 px-2">What is in this repo:</h1>
        <ul>
          <li className="font-mono">- Mock RESTful api request & response</li>
          <li className="font-mono">- Form validation</li>
          <li className="font-mono">- Some CSS ideas</li>
        </ul>

      </div>
    </div>
    <div className="slide-rotate"><div className="circle-object "></div></div>

  </>
}