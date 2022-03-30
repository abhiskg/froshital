import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    Dermatology: "text-green-500",
    Obsterics: "text-red-600",
    Cardiology: "text-amber-600",
    Gynaecology: "text-lime-600",
  };
  return (
    <div>
      <Link href={`/blog/category/${children.toLowerCase()}`}>
        <a className={` ${colorKey[children]} text-sm font-semibold `}>
          {children}
        </a>
      </Link>
    </div>
  );
}
