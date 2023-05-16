import React from 'react';

const Overview = () => {
    return (
        <div className='w-full md:w-3/5 mx-auto space-y-5 py-10'>
            <p className="text-gray-400">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <div className="">
                <h3 className="text-xl font-bold">05 Easier Steps</h3>
                <ul className='space-y-2 text-sm'>
                    <li>Point of using Lorem Ipsum is that it has a more-or-less normal </li>
                    <li>The point of using Lorem Ipsum is that it has a more-or-less normal distribution</li>
                    <li>The point of using Lorem Ipsum is that it has a more-or-less normal </li>
                    <li>Of using Lorem Ipsum is that it has a more-or-less normal distribution</li>
                    <li>The point of using Lorem Ipsum is that it has a more-or-less</li>
                </ul>
            </div>
            <p className="text-gray-400">Distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
        </div>
    );
};

export default Overview;