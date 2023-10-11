import React from "react";

const MoreDetails = () => {
  const data = [
    {
      property: "Airbag",
      value: "Yes",
    },
    {
      property: "Footrest ",
      value: "Yes",
    },
    {
      property: "Remote control",
      value: "Yes",
    },
    {
      property: "Bluetooth speakers ",
      value: "Touch screen ",
    },
    {
      property: "Weight massage chair",
      value: "Main Body: N.W.: 128 Kg, G.W.: 146 K",
    },
    {
      property: "Foot",
      value: "N.W.: 25 Kg, G.W.: 28 Kg ",
    },
    {
      property: "Dimensions  (L×H×W)",
      value: "1460×846×1245 mm",
    },
    {
      property: "Power Supply and wattage",
      value: "110-240V~ and 200 W",
    },
  ];
  return (
    <div className="w-full flex flex-col md:flex-row gap-5 justify-between pt-7 pb-10 px-5">
      <div className="w-full md:w-3/6">
        <h3
          style={{ fontFamily: "Silk Serif" }}
          className="text-2xl uppercase font-extralight font-serif pb-3"
        >
          SPECIFICATIONS
        </h3>
        <div className="overflow-x-auto w-full">
          <table className="table-xs table-zebra w-full">
            {/* head */}
            <tbody className="w-full">
              {/* row 1 */}
              {data?.map((d) => (
                <tr key={d?.property} className="text-sm py-2">
                  <td className="font-semibold p-2">{d?.property}</td>
                  <td>{d?.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full md:w-3/6">
        <h3
          style={{ fontFamily: "Silk Serif" }}
          className="text-2xl uppercase font-extralight font-serif pb-3"
        >
          DESCRIPTION
        </h3>
        <p className="text-sm pt-3">
          Have you been waiting for the day when you get the ultimate relaxation
          after a long tiring day of work? With MS-131 PLUS Massage Chair, we
          have got you covered! It helps relax your tensed muscles and reduce
          fatigue.
        </p>
        <p className="text-sm pt-3">
          This massage chair is packed with tons of advanced features. It comes
          with an adjustable footrest and leg rest that allows you to be in a
          relaxing position. Designed with high-quality materials and entails
          the latest technology to offer you optimal comfort. You can listen to
          your favorite music or podcasts while being in a perfect position of
          relaxation. It offers a perfect combo of comfort and design.
        </p>
        <p className="text-sm pt-3">
          Featuring a touchscreen remote control that makes everything intuitive
          and simple. You can choose any massage mode, connect smartphones via
          Bluetooth and access all functions with just a single touch.
        </p>
      </div>
    </div>
  );
};

export default MoreDetails;
