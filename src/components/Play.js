import React, { useState, useEffect,useReducer } from 'react';
import Timer from './Timer';
import Figure from './Figure';
import Word from './Word';
import Popup from './Popup';
import Notification from './Notification';
import AlphabetList from './AlphabetList';
import {Card} from 'react-bootstrap';
import StartPopup from './StartPopup';

function Play({state,theme, correctLetters, wrongLetters, selectedWord, setPlayable, playAgain, showNotification}) {
    
    console.log(theme)
    return (
        <>
        <StartPopup></StartPopup>
        <div className="setAllCards">
        <Timer wrongLetters={wrongLetters}/>
        <center>
        <Card className="gameCard">
        <br/><center>
        <h2>Hangman</h2><br></br>
        <Card.Subtitle className="text-muted">Find the hidden word - Enter a letter</Card.Subtitle></center>
        
        <div className="game-container">
            <Figure wrongLetters={wrongLetters} />
            {/* <WrongLetters wrongLetters={wrongLetters} /> */}
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        </div><br></br>
        
        <br/>
        </Card></center>
        <AlphabetList state={state}></AlphabetList>

        <Notification showNotification={showNotification} />
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
        </div></>
    )
}

export default Play
