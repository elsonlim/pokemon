import React from 'react';

import './Stat.css';

function Stat(props) {
    return (
        <div className="Stat">
            <span className="FieldName">{props.name}:</span> {props.value}
        </div>
    )
}

export default Stat;
