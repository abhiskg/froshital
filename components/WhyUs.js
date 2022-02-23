import { Check } from "../icons";
import { cardData, whyUsData1, whyUsData2 } from "../utils/whyUsData";

export default function WhyUs() {
  return (
    <section>
      <h2 className="text-center text-3xl font-medium ">Why Choose Us</h2>

      <div className="flex justify-center gap-10 my-10">
        <div className="flex flex-col gap-2">
          {whyUsData1.map((data) => (
            <div key={data.id} className="flex items-center">
              <span>
                <Check />
              </span>
              <span>{data.title}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {whyUsData2.map((data) => (
            <div key={data.id} className="flex items-center">
              <span>
                <Check />
              </span>
              <span>{data.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 flex-wrap  ">
        {cardData.map((data) => (
          <div
            key={data.id}
            className="bg-green-400 flex flex-col items-center px-3 py-5 rounded"
          >
            <div className="text-4xl">{data.number}</div>
            <div className="text-2xl font-medium">{data.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
