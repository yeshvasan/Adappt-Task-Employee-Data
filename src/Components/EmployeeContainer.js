import React from 'react';
import EmployeeFilter from './EmployeeFilter';
import EmployeeList from './EmployeeList';
import {withEmpConsumer} from '../Context';
import Loading from './Loading';

function EmployeeContainer({context}){

const {loading, sortedemployee, employee} = context;
if(loading){
    return <Loading />;
}
    return (
     <React.Fragment>
<EmployeeFilter employee={employee}/>
<EmployeeList employee={sortedemployee}/>
</React.Fragment>   

    );
}
export default withEmpConsumer(EmployeeContainer)

{/*

import React from 'react';
import EmployeeFilter from './EmployeeFilter';
import EmployeeList from './EmployeeList';
import {EmpConsumer} from '../Context';
import Loading from './Loading';

export default function EmployeeContainer() {
    return (
        <EmpConsumer>
        {
            (value) => {
            const{loading, sortedemployee, employee} = value;
            if(loading){
                return <Loading />
            }
                return (
                    <div>
            Hello from employee container
            <EmployeeFilter employee={employee}/>
            <EmployeeList employee={sortedemployee}/>
        </div>
                );
            }
        }
        </EmpConsumer>
        
    );
}

*/}

