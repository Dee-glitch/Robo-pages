import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{position: 'sticky', top: '0', zIndex: '5', padding: '10px', border: '1px solid black'}}>
            {props.children}
        </div>
    )
};

export default Scroll