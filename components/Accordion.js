import { useState } from "react";

export default function Accordion({ faq }) {
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
        <div className=" mb-2 rounded bg-white p-3 shadow-md" key={item.id}>
          <div
            onClick={() => handleToggle(i)}
            className="flex cursor-pointer items-center justify-between gap-2 "
          >
            <h3 className="select-none font-semibold text-gray-600 md:text-lg ">
              {item.question}
            </h3>
            <span>{selected === i ? "-" : "+"}</span>
          </div>
          <p
            className={`${
              selected === i
                ? "mt-px h-auto max-h-fit "
                : "max-h-0 overflow-hidden "
            } text-sm text-gray-600`}
          >
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
