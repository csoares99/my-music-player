import { Play } from "lucide-react";
import Image from "next/image";
export default function PlaylistPreviewItemList({ title, author, albumCover }) {
  return (
    <div className="mt-6 flex gap-2 hover:bg-zinc-400/10 cursor-pointer group">
      <div className="relative">
        <Image
          className="group-hover:opacity-40"
          src={albumCover}
          width={50}
          height={50}
          alt="Album cover"
        />
        <Play
          size={22}
          className="absolute bottom-4 left-4 invisible group-hover:visible pointer-events-none"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-md font-normal">{title}</span>
        <span className="text-sm text-zinc-400">Playlist - {author}</span>
      </div>
    </div>
  );
}
