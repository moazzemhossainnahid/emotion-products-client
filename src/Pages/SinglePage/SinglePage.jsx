import React from 'react';
import ProductView from '../../Components/SinglePages/ProductView';
import ProductRelatedView from '../../Components/SinglePages/ProductRelatedView';

const SinglePage = () => {
    return (
        <div className='container w-full'>
            <ProductView/>
            <ProductRelatedView/>
        </div>
    );
};

export default SinglePage;