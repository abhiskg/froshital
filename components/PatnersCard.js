import Image from "next/image";
import PropTypes from "prop-types";

export default function PatnersCard({ image, image_alt }) {
  return (
    <div className="relative h-16 w-40 sm:h-24 sm:w-48">
      <Image src={image} alt={image_alt} layout="fill" />
    </div>
  );
}

PatnersCard.prototype = {
  image: PropTypes.string.isRequired,
  image_alt: PropTypes.string.isRequired,
};
