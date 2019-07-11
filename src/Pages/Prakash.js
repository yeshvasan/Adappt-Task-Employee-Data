import React, { Component } from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import {EmpContext} from '../Context';
import StyledEmployee from '../Components/StyledEmployee';

class Prakash extends Component {
    constructor(props){
        super(props);
        //console.log(this.props);
        this.state={
            slug:this.props.match.params.slug
            
        };
    }
    static contextType = EmpContext;
    //componentDidMount(){ }
    render() {
        const {getEmploye} = this.context;
        const employe = getEmploye(this.state.slug);
        
        if(!employe){
            return (
                <div className="error">
            <h3>No such employee could be found</h3>
            <Link to="/addemploye:Slug" className="btn-primary">Back to Employee Data</Link>
            </div>
            );
        }
        const{name, 
            fatherName, 
            age, 
            gender, 
            qualification, 
            designation, 
            totalExperience, 
            previousCompany, 
            homeTown, 
            salary, 
            pfNumber, 
            esiNumber, 
            email, 
            phNo, 
            images
        } = employe;
        return (
       <StyledEmployee img={images[0]}>
       <Banner title={`Employee Name: ${name}`}>
       <article className="info">
       <h3>Professional Details</h3>
       
       <h6>Designation: {designation}</h6>
       <h6>Total Experience(in yrs): {totalExperience}</h6>
       <h6>Previous Firm: {previousCompany}</h6>
       <h6>Qualification: {qualification}</h6>
       <h6>Salary: {salary}</h6>
       <h6>Provident Fund Number:{pfNumber}</h6>
       <h6>ESI Number: {esiNumber}</h6>
       </article>
       
       <article className="info">
       <h3>Personnel Details</h3>
       <div></div>
       <h6>Father Name: {fatherName}</h6>
       <h6>Age: {age}</h6>
       <h6>Gender: {gender}</h6>
       <h6>Hometown: {homeTown}</h6>
       <h6>Email @: {email}</h6>
       <h6>Phone Number: {phNo}</h6>
       </article>
       </Banner>
      </StyledEmployee>
        )
    }
}

export default Prakash;