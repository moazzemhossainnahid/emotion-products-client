import React from 'react';

const ProductRelatedView = () => {
    const [tab, setTab] = React.useState("info");

    return (
        <div className='container w-full p-5'>
            <div className="py-10 px-5 md:px-10">
                <p className="border-b border-[#00C2FF] w-full"></p>
            </div>

            <div className="w-full">
                <div className="divide-y divide-gray-300">
                    <div className="flex mt-7">
                        <p onClick={() => setTab("info")} className="font-medium border border-gray-400 cursor-pointer hover:text-primary hover:border-primary rounded-md py-3 px-4">Personal Info</p>
                        <p onClick={() => setTab("answer")} className="font-medium border ml-2 rounded-md cursor-pointer border-gray-400 py-3 hover:text-primary hover:border-primary px-4">Question & Answer</p>
                        <p onClick={() => setTab("review")} className="font-medium border ml-2 rounded-md cursor-pointer hover:text-primary hover:border-primary border-gray-400 py-3 px-4">Review (10)</p>
                    </div>
                    {tab === "info" && <ProductInfo />}
                    {tab === "answer" && <QuestionAnswer />}
                    {tab === "review" && <Review />}
                </div>

            </div>
        </div>
    );
};

export default ProductRelatedView;