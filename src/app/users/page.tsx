import { UserModel } from "@/models/UserModel";
import partRoute from "@/utils/partRoute";
import Link from "next/link";
import React from "react";

const Users = async () => {
  const url = `https://dummyjson.com/users`;
  const data = await fetch(url);
  const res = await data.json();
  await delay(1000);
  return (
    <div>
      {res.users.map((u: UserModel) => (
        <div key={u.id}>
          <Link
            href={`${partRoute.USERS}/${u.id}`}
            className="underline text-blue-500 mb-2"
          >
            {u.firstName} {u.lastName}
          </Link>
        </div>
      ))}
    </div>
  );
};
function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
export default Users;
