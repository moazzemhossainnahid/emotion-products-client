import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';




const CompleteCollection = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    const CompleteCollectionData = [
        {
            id: 1,
            title: t('homeCompleteCollection.r1'),
            href: "carport",
            img: "https://i.ibb.co/10hSgpn/image-3.png",
        },
        {
            id: 2,
            title: t('homeCompleteCollection.r2'),
            href: "massagechair",
            img: "https://i.ibb.co/bgbsj69/DSC03614-3.png",
        },
        {
            id: 3,
            title: t('homeCompleteCollection.r3'),
            href: "furniture",
            img: "https://i.ibb.co/2Ybnw7x/sofa-1.png",
        },
        {
            id: 4,
            title: t('homeCompleteCollection.r4'),
            href: "lights",
            img: "https://i.ibb.co/7GbC1ZQ/image-4.png",
        },
    ]
    return (
        <div id="abc" className='w-full py-20 text-center p-5'>
            <h3 className="text-2xl md:text-3xl">{t('homeCompleteCollection.title')}</h3>
            <p className="text-sm pt-2">{t('homeCompleteCollection.desc')}</p>

            <div className="w-full text-left md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10 p-3 py-10">
                {
                    CompleteCollectionData?.map(d => (
                        <div key={d?.id} className="w-full mx-auto flex md:flex-col justify-center items-center">
                            <div className="relative w-full h-40 mt-10 mx-auto">
                                <img src={d?.img} alt="" className="relative h-full w-2/3 hover:scale-95 duration-300 ease-in-out" />
                            </div>
                            <h3 onClick={() => navigate(d?.href)} className="text-xl group cursor-pointer capitalize font-extralight text-start pt-5 flex justify-start -ml-20 gap-2 items-center">{d?.title} <AiOutlineArrowRight className='text-xl font-thin group-hover:translate-x-3 duration-300 ease-in-out'/> </h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CompleteCollection;