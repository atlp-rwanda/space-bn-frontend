import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return ( 
    <div className="scroll"
    style={{
        overflowY: 'scroll',
        height: 600,
        borderTop: '3px solid #F4F4F4',
    }}>
        {props.children}
    </div>
     );
}
 
export default Scroll;