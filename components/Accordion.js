import { useState } from "react";

export default function Accordion({ faq, page }) {
  const [selected, setSelected] = useState(null);

  const handleToggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      {faq.map((item, i) => (
        <div
          className={` mb-2 rounded ${
            page === "main"
              ? "bg-gradient-to-br from-sky-900 via-gray-800 to-sky-900"
              : "bg-white"
          }  p-3 shadow-md`}
          key={item.id}
        >
          <div
            onClick={() => handleToggle(i)}
            className="flex cursor-pointer items-center justify-between gap-2 "
          >
            <h3
              className={`select-none font-semibold ${
                page === "main" ? "text-gray-300" : "text-gray-600"
              }  md:text-lg`}
            >
              {item.question}
            </h3>
            <span
              className={`${page === "main" ? "text-gray-300" : "text-black"}`}
            >
              {selected === i ? "-" : "+"}
            </span>
          </div>
          <p
            className={`${
              selected === i
                ? "mt-px h-auto max-h-fit "
                : "max-h-0 overflow-hidden "
            } text-sm ${page === "main" ? "text-gray-300" : "text-gray-600"}`}
          >
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
