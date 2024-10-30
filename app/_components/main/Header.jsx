import { auth } from "@/app/_lib/auth";
import LoginButton from "../buttons/LoginButton";
import Logo from "./Logo";
import Search from "./Search";
import ProfileMenu from "../userComponents/ProfileMenu";
import SwitchService from "../buttons/SwitchService";
import Link from "next/link";

const Header = async () => {
  const session = await auth();
  return (
    <div className="p-1 bg-white flex gap-2 items-center">
      <Logo />

      <div className="ml-auto h-full flex items-center gap-2">
        <Search />
        <SwitchService />
        <Link
          href="/upload"
          className="p-1.5 flex items-center gap-1 px-2 bg-green-300 rounded-md font-medium text-sm"
        >
          Upload
        </Link>
        {session ? <ProfileMenu session={session} /> : <LoginButton />}
      </div>
    </div>
  );
};
export default Header;
