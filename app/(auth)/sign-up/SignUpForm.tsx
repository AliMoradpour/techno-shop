"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { signUpUser } from "@/lib/actions/user.action";

export default function SignUpForm() {
  const router = useRouter();

  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const searchparams = useSearchParams();
  const callbackUrl = searchparams.get("callbackUrl") || "/";

  if (data && data.success) {
    router.push(callbackUrl);
  }

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="name" className="mb-2">
            نام
          </Label>
          <Input id="name" type="text" name="name" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2">
            ایمیل
          </Label>
          <Input id="email" type="text" name="email" required autoComplete="email" />
        </div>
        <div>
          <Label htmlFor="password" className="mb-2">
            رمز عبور
          </Label>
          <Input id="password" type="password" name="password" required autoComplete="password" />
        </div>
        <div>
          <Label htmlFor="confirmPassword" className="mb-2">
            تکرار رمز عبور
          </Label>
          <Input id="confirmPassword" type="password" name="confirmPassword" required autoComplete="confirmPassword" />
        </div>
        <div>
          <Button className="w-full" variant="default">
            ثبت نام
          </Button>
        </div>
        {data && !data.success && <div className="text-center text-destructive">{data.message}</div>}
        <div className="text-sm text-center">
          <Link href="/sign-in">ورود</Link>
        </div>
      </div>
    </form>
  );
}
