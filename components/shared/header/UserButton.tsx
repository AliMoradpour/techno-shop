import Link from "next/link";
import { UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { auth } from "@/auth";
import { signOutUser } from "@/lib/actions/user.action";

export default async function UserButton() {
  const session = await auth();

  if (!session) {
    <Button asChild>
      <Link href="/sign-in" className="flex items-center justify-center gap-x-2">
        <UserIcon />
        <p className="hidden md:block">حساب کاربری</p>
      </Link>
    </Button>;
  }
  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button variant="ghost" className="relative rounded-md ml-2 flex items-center justify-center">
              {session?.user?.name}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuItem className="p-0 mb-1">
            <form action={signOutUser} className="w-full">
              <Button className="w-full py-4 px-2 justify-end h-4" variant="ghost">
                خروج
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
