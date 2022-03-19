import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    Dermatology: "bg-green-600",
    Obsterics: "bg-red-600",
    Cardiology: "bg-amber-600",
    Gynaecology: "bg-lime-600",
  };

  return (
    <div>
      <Link href={`/blog/category/${children.toLowerCase()}`}>
        <a
          className={`px-2 py-1 ${colorKey[children]} rounded text-sm font-semibold text-gray-100 hover:bg-opacity-90`}
        >
          {children}
        </a>
      </Link>
    </div>
  );
}
