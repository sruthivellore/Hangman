import React,{useEffect, useState, useContext} from 'react'
import {Alert, Button, Modal, Form} from 'react-bootstrap';            
import { useHistory } from "react-router-dom";
import {ScoreContext} from '../App';

function StartPopup() {
    const scoreContext = useContext(ScoreContext);
    const [show, setShow] = useState(scoreContext.name==null);
    const [uname, setUname] = useState(null);
    const [utheme, setUtheme] = useState("Technology");
    let history = useHistory();

    function handleRules() {
        history.push("/");
    }

    const handleClose = () => {
        if(uname!=null && uname != ''){
        scoreContext.setName(uname)
        scoreContext.setTheme(utheme)
        setShow(false);}
    }
    return (
        <div>
        {/* <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
        </Button> */}
        <Modal
            show={show}
            backdrop="static"
            keyboard={false}>
            <Modal.Header>
            <Modal.Title>Welcome to Hangman</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Alert variant="info">
            
            <Form>
                <Form.Group controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Enter your Name" onChange={e=>setUname(e.target.value)}/>
                    {/* <input type="text" size="sm" className="form-control" placeholder="Enter your Name"  /> */}
                </Form.Group>

                <Form.Group controlId="Theme">
                <Form.Label>Theme</Form.Label>
                <Form.Control as="select" defaultValue="Choose a Theme" size="sm" onChange={e=>setUtheme(e.target.value)}>
                    <option value="Technology">Choose a Theme</option>
                    <option value="Technology">Technology/Programming languages</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Famous Personalities">Famous Personalities</option>
                </Form.Control>
                </Form.Group>
                </Form>
                
            </Alert>   
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-dark" onClick={handleRules}>
                Close
            </Button>
            <Button variant="outline-info" onClick={handleClose}> Play </Button>
            </Modal.Footer>
        </Modal>
               
        </div>
    )
}

export default StartPopup
