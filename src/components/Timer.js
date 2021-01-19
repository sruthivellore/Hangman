import React,{useContext} from 'react'
import {Card, Alert, Button, OverlayTrigger,Popover} from 'react-bootstrap';
import {ScoreContext} from '../App';
import WrongLetters from './WrongLetters';

function Timer({wrongLetters}) {
    const scoreContext = useContext(ScoreContext);
    let temp = scoreContext.selectedWordDef
    return (
        <>
        {/* {console.log(scoreContext)} */}
        <Card className="timerCard">
        <Card.Header><center><strong>Timer : {scoreContext.time} Seconds</strong></center></Card.Header>
        <Card.Body className="timerCardBody" >
        <Alert variant="dark">
            <h5>Welcome 🙏🏻, {scoreContext.name}</h5>
            <hr />
            <p><strong>Theme : </strong></p><p>{scoreContext.name?scoreContext.theme:""}</p>
            {/* <p>All the Best 👍🏻</p> */}
            <center>
            <OverlayTrigger
            trigger="hover"
            key='bottom'
            placement='bottom'
            overlay={
                <Popover id='popover-positioned-bottom'>
               
                <Popover.Content>
                {  scoreContext.time<=14 ?`Hint will appear in ${15-scoreContext.time} seconds. ⏱️`:(scoreContext.selectedWordDef &&  (scoreContext.selectedWordDef).description)}
                </Popover.Content>
                </Popover>
            }
            >
                <Button variant="outline-info" > Hint <i className="pi pi-question-circle"></i> </Button>
            {/* <Button disabled={scoreContext.time<19} variant="outline-info" > Hint <i className="pi pi-question-circle"></i> </Button> */}
            </OverlayTrigger>
            
            </center><br/></Alert>
            {wrongLetters.length > 0 && 
            <Alert variant="dark">
            <h6>Wrong Letters</h6>
            <hr />
            <WrongLetters wrongLetters={wrongLetters} />
            </Alert>}
        </Card.Body>
        </Card>
            
        </>
    )
}

export default Timer
