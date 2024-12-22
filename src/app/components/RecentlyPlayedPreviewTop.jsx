import Image from "next/image";
import FloatPlayButton from "./FloatPlayButton";

export default function RecentlyPlayedPreviewTop({ albumCover }) {
  return (
    <div className="flex items-center gap-3 bg-zinc-400/10 hover:bg-zinc-400/20 rounded-md w-48 sm:w-64 md:w-80 relative cursor-pointer group">
      <Image src={albumCover} width={70} height={70} alt="Album cover" />
      <div className="flex flex-col text-white ">
        <span className="text-xs md:text-sm">Playlist #1</span>
      </div>
      <FloatPlayButton size={30} />
    </div>
  );
}
