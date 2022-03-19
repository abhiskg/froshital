import SearchPost from "./SearchPost";

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>;
  return (
    <div className="absolute top-10 right-0 z-10 min-w-min rounded-lg border-2 border-gray-500 bg-white text-black">
      <div className="flex flex-col items-center justify-center p-7">
        <h2 className="mb-3 self-start text-xl">{results.length} Results</h2>
        {results.map((result, index) => (
          <SearchPost key={index} post={result} />
        ))}
      </div>
    </div>
  );
}
