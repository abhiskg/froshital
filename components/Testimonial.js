import PatnersCard from "./PatnersCard";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  return (
    <>
      <section className="mt-20">
        <h2 className="bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl ">
          Testimonial
        </h2>
        <p className="mt-2 text-center text-lg font-medium text-gray-300">
          Our Clients send us bunch of smiles with our services and we love them
        </p>
        <div>
          <TestimonialCard
            name="David Miller"
            review="You will get the best of what you put in. The team is working at their
            best to provide diffrent kind of services. Had a great experience
            working with them."
            image="https://res.cloudinary.com/froshital/image/upload/v1649076101/Froshital/rock_whm9v5.jpg"
          />
        </div>
      </section>
      <section className="mt-16">
        <h2 className="bg-gradient-to-br from-emerald-500 to-blue-500 bg-clip-text  text-4xl font-bold text-transparent md:text-5xl ">
          Our Patners
        </h2>
        <div className="relative mt-3 py-4  before:absolute before:inset-0 before:z-10 before:bg-gray-800 before:opacity-50 before:content-['']">
          <PatnersCard
            image="/Fortis_Healthcare_Logo.png"
            image_alt="Fortis Logo"
          />
        </div>
      </section>
    </>
  );
}
