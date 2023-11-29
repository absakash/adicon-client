import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = (props) => {
    const shamir=useLoaderData();
    console.log("shomir man",shamir)
   
    return (
        <div>
            this is the result.......
        </div>
    );
};

export default ServicesDetails;