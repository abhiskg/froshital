import { IconLeftQuote, IconRightQuote, IconStar } from "icons";
import Image from "next/image";
import { testimonialData } from "@/utils/testimonialData";
import { useState } from "react";

export default function Testimonial() {
  const [x, setX] = useState(0);
  const length = testimonialData.length;

  const nextSlide = () => {
    // setCurrImg(currImg === length - 1 ? 0 : currImg + 1);
    // setX(x - 100);
    console.log(x);
    x === -100 * (length - 1) ? setX(0) : setX(x - 100);
  };

  const prevSlide = () => {
    // setCurrImg(currImg === 0 ? length - 1 : currImg - 1);
    console.log(x);
    x === 0 ? setX(-100 * (length - 1)) : setX(x + 100);
  };

  // console.log(currImg);

  if (!Array.isArray(testimonialData) || testimonialData.length <= 0) {
    return null;
  }

  return (
    <section className=" bg-[#1F2937]">
      <div className="mx-auto w-11/12 md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
        <h2 className=" bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl ">
          Testimonial
        </h2>
        <div onClick={nextSlide}>R</div>
        <div onClick={prevSlide}>L</div>
        <div className="flex items-center overflow-hidden ">
          {testimonialData.map((data) => (
            <div
              key={data.id}
              style={{ transform: `translateX(${x}%)` }}
              className="flex min-w-full flex-col items-center py-10 transition-transform duration-500 ease-in-out "
            >
              <figure className="relative h-16 w-16 overflow-hidden rounded-full shadow-lg ">
                <Image src="/rock.jpg" alt="profile pic" layout="fill" />
              </figure>
              <div className="mt-1 font-medium text-gray-100">{data.name}</div>
              <div className="flex text-yellow-400">
                {new Array(data.star).fill(null).map(() => (
                  <IconStar key={Math.random()} />
                ))}
              </div>
              <div className="relative">
                <span className="text-gray-400">
                  <IconLeftQuote />
                </span>
                <p className=" max-w-2xl text-center text-gray-400">
                  You will get the best of what you put in. The team is working
                  at their best to provide diffrent kind of services. Had a
                  great experience working with them.
                </p>
                <span className="absolute right-0 -bottom-2 text-gray-400">
                  <IconRightQuote />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import { IconLeftQuote, IconRightQuote, IconStar } from "icons";
// import Image from "next/image";
// import { testimonialData } from "@/utils/testimonialData";
// import { useState } from "react";

// export default function Testimonial() {
//   const [x, setX] = useState(0);
//   const length = testimonialData.length;

//   const nextSlide = () => {
//     // setCurrImg(currImg === length - 1 ? 0 : currImg + 1);
//     // setX(x - 100);
//     console.log(x);
//     x === -100 * (length - 1) ? setX(0) : setX(x - 100);
//   };

//   const prevSlide = () => {
//     // setCurrImg(currImg === 0 ? length - 1 : currImg - 1);
//     console.log(x);
//     x === 0 ? setX(-100 * (length - 1)) : setX(x + 100);
//   };

//   // console.log(currImg);

//   if (!Array.isArray(testimonialData) || testimonialData.length <= 0) {
//     return null;
//   }

//   return (
//     <section className=" bg-[#1F2937]">
//       <div className="mx-auto w-11/12 md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
//         <h2 className=" bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl ">
//           Testimonial
//         </h2>
//         <div onClick={nextSlide}>R</div>
//         <div onClick={prevSlide}>L</div>
//         <div className="flex items-center overflow-hidden ">
//           {testimonialData.map((data) => (
//             <div
//               key={data.id}
//               style={{ transform: `translateX(${x}%)` }}
//               className="flex min-w-full flex-col items-center py-10 transition-transform duration-500 ease-in-out "
//             >
//               <figure className="relative h-16 w-16 overflow-hidden rounded-full shadow-lg ">
//                 <Image src="/rock.jpg" alt="profile pic" layout="fill" />
//               </figure>
//               <div className="mt-1 font-medium text-gray-100">{data.name}</div>
//               <div className="flex text-yellow-400">
//                 {new Array(data.star).fill(null).map(() => (
//                   <IconStar key={Math.random()} />
//                 ))}
//               </div>
//               <div className="relative">
//                 <span className="text-gray-400">
//                   <IconLeftQuote />
//                 </span>
//                 <p className=" max-w-2xl text-center text-gray-400">
//                   You will get the best of what you put in. The team is working
//                   at their best to provide diffrent kind of services. Had a
//                   great experience working with them.
//                 </p>
//                 <span className="absolute right-0 -bottom-2 text-gray-400">
//                   <IconRightQuote />
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import TestimonialCard from "./TestimonialCard";

// export default function Testimonial() {
//   return (
//     <section className="bg-[#1F2937] ">
//       <div className="mx-auto w-11/12 md:w-10/12 2xl:w-auto 2xl:max-w-7xl">
//         <h2 className=" bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl ">
//           Testimonial
//         </h2>
//         <div className="flex items-center gap-5">
//           <TestimonialCard />
//         </div>
//       </div>
//     </section>
//   );
// }
