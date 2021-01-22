import React from 'react';
import {Card, Alert, Button,Container} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
function Rules() {
    let history = useHistory();

    function handleClick() {
        history.push("/play");
    }
    return (
        <>
         <Container fluid>
        <center>
        <Card className="rulesCard">
            <Card.Body>                
            <Alert variant="info">
            <Alert.Heading>Playing Hangman</Alert.Heading>
            <hr />
            <p>
            Hangman is an old school favorite, a word game where the goal is simply to find the missing word or words.</p>
            
            <p>You will be presented with a number of blank spaces representing the missing letters you need to find by guessing one letter at a time.</p>
            <p>Use the keyboard to guess a letter. If your chosen letter exists in the answer, then all places in the answer where that letter appears will be revealed.
            </p>

            <p>After you've revealed several letters, you may be able to guess what the answer is and fill in the remaining letters. 
            </p>

            <p>Be warned, every time you guess a letter wrong you loose a life and the hangman begins to appear, piece by piece.
            </p>

            <p>Solve the puzzle before the hangman dies. Remember to keep the theme in mind – it may help you solve the puzzle!
            </p>
            <hr />
            <Button variant="outline-info" className="float-right" onClick={handleClick}> Play <i className="pi pi-play"></i> </Button>
            <br/><br/></Alert>
            </Card.Body>
        </Card></center>
        </Container>
        </>
    )
}

export default Rules
