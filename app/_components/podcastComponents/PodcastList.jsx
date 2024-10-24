"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@chakra-ui/react";
import Loading from "@/app/loading";

const PodcastList = ({ api }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(api, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setPodcasts(response.data.data.podcasts);
      } catch (err) {
        console.error("Error fetching podcasts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, [api]);

  return (
    <div className="px-4 relative">
      <div>
        {/* Custom Previous and Next Buttons */}
        <button
          className="absolute top-[35%] left-0 z-10 p-2 h-10 w-10 bg-gray-800/50 text-white rounded-sm hover:bg-gray-600/30 transition-all"
          id="prevButton"
        >
          <ChevronLeft strokeWidth="3" />
        </button>

        <button
          className="absolute top-[35%] right-0 z-10 p-2 h-10 w-10 bg-gray-800/50 text-white rounded-sm hover:bg-gray-600/30 transition-all"
          id="nextButton"
        >
          <ChevronRight strokeWidth="3" />
        </button>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={12}
          navigation={{
            prevEl: "#prevButton", // Link to custom previous button
            nextEl: "#nextButton", // Link to custom next button
          }}
        >
          {podcasts.map((podcast, index) => (
            <SwiperSlide key={index}>
              {loading ? <Loading /> : <PodcastInfo podcast={podcast} />}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const PodcastInfo = ({ podcast }) => {
  return (
    <Link
      href={`/podcast/${podcast._id}?${podcast.podcastName}`}
      className="p-2 rounded-sm cursor-pointer"
    >
      <img
        className="aspect-square object-cover mb-2 rounded-sm"
        src={podcast.featuredImage}
        alt={podcast.podcastName}
      />
      <p className="font-medium text-sm">{podcast.podcastName}</p>
      <p className="font-medium dark:text-stone-400 text-stone-500 text-sm">
        {podcast.author.name}
      </p>
    </Link>
  );
};

export default PodcastList;
