import React from "react";
import { Link } from 'react-router-dom';

import './404Page.css';

const PageNotFound = () => {
    return (
        <div className='container'>
            <div className='error-container'>
                <h1 className='pretendard fw-9 mb-6'>404 Error</h1>
                <h2 className='pretendard fw-9 mb-6'>It's okay not to be 200 OK</h2>
                <h3 className='pretendard mb-4'>Oops! The page you're looking for does not exist.</h3>
            </div>
        </div>
    );
};

export default PageNotFound;