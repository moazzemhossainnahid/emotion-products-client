import React from 'react';
import { GridLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='w-full h-full'>
            <GridLoader color="#00C2FF" />
        </div>
    );
};

export default Loader;