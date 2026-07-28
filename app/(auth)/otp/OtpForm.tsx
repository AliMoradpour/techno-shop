'use client'

import { findMobile } from "@/lib/actions/findMobile.actions"
import { useState } from "react"


export default function OtpForm() {
 const [loginInProgress, setLoginInProgress] = useState(false) 
 const [isStepTwo, setIsStepTwo] = useState(false)
 const [mobile, setMobile] = useState('')
 const [userCode, setUserCode] = useState('')
 const [error, setError] = useState(false)

 async function checkMobile(phone: string){
  setLoginInProgress(true)
  const mobileNumber = await findMobile(phone)
 }
 
 return (
    <div>OtpForm</div>
  )
}
