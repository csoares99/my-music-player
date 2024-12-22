import Image from "next/image";
import FloatPlayButton from "./FloatPlayButton";

export default function RecentlyPlayedPreview({ artistList, albumCover }) {
  return (
    <div className="flex flex-col cursor-pointer group">
      <div className="relative">
        <Image
          className="rounded-md"
          src={albumCover}
          width={130}
          height={130}
          alt="Album cover"
        />
        <FloatPlayButton size={28} />
      </div>
      <span className="text-xs md:text-sm text-zinc-400 mt-3 max-w-[100px] break-words">
        {artistList}
      </span>
    </div>
  );
}
