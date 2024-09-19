"use client";
import TitlePage from "@/components/TitlePage";
import React from "react";
const SignUpPage = () => {
  const signup = async () => {
    alert("OK");
  };
  return (
    <div>
      <TitlePage title={"สมัครสมาชิก"} />
      <button onClick={signup}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
