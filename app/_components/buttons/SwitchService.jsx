import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  ApplePodcastsLogo,
  Book,
  CaretCircleDoubleDown,
  MusicNote,
  Popcorn,
  Television,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const SwitchService = () => {
  return (
    <Menu>
      <MenuButton className="p-1.5 flex items-center gap-1 px-2 bg-green-300 rounded-md font-medium text-sm">
        <div className="flex items-center gap-1">
          Switch <CaretCircleDoubleDown weight="bold" />
        </div>
      </MenuButton>
      <MenuList className="max-w-40 w-40">
        <Link href="/story">
          <MenuItem className="gap-1 w-fit text-sm">
            <Book weight="bold" /> Story
          </MenuItem>
        </Link>
        <Link href="/podcast">
          <MenuItem className="gap-1 w-fit text-sm">
            <ApplePodcastsLogo weight="bold" /> Podcast
          </MenuItem>
        </Link>
        <Link href="/music">
          <MenuItem className="gap-1 w-fit text-sm">
            <MusicNote weight="bold" /> Music
          </MenuItem>
        </Link>
        <Link href="/movie">
          <MenuItem className="gap-1 w-fit text-sm">
            <Popcorn weight="bold" /> Movie
          </MenuItem>
        </Link>
        <Link href="/news">
          <MenuItem className="gap-1 w-fit text-sm">
            <Television weight="bold" /> News
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default SwitchService;
