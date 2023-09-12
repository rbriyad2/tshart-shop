import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const roads= useContext(RingContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>{roads}</p>
        </div>
    );
};

export default Brother;