import React, { useContext } from 'react';
import Sepcial from '../Sepcial/Sepcial';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = () => {
    const road = useContext(RingContext)
    return (
        <div>
            <h2>Myself</h2>
            <Sepcial ring={road}></Sepcial>
        </div>
    );
};

export default Myself;