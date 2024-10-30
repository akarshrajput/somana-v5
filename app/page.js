import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import ThemeButton from "./_components/buttons/ThemeButton";
import TopPodcasts from "./_components/podcastComponents/TopPodcasts";

export default function Home() {
  return (
    <div className="px-2 flex mt-4">
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-4 flex">
          <div className="flex flex-col gap-4">
            {/* <TopPodcasts api="/api/v1/podcasts?limit=6" /> */}
          </div>
        </div>
        <div className="w-72 bg-slate-200">
          <div className="sticky top-16 font-medium flex-col">Hello</div>
        </div>
      </div>
    </div>
  );
}
