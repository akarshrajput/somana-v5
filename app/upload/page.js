import { Info, Pen } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1200px] w-full p-2">
        <div className="flex flex-col gap-2">
          <Link
            href="/story/write"
            className="p-1.5 w-fit flex items-center gap-1 px-2 bg-green-300 rounded-md font-medium text-sm"
          >
            <Pen weight="bold" />
            Write Story
          </Link>
          <p className="text-sm flex items-center gap-1">
            <Info weight="bold" />
            Keep your all stories in one place and share them with others!
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
