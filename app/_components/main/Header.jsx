import { auth } from "@/app/_lib/auth";
import LoginButton from "../buttons/LoginButton";
import LoadingMain from "./Loading";
import Logo from "./Logo";
import Search from "./Search";
import UploadType from "./UploadType";
import ProfileMenu from "../userComponents/ProfileMenu";
import SwitchService from "../buttons/SwitchService";

const Header = async () => {
  const session = await auth();
  return (
    <div className="p-1 bg-white flex gap-2 items-center">
      <Logo />

      <div className="ml-auto h-full flex items-center gap-2">
        <Search />
        <SwitchService />
        <UploadType />
        {session ? <ProfileMenu session={session} /> : <LoginButton />}
      </div>
    </div>
  );
};
export default Header;
