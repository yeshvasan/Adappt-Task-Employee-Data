import React, { Component } from 'react';
import { EmpContext } from '../Context';
import Loading from './Loading';
import Employe from './Employe';
import Title from './Title';




export default class Designer extends Component {
    static contextType = EmpContext;
    render() {
     let {loading, designer : employee} = this.context;

    
     employee = employee.map(employe => {
         return <Employe key={employe.id} employe={employe} />
     });
    
     
       
        
        return (
           <section className = "designer">
           <div>
           <Title title='Designer' />
           </div>
        
           <div className="designer-center">
           {loading ? <Loading/> : employee}
           </div>
           
           
            </section>
           
        );
    }
}
