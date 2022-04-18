import { IconFb, IconInsta } from "icons";
import Image from "next/image";
import PropTypes from "prop-types";

export default function TeamCard({ img, name, position }) {
  return (
    <div>
      <div className="group relative h-80 w-72 overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:z-10 before:h-full before:w-full before:origin-bottom before:scale-y-0 before:bg-sky-600 before:bg-opacity-30 before:transition-transform  before:duration-150 before:ease-linear before:content-[''] before:hover:scale-y-100 ">
        <Image src={img} alt={name} layout="fill" />
        <a
          href="#"
          className="absolute -bottom-5 left-3 z-20 cursor-pointer text-white transition-transform delay-100 group-hover:-translate-y-10"
        >
          <IconFb />
        </a>
        <a
          href="#"
          className="absolute -bottom-5 left-10 z-20 text-white transition-transform delay-150 group-hover:-translate-y-10"
        >
          <IconInsta />
        </a>
      </div>
      <h3 className="font-medium">{name}</h3>
      <p className="text-sm text-gray-600">{position}</p>
    </div>
  );
}

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
