import React, { Component } from 'react';
import { EmpContext } from '../Context';
import Loading from './Loading';
import Employe from './Employe';
import Title from './Title';




export default class Employeedata extends Component {
    static contextType = EmpContext;
    render() {
     let {loading, developer : employee} = this.context;

    
     employee = employee.map(employe => {
         return <Employe key={employe.id} employe={employe} />
     });
    
     
       
        
        return (
           <div className = "developer">
           <div>
           <Title  title='Developers' />
           </div>
        
           <div className="developer-center">
           {loading ? <Loading/> : employee}
           </div>
           
           
            </div>
           
        );
    }
}
