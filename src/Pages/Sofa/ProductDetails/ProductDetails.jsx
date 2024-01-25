import React from 'react';
import ProductViewer from '../../../Components/ProductDetails/Furniture/ProductViewer';
import MoreDetails from '../../../Components/ProductDetails/Furniture/MoreDetails';
import OurGallery from '../../../Components/ProductDetails/Furniture/OurGallery';
import { useParams } from 'react-router-dom';
import UseFurniture from '../../../Hooks/useFurniture';

const ProductDetailsFurniture = () => {
    const {id} = useParams();
    const [furnitures]=UseFurniture();
    // console.log(id);

    const furniture = furnitures && furnitures?.find(c => c?.id === id);

    // console.log(furniture);

    return (
        <div className=''>
            <ProductViewer furniture={furniture} />
            <MoreDetails furniture={furniture} />
            <OurGallery furniture={furniture} />
        </div>
    );
};

export default ProductDetailsFurniture;