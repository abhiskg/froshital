import SearchPost from "./SearchPost";

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>;
  return (
    <div className="absolute top-10 right-0 z-10 w-96 rounded-lg border-2 border-gray-500 bg-white text-black">
      <div className="p-10">
        <h2 className="mb-3 text-xl">{results.length} Results</h2>
        {results.map((result, index) => (
          <SearchPost key={index} post={result} />
        ))}
      </div>
    </div>
  );
}
