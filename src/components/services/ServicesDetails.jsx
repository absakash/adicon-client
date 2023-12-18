import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const image=useLoaderData();
    console.log("shomir man",image)
   
    return (
        <div>
            this is the result.......
        </div>
    );
};

export default ServicesDetails;