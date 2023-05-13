import React from 'react';
import { BiChevronRight, BiTime, BiWorld } from 'react-icons/bi';
import { FaFacebookF, FaFacebookSquare, FaIntercom, FaLinkedin, FaPinterestSquare, FaTwitter, FaYoutubeSquare } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';


const Footer = () => {

    const dataItems = [ 
        {
            id: 1,
            label: 'Recent',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-28-130x80.jpg',
            title: 'Chinese food ingredients – What Chinese eat',
            date: 'Oct 20, 2016',
            comment: '120'
        },
        {
            id: 2,
            label: 'Trending',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-23-130x80.jpg',
            title: '8 Fantastic ways to improve your daily fitness',
            date: 'Nov 12, 2028',
            comment: '34'

        },
        {
            id: 3,
            label: ' Most Liked',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/post-21-130x80.jpg',
            title: 'Effective ways to get more out of basketball',
            date: 'Dec 23, 2015',
            comment: '321'
        },
        {
            id: 3,
            label: ' Most Liked',
            image: 'https://themes.zozothemes.com/newser/wp-content/uploads/2016/11/post-276-130x80.jpg',
            title: 'Top ten and Best Beauty Looks for this year',
            date: 'Oct 19, 2016',
            comment: '321'
        },
    ];


    return (
        <div className='container w-full bg-black pt-10 p-5 mt-10'>
            <div className='w-full mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div>
                        <img src="https://themes.zozothemes.com/newser/wp-content/uploads/2016/10/light-logo.png" alt="" />
                        <p className='text-gray-200 mt-8  font-serif'> Newser the most advanced highly customizable drag and drop magazine WordPress theme.</p>
                        <p className='pt-8 text-gray-200'>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget sociis natoque penatibus et vulputate eleifend tellus enean leo tellus eget condimentum.
                        </p>
                        <div>
                            <h2 className='text-white  inline-block mt-10  mb-2 text-start'> FOLLOW US</h2>
                            <hr />
                            <div className='mt-4 grid grid-cols-6 gap-y-5'>
                                <div className='w-7 h-7 bg-green-700 flex items-center justify-center rounded'>
                                    <FaFacebookF className='text-xl text-white' />
                                </div>
                                <div className='w-7 h-7 bg-blue-700 flex items-center justify-center rounded'>
                                    <FaTwitter className='text-xl text-white' />
                                </div>
                                <div className='w-7 h-7 bg-yellow-700 flex items-center justify-center rounded'>
                                    <FaIntercom className='text-xl text-white' />
                                </div>
                                <div className='w-7 h-7 bg-red-700 flex items-center justify-center rounded'>
                                    <FaPinterestSquare className='text-xl text-white' />
                                </div>
                                <div className='w-7 h-7 bg-slate-700 flex items-center justify-center rounded'>
                                    <GrFavorite className='text-xl text-red-700' />
                                </div>
                                <div className='w-7 h-7 bg-slate-700 flex items-center justify-center rounded'>
                                    <FaFacebookSquare className='text-xl text-white' />
                                </div>
                                <div className='w-7 h-7 bg-slate-700 flex items-center justify-center rounded'>
                                    <FaYoutubeSquare className='text-xl text-white' />
                                </div>
                                <div className='w-7 h-7 bg-purple-700 flex items-center justify-center rounded'>
                                    <BiWorld className='text-xl text-white' />
                                </div>
                                <div className='w-7 h-7 bg-purple-700 flex items-center justify-center rounded'>
                                    <FaLinkedin className='text-xl text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='mb-1'>
                            <h2 className='text-white  inline-block  p-1 text-start'> POPULAR POSTS</h2>
                            <hr />
                        </div>
                        <div className="pt-3">
                            {dataItems.map((item) => (
                                <div key={item.id} >
                                    <div className='flex justify-start mb-8 items-center '>
                                        <div className='w-1/2 mr-0'>
                                            <img className='w-28' src={item.image} alt="" />
                                        </div>
                                        <div className='pl-2'>
                                            <p className='text-white text-xs font-serif hover:text-red-400   text-left'>{item.title}</p>
                                            <li className='flex justify-start items-center  mt-1 text-red-600'> <BiTime className='mr-3' /> <a className='hover:text-red-900 text-xs text-white' href="">{item.date}</a></li>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className='mb-4'>
                            <h2 className='text-white  inline-block  p-1 text-start'> FEATURE POSTS</h2>
                            <hr />
                        </div>
                        <div className='grid grid-cols-1 gap-y-4'>
                            {dataItems.map((item) => (
                                <div key={item.id} >
                                    <li className='flex justify-start items-start'>
                                        <BiChevronRight className='text-red-600 text-2xl' />
                                        <a className='text-white text-md  hover:text-red-600' href="">{item.title}</a>
                                    </li>
                                </div>
                            ))}
                            <li className='flex justify-start items-start'>
                                <BiChevronRight className='text-red-600 text-2xl' />
                                <a className='text-white text-md  hover:text-red-600' href="">Consectetur adipisicing saepe  architecto</a>
                            </li>
                        </div>
                    </div>

                    <div>
                        <div className='mb-4'>
                            <h2 className='text-white  inline-block  p-1 text-start'> TWITTER POSTS</h2>
                            <hr />
                        </div>
                        <div className='mb-7 text-sm'>
                            <div className='flex justify-start items-center'>
                                <div>
                                    <img src="https://pbs.twimg.com/profile_images/894839241707896833/C0eWPNNR_normal.jpg" alt="" />
                                </div>
                                <div>
                                    <h1 className='text-white'>Abdur Rahim</h1>
                                    <p className=''>3 years ago</p>
                                </div>
                            </div>
                            <span className='text-white mt-4 text-left text-sm'>
                                Zegen - Church WordPress Theme <a className='hover:text-red-600' href="">https://t.co/F5BwXYz039 </a> Zegen is a perfect WordPress theme for churches. It’s specia… <a className='hover:text-red-600' href="">https://t.co/NOeUUXPawR</a>
                            </span>
                        </div>

                        <div>
                            <div className='flex justify-start items-center'>
                                <div>
                                    <img src="https://pbs.twimg.com/profile_images/894839241707896833/C0eWPNNR_normal.jpg" alt="" />
                                </div>
                                <div>
                                    <h1 className='text-white'>Abdur Rahim</h1>
                                    <p className=''>3 years ago</p>
                                </div>
                            </div>
                            <span className='text-white mt-5 text-left text-sm'>
                                Zegen - Church WordPress Theme <a className='hover:text-red-600' href="">https://t.co/F5BwXYz039 </a> Zegen is a perfect WordPress theme for churches. It’s specia… <a className='hover:text-red-600' href="">https://t.co/NOeUUXPawR</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;