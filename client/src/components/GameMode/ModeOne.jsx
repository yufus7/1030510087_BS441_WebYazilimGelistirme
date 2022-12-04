import React from 'react'
import './ModeOne.css'
import Moves from '../Moves/Moves'

function ModeOne() {
    return (
        <div className='mode-one'>
            <div>scorlar</div>
            <div>oyun ekranı</div>
            <div className='one-moves'>
                <Moves />
            </div>

        </div>
    )
}

export default ModeOne