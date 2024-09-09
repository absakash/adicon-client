import React from 'react';

import Workshop from './Workshop';
import Projects from './Projects';
import Practice from './Practice';
import Banner1 from './Banner1';
import Infroduciton from './Infroduciton';
import Experts from '../Expertise/Experts';
import Supply from '../Supply/Supply';

const Home = () => {
    return (
        <div>
            <Banner1></Banner1>
             {/* <Banner></Banner> */}
             <Infroduciton></Infroduciton>
             <Workshop></Workshop>
             <Projects></Projects>

             {/* product showcase section what ever we have available  */}
             <Supply></Supply>
             <Experts></Experts>
           
             {/* <Practice></Practice> */}
        </div>
    );
};

export default Home;