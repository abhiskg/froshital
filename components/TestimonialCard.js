import { IconLeftQuote, IconRightQuote, IconStar } from "icons";
import Image from "next/image";
import PropTypes from "prop-types";

export default function TestimonialCard({ name, review, image }) {
  return (
    <div className="flex w-full flex-col items-center py-8">
      <figure className="relative h-16 w-16 overflow-hidden rounded-full shadow-lg ">
        <Image src={image} alt={`${name} Profile Pic`} layout="fill" />
      </figure>
      <div className="mt-1 font-medium text-gray-100">{name}</div>
      <div className="flex text-yellow-400">
        {new Array(4).fill(null).map(() => (
          <IconStar key={Math.random()} />
        ))}
      </div>
      <div className="relative">
        <span className="text-gray-400">
          <IconLeftQuote />
        </span>
        <p className=" max-w-2xl text-center text-gray-400">{review}</p>
        <span className="absolute right-0 -bottom-2 text-gray-400">
          <IconRightQuote />
        </span>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
