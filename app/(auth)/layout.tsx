import { ReactNode } from "react";

export default function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="flex items-center min-h-screen w-full">{children}</div>;
}
