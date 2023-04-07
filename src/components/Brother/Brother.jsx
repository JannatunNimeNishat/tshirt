import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Brother = () => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h2>Brother</h2>
            <p><small>Angti: {angti}</small></p>
        </div>
    );
};

export default Brother;