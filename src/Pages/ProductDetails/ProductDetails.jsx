import React from 'react';
import ProductViewer from '../../Components/ProductDetails/ProductViewer';
import MoreDetails from '../../Components/ProductDetails/MoreDetails';
import OurGallery from '../../Components/ProductDetails/OurGallery';

const ProductDetails = () => {
    return (
        <div className=''>
            <ProductViewer/>
            <MoreDetails/>
            <OurGallery/>
        </div>
    );
};

export default ProductDetails;