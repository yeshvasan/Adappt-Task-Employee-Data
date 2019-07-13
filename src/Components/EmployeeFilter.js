import React from 'react';
import {useContext} from 'react';
import {EmpContext} from '../Context';


export default function EmployeeFilter({employee}) {
    const context = useContext(EmpContext);
   
    const {
        handleChange,
        
    } = context;
   
 
    return (
        <section className="filter-container">
        <form className="filter-form">
        <div className="form-group">
        <div className="search-box"> 
        <input className="search-txt" type="text" name="name" onChange={handleChange}  id="" />
        
        
        
        </div>
        
        </div>
        </form>
        </section>
    )
}
