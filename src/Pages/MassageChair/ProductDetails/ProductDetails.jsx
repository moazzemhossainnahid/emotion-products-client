import React from 'react';
import ProductViewer from '../../../Components/ProductDetails/MassageChair/ProductViewer';
import MoreDetails from '../../../Components/ProductDetails/MassageChair/MoreDetails';
import OurGallery from '../../../Components/ProductDetails/MassageChair/OurGallery';
import { useParams } from 'react-router-dom';
import UseMChair from '../../../Hooks/useMChair';

const ProductDetailsMC = () => {
    const {id} = useParams();
    const [chairs]=UseMChair();
    // console.log(id);

    const chair = chairs && chairs?.find(c => c?.id === id);

    // console.log(chair);

    return (
        <div className=''>
            <ProductViewer chair={chair} />
            <MoreDetails chair={chair} />
            <OurGallery chair={chair} />
        </div>
    );
};

export default ProductDetailsMC;