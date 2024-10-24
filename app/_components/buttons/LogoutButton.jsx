"use client";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="flex items-center gap-1 py-1 px-2 font-medium rounded-md bg-red-600 text-stone-50"
    >
      Log Out
    </button>
  );
};
export default LogoutButton;
