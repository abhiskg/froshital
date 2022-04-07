import PropTypes from "prop-types";

export default function ServiceCard({ title, description }) {
  return (
    <div className="rounded bg-gradient-to-tr from-gray-800 to-sky-800 p-5 shadow-md transition-transform duration-300 hover:scale-[1.02]">
      <h3 className="text-center font-medium text-gray-200 ">{title}</h3>
      <p className="mt-2 text-center text-sm text-gray-400">{description}</p>
    </div>
  );
}

ServiceCard.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
