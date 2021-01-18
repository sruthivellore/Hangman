import React, {useState, useContext} from 'react';
import CountUp from 'react-countup';
import {ScoreContext} from '../App';

function ScoreCardCounter() {
    const scoreContext = useContext(ScoreContext);

    const [time, setTime]=useState(0);

    function timer(){
        setTime(time+1);
    }
    function startTimer(){
        let interval = setInterval(timer, 1000)
    };
    return (
        <><p>Your Current Score :   <span className="setScoreFont"><strong><CountUp start={scoreContext.pscore} end={scoreContext.score} duration={1}></CountUp>         
            </strong></span>
            </p>   
        </>
    )
}

export default ScoreCardCounter
