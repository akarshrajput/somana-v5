import {
  ApplePodcastsLogo,
  Book,
  MusicNote,
  Popcorn,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const SwitchService = () => {
  return (
    <div className="flex items-center gap-1">
      <Link
        href="/story"
        className="border border-blue-400 text-sm flex items-center gap-1 border-md bg-blue-200 p-1.5"
      >
        <Book weight="bold" />
        Story
      </Link>
      <Link
        href="/music"
        className="border border-blue-400 text-sm flex items-center gap-1 border-md bg-blue-200 p-1.5"
      >
        <MusicNote weight="bold" />
        Music
      </Link>
      <Link
        href="/music"
        className="border border-blue-400 text-sm flex items-center gap-1 border-md bg-blue-200 p-1.5"
      >
        <ApplePodcastsLogo weight="bold" />
        Podcast
      </Link>
      <Link
        href="/music"
        className="border border-blue-400 text-sm flex items-center gap-1 border-md bg-blue-200 p-1.5"
      >
        <Popcorn weight="bold" />
        Movie
      </Link>
    </div>
  );
};

export default SwitchService;
