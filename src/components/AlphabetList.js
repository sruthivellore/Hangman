import React,{useContext, useRef, useEffect} from 'react';
import {Card, Alert} from 'react-bootstrap';
import 'primereact/resources/primereact.min.css';
import { Button } from 'primereact/button';
import ScoreCardCounter from './ScoreCardCounter';
import {ScoreContext} from '../App';

function AlphabetList(props) {


    // This is simply an example that demonstrates
    // how you can dispatch an event on the element.

    const eventAlphabet = (label,index) => {
        console.log(label)
    
        console.log(index+65)
          var newEvent=new KeyboardEvent('keydown', {
          key: label,
          keyCode: 65+index,
          bubbles: true,
          charCode: 0,
        });
        console.log(newEvent)
        document.dispatchEvent(newEvent);
      
    }
    
   

    const scoreContext = useContext(ScoreContext);
    var state = props.state;
    function generateButton(value,index){
        var label = String.fromCharCode(65+index);
        var classValue = value ?"alphButEnable":"alphButDisable"
        return (<><Button label={label}  onClick={()=>eventAlphabet(label,index)} className={classValue} /></>)
    }
    const buttonList=state.map((value,index)=>{return(generateButton(value,index))})
    return (
        <div>
            <div className="alphabetList">
                <Card
                    bg = "light"
                    key="1"
                    text="dark"
                    style={{width:'15.5rem'}}
                    >
                        <Card.Header className="alphaCard"><ScoreCardCounter></ScoreCardCounter></Card.Header>
                        <Card.Body className="alphaCard1">
                        <Alert variant="dark"><center>
                            Alphabet List
                            <hr />                      
                                {buttonList}</center>
                         </Alert>   
                        </Card.Body>
                    </Card>
            </div>
            
        </div>
    )
}

export default AlphabetList
