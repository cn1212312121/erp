import partRoute from "@/utils/partRoute";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <form action="">
        <h3 className="mb-3 font-bold text-2xl">Log in</h3>

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
        <button className="border mx-2 px-2">Log in</button>
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

export default Login;
