import React from 'react';
import ProductViewer from '../../../Components/ProductDetails/Carport/ProductViewer';
import MoreDetails from '../../../Components/ProductDetails/Carport/MoreDetails';
import OurGallery from '../../../Components/ProductDetails/Carport/OurGallery';
import { useParams } from 'react-router-dom';

const ProductDetailsCarport = () => {
const {id} = useParams();
    return (
        <div className=''>
            <ProductViewer />
            <MoreDetails />
            <OurGallery />
        </div>
    );
};

export default ProductDetailsCarport;