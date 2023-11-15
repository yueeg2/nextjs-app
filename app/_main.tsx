"use client"

import React, { useState } from "react"

import SessionOut from './_sessionOutPage'
import SessionFillful from './_sessionFillfulPage'

export default function Main() {

  const [isClient, setIsClient] = React.useState(false);
  const [from_localStorage, setFrom_localStorage] = useState<string | null>(null);


  React.useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      setFrom_localStorage(window.localStorage.getItem('username'))
    }

  }, []);

  if (!isClient || typeof window === "undefined") {
    return <></>;
  };

  return from_localStorage ? <SessionFillful user={from_localStorage} window={window}/> : <SessionOut window={window}/>

}