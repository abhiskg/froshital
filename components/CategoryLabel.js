import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "bg-orange-600",
    Python: "bg-red-600",
    PHP: "bg-amber-600",
    CSS: "bg-lime-600",
    Ruby: "bg-green-600",
  };

  return (
    <div
      className={`px-2 py-1 ${colorKey[children]} rounded font-bold text-gray-100`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>
        <a>{children}</a>
      </Link>
    </div>
  );
}
