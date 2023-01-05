import PropTypes from "prop-types";

export default function ValueCard({ title, description }) {
  return (
    <div className="flex h-60 w-full flex-col items-center justify-center rounded bg-gradient-to-tr from-gray-800 to-sky-800 p-2 shadow-md transition-transform duration-500 hover:-translate-y-2 ">
      <h3 className="text-center text-lg font-semibold text-gray-200 ">
        {title}
      </h3>
      <p className="mt-2 text-center text-sm text-gray-400 ">{description}</p>
    </div>
  );
}

ValueCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
