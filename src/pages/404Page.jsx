import React from "react";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='container'>
            <h1 className='pretendard fw-9 mb-6'>404 Error</h1>
            <p className='pretendard mb-4'>Oops! The page you're looking for does not exist.</p>
        </div>
    );
};

export default PageNotFound;