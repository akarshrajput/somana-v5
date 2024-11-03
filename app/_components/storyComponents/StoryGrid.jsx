"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Image } from "@chakra-ui/react";
import { Book, BookmarkSimple, Sparkle, StarFour } from "@phosphor-icons/react";
import { Rubik } from "next/font/google";
import axios from "axios";
import LoadingMain from "../main/Loading";
import { ArrowBigRight } from "lucide-react";
import { BookOpen, Pen, SealCheck } from "@phosphor-icons/react/dist/ssr";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Fetch blogs with a simple query
const fetchBlogs = async () => {
  const res = await axios.get(`/api/v1/blogs?limit=9`);
  console.log(res.data.data.blogs);
  return res?.data?.data;
};

const StoryGrid = () => {
  // Update to use single argument object format for useQuery
  const { data, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  return (
    <div className="dark:bg-black dark:text-stone-50 mx-auto">
      {/* <p className="mb-2 font-medium flex items-center gap-1">
        <Book weight="bold" />
        Stories
        <button className="text-sm p-0.5 px-2 bg-green-300 rounded-md">
          More stories
        </button>
        <Link
          href="/story/write"
          className="p-0.5 px-2 w-fit flex items-center gap-1 bg-green-300 rounded-md font-medium text-sm"
        >
          <Pen weight="bold" />
          Write Story
        </Link>
      </p> */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading ? (
          <LoadingMain />
        ) : (
          data?.blogs?.map((post) => (
            <Link
              href={`/story/${post.slug}`}
              key={post.id}
              className="flex cursor-pointer flex-col dark:bg-gray-800"
            >
              <div className="flex items-center gap-2">
                <img
                  alt="Author"
                  src={post.author.photo}
                  className="h-6 w-6 rounded-full"
                />
                <div className="text-xs font-medium flex items-center gap-1">
                  <Link
                    href={`p/${post.author.userName}`}
                    className="hover:underline"
                  >
                    {post.author.name}
                  </Link>
                  {post.author.verified && (
                    <SealCheck className="text-black size-3" weight="fill" />
                  )}
                  in
                  <Link
                    href={`/blogs/topic/${post.genre}`}
                    className="hover:underline"
                  >
                    {post.genre}
                  </Link>
                  {post.usedAI && (
                    <Sparkle className="text-black size-3" weight="fill" />
                  )}
                </div>
              </div>

              <Link
                href={`/story/${post.slug}`}
                className={`${rubik.className}`}
              >
                <h3 className="font-semibold text-sm truncate mb-1 leading-5">
                  {post.heading}
                </h3>
              </Link>

              <div className="relative">
                <div className="flex justify-center w-full overflow-hidden h-40 md:h-40 rounded-sm">
                  <img
                    src={post?.featuredImage}
                    className="w-full h-full object-cover rounded-md hover:rounded-sm duration-500"
                    alt="Featured Image"
                  />
                </div>

                <BookOpen
                  weight="bold"
                  className="absolute size-6 bottom-2 left-2 text-black bg-gray-200 p-1 rounded-full"
                />
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-300 mt-1 line-clamp-3">
                {post.description.substring(0, 100)}...
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default StoryGrid;
