import React, { useState } from 'react';
import CarouselSlider from '../Others/CarouselSlide/CarouselSlider';
import { FaCartPlus, FaCheck, FaEuroSign, FaStickyNote } from 'react-icons/fa';
import { useAuthState } from "react-firebase-hooks/auth";
// import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ProductViewer = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [Image, setImage] = React.useState("first");
    const [selectProduct, setSelectProduct] = useState('carport');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    function ImageMagnifier({
        src,
        width,
        height,
        magnifierHeight = 300,
        magnifieWidth = 300,
        zoomLevel = 1.5
    }) {
        const [[x, y], setXY] = useState([0, 0]);
        const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
        const [showMagnifier, setShowMagnifier] = useState(false);
        return (
            <div
                style={{
                    position: "relative",
                    height: height,
                    width: width
                }}
            >
                <img
                    src={src}
                    style={{ height: height, width: width }}
                    onMouseEnter={(e) => {
                        // update image size and turn-on magnifier
                        const elem = e.currentTarget;
                        const { width, height } = elem.getBoundingClientRect();
                        setSize([width, height]);
                        setShowMagnifier(true);
                    }}
                    onMouseMove={(e) => {
                        // update cursor position
                        const elem = e.currentTarget;
                        const { top, left } = elem.getBoundingClientRect();

                        // calculate cursor position on the image
                        const x = e.pageX - left - window.pageXOffset;
                        const y = e.pageY - top - window.pageYOffset;
                        setXY([x, y]);
                    }}
                    onMouseLeave={() => {
                        // close magnifier
                        setShowMagnifier(false);
                    }}
                    alt={"img"}
                />

                <div
                    style={{
                        display: showMagnifier ? "" : "none",
                        position: "absolute",

                        // prevent maginier blocks the mousemove event of img
                        pointerEvents: "none",
                        // set size of magnifier
                        height: `${magnifierHeight}px`,
                        width: `${magnifieWidth}px`,
                        // move element center to cursor pos
                        top: `${y - magnifierHeight / 2}px`,
                        left: `${x - magnifieWidth / 2}px`,
                        opacity: "1", // reduce opacity so you can verify position
                        border: "1px solid lightgray",
                        backgroundColor: "white",
                        backgroundImage: `url('${src}')`,
                        backgroundRepeat: "no-repeat",

                        //calculate zoomed image size
                        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel
                            }px`,

                        //calculete position of zoomed image.
                        backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                    }}
                ></div>
            </div>
        );
    }

    const shoes1 = "https://i.ibb.co/DCf6RQn/DSC03614-1.png";
    const shoes2 = "https://www.pngkey.com/png/full/250-2507384_supply-best-massage-chair-treadmill-in-the-world.png";
    const shoes3 = "https://www.pngkey.com/png/full/870-8705361_fujimedic-kumo-massage-chair-recliner.png";
    const shoes4 = "https://bodymassagepal.com/wp-content/uploads/2021/09/1-removebg.png";

    const pdImage = [
        {
            id: 1,
            position: "first",
            img: shoes1
        },
        {
            id: 2,
            position: "second",
            img: shoes2
        },
        {
            id: 3,
            position: "third",
            img: shoes3
        },
        {
            id: 4,
            position: "fourth",
            img: shoes4
        },
    ];


    const handleProduct = (e) => {

        const product = e.target.value;

        setSelectProduct(product)

    };


    const onSubmit = (data) => {
        const appointment = {
            name: data?.name,
            product: selectProduct,
            email: data?.email,
            phone: data?.phone,
            address: data?.address,
            message: data?.message,
        };
        // console.log(appointment);

        fetch(`https://emotion-products-server-iii.vercel.app/api/v1/appointments`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(appointment),
            // body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.status === "Successful") {
                    toast.success("Data Added Successfully !");
                    reset();
                }
            });
    };




    return (
        <div className='p-5'>
            <h3 style={{ fontFamily: 'Silk Serif' }} className="text-2xl py-7 md:text-5xl font-semibold">Massage Chair brushed finish</h3>

            <div className="w-full flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-3/5">
                    <div className="">
                        {
                            pdImage?.map(p => (
                                <div key={p?.id} className="w-full h-fit flex justify-center items-center mx-auto">
                                    {Image === p?.position && <ImageMagnifier width={450} height={450} src={p?.img} className="py-2 pb-3 h-80 w-4/5 mx-auto rounded" />}
                                </div>
                            ))
                        }
                    </div>
                    {/* {Image === "first" && <ImageMagnifier src={shoes1} className="py-2 pb-3 h-96 w-width mx-auto rounded" />}
                    {Image === "second" && <img src={shoes2} className="py-2 pb-3 h-96 w-width mx-auto rounded" alt="" />}
                    {Image === "third" && <img src={shoes3} className="py-2 pb-3 h-96 w-width mx-auto rounded" alt="" />}
                    {Image === "forth" && <img src={shoes4} className="py-2 pb-3 h-96 w-width mx-auto rounded" alt="" />} */}

                    <CarouselSlider setImage={setImage}></CarouselSlider>
                </div>
                <div className="w-full md:w-2/5 space-y-3">
                    <h2 className="text-sm font-semibold mt-1">Item no 117195</h2>
                    <h5 className="text-sm text-gray-600">Massage Chair brushed finish | smoke glass</h5>
                    <div className="py-3">
                        <h3 className="text-sm"> <span className="font-bold">CM</span> | INCH </h3>
                        <h5 className="text-xs font-semibold">ø 116 x H. 153 cm</h5>
                    </div>
                    <div className="space-y-5 mb-5">
                        <div className=''>
                            <p className='text-sm'>
                                Tastefully blending contemporary design with a touch of industrial flair, the Monticello Lantern is an updated classic.
                            </p>
                            <h4 className="text-xs underline cursor-pointer pt-2 text-gray-500">Read More</h4>
                        </div>
                        {/* <div className="flex gap-3">
                            <span className="h-8 w-12 border border-gray-400 flex justify-center items-center hover:bg-gray-200  rounded"><FaFacebook /></span>
                            <span className="h-8 w-12 border border-gray-400 flex justify-center items-center hover:bg-gray-200  rounded"><FaTwitter /></span>
                            <span className="h-8 w-12 border border-gray-400 flex justify-center items-center hover:bg-gray-200 rounded"><FaInstagram /></span>
                            <span className="h-8 w-12 border border-gray-400 flex justify-center items-center hover:bg-gray-200 rounded"><FaWhatsapp /></span>
                        </div> */}
                        {/* <div className="space-y-3">
                            <div className="flex flex-col space-y-3">
                                <p className="font-bold">Available Color </p>
                                <div className="flex gap-3">
                                    <button className="pl-5 w-7 h-7 rounded-full bg-black border-2 border-primary focus:border-black font-medium"></button>
                                    <button className="pl-5 w-7 h-7 rounded-full bg-white border-2 border-primary focus:border-black font-medium"></button>
                                    <button className="pl-5 w-7 h-7 rounded-full bg-[#EE8539] border-2 border-primary focus:border-black font-medium"></button>
                                </div>
                            </div>

                            <div className="pt-2">
                                <h3 className="text-xl font-medium uppercase text-gray-800 ">Size</h3>
                                <div className="flex items-center gap-2 pt-3">
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-xs" />
                                        <label htmlFor="size-xs" className="text-xs border rounded-full border-primary h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-s" />
                                        <label htmlFor="size-s" className="text-xs border h-6 w-6 rounded-full border-primary text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">S</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-m" />
                                        <label htmlFor="size-m" className="text-xs border h-6 w-6 rounded-full border-primary text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">M</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-L" />
                                        <label htmlFor="size-L" className="text-xs border h-6 w-6 rounded-full border-primary text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">L</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-xl" />
                                        <label htmlFor="size-xl" className="text-xs border  h-6 w-6 rounded-full border-primary text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">XL</label>
                                    </div>

                                </div>
                            </div>
                            <div className="pt-2">
                                <span className="font-medium">Quantity</span>

                            </div>
                            <div className="flex gap-3">
                                <div className="">
                                    <div class="flex gap-2 p-2 border w-32 justify-center items-center">
                                        <span className=" cursor-pointer rounded-full w-7 h-7 border px-2 flex justify-center items-center">
                                            <i class="fa-solid fa-minus"></i>
                                        </span>
                                        <input
                                            class="px-2 font-bold bg-transparent text-center w-8 max-h-8"
                                            type="text"
                                            value="1"
                                        />
                                        <span className="cursor-pointer rounded-full w-7 h-7 border px-2 flex justify-center items-center">
                                            <i class="fa-solid fa-plus"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button className="border flex items-center border-gray-500 px-8 py-2 bg-gray-800 hover:bg-transparent text-white hover:text-black font-medium mr-4"> <span className="mr-3">ADD TO CART</span><AiOutlineShoppingCart /></button>
                                    <button className="border flex items-center border-gray-500 px-8 py-2 bg-transparent text-black hover:bg-black hover:text-white font-medium mr-4"> <span className="ml-3">SHOP NOW</span></button>
                                </div>
                            </div>
                        </div> */}
                        {
                            user ?
                                <div className="py-7 w-full">
                                    <h3 className="text-md flex gap-2 items-center font-semibold"><FaEuroSign /> <span className="">4,375.00</span></h3>
                                    <div className="w-full text-left pt-5 flex flex-col md:flex-row justify-start items-end gap-5">
                                        <div className="flex flex-col font-semibold gap-1">
                                            Qty
                                            <select className="py-2 px-1 border bg-white border-gray-200 mr-6 focus:outline-none">
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col md:flex-row  gap-3 items-end">
                                            <button onClick={() => navigate('/cart')} className=" text-white bg-[#00C2FF] border-0 justify-center btn btn-warning px-4 py-1 rounded">
                                                <p className=" flex tracking-widest gap-2">Add to Cart<FaCartPlus /></p>
                                            </button>

                                            <label htmlFor="my-modal-3" className=" text-white bg-[#00C2FF] border-0 justify-center btn btn-warning px-4 py-1 rounded">
                                                <p className=" flex tracking-widest gap-2">Make Appointment <FaStickyNote /></p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="bg-gray-100 rounded text-center p-5">
                                    <h3 className="text-sm">EICHHOLTZ IS A BUSINESS TO BUSINESS WHOLESALE STORE, <br /> <Link className='underline' to="/signin" >PLEASE LOGIN</Link> TO SEE PRICES AND PLACE AN ORDER.</h3>
                                    <h2 style={{ fontFamily: 'Silk Serif' }} className="text-xl md:text-2xl font-extralight py-2 font-serif">NOT A BUSINESS CUSTOMER?</h2>
                                    <h2 className="text-xs pt-5 cursor-pointer hover:underline duration-300 font-semibold">FIND THE NEAREST EICHHOLTZ DEALER →</h2>
                                </div>
                        }

                        <div className="space-y-5 bg-gray-100 rounded p-5 text-xs pt-5">
                            <div className="flex items-center gap-3 tracking-widest">
                                <FaCheck className='text-primary' />
                                HANDCRAFTED BY SKILLED ARTISANS
                            </div>
                            <div className="flex items-center gap-3 tracking-widest">
                                <FaCheck className='text-primary' />
                                WORLDWIDE SHIPMENT
                            </div>
                            <div className="flex items-center gap-3 tracking-widest">
                                <FaCheck className='text-primary' />
                                PERSONAL ADVICE IN OUR SHOWROOM
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal z-50 h-screen w-full overflow-hidden">
                <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-tr from-[#0a0a0ad8] to-[#0a0a0aa7] bg-cover overflow-hidden relative ">
                    <img src="https://i.ibb.co/37G57Y2/Rectangle-111-1.png" alt="" className="w-full absolute mix-blend-overlay left-0 top-0 h-full object-cover" />
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="w-full text-white">
                        <div className="flex items-center w-full min-h-full lg:justify-center">
                            <div className="w-full flex flex-col items-start gap-5 overflow-hidden mx-auto bg-transparent rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md drop-shadow-2xl">

                                <div className="w-5/6 md:w-full mx-auto p-3 bg-[#474747c3] md:flex-1">
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
                                                className="px-4 py-2 transition duration-300 border border-gray-300 text-white bg-transparent rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
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
                                                htmlFor="email"
                                                className="text-sm font-semibold text-white text-start"
                                            >
                                                E-mail
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="px-4 py-2 transition duration-300 border border-gray-300 text-white bg-transparent rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
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
                                                htmlFor="phone"
                                                className="text-sm font-semibold text-white text-start"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="phone"
                                                placeholder="Phone Number"
                                                className="px-4 py-2 transition duration-300 border border-gray-300 text-white bg-transparent rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
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
                                                Needed Product
                                            </label>

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
                                            <select onChange={handleProduct} className="px-4 py-2 transition duration-300 border bg-transparent border-gray-300 text-gray-500 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200">
                                                <option disabled selected>Select a Product</option>
                                                <option value="carport">Carport</option>
                                                <option value="massagechair">Massage Chair</option>
                                                <option value="furniture">Furniture</option>
                                                <option value="lights">Lights</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <label
                                                htmlFor="address"
                                                className="text-sm font-semibold text-white text-start"
                                            >
                                                Address
                                            </label>
                                            <textarea
                                                type="text"
                                                placeholder="Address"
                                                className="px-4 py-2 transition duration-300 border border-gray-300 bg-transparent text-white rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                {...register("address", {
                                                    required: {
                                                        value: true,
                                                        message: "Please Input Your Address",
                                                    }
                                                })}
                                            />

                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <label
                                                htmlFor="message"
                                                className="text-sm font-semibold text-white text-start"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                type="text"
                                                placeholder="Message"
                                                className="px-4 py-2 transition duration-300 border border-gray-300 bg-transparent h-20 text-white rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                {...register("message", {
                                                    required: {
                                                        value: true,
                                                        message: "Input Your Message",
                                                    }
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
                                <div className="hidden p-3 space-y-5 text-white relative bg-transparent text-left md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                                    <div className="h-full absolute top-72 left-10">
                                        <Link reloadDocument to="/" className="w-full bg-blur">
                                            <img src="https://i.ibb.co/Q9fm5vF/emotion-products-logo.png" alt="" className=" w-52 md:w-60 py-2" />
                                        </Link>
                                        <h3 style={{ fontFamily: 'Silk Serif' }} className="text-5xl pt-7 font-bold text-start">Make an Appointment</h3>
                                        <h3 style={{ fontFamily: 'Serif' }} className="text-xl pt-5 font-semibold">We'd Love to Hear from You</h3>
                                    </div>
                                    {/* <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quo commodi ratione obcaecati dolores quos sunt sed rerum laborum? Vel!</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductViewer;