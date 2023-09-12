import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Nabila = () => {
    const chain = useContext(RingContext)
    return (
        <div>
            <h2>Nabila {chain}</h2>
            <p>{chain}</p>
        </div>
    );
};

export default Nabila;