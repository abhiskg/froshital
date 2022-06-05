import PropTypes from "prop-types";

export default function ValueCard({ title, description }) {
  return (
    <div className="flex h-60 w-full flex-col items-center justify-center rounded bg-white p-2 shadow-md transition-transform duration-500 hover:-translate-y-2 ">
      <h3 className="text-center text-lg font-semibold text-gray-600 ">
        {title}
      </h3>
      <p className="mt-2 text-center text-sm text-gray-500 ">{description}</p>
    </div>
  );
}

ValueCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
