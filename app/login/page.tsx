"use client"
import { useContext, useEffect, useState } from 'react'
import Image from "next/image";
import source from '@/public/assets/logo-cc.svg';

import Form from "@/components/Login/Form";
import LoadingAmination from "@/components/Login/LoadingAmination";
import AuthContext from '@/context';


export default function Page() {

  const { loading, setLoading, } = useContext(AuthContext);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <Image src={source}
            priority
            alt="clm"
            className="h-[112px] w-[112px] rounded-full"
            width={112}
            height={112}
          />
          <h3 className="text-xl font-semibold text-blue-prussian">Sign in</h3>
          <p className="text-xs text-blue-prussian">Feel free to enter whatever you want, this login site is just a demonstration.</p>
          {/* <p className="text-xs text-neutral-300">By continuing, you agree to this site's <a href="" className="text-cyan-500">Conditions of Use</a> and <a href="" className="text-cyan-500">Privacy Notice</a>. </p> */}

        </div>
        <Form type="login" />

      </div>
      {loading
        ? <LoadingAmination />
        : null}
    </div>



  );




}
