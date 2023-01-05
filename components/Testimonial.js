import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PatnersCard from "./PatnersCard";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  var testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="mt-20">
        <h2 className="bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-center text-3xl font-bold text-transparent   sm:text-4xl lg:text-5xl ">
          What Our Clients Say
        </h2>
        <p className="mt-2 text-center text-lg font-medium text-gray-300">
          Our Clients send us bunch of smiles with our services and we love them
        </p>
        <Slider {...testimonialSettings}>
          <TestimonialCard
            name="Shalini Singh(Gurgaon)"
            review="I'm writing on behalf of my brother, who was in need of a hospital bed right away. I'd want to thank you on behalf of my entire family for your assistance and consideration at this terrible time. I'd want to thank you once more for the services you provide to patients and their families."
            image="/assets/images/avatar.jpg"
          />
          <TestimonialCard
            name="Chayya Kapoor(Pune)"
            review="When I was having trouble conceiving, froshital assisted me in selecting the best IVF center, and I wanted to express how impressed I was with the amount of care I received from everyone I met. The Froshital Care Center was there for me every step of the way! I thought it was fantastic, and I'm pleased that it serves my neighborhood."
            image="/assets/images/avatar.jpg"
          />
          <TestimonialCard
            name="Isha Rawat(Kanpur)"
            review="It has a very well-mannered staff that works well along with the patients. Mr. Prakash Yadav provided excellent assistance and patient care. Overall, the experience has been positive."
            image="/assets/images/avatar.jpg"
          />
        </Slider>
      </section>
      <section className="mt-20">
        <h2 className="bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text  text-3xl font-bold text-transparent   sm:text-4xl lg:text-5xl ">
          Our Patners
        </h2>
        <div className="relative mt-1 py-4  before:absolute before:inset-0 before:z-10 before:bg-gray-900 before:opacity-30 before:content-['']">
          <Slider {...settings}>
            <PatnersCard
              image="/Fortis_Healthcare_Logo.png"
              image_alt="Fortis Logo"
            />
            <PatnersCard
              image="/Fortis_Healthcare_Logo.png"
              image_alt="Fortis Logo"
            />
            <PatnersCard
              image="/Fortis_Healthcare_Logo.png"
              image_alt="Fortis Logo"
            />
            <PatnersCard
              image="/Fortis_Healthcare_Logo.png"
              image_alt="Fortis Logo"
            />
            <PatnersCard
              image="/Fortis_Healthcare_Logo.png"
              image_alt="Fortis Logo"
            />
            <PatnersCard
              image="/Fortis_Healthcare_Logo.png"
              image_alt="Fortis Logo"
            />
            <PatnersCard
              image="/Fortis_Healthcare_Logo.png"
              image_alt="Fortis Logo"
            />
          </Slider>
        </div>
      </section>
    </>
  );
}
