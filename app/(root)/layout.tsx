import Header from "@/components/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 max-w-7xl p-5 px-10 w-full mx-auto">{children}</main>
    </div>
  );
}
