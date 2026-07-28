"use client";

import { signIn } from "@/auth";
import { findMobile } from "@/lib/actions/findMobile.actions";
import { OTP } from "@/lib/actions/otp.actions";
import { FormEvent, useState } from "react";

export default function OtpForm() {
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [mobile, setMobile] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [userCode, setUserCode] = useState("");
  const [error, setError] = useState(false);

  async function checkMobile(phone: string) {
    setLoginInProgress(true);
    const mobileNumber = await findMobile(phone);

    if (!mobileNumber) return null;

    setIsStepTwo(true);

    const otpCode = await OTP(phone);

    setMobile(phone);

    if (otpCode && otpCode.data && otpCode.data.code) {
      setSentCode(otpCode.data.code);
    } else {
      setError(true);
      setLoginInProgress(false);
      return null;
    }

    setLoginInProgress(false);
  }

  async function verifyCode(code: string) {
    const verification = sentCode == code;

    if (!verification) {
      setError(true);
      return null;
    }

    await signIn("mobile-login", {
      mobile: mobile,
      callbackUrl: "/",
    });
  }

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    if (isStepTwo) {
      verifyCode(userCode);
    }
    if (!isStepTwo) {
      checkMobile(mobile);
    }
  }

  return (
    <>
      <form onSubmit={submitHandler}></form>
    </>
  );
}
