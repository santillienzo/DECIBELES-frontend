import React from 'react';
import './Title.css'

const Title = ({title}) => {
    return (
        <div className="title non-selectable">
            <h3>{title}</h3>
        </div>
    );
};

export default Title;