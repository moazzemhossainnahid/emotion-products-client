import React from 'react';
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';
import Slider from 'react-slick';
import { useForm } from "react-hook-form";
import { Link } from 'react-scroll';

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
            title: 'Protect your car in style with our unmatched quality carports',
            desc: "We specialize in designing and constructing carports that enhance the look of your property and offer ultimate protection."
        },
        {
            img: 'https://i.ibb.co/5kYFf7r/Rectangle-111.png',
            title: 'Experience extraordinary comfort with our exquisite luxury furniture',
            desc: "Indulge in the comfort of our luxury sofas, designed with top-notch materials to create a statement piece."
        },
        {
            img: 'https://i.ibb.co/37G57Y2/Rectangle-111-1.png',
            title: 'Illuminate your space with our lighting solutions',
            desc: "Energy-efficient lighting solutions that create a warm and inviting atmosphere."
        },
        {
            img: 'https://i.ibb.co/XLqrmyS/Whats-App-Image-2023-05-18-at-1d5-42-21.jpg',
            title: 'Relax and de-stress with the ultimate massage experience',
            desc: "Our high-tech massage chairs offer a soothing massage to provide relaxation."
        }
    ]

    return (
        <div className="-mb-2">
            <Slider {...settings}>
                {
                    SliderData.map((data, idx) => {
                        return (
                            <div key={idx} className={`bg-gradient-to-tr from-gray-900 to-gray-500 relative h-[60vh] md:h-[85vh] bg-cover bg-center`}>
                                <img
                                    src={data?.img}
                                    alt=""
                                    className="w-full absolute mix-blend-overlay h-full object-cover"
                                />
                                <div className="w-full text-center absolute bottom-20 md:bottom-40 space-y-3">
                                    <Slide top duration={1500}>
                                        <h3 style={{ fontFamily: 'Silk Serif' }} className="w-full md:w-4/5 mx-auto text-2xl md:text-5xl text-white">{data?.title}</h3>
                                    </Slide>
                                    <Slide bottom duration={2000}>
                                        <p className="pb-5 text-gray-300 text-sm">{data?.desc}</p>
                                    </Slide>
                                    <div className="w-full lg:w-5/6 xl:w-3/5 mx-auto flex flex-col md:flex-row justify-around items-center gap-5">
                                        <div className="">
                                            <Slide bottom duration={2500}>
                                                {/* <button className='bg-[#00C2FF] border-0 justify-center btn btn-warning px-7 py-2 text-black rounded'> */}
                                                <Link to="abc" smooth={true} duration={500}>
                                                    <label className="mx-auto text-white bg-[#00C2FF] border-0 justify-center btn btn-warning px-7 py-2 rounded">
                                                        <p className="uppercase flex gap-2">About US <FaArrowRight /></p>
                                                    </label>
                                                </Link>
                                                {/* </button> */}
                                            </Slide>
                                        </div>
                                        <div className="">
                                            <Slide bottom duration={2500}>
                                                {/* <button className='bg-[#00C2FF] border-0 justify-center btn btn-warning px-7 py-2 text-black rounded'> */}
                                                <label htmlFor="my-modal-3" className="mx-auto text-white bg-[#00C2FF] border-0 justify-center btn btn-warning px-7 py-2 rounded">
                                                    <p className="uppercase flex gap-2">Make an Appointment <FaArrowRight /></p>
                                                </label>
                                                {/* </button> */}
                                            </Slide>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal z-50 h-screen w-full overflow-hidden">
                <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-tr from-gray-900 to-gray-700 bg-cover overflow-hidden relative ">
                    <img src="https://i.ibb.co/37G57Y2/Rectangle-111-1.png" alt="" className="w-full absolute left-0 top-0 mix-blend-overlay h-full object-cover" />
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
                                    <h3 className="my-4 text-3xl font-bold text-primary text-center ">
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
                                                className="w-full px-4 py-2 text-lg font-semibold transition-colors duration-300 bg-primary text-white rounded-md shadow  hover:bg-white hover:text-black focus:outline-none focus:ring-blue-200 focus:ring-4"
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