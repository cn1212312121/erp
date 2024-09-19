import routes from "@/constants/routes"; // routes ควรเป็น static path ที่กำหนดไว้อย่างชัดเจน
import Link from "next/link";
import React from "react";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2">
      <Link
        href={routes.SIGNUP} // เส้นทาง static
        className="bg-green-500 rounded px-4 py-2 text-white font-semibold mb-2 w-full text-center"
      >
        สมัครสมาชิก
      </Link>
      <Link
        href={routes.SIGNIN} // เส้นทาง static
        className="bg-blue-500 rounded px-4 py-2 text-white font-semibold w-full text-center"
      >
        เข้าสู่ระบบ
      </Link>
    </div>
  );
}
