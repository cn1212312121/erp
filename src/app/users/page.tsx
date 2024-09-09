import { UserModel } from "@/models/UserModel";
import partRoute from "@/utils/partRoute";
import Link from "next/link";
import React from "react";

const Users = async () => {
  const url = `https://dummyjson.com/users`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const users: UserModel[] = data.users;

    return (
      <div>
        {users.map((u: UserModel) => (
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
  } catch (error) {
    // ใช้ประเภท Error แทน any
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return <div>Error: {errorMessage}</div>;
  }
};

export default Users;
