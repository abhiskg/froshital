export default function StatusLabel({ children }) {
  const colorKey = {
    pending: "text-yellow-500",
    confirmed: "text-green-500",
    rejected: "text-red-300",
  };

  return <div className={`${colorKey[children]}`}>{children}</div>;
}
