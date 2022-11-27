import React from 'react'
import './MainScreen.css'

function MainScreen() {
    return (
        <div className="main-screen">
            <div className="logo">
                <span style={{ fontSize: '5rem', color: 'white' }}>taşkağıtmakas</span>
            </div>
            <div className="m-buttons">
                <button className="mb-start">start</button>
                <button className="mb-change-g-mode">chaneg game mode</button>
            </div>
        </div>
    )
}

export default MainScreen