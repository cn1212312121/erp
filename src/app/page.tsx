import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
     <h1>Home</h1>
     <Link className="me-1" href={"/about"}>เกี่ยวกับเรา</Link>
     <Link className="me-1" href={"/register"}>สมัครสมาชิก</Link>
     <Link href={"/contact"}>ติดต่อเรา</Link>
     
    </div>
  );
}
