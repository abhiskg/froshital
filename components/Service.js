import { Check } from "../icons";
import { hospitalReferrals } from "../utils/servicesData";

export default function Service() {
  return (
    <div className="flex justify-center gap-10">
      <div className="border-2 px-5 py-10 w-72 rounded-md shadow">
        <h2 className="text-center mb-5 text-lg font-medium">
          Hospital Referalls
        </h2>
        <div>
          <ul>
            {hospitalReferrals.map((data) => (
              <li
                key={data.id}
                className="flex items-center justify-center gap-3 relative space-y-2"
              >
                <span>
                  <Check />
                </span>
                <span className="ml-2">{data.facility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-2 px-5 py-10 w-72 rounded-md shadow">
        <h2 className="text-center mb-5 text-lg font-medium">
          Medical Tourism
        </h2>
        <div>
          <ul>
            {hospitalReferrals.map((data) => (
              <li
                key={data.id}
                className="flex items-center justify-center gap-3 relative space-y-2"
              >
                <span>
                  <Check />
                </span>
                <span className="ml-2">{data.facility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-2 px-5 py-10 w-72 rounded-md shadow">
        <h2 className="text-center mb-5 text-lg font-medium">Lab Booking</h2>
        <div>
          <ul>
            {hospitalReferrals.map((data) => (
              <li
                key={data.id}
                className="flex items-center justify-center gap-3 relative space-y-2"
              >
                <span>
                  <Check />
                </span>
                <span className="ml-2">{data.facility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
