"use client"
import TitleText from "@/components/TitleText";
import partRoute from "@/utils/partRoute";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const login = () => {
    alert("Login success");
  }
  return (
    <div>
      <form action="">
        <TitleText title={"เข้าสู่ระบบ"} textSize="text-9xl" />

        <input
          type="text"
          placeholder="Username"
          className="border mx-2 px-2"
        />
        <input
          type="text"
          placeholder="Password"
          className="border mx-2 px-2"
        />
        <button onClick={login} className="border mx-2 px-2">Log in</button>
      </form>

      <div className="mt-5">
        ยังไม่ได้เป็นสมาชิก{" "}
        <Link href={partRoute.REGISTER} className="underline text-blue-500">
          สมัครสมาชิก
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
