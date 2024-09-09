'use client';
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const About = (props: Props) => {
    const route=useRouter()
    const goHome = ()=>{
        route.push("/")    
    }
  return (
    <div>
      <h1>About</h1>
      <button onClick={goHome} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        หน้าหลัก
      </button>
    </div>
  );
};

export default About;
