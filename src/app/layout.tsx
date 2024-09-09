import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import partRoute from "@/utils/partRoute";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="text-center mt-12">
          <Link className="me-1" href={partRoute.HOME}>
            หน้าหลัก
          </Link>
          <Link className="me-1" href={partRoute.USERS}>
            Users
          </Link>
          <Link className="me-1" href={partRoute.ABOUT}>
            เกี่ยวกับเรา
          </Link>
          <Link className="me-1" href={partRoute.CONTACT}>
            ติดต่อเรา
          </Link>

          <Link className="me-1" href={partRoute.REGISTER}>
            สมัครสมาชิก
          </Link>
          <Link className="me-1" href={partRoute.LOGIN}>
            เข้าสู่ระบบ
          </Link>
        </div>
        <div className="p-3 container">{children}</div>
      </body>
    </html>
  );
}
