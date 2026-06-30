"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SignInForm() {
  return (
    <>
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
        <div className="text-sm text-center">
          <Link href="/sign-up">ثبت نام</Link>
        </div>
      </div>
    </>
  );
}
