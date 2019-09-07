import React from 'react';

import './Type.css';

function Type({name}) {
    return (
        <div className={`Type ${name}`}>{name}</div>
    );
}

export default Type;
