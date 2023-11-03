import React from 'react';
import ProductViewer from '../../../Components/ProductDetails/Furniture/ProductViewer';
import MoreDetails from '../../../Components/ProductDetails/Furniture/MoreDetails';
import OurGallery from '../../../Components/ProductDetails/Furniture/OurGallery';

const ProductDetailsFurniture = () => {

    return (
        <div className=''>
            <ProductViewer />
            <MoreDetails />
            <OurGallery />
        </div>
    );
};

export default ProductDetailsFurniture;