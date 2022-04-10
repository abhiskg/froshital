import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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
        <h2 className="bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl ">
          What Our Clients Say
        </h2>
        <p className="mt-2 text-center text-lg font-medium text-gray-300">
          Our Clients send us bunch of smiles with our services and we love them
        </p>
        <Slider {...testimonialSettings}>
          <TestimonialCard
            name="David Miller"
            review="You will get the best of what you put in. The team is working at their
            best to provide diffrent kind of services. Had a great experience
            working with them."
            image="https://res.cloudinary.com/froshital/image/upload/v1649076101/Froshital/rock_whm9v5.jpg"
          />
          <TestimonialCard
            name="David Miller"
            review="You will get the best of what you put in. The team is working at their
            best to provide diffrent kind of services. Had a great experience
            working with them."
            image="https://res.cloudinary.com/froshital/image/upload/v1649076101/Froshital/rock_whm9v5.jpg"
          />
          <TestimonialCard
            name="David Miller"
            review="You will get the best of what you put in. The team is working at their
            best to provide diffrent kind of services. Had a great experience
            working with them."
            image="https://res.cloudinary.com/froshital/image/upload/v1649076101/Froshital/rock_whm9v5.jpg"
          />
        </Slider>
      </section>
      <section className="mt-20">
        <h2 className="bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text  text-4xl font-bold text-transparent md:text-5xl ">
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
