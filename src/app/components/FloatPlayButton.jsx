import { Play } from "lucide-react";

export default function FloatPlayButton({ size }) {
  return (
    <div className="rounded-full absolute right-2 bottom-2 bg-green-500 p-2 shadow invisible group-hover:visible transition-all duration-50 ease-in-out">
      <Play color="#000" size={size} />
    </div>
  );
}
