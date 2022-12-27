import React from 'react'
import './Navbar.css'

import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <span style={{ fontSize: '2.3rem', color: 'white' }}>taşkağıtmakas</span>
            </Link>
        </div>
    )
}

export default Navbar