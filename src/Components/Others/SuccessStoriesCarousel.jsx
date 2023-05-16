import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { flushSync } from 'react-dom';

import "./SwiperStyle.css";
const TWEEN_FACTOR = 4.2

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max)

const SuccessStoriesCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    const [tweenValues, setTweenValues] = useState([]);

    const onScroll = useCallback(() => {
        if (!emblaApi) return

        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()

        const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
            let diffToTarget = scrollSnap - scrollProgress

            if (engine.options.loop) {
                engine.slideLooper.loopPoints.forEach((loopItem) => {
                    const target = loopItem.target()
                    if (index === loopItem.index && target !== 0) {
                        const sign = Math.sign(target)
                        if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
                        if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
                    }
                })
            }
            const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
            return numberWithinRange(tweenValue, 0, 1)
        })
        setTweenValues(styles)
    }, [emblaApi, setTweenValues])

    useEffect(() => {
        if (!emblaApi) return

        onScroll()
        emblaApi.on('scroll', () => {
            flushSync(() => onScroll())
        })
        emblaApi.on('reInit', onScroll)
    }, [emblaApi, onScroll])


    const ourFeedback = [
        {
            id: 1,
            name: "Jenifer Lopez",
            feedbackStarts: 3,
            feedbackComment: "Hey guys! I just wanted to drop a quick review for this amazing carport company. I recently had a carport installed on my property and I couldn't be happier with the results. The team was friendly and professional, and they really took the time to listen to my needs and wants.",
            img: "https://i.ibb.co/Lpgw2R8/Rectangle-6.png"
        },
        {
            id: 2,
            name: "Jenifer Lopez",
            feedbackStarts: 2,
            feedbackComment: "Hey guys! I just wanted to drop a quick review for this amazing carport company. I recently had a carport installed on my property and I couldn't be happier with the results. The team was friendly and professional, and they really took the time to listen to my needs and wants.",
            img: "https://i.ibb.co/Lpgw2R8/Rectangle-6.png"
        },
        {
            id: 3,
            name: "Jenifer Lopez",
            feedbackStarts: 1,
            feedbackComment: "Hey guys! I just wanted to drop a quick review for this amazing carport company. I recently had a carport installed on my property and I couldn't be happier with the results. The team was friendly and professional, and they really took the time to listen to my needs and wants.",
            img: "https://i.ibb.co/Lpgw2R8/Rectangle-6.png"
        },
        {
            id: 4,
            name: "Jenifer Lopez",
            feedbackStarts: 5,
            feedbackComment: "Hey guys! I just wanted to drop a quick review for this amazing carport company. I recently had a carport installed on my property and I couldn't be happier with the results. The team was friendly and professional, and they really took the time to listen to my needs and wants.",
            img: "https://i.ibb.co/Lpgw2R8/Rectangle-6.png"
        },
    ];


    return (
        <div className=" banner">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {ourFeedback?.map((feedback, index) => (
                        <div
                            className="embla__slide"
                            key={feedback?.id}
                            style={{
                                ...(tweenValues.length && { opacity: tweenValues[index] }),
                            }}
                        >
                            <div className="text-center space-y-2 embla__slide__img">
                                <h2 className="text-2xl.font-bold">{feedback?.name}</h2>
                                <img src={feedback?.img} alt="" className="w-20 h-20 mx-auto rounded-full" />
                                {

                                    feedback?.feedbackStarts === 1 &&
                                    <div className="rating">
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" checked />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                                    </div>

                                }
                                {

                                    feedback?.feedbackStarts === 2 &&
                                    <div className="rating">
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" checked />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                                    </div>

                                }
                                {

                                    feedback?.feedbackStarts === 3 &&
                                    <div className="rating">
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" checked />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                                    </div>

                                }
                                {

                                    feedback?.feedbackStarts === 4 &&
                                    <div className="rating">
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" checked />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                                    </div>

                                }
                                {

                                    feedback?.feedbackStarts === 5 &&
                                    <div className="rating">
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" />
                                        <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-green-500" checked />
                                    </div>

                                }
                                <p className="text-xs break-words md:text-sm">{feedback?.feedbackComment.length > 100 ? `${feedback?.feedbackComment.slice(0, 100)}...` : feedback?.feedbackComment}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessStoriesCarousel;