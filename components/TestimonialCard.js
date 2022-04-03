import { IconLeftQuote, IconRightQuote, IconStar } from "icons";
import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className="flex w-full flex-col items-center py-10 ">
      <figure className="relative h-16 w-16 overflow-hidden rounded-full shadow-lg ">
        <Image src="/rock.jpg" alt="profile pic" layout="fill" />
      </figure>
      <div className="mt-1 font-medium text-gray-100">David Miller</div>
      <div className="flex text-yellow-400">
        {new Array(4).fill(null).map(() => (
          <IconStar key={Math.random()} />
        ))}
      </div>
      <div className="relative">
        <span className="text-gray-400">
          <IconLeftQuote />
        </span>
        <p className=" max-w-2xl text-center text-gray-400">
          You will get the best of what you put in. The team is working at their
          best to provide diffrent kind of services. Had a great experience
          working with them.
        </p>
        <span className="absolute right-0 -bottom-2 text-gray-400">
          <IconRightQuote />
        </span>
      </div>
    </div>
  );
}
