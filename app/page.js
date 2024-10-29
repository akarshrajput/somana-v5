import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import ThemeButton from "./_components/buttons/ThemeButton";
import TopPodcasts from "./_components/podcastComponents/TopPodcasts";

export default function Home() {
  return (
    <div className="px-2 flex mt-4">
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-4 flex">
          <div className="flex flex-col gap-4">
            <TopPodcasts api="/api/v1/podcasts?limit=6" />
            <div className="flex flex-col w-full gap-4 items-center bg-gradient-to-r from-red-200 via-yellow-200 via-green-200 to-blue-200  shadow-sm rounded-sm p-10">
              <h1 className="text-2xl flex items-center gap-2 font-medium">
                Welcome to Somana
                <Sparkle size="20" strokeWidth="3" />
              </h1>
              <div className="font-medium flex flex-col gap-2 items-center">
                <p>Explore</p>
                <p className="text-sm">Stories, Music, Podcasts and more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-72 bg-slate-200">
          <div className="sticky top-16 font-medium flex-col">Hello</div>
        </div>
      </div>
    </div>
  );
}
