import React from 'react';
import ReactPlayer from 'react-player';
import { ScrollRotate } from 'react-scroll-rotate';
import Vimeo from '@u-wave/react-vimeo'
import { useTranslation } from 'react-i18next';
import { GiCancel } from 'react-icons/gi';

const MChairVideos = () => {
    const {t} = useTranslation();

    return (
        <div className="w-full h-[90vh] md:h-[95vh] py-7">
            <div data-aos="fade-down" data-aos-duration="1000" className="bg-gradient-to-r from-[#1E120A] to-[#343434] rounded w-5/6 md:w-4/5 h-96 mx-auto relative">
                <div className="flex w-4/5 mx-auto justify-between items-center gap-3 pt-5">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{t('mchair.vdo.title')}</h3>
                    <div className="md:pr-20">
                        <ScrollRotate from={0} to={360} throttle={0.1} animationDuration={0.3}>
                            <img src="https://i.ibb.co/XZvKfRP/Group-75.png" alt="" className="" />
                        </ScrollRotate>
                    </div>
                </div>

                <div className="pt-7 h-96 w-4/5  mx-auto">
                    <div className="bg-[url('https://i.ibb.co/VxTbv70/dream-in-massage-chair.jpg')] rounded backdrop-saturate-125 bg-white/30 h-80 w-full bg-cover bg-center">
                        <div className="flex flex-col justify-center items-center h-full">
                            <div className="hero-content w-full h-full text-center text-neutral-content">
                                <label htmlFor="my-modal-5" className="w-full modal-button">
                                    <h1 className="w-full flex justify-center">
                                        <img width="120" height="120" src="https://i.ibb.co/nR9sdnD/Group-39.png" className="attachment-full size-full cursor-pointer" alt="" sizes="(max-width: 120px) 100vw, 120px" data-no-retina="" />
                                        {/* <ReactPlayer
                                    className={`rounded`}
                                    width={"100%"}
                                    height={"100%"}
                                    controls
                                    light="https://i.ibb.co/Kqkcjg2/video-banner.jpg"
                                    url={`https://www.youtube.com/embed/NsWz_3KmCdY`}
                                    playing
                                    config={{
                                        youtube: {
                                            playerVars: {
                                                showinfo: 0,
                                                fs: 0,
                                            },
                                            modestbranding: 1,
                                            preload: true,
                                            rel: 0
                                        },
                                    }}
                                /> */}
                                    </h1>
                                </label>
                            </div>
                            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box max-w-3xl rounded-lg bg-base-300">
                                    <div className="modal-action mb-3 -mt-3">
                                        <label htmlFor="my-modal-5" className="btn btn-dark btn-sm text-white">
                                            <GiCancel className='text-2xl'/>
                                        </label>

                                    </div>
                                    {/* <iframe
                                        className="mx-auto w-full lg:h-96 h-48 md:h-96 rounded-lg"
                                        src="https://www.youtube.com/embed/AA6HHocIl4w?si=rlWbGIng5wiEpSuj"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe> */}
                                    <iframe title="vimeo-player" className="mx-auto w-full lg:h-96 h-48 md:h-96 rounded-lg" src="https://player.vimeo.com/video/880520638?h=3745690b87?autoplay=1&loop=1&background=0" frameborder="0" allow="autoplay" allowfullscreen></iframe>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MChairVideos;