export default function Button({ text, ...props }) {
  return (
    <button className="rounded-full bg-zinc-700 px-3 py-1" {...props}>
      <span className="text-xs md:text-sm font-medium">{text}</span>
    </button>
  );
}
