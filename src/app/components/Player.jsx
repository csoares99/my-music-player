"use client";

import {
  ShuffleIcon,
  StepBack,
  PlayCircleIcon,
  StepForwardIcon,
  Repeat,
  PauseCircle,
} from "lucide-react";
import { useState } from "react";

export default function Player() {
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [play, setPlay] = useState(false);

  const toggleShuffle = () => {
    setShuffle(!shuffle);
  };

  const toggleRepeat = () => {
    setRepeat(!repeat);
  };

  const togglePlay = () => {
    setPlay(!play);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4">
        <button onClick={toggleShuffle} className="hover:scale-110">
          <ShuffleIcon size={20} className={shuffle ? "text-green-500" : ""} />
        </button>
        <button className="hover:scale-110">
          <StepBack size={20} />
        </button>
        {play ? (
          <button onClick={togglePlay} className="hover:scale-110">
            <PauseCircle size={28} />
          </button>
        ) : (
          <button onClick={togglePlay} className="hover:scale-110">
            <PlayCircleIcon size={28} />
          </button>
        )}
        <button className="hover:scale-110">
          <StepForwardIcon size={20} />
        </button>
        <button onClick={toggleRepeat} className="hover:scale-110">
          <Repeat size={20} className={repeat ? "text-green-500" : ""} />
        </button>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-xs text-zinc-400">1:23</span>
        <div className="rounded-full bg-zinc-600 w-96 h-1 mt-3">
          <div className="bg-white w-28 h-1"></div>
        </div>
        <span className="text-xs text-zinc-400">4:00</span>
      </div>
    </div>
  );
}
