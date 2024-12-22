"use client";

import { BadgePlus, Check, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function MusicPreviewFooter() {
  const [musicInPlaylist, setMusicInPlayList] = useState(false);

  const addMusicInPlaylist = () => {
    setMusicInPlayList(!musicInPlaylist);
  };

  return (
    <div className="flex gap-3 items-center py-3">
      <div className="flex shrink-0">
        <Image src="/album.jpg" width={50} height={45} alt="Album cover" />
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col">
          <span className="text-xs md:text-sm text-white hover:underline truncate overflow-hidden whitespace-nowrap">
            Nome da música
          </span>
          <span className="text-xs text-zinc-400 hover:underline">Artista</span>
        </div>
        {musicInPlaylist ? (
          <button
            className="bg-green-500 rounded-full transition duration-300 p-0.5 mr-10"
            onClick={addMusicInPlaylist}
          >
            <Check size={14} className="text-black" />
          </button>
        ) : (
          <button
            className="bg-zinc-400 rounded-full transition duration-300 p-0.5 mr-10"
            onClick={addMusicInPlaylist}
          >
            <Plus size={14} className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
}
