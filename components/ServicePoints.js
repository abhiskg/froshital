import { IconCheck } from "icons";

export default function ServicePoints({ points }) {
  return (
    <div className="mt-3 flex items-center gap-1">
      <span className="rounded-full bg-gradient-to-tr from-pink-600 to-amber-500 p-[1.5px] text-white">
        <IconCheck />
      </span>
      <p className="font-medium text-gray-700">{points}</p>
    </div>
  );
}
