import React from 'react';
import {useContext} from 'react';
import {EmpContext} from '../Context';
import {FaSearch} from 'react-icons/fa';

export default function EmployeeFilter({employee}) {
    const context = useContext(EmpContext);
   
    const {
        handleChange,
        name,
        developer,
        designer
    } = context;
   
 
    return (
        <section className="filter-container">
        <form className="filter-form">
        <div className="form-group">
        <div className="search-box"> 
        <input className="search-txt" type="text" name="name" onChange={handleChange}  id="" />
        <FaSearch className="search-btn" />
        
        
        </div>
        
        </div>
        </form>
        </section>
    )
}
