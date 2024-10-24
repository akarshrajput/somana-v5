import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import {
  ApplePodcastsLogo,
  Book,
  Butterfly,
  CaretDown,
  MusicNote,
  Video,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const SwitchService = () => {
  return (
    <Menu>
      <MenuButton>
        <p className="p-2 px-3 rounded-md font-medium bg-green-400 text-sm flex items-center gap-1">
          Services <CaretDown weight="bold" />
        </p>
      </MenuButton>
      <MenuList>
        <Link href="/story">
          <MenuItem>
            <Book weight="bold" className="mr-2" />
            Stories
          </MenuItem>
        </Link>
        <Link href="/music">
          <MenuItem>
            <MusicNote weight="bold" className="mr-2" />
            Music
          </MenuItem>
        </Link>
        <Link href="/podcast">
          <MenuItem>
            <ApplePodcastsLogo weight="bold" className="mr-2" />
            Podcasts
          </MenuItem>
        </Link>
        <Link href="/movie">
          <MenuItem>
            <Video weight="bold" className="mr-2" />
            Movies
          </MenuItem>
        </Link>
        <Link href="/anime">
          <MenuItem>
            <Butterfly weight="bold" className="mr-2" />
            Anime
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default SwitchService;
