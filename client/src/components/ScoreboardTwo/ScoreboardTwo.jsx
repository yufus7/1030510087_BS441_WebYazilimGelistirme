import React from 'react'
import './ScoreboardTwo.css'

import ProgressBar from 'react-bootstrap/ProgressBar';

function ScoreboardTwo() {
    return (
        <ProgressBar now={60} />
    )
}

export default ScoreboardTwo