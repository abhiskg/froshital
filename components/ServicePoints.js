import { IconCheck } from "icons";

export default function ServicePoints({ points }) {
  return (
    <div className="relative mt-3">
      <span className="absolute top-1 inline-block rounded-full bg-gradient-to-tr from-pink-600 to-amber-500 p-[1.5px] text-white">
        <IconCheck />
      </span>
      <p className="ml-5 font-medium  text-gray-700">{points}</p>
    </div>
  );
}
