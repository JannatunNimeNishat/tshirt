import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ring}) => {
    //3
    const angti = useContext(RingContext)

    return (
        <div>
            <h2>Special</h2>
            <p><small>Ring: {angti}</small></p>
        </div>
    );
};

export default Special;