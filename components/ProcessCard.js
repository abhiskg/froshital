import PropTypes from "prop-types";

export default function ProcessCard({ number, title, description }) {
  return (
    <div className="w-52">
      <div className="text-5xl text-[#124261]">{number}</div>
      <div className="text-lg font-semibold text-gray-800">{title}</div>
      <p className="text-sm">{description}</p>
    </div>
  );
}

ProcessCard.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
