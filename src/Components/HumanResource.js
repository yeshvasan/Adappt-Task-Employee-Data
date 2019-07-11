import React, { Component } from 'react';
import { EmpContext } from '../Context';
import Loading from './Loading';
import Employe from './Employe';
import Title from './Title';




export default class HumanResource extends Component {
    static contextType = EmpContext;
    render() {
     let {loading, hr : employee} = this.context;

    
     employee = employee.map(employe => {
         return <Employe key={employe.id} employe={employe} />
     });
    
     
       
        
        return (
           <section className = "hr">
           <div>
           <Title title='Human Resource Team' />
           </div>
        
           <div className="hr-center">
           {loading ? <Loading/> : employee}
           </div>
           
           
            </section>
           
        );
    }
}
