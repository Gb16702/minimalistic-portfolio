import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-dvh pt-16 sm:pt-20 md:pt-24 lg:pt-32">
      <nav className="container">
        <Link href={"/"} className="text-xl font-medium">
          Geoffrey
        </Link>
      </nav>
      <div className="container mt-1">
        <h1 className="inline font-medium text-muted-foreground">
          Software Developer
        </h1>
      </div>
      <main>{children}</main>
    </div>
  );
}
