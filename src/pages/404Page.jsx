import React from "react";
import './404Page.css';

const PageNotFound = () => {
    return (
        <div className='container'>
            <h2 className='pretendard fw-9 mb-6'>404 Error</h2>
            {/* <p>Oops! The page you're looking for does not exist.</p> */}
            <div className="vhs-tape pretendard" id="vhs">
                <div></div>
            </div>
        </div>
    );
};

export default PageNotFound;