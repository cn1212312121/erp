import { UserModel } from "@/models/UserModel";
import partRoute from "@/utils/partRoute";
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
        <Link href={partRoute.USERS}>{`< ย้อนกลับ`}</Link>
      </div>
      <div>
        {res.maidenName} {res.firstName} {res.lastName}
      </div>
    </div>
  );
};

export default UserPage;
