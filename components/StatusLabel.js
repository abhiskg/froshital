export default function StatusLabel({ children }) {
  const colorKey = {
    pending: "text-yellow-400",
    confirmed: "text-green-500",
    rejected: "text-rose-400",
  };

  return <div className={`${colorKey[children]}`}>{children}</div>;
}
