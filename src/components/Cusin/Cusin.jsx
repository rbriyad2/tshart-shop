import React from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({children, hasfriend, ring}) => {
    return (
        <div>
            <h2>Cusin</h2>
            <p><small>{children}</small></p>
            {hasfriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cusin;