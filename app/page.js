import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import ThemeButton from "./_components/buttons/ThemeButton";
import TopPodcasts from "./_components/podcastComponents/TopPodcasts";
import StoryGrid from "./_components/storyComponents/StoryGrid";
import PodcastGrid from "./_components/podcastComponents/PodcastGrid";
import MusicGrid from "./_components/musicComponents/MusicGrid";

export default function Home() {
  return (
    <div className="px-2 flex justify-center mt-4">
      <div className="grid w-[1200px] grid-cols-5 gap-8">
        <div className="col-span-3 flex">
          <div className="flex flex-col gap-4">
            <StoryGrid />
          </div>
        </div>
        <div className="col-span-2 border-neutral-200">
          <div className="flex flex-col gap-8">
            <div className="font-medium flex-col">
              <PodcastGrid api="/api/v1/podcasts?limit=7" />
            </div>
            <div className="font-medium border-neutral-200 flex-col">
              <MusicGrid api="/api/v1/music?limit=7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
