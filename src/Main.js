import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

class Main extends React.Component{
  render(){
    return(
    <>
        <Form>
            <Form.Group>
                <Form.Label>Enter a city location for more information</Form.Label>
                <Form.Control type="text" placeholder="static search... Will only display data for Seattle"/>
            </Form.Group>
        </Form> 
    </>
    )
  }
}

export default Main;