import React from 'react'
import './Moves.css'

import tas from "../../img/tas.png"
import kagit from "../../img/kagit.png"
import makas from "../../img/makas.png"

function Moves() {
    return (
        <div className='moves-main'>
            <div className='box' onClick={() => console.log("taş")}>
                <img className='obj img' src={tas} alt="" />
            </div>
            <div className='box' onClick={() => console.log("kağıt")}>
                <img className='obj img' src={kagit} alt="" />
            </div>
            <div className='box' onClick={() => console.log("makas")}>
                <img className='obj img' src={makas} alt="" />
            </div>
        </div>
    )
}

export default Moves