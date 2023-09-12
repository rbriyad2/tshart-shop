import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncale from "../Uncale/Uncale";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const MoneyContext = createContext(0)
export const RingContext = createContext("chain");
const Grandpa = () => {
  const ring = "dimond";
  const [money, setMoney]= useState(0)
  return (
    <div className="grandpa">
      <h2>Grand father</h2>
      <MoneyContext.Provider value={[money, setMoney]}>
      <RingContext.Provider value="road ring">
      <section className="flex">
          <Father ring={ring}></Father>
          <Uncale></Uncale>
          <Aunty ring={ring}></Aunty>
        </section>
      </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
