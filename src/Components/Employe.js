import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Employe({ employe }) {
    const {name,slug,designation,images} =employe; 
    return (
        <article className="data">
        <div className="img-container">
        <img src={images[0]} alt="single" />
        <div className="price-top">
            <h6>Name:{name}</h6>
        </div>
        <Link to={`/addemployee/${slug}`} className="btn-primary data-link">Details</Link>
        </div>
        <p className="data-info">{designation}</p>
        </article>
    );
}

