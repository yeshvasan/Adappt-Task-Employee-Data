import React from 'react';
import Employe from './Employe';

export default function EmployeeList({employee}) {
if(employee.length === 0){
    return (
        <div className="empty-search">
        <h3>Unfortunately no Employee matched your search</h3>
        </div>
    )
    
}
    return (
        <section className="dataslist">
        <div className="dataslist-center">
        {
            employee.map(item => {
                return <Employe key={item.id} employe={item} />;
            
            })
        }
        </div>
        
        </section>
    )
}
