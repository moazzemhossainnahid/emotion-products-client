import React from 'react';
import ProductViewer from '../../../Components/ProductDetails/Lights/ProductViewer';
import MoreDetails from '../../../Components/ProductDetails/Lights/MoreDetails';
import OurGallery from '../../../Components/ProductDetails/Lights/OurGallery';

const ProductDetailsLights = () => {

    return (
        <div className=''>
            <ProductViewer />
            <MoreDetails />
            <OurGallery />
        </div>
    );
};

export default ProductDetailsLights;