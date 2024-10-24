"use client";
import { LogIn } from "lucide-react";
import Link from "next/link";

const LoginButton = () => {
  return (
    <>
      <Link
        href="/login"
        className="p-2 font-medium text-sm bg-green-400 rounded-md flex items-center gap-1"
      >
        Login <LogIn size="16" strokeWidth="3px" />
      </Link>
    </>
  );
};
export default LoginButton;
