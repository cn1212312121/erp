import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erp",
  description: "Erp Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full md:w-[500px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
