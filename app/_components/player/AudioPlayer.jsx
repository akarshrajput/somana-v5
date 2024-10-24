"use client";
import {
  Play,
  Pause,
  SpeakerHigh,
  SpeakerX,
  Spinner,
} from "@phosphor-icons/react";
import React, { useRef, useState, useEffect, useCallback } from "react";

const AudioPlayer = ({ podcast }) => {
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [loading, setLoading] = useState(true); // Track the loading state

  useEffect(() => {
    const audio = audioRef.current;

    if (audio && podcast.audioLink) {
      audio.src = podcast.audioLink;

      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });

      audio.addEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime);
        if (progressRef.current) {
          progressRef.current.value =
            (audio.currentTime / audio.duration) * 100;
        }
      });

      audio.addEventListener("canplaythrough", () => {
        setLoading(false);
      });

      audio.addEventListener("waiting", () => {
        setLoading(true);
      });

      audio.addEventListener("playing", () => {
        setLoading(false);
      });

      // Event listener for when audio ends
      audio.addEventListener("ended", () => {
        setPlaying(false);
        setCurrentTime(0);
        if (progressRef.current) {
          progressRef.current.value = 0;
        }
      });

      audio.volume = volume;

      if (playing) {
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    }

    // Pausing audio when unmounted or when podcast changes
    return () => {
      if (audio) {
        audio.pause();
        // Do not reset the src, keep the current state
      }
    };
  }, [podcast?.audioLink, volume, playing]);

  const handlePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      if (playing) {
        audio.pause();
      } else {
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      setPlaying(!playing);
    }
  }, [playing]);

  const handleMute = useCallback(() => {
    if (audioRef.current) {
      setMuted(!muted);
      audioRef.current.muted = !muted;
    }
  }, [muted]);

  const handleProgressClick = (e) => {
    const progress = progressRef.current;
    if (progress && audioRef.current) {
      const rect = progress.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newTime = (offsetX / rect.width) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="relative flex-1">
        <div
          className="w-full h-2 bg-stone-300 dark:bg-stone-800 rounded cursor-pointer"
          onClick={handleProgressClick}
        >
          <div
            className="absolute top-0 left-0 h-2 bg-blue-500"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <input
          ref={progressRef}
          type="range"
          min="0"
          max="100"
          step="0.1"
          defaultValue="0"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onClick={handleProgressClick}
        />
      </div>

      <div className="flex items-center gap-2 p-2">
        <button
          onClick={handlePlayPause}
          aria-label={playing ? "Pause" : "Play"}
          className="bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-200 p-3 rounded-full transition-all hover:scale-105"
        >
          {playing ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <p>{podcast.language}</p>

        <p>{podcast.genre}</p>
        {loading && (
          <p className="text-center flex  text-stone-50 items-center gap-1 text-sm bg-red-500 dark:bg-red-700 p-1 px-2 rounded-md">
            Loading Podcast
            <Spinner className="animate-spin" />
          </p>
        )}

        <div className="ml-auto flex items-center gap-4">
          <button
            onClick={handleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="text-stone-600 dark:text-stone-200"
          >
            {muted || volume === 0 ? (
              <SpeakerX size={24} />
            ) : (
              <SpeakerHigh size={24} />
            )}
          </button>

          <div className="text-stone-600 dark:text-stone-200 text-xs">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <audio ref={audioRef} preload="auto" />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
