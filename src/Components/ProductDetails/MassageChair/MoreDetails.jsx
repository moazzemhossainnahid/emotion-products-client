import React from "react";
import { useTranslation } from "react-i18next";

const MoreDetails = ({chair}) => {
  const {t} = useTranslation();


  const data = [
    {
      property: t('mchair.singleMChar.specifications.key1'),
      value: t('mchair.singleMChar.specifications.val1'),
    },
    {
      property: t('mchair.singleMChar.specifications.key2'),
      value: t('mchair.singleMChar.specifications.val2'),
    },
    {
      property: t('mchair.singleMChar.specifications.key3'),
      value: t('mchair.singleMChar.specifications.val3'),
    },
    {
      property: t('mchair.singleMChar.specifications.key4'),
      value: t('mchair.singleMChar.specifications.val4'),
    },
    {
      property: t('mchair.singleMChar.specifications.key5'),
      value: t('mchair.singleMChar.specifications.val5'),
    },
    {
      property: t('mchair.singleMChar.specifications.key6'),
      value: t('mchair.singleMChar.specifications.val6'),
    },
    {
      property: t('mchair.singleMChar.specifications.key7'),
      value: t('mchair.singleMChar.specifications.val7'),
    },
    {
      property: t('mchair.singleMChar.specifications.key8'),
      value: t('mchair.singleMChar.specifications.val8'),
    },
  ];
  return (
    <div className="w-full flex flex-col md:flex-row gap-5 justify-between pt-7 pb-10 px-5">
      <div className="w-full md:w-3/6">
        <h3
          style={{ fontFamily: "Silk Serif" }}
          className="text-2xl uppercase font-extralight font-serif pb-3"
        >
          {t('mchair.singleMChar.specifications.title')}
        </h3>
        <div className="overflow-x-auto w-full">
          <table className="table-xs table-zebra w-full">
            {/* head */}
            <tbody className="w-full">
              {/* row 1 */}
              {chair?.specifications?.map((d) => (
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
          {t('mchair.singleMChar.descriptions.title')}
        </h3>
        <p className="text-sm pt-3">
        {chair?.descriptions?.desc1}
        </p>
        <p className="text-sm pt-3">
        {chair?.descriptions?.desc2}
        </p>
        <p className="text-sm pt-3">
        {chair?.descriptions?.desc3}
        </p>
      </div>
    </div>
  );
};

export default MoreDetails;