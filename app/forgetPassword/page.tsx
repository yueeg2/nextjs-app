"use client"
import Image from "next/image";
import source from '@/public/assets/forgetPassword.svg';

import Form from "@/components/Login/Form";

export default function ForgetPassword() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <Image src={source}
            priority
            alt="clm"
            className="h-[112px] w-[112px]"
            width={112}
            height={112}
          />
          <h3 className="text-xl font-semibold text-blue-prussian">Password assistance</h3>
          <p className="text-xs text-blue-prussian">Enter the email address or mobile phone number associated with your account.</p>
        </div>
        <Form type="forget_password" />
      </div>
    </div>



  );
}