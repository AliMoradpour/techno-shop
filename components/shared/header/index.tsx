import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="flex flex-1 justify-between items-center max-w-7xl p-5 px-10 w-full mx-auto">
        {/* logo */}
        <div className="flex justify-start items-center">
          <Link href="/" className="flex justify-start items-center">
            <span>لوگو</span>
            <span className="block font-bold text-2xl mr-3">تکنوشاپ</span>
          </Link>
        </div>
        {/* user and cart and Theme Toggle */}
        <div className="space-x-2">
          <ThemeToggle />
          <Button asChild>
            <Link href="/cart" className="flex items-center justify-center gap-x-2">
              <ShoppingCart />
              <p className="hidden md:block">سبد خرید</p>
            </Link>
          </Button>
          <Button>
            <Link href="/sign-in" className="flex items-center justify-center gap-x-2">
              <UserIcon />
              <p className="hidden md:block">حساب کاربری</p>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
