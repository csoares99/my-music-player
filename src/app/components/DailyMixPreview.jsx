import Image from "next/image";
import FloatPlayButton from "./FloatPlayButton";

export default function DailyMixPreview({ artistList, albumCover }) {
  return (
    <div className="flex shrink-0 flex-col cursor-pointer group">
      <div className="relative">
        <Image
          className="rounded-md"
          src={albumCover}
          width={160}
          height={160}
          alt="Album cover"
        />
        <FloatPlayButton size={30} />
      </div>
      <span className="text-xs md:text-sm text-zinc-400 mt-3 max-w-[140px]">
        {artistList}
      </span>
    </div>
  );
}
