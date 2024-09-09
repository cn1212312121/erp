import TitleText from "@/components/TitleText";
import partRoute from "@/utils/partRoute";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div>
      <TitleText title={"สมัครสมาชิก"} />
      <div>
        เป็นสมาชิกอยู่แล้ว{" "}
        <Link href={partRoute.LOGIN} className="underline text-blue-500">
          เข้าสู่ระบบ
        </Link>
      </div>
    </div>
  );
};

export default Register;
