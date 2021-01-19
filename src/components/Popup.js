import React, { useEffect, useContext } from 'react';
import { checkWin } from '../helpers/helpers';
import {ScoreContext} from '../App';
import {Modal, Alert, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  const scoreContext = useContext(ScoreContext);
  let temp = scoreContext.selectedWordDef
  let history = useHistory();

  function handleRules() {
    history.push("/");
}

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😃';
    finalMessageRevealWord = `You guessed the word : ${temp.word}`;
    playable = false;
    scoreContext.setNum(0);
  } else if( scoreContext.time >= 3000 ) {
    finalMessage = "Time's up you lost ! ⏰";
    finalMessageRevealWord = `The word was : ${temp.word}`;
    playable = false;
    scoreContext.setNum(0);
  }
  else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `The word was : ${temp.word}`;
    playable = false;
    scoreContext.setNum(0);
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    // <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
    //   <div className="popup">
    //     <h2>{finalMessage}</h2>
    //     <h3>{finalMessageRevealWord}</h3>
    //     <button onClick={playAgain}>Play Again</button>
    //   </div>
    // </div>
    <Modal
    show={finalMessage !== ''}
    backdrop="static"
    keyboard={false}
    aria-labelledby="contained-modal-title-vcenter"
      centered
  >
    <Modal.Header>
       
      <Modal.Title>{finalMessage}</Modal.Title>
    </Modal.Header>
    <Modal.Body><Alert variant="info">
        {finalMessageRevealWord}</Alert>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="outline-dark" onClick={handleRules}>
            Close
        </Button>
      <Button variant="outline-info" onClick={playAgain}> Play Again <i className="pi pi-play"></i> </Button>
    </Modal.Footer>
  </Modal>
    // <Modal
    //     show={finalMessage !== ''}
    //     backdrop="static"
    //     keyboard={false}
    //   >
    //     <Modal.Header>
    //       <Modal.Title>{finalMessage}</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //         {finalMessageRevealWord}
    //     </Modal.Body>
    //     <Modal.Footer>
    //     <Button variant="outline-dark" onClick={handleRules}>
    //             Close
    //         </Button>
    //       <Button variant="outline-info" onClick={playAgain}> Play Again <i className="pi pi-play"></i> </Button>
    //     </Modal.Footer>
    //   </Modal>
  )
}

export default Popup
