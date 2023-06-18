import React from 'react';

const MoreDetails = () => {
    const data = [
        {
            "property": "Fabric composition",
            "value": "20% cotton | 80% polyester"
        },
        {
            "property": "Lamp holder",
            "value": "E14"
        },
        {
            "property": "Lamp holder qty	",
            "value": "35"
        },
        {
            "property": "Light bulbs included",
            "value": "Not included"
        },
        {
            "property": "Max wattage",
            "value": "40 Watt"
        },
        {
            "property": "Max voltage",
            "value": "220 - 240 Volt"
        },
        {
            "property": "Plug type",
            "value": "Not applicable"
        },
        {
            "property": "Hanging Method",
            "value": "Chain"
        },
        {
            "property": "Length hanging method in cm",
            "value": "150"
        },
        {
            "property": "Length hanging method in inch",
            "value": "59,06"
        },
        {
            "property": "Indoor/outdoor",
            "value": "Indoor use/dry locations only"
        },
        {
            "property": "Shade dimensions",
            "value": "ø 12.5 x H. 17 cm"
        },
    ]
    return (
        <div className='w-full flex flex-col md:flex-row gap-5 justify-between pt-7 pb-10 px-5'>
            <div className="w-full md:w-3/6">
                <h3 style={{ fontFamily: 'Silk Serif' }} className="text-2xl uppercase font-extralight font-serif pb-3">SPECIFICATIONS</h3>
                <div className="overflow-x-auto w-full">
                    <table className="table-xs table-zebra w-full">
                        {/* head */}
                        <tbody className='w-full'>
                            {/* row 1 */}
                            {
                                data?.map(d => (
                                    <tr key={d?.property} className='text-sm py-2'>
                                        <td className='font-semibold p-2'>{d?.property}</td>
                                        <td>{d?.value}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full md:w-3/6">
                <h3 style={{ fontFamily: 'Silk Serif' }} className="text-2xl uppercase font-extralight font-serif pb-3">DESCRIPTION</h3>
                <p className="text-sm pt-3">Greet guests with a warm glow while also grabbing their glances with the exquisite Saint Roch Chandelier XXL. Crafted with a lightly brushed brass finish, the chandelier's frame features a round silhouette giving way to a six-tier shade made of cascading handmade smoked glass. Elevate your entryway aesthetic the right way with the Saint Roch.</p>
            </div>
        </div>
    );
};

export default MoreDetails;