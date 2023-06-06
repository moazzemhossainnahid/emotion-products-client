import React from 'react';
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';
import Slider from 'react-slick';
import { useForm } from "react-hook-form";

const HomeTopBannerCarousel = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        appendDots: dots => (
            <div
                className='-mt-32'
                style={{
                    marginTop: "-30px",
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul className='absolute hidden md:flex text-sm gap-2 items-center left-40' style={{ margin: "-70px" }}> <span className="-mt-4">01</span> {dots}  <span className="-mt-4">04</span> </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    content: "",
                    height: "2px",
                    width: "20px",
                    background: "#00C2FF",
                    color: "#00C2FF",
                    border: "1px blue solid #00C2FF"
                }}
            >
                <span className="text-transparent">{i + 1}</span>
            </div>

        )
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    const SliderData = [
        {
            img: 'https://i.ibb.co/TrnSTM8/Whats-App-Image-2023-0f5-14-at-19-06-13.jpg',
            title: 'Protect Your Vehicle',
            desc: 'We make Sure that, to give you a premium Carport service'
        },
        {
            img: 'https://i.ibb.co/5kYFf7r/Rectangle-111.png',
            title: 'Earning for a Lifetime',
            desc: 'From free online courses to advanced degrees and executive education'
        },
        {
            img: 'https://i.ibb.co/37G57Y2/Rectangle-111-1.png',
            title: 'Keep Learning',
            desc: 'Hagwart can help you meet your goals for life and professional advancement.'
        },
        {
            img: 'https://i.ibb.co/XLqrmyS/Whats-App-Image-2023-05-18-at-1d5-42-21.jpg',
            title: 'Keep Learning',
            desc: 'Hagwart can help you meet your goals for life and professional advancement.'
        }
    ]

    return (
        <div className="-mb-2">
            <Slider {...settings}>
                {
                    SliderData.map((data, idx) => {
                        return (
                            <div key={idx} className={`bg-gradient-to-tr from-gray-400 to-gray-700 relative h-[60vh] md:h-[85vh] bg-cover bg-center`}>
                                <img
                                    src={data?.img}
                                    alt=""
                                    className="w-full absolute mix-blend-overlay h-full object-cover"
                                />
                                <div className="w-full text-center absolute bottom-40 space-y-3">
                                    <Slide top duration={1500}>
                                        <h3 className="text-3xl md:text-5xl text-white">{data?.title}</h3>
                                    </Slide>
                                    <Slide bottom duration={2000}>
                                        <p className="pb-5 text-gray-300 text-sm">{data?.desc}</p>
                                    </Slide>
                                    <Slide bottom duration={2500}>
                                        <button className='bg-[#00C2FF] border-0 justify-center btn btn-warning px-7 py-2 text-black rounded'>
                                            <label htmlFor="my-modal-3" className="mx-auto text-white">
                                                <p className=" flex gap-2">Make An Appointment <FaArrowRight /></p>
                                            </label>
                                        </button>
                                    </Slide>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal z-50 h-screen w-full overflow-hidden">
                <div className="modal-box w-11/12 max-w-5xl bg-[url('https://i.ibb.co/37G57Y2/Rectangle-111-1.png')] bg-cover overflow-hidden relative bg-[#000000] ">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="text-white">
                        <div className="flex items-center min-h-full p-4 lg:justify-center">
                            <div className="flex flex-col overflow-hidden mx-auto bg-transparent rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md drop-shadow-2xl">
                                <div className="hidden p-3 text-white text-start bg-transparent md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                                    <h3 className="text-5xl font-bold text-start">Contact US</h3>
                                    <h3 className="text-2xl font-semibold">We'd Love to Hear from You</h3>
                                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quo commodi ratione obcaecati dolores quos sunt sed rerum laborum? Vel!</p>
                                    <div className="flex gap-2">
                                        <span className="text-xl p-1 bg-white text-gray-600"><FaInstagram /></span>
                                        <span className="text-xl p-1 bg-white text-gray-600"><FaFacebook /></span>
                                        <span className="text-xl p-1 bg-white text-gray-600"><FaYoutube /></span>
                                        <span className="text-xl p-1 bg-white text-gray-600"><FaTwitter /></span>
                                        <span className="text-xl p-1 bg-white text-gray-600"><FaLinkedin /></span>
                                    </div>
                                </div>
                                <div className="p-3 bg-transparent md:flex-1">
                                    <h3 className="my-4 text-3xl font-bold text-yellow-300 text-center ">
                                        Contact Form
                                    </h3>
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        action="#"
                                        className="flex flex-col space-y-2"
                                    >
                                        <div className="flex flex-col space-y-1">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-semibold text-white text-start"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="px-4 py-2 transition duration-300 border border-gray-300 text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: "Name is require",
                                                    }
                                                })}
                                            />
                                            {/* <label className="label">
                                                {errors.name?.type === "required" && (
                                                    <span className="label-text-alt text-red-700">
                                                        {errors.name.message}
                                                    </span>
                                                )}
                                                {errors.name?.type === "pattern" && (
                                                    <span className="label-text-alt text-red-700">
                                                        {errors.name.message}
                                                    </span>
                                                )}
                                            </label> */}
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <label
                                                htmlFor="phone"
                                                className="text-sm font-semibold text-white text-start"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="phone"
                                                placeholder="Phone Number"
                                                className="px-4 py-2 transition duration-300 border border-gray-300 text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                {...register("phone", {
                                                    required: {
                                                        value: true,
                                                        message: "Phone Number is require",
                                                    }
                                                })}
                                            />
                                            {/* <label className="label">
                                                {errors.phone?.type === "required" && (
                                                    <span className="label-text-alt text-red-700">
                                                        {errors.phone.message}
                                                    </span>
                                                )}
                                                {errors.phone?.type === "pattern" && (
                                                    <span className="label-text-alt text-red-700">
                                                        {errors.phone.message}
                                                    </span>
                                                )}
                                            </label> */}
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-semibold text-white text-start"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="px-4 py-2 transition duration-300 border border-gray-300 text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: "Email is require",
                                                    },
                                                    pattern: {
                                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                        message: "Provide a valid Email",
                                                    },
                                                })}
                                            />
                                            {/* <label className="label">
                                                {errors.email?.type === "required" && (
                                                    <span className="label-text-alt text-red-700">
                                                        {errors.email.message}
                                                    </span>
                                                )}
                                                {errors.email?.type === "pattern" && (
                                                    <span className="label-text-alt text-red-700">
                                                        {errors.email.message}
                                                    </span>
                                                )}
                                            </label> */}
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <label
                                                htmlFor="messege"
                                                className="text-sm font-semibold text-white text-start"
                                            >
                                                Messege
                                            </label>
                                            <textarea
                                                type="text"
                                                placeholder="Messege"
                                                className="px-4 py-2 transition duration-300 border border-gray-300  text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                {...register("messege", {
                                                    required: {
                                                        value: true,
                                                        message: "Messege is require",
                                                    },
                                                    minLength: {
                                                        value: 6,
                                                        message: "Must be 6 characters or longer",
                                                    },
                                                })}
                                            />

                                        </div>

                                        <div className="pt-3">

                                            <button
                                                type="submit"
                                                className="w-full px-4 py-2 text-lg font-semibold text-gray-700 transition-colors duration-300 bg-gradient-to-r from-[#bfcc35] to-[#fff30a] rounded-md shadow  hover:bg-gradient-to-l focus:outline-none focus:ring-blue-200 focus:ring-4"
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTopBannerCarousel;