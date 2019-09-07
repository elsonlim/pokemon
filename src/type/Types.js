import React from 'react';

import Type from './Type';
import './Type.css';

function Types({types}) {
    const allTypes = types.map((type, index) => <Type key={index} name={type} />);
    return (
        <div className="TypeContainer">{allTypes}</div>
    )
}

export default Types;
