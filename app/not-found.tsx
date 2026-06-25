import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-black">صفحه‌ی مورد نظر پیدا نشد</h2>
      <Button variant="outline" className="mt-6" asChild>
        <Link href="/">بازگشت به فروشگاه</Link>
      </Button>
    </div>
  );
}
