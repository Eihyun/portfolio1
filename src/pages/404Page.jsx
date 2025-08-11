import React from "react";
import { Link } from 'react-router-dom';

import './404Page.css';

import SubmarkBad from '../assets/images/Eihyun_submark_bad.svg';

const PageNotFound = () => {
    return (
        <div className='container'>
            <div className='error-container'>
                <h1 className='pretendard fw-9 mb-6'>404 Error</h1>
                <div className='error'>
                    <img src={SubmarkBad} alt="Logo with crying face" />
                    <h2 className='pretendard fw-9 mb-6'>It's okay not to be 200 OK.</h2>
                    <p className='pretendard mb-4'>A little dev humor. 200 OK means success.</p>
                    <p className='pretendard mb-4'>You reached a 404 instead, which means not found.</p>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;