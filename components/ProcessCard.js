export default function ProcessCard({ number, title, description }) {
  return (
    <div className="w-56">
      <div className="text-5xl">{number}</div>
      <div className="font-semibold">{title}</div>
      <p className="text-sm">{description}</p>
    </div>
  );
}
