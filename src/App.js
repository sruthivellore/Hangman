import React, { useState, useEffect,useReducer } from 'react';
import Rules from './components/Rules';
import Play from './components/Play';
import { showNotification as show, checkWin } from './helpers/helpers';
import {Nav, Navbar} from 'react-bootstrap'


import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import myData from './QuizWords.json';

export const ScoreContext = React.createContext();

let words= myData.Technology;
let selectedWordDef = words[Math.floor(Math.random() * words.length)];
let selectedWord = selectedWordDef.word
selectedWord = selectedWord.toLowerCase()

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [name, setName] = useState(null);
  const [theme, setTheme] = useState("Technology");
  const [wordSel,setWordSel]=useState(false);
  const [resetTimer,setResetTimer]=useState(true);
  const [time,setTime] = useState(0);
  var doStart=0;
  const [nstart, setNstart]=useState(false);
  const [num, setNum]=useState(1);

    useEffect(()=>{
    if(theme === "Social Media"){
      words = myData.social
      // console.log(words)
      selectedWordDef = words[Math.floor(Math.random() * words.length)];
      selectedWord = selectedWordDef.word;
      selectedWord = selectedWord.toLowerCase();
      setWordSel(true)
    }else if(theme === "Famous Personalities"){
      words = myData.celeb
      // console.log(words)
      selectedWordDef = words[Math.floor(Math.random() * words.length)];
      selectedWord = selectedWordDef.word;
      selectedWord = selectedWord.toLowerCase();
      setWordSel(true)
    }
    if (selectedWord.indexOf(' ') !== -1) {
      setCorrectLetters([" "]);
    } 
  },[theme])



  useEffect(()=> {
    if(nstart){
      
      const timer = time < 10000 && resetTimer && setInterval(() => setTime(time+num), 1000);
      // console.log(timer);
      // console.log(num);
      return() => {
        // console.log("Calling return..");
        clearInterval(timer)
        setResetTimer(true)
      };
    }
  },[time,resetTimer,nstart]);

  var initAlphabetState=[]
  for(var i =0;i<26;i++){
    initAlphabetState.push(true)
  }
  const [alphabetState, setAlphabetState]=useState(initAlphabetState);

  function updateAlphabet(value){
    var newKeyCode = value-65;
    var newState = alphabetState;
    newState[newKeyCode]=false;
    setAlphabetState(newState);
  }

  useEffect(() => {
    if(name == null)
      return
    setNstart(true);
    const handleKeydown = event => {
      console.log(event)
      const { key, keyCode } = event;
      console.log(key,keyCode)
      if (playable && keyCode >= 65 && keyCode <= 90) {
        updateAlphabet(keyCode);
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
            dispatch('increment');
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
            dispatch('decrement');
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable, alphabetState,name,wordSel]);

  const eventAlphabet = () => {
    console.log("inv")
      var newEvent=new KeyboardEvent('keydown', {
      key: "a",
      keyCode: 65,
      bubbles: true,
      charCode: 0,
    });
    console.log(newEvent)
    document.dispatchEvent(newEvent);
  
}


  function playAgain() {
    

    // Empty Arrays
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    setAlphabetState(initAlphabetState);
    setResetTimer(false);
    setTime(0);
    setNstart(false);
    setNum(1);
    // const random = Math.floor(Math.random() * words.length);
    // selectedWord = words[random];
    selectedWordDef = words[Math.floor(Math.random() * words.length)];
    selectedWord = selectedWordDef.word
    selectedWord = selectedWord.toLowerCase() 
    if (selectedWord.indexOf(' ') !== -1) {
      setCorrectLetters([" "]);
    } 
    
  }

  const [pscore,setPscore] = useState(0);
  const scoreInitial=0;
  const scoreReducer=(state,action)=>{
    setPscore(state)
      if(action==='increment')
        return(state+5);
      if(action==='decrement')
        return(state-3);
      else
        return(scoreInitial);
  }

  const [score,dispatch] = useReducer(scoreReducer,scoreInitial)

  return (
    <>
      <ScoreContext.Provider value={{eventAlphabet:eventAlphabet,selectedWordDef:selectedWordDef,score:score,pscore:pscore,time:time,setNum:setNum,name:name,setName:setName,theme:theme,setTheme:setTheme}}>
      
      <HashRouter basename="/">
      
      <Navbar className='NavBar' bg="dark" expand="sm" variant="dark">
        <Navbar.Brand >Hangman Game</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="linkData">
            {/* <Nav.Link >  */}
              <i className="pi pi-home"> Rules</i>
              {/* </Nav.Link> */}
            </Link>
            <Link to="/play" className="linkData">
            {/* <Nav.Link > */}
              Play
              {/* </Nav.Link> */}
            </Link>
            {/* <Nav.Link href="#/"> <i className="pi pi-home"> Rules</i></Nav.Link>
            <Nav.Link href="#/play">Play</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
        <Switch>

        <Route path="/play">
          <Play state={alphabetState} theme={theme}  wrongLetters={wrongLetters} selectedWord={selectedWord} correctLetters={correctLetters} setPlayable={setPlayable} playAgain={playAgain} showNotification={showNotification}/>
          </Route>
          <Route path="/">
            <Rules />
          </Route>
        </Switch>
    </HashRouter>
    </ScoreContext.Provider>
    </>
  );
}

export default App;
