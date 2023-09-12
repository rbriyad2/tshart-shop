import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../Grandpa/Grandpa';


const Uncale = () => {
    const [money, setMoney]= useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle: {money}</h2>
            <section className='flex'>
                <Cusin>Nabil</Cusin>
                <Cusin> Nabila</Cusin>
            </section>
            <button onClick={()=>setMoney(money +1000)}>Send Money</button>
        </div>
    );
};

export default Uncale;