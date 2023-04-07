import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
//css
import './GrandPa.css'


// 1.
export const RingContext = createContext('gold ')
export const MoneyContext = createContext(0)
const GrandPa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has Money: {money}</p>
            <MoneyContext.Provider value={[money,setMoney]}>
            {/* //2. */}
                <RingContext.Provider value='golden ring'>  {/* // we can pass anything like props */}
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;


/** Context api
 * 1.create context and export
 * 2.create a provider and pass a value
 * 3.use context to receive the value
 * 4.
 */


