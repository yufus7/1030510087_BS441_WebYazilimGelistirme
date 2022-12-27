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
                <Link to="/mode-one">
                    <button className="mb-one">
                        Mode One
                    </button>
                </Link>

                <Link to="/mode-two">
                    <button className="mb-two">Mode Two</button>
                </Link>
            </div>
        </div>
    )
}

export default MainScreen