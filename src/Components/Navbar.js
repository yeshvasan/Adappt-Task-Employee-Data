import React, { Component } from 'react';
import {FaAlignJustify} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
            <div className="nav-center">
            <div className="nav-header">
               <button type ="button" className="nav-btn" onClick={this.handleToggle}>
               <FaAlignJustify className="nav-icon" />
               </button> 
            </div>
            <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/addemployee">Employee Details</Link>
            </li>
            </ul>
            </div>
            </nav>
        )
    }
}
