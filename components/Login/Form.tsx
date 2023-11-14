"use client";

import { useState, useContext, FormEvent } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

import AuthContext from "@/context";
import { isSpecialchars } from "@/utils/checkSpecialChar";

import LoadingDots from "./LoadingDots";
import { fetchBy } from "@/app/api/_fetch";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

export default function Form({ type }: { type: "login" | "forget_password" }) {

  const router = useRouter();
  const { setLoading, loading, setDialog } = useContext(AuthContext);
  const [value, setValue] = useLocalStorage('login', 'logout');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const checkUsername = (username: string) => {
    if (isSpecialchars(username)) {
      toast.error("你可能輸入了特殊字元，被系統判定為危險的輸入。");
      return true;
    }

    return false;
  }

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkUsername(username)) return;
    if (type === "login") {
      fetchBy("POST", {
        url: `http://localhost:3001/api/auth`,
        body: {
          username: e.currentTarget.username?.value,
          password: e.currentTarget.password?.value,
        }
      }).then(async ({ data }) => {
        window.localStorage.setItem('username', data.value)
        window.localStorage.setItem('expireDate', data.expires)

        toast.success('Sign in Successfully')

        setTimeout(() => { router.push('/') }, 1000)

      })
    } else {
      // forget password
    }
  }

  return (
    <form onSubmit={onSubmitForm}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16 text-blue-prussian">
      {
        type === "login"
          ? <>
            <div id="set-username">
              <label
                htmlFor="username"
                className="block text-xs text-gray-600 uppercase"
              >
              </label>
              <input
                id="username"
                name="username"
                type="username"
                placeholder="Username"
                required
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-prussian focus:outline-none focus:ring-blue-prussian sm:text-sm"
              />
            </div>
            <div id="set-password">
              <label
                htmlFor="password"
                className="block text-xs text-gray-600 uppercase"
              >
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required

                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-prussian focus:outline-none focus:ring-blue-prussian sm:text-sm"
              />
            </div></>
          : <div id="set-email">
            <label
              htmlFor="email"
              className="block text-xs text-gray-600 uppercase"
            >
            </label>
            <input id="email"
              name="email"
              type="email"
              placeholder="Email or username"
              required
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-prussian focus:outline-none focus:ring-blue-prussian sm:text-sm"
            />
          </div>
      }
      <button type="submit" className={`${loading
        ? "cursor-not-allowed border-gray-200 bg-blue-green"
        : "border-blue-green bg-blue-green text-white hover:bg-blue-green/80"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:border-blue-prussian`}
      >{loading ? <LoadingDots color="#808080" /> : 'Continue'}
      </button>
      <RepentDecision type={type} />

    </form>

  );
};

function RepentDecision({ type }: { type: 'login' | 'forget_password' }) {
  return <div className="text-center text-sm text-gray-600">
    <Link href={type === "login" ? "/forgetPassword" : "/login"}
      className="font-semibold text-blue-columbia hover:text-blue-prussian">
      {type === "login" ? "Forget password" : "Back to login"}
    </Link>
  </div>
};