"use client";
import TitlePage from "@/components/TitlePage";
import axios from "axios";
import React from "react";
const SignInPage = () => {
  const login = async () => {
    try {
      const result = (await axios.get("http://localhost:8000/user.php")).data;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <TitlePage title={"เข้าสู่ระบบ"} />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default SignInPage;
