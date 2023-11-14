"use client"

import React, { useState } from "react"

import SessionOut from './_sessionOutPage'
import SessionFillful from './_sessionFillfulPage'

export default function () { 

  const [from_localStorage, setFrom_localStorage] = useState(window.localStorage.getItem('username') || null);
  
  return from_localStorage ? <SessionFillful user={from_localStorage}/> : <SessionOut/> 
}