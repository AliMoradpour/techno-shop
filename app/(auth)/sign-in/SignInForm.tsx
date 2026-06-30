"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { signInWithCredentials } from "@/lib/actions/user.action";

export default function SignInForm() {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const searchparams = useSearchParams();
  const callbackUrl = searchparams.get("callbackUrl") || "/";

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="email" className="mb-2">
            ایمیل
          </Label>
          <Input id="email" name="email" required autoComplete="email" />
        </div>
        <div>
          <Label htmlFor="password" className="mb-2">
            رمز عبور
          </Label>
          <Input id="password" type="password" name="password" required autoComplete="password" />
        </div>
        <div>
          <Button className="w-full" variant="default">
            ورود
          </Button>
        </div>
        {data && !data.success && <div className="text-center text-destructive">{data.message}</div>}
        <div className="text-sm text-center">
          <Link href="/sign-up">ثبت نام</Link>
        </div>
      </div>
    </form>
  );
}
