import React from 'react';
import Hero from '../Components/Hero';

import Employeedata from '../Components/Employeedata';
import Designer from '../Components/Designer';
import HumanResource from '../Components/HumanResource';
import Admin from '../Components/Admin';
import Button from '../Components/StyledEmployee';


const Home = () => {
    return (
        <React.Fragment>
       
        <Hero>
        
        <div>
        
        <Employeedata />
        <Designer />
        <HumanResource />
        <Admin />
        </div>
        
        </Hero>
        
        
        
        </React.Fragment>
    )
}

export default Home;

