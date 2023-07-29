import React from 'react';
import ProductViewer from '../../Components/ProductDetails/ProductViewer';
import MoreDetails from '../../Components/ProductDetails/MoreDetails';
import Gallery from '../../Components/SinglePages/Tabs/Gallery/Gallery';
import OurGallery from '../../Components/ProductDetails/OurGallery';

const ProductDetails = () => {
    return (
        <div className=''>
            <ProductViewer/>
            <MoreDetails/>
            {/* <Gallery/> */}
            <OurGallery/>
        </div>
    );
};

export default ProductDetails;