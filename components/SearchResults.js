import SearchPost from "./SearchPost";

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>;
  return (
    <div className="absolute top-10 z-10 min-w-min rounded-md border border-gray-400 bg-white text-black sm:right-0">
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="mb-3 self-start text-sm">{results.length} Results</h2>
        {results.map((result, index) => (
          <SearchPost key={index} post={result} />
        ))}
      </div>
    </div>
  );
}
