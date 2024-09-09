import { UserModel } from "@/models/UserModel";
import partRoute from "@/utils/partRoute";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// สร้างอินเตอร์เฟซสำหรับ params
type Params = {
  id: string;
};

type Props = {
  params: Params;
};

const UserPage = async ({ params }: Props) => {
  const { id } = params;
  const url = `https://dummyjson.com/users/${id}`;
  const data = await fetch(url);
  const res: UserModel = await data.json();

  return (
    <div>
      <div>
        <Link
          href={partRoute.USERS}
          className="underline text-blue-500 mb-2"
        >{`< ย้อนกลับ`}</Link>
      </div>
      <div>
        <Image
          src={res.image}
          alt="Description of the image" // ควรกำหนดข้อความที่อธิบายภาพเพื่อการเข้าถึง
          width={500} // ระบุขนาดกว้างของภาพ (ใน pixels)
          height={300} // ระบุขนาดสูงของภาพ (ใน pixels)
          layout="responsive" // ใช้ layout "responsive" เพื่อให้รูปภาพมีขนาดตามสัดส่วน
        />
      </div>
      <div>
        ชื่อ-สกุล: {res.maidenName} {res.firstName} {res.lastName} เพศ: {res.gender}
      </div>
      <div>เบอร์โทรศัพท์: {res.phone}</div>
      <div>Email: {res.email}</div>
    </div>
  );
};

export default UserPage;
