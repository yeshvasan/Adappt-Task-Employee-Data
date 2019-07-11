import React, { Component } from 'react';
import { EmpContext } from '../Context';
import Loading from './Loading';
import Employe from './Employe';
import Title from './Title';




export default class Admin extends Component {
    static contextType = EmpContext;
    render() {
     let {loading, admin : employee} = this.context;

    
     employee = employee.map(employe => {
         return <Employe key={employe.id} employe={employe} />
     });
    
     
       
        
        return (
           <section className = "admin">
           <div>
           <Title title='System Admin' />
           </div>
        
           <div className="admin-center">
           {loading ? <Loading/> : employee}
           </div>
           
           
            </section>
           
        );
    }
}
