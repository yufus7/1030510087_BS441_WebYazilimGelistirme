import React from 'react'
import './MainScreen.css'

import { Link } from "react-router-dom";

function MainScreen() {
    return (
        <div className="main-screen">
            <div className="logo">
                <span style={{ fontSize: '5rem', color: 'white' }}>taşkağıtmakas</span>
            </div>
            <div className="m-buttons">
                <Link to="/modeone">
                    <button className="mb-start">
                        Mode One
                    </button>
                </Link>

                <Link to="/modetwo">
                    <button className="mb-change-g-mode">Mode Two</button>
                </Link>
            </div>
        </div>
    )
}

export default MainScreen