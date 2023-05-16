import React from 'react';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

const Gallery = () => {
    return (
        <div className='w-full md:w-4/5 mx-auto py-10'>
            <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
                <img className="w-full rounded" src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200" />
                <img className="w-full rounded" src="https://source.unsplash.com/AYS2sSAMyhc/1400x1200" />
                <img className="w-full rounded" src="https://source.unsplash.com/Kk8mEQAoIpI/1600x1200" />
                <img className="w-full rounded" src="https://source.unsplash.com/Kk8mEQAoIpI/1600x1200" />
                <img className="w-full rounded" src="https://source.unsplash.com/AYS2sSAMyhc/1400x1200" />
                <img className="w-full rounded" src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200" />
            </SlideshowLightbox>
        </div>
    );
};

export default Gallery;