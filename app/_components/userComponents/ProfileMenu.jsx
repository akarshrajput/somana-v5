import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Divider,
} from "@chakra-ui/react";
import LogoutButton from "../buttons/LogoutButton";
import Link from "next/link";
import {
  Book,
  Books,
  Bug,
  Detective,
  Gear,
  Key,
  Question,
  UserCheck,
  UserCircle,
  Warning,
} from "@phosphor-icons/react/dist/ssr";

const ProfileMenu = ({ session }) => {
  return (
    <Menu>
      <MenuButton>
        <img
          className="size-8 rounded-full cursor-pointer"
          src={`${session?.user?.photo}`}
        />
      </MenuButton>
      <MenuList>
        <Link href="/me">
          <MenuItem>
            <UserCircle weight="bold" className="mr-2" />
            Profile
          </MenuItem>
        </Link>

        <MenuItem>
          <Book weight="bold" className="mr-2" />
          Stories
        </MenuItem>
        <MenuItem>
          <Books weight="bold" className="mr-2" />
          Library
        </MenuItem>
        <Divider />
        <MenuItem>
          <Gear weight="bold" className="mr-2" />
          Settings
        </MenuItem>
        <MenuItem>
          <Question weight="bold" className="mr-2" />
          Help
        </MenuItem>
        <Link href="/support">
          <MenuItem>
            <Warning weight="bold" className="mr-2" />
            Support
          </MenuItem>
        </Link>
        <MenuItem>
          <Bug weight="bold" className="mr-2" />
          Bug Report
        </MenuItem>
        <Link href="/privacy-policy">
          <MenuItem>
            <Detective weight="bold" className="mr-2" />
            Policy
          </MenuItem>
        </Link>
        <Divider />
        <MenuItem>
          <UserCheck weight="bold" className="mr-2" />
          Subscription
        </MenuItem>
        <MenuItem>
          <Key weight="bold" className="mr-2" />
          API key
        </MenuItem>

        <Divider />
        <div className="mx-2 mt-2">
          <LogoutButton />
        </div>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
