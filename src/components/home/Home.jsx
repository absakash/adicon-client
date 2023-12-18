import React from 'react';
import Banner from './Banner';
import Workshop from './Workshop';
import Projects from './Projects';
import Expertise from './Expertise';
import Practice from './Practice';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Workshop></Workshop>
             <Projects></Projects>
             <Expertise></Expertise>
             <Practice></Practice>
        </div>
    );
};

export default Home;