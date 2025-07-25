import { useEffect, useState } from 'react';
import "./VhsCover.css";

function VhsCover({ image, alt }) {
    if (!image) return null;

    return (
        <div className="vhs-cover">
            <img src={image} alt={alt || "VHS cover"} />
        </div>
    );
}

export default VhsCover;
