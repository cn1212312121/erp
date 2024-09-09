import partRoute from "@/utils/partRoute";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <h3>Login</h3>
      ยังไม่ได้เป็นสมาชิก{" "}
      <Link href={partRoute.REGISTER} className="underline text-blue-500">
        สมัครสมาชิก
      </Link>
    </div>
  );
};

export default Login;
