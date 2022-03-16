
import React from 'react';
import { Button,Col,Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Teste() {
    return (
        <>
            <Row className="mx-0">
                <Button as={Col} variant="primary">Button #1</Button>
                <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
                <Button as={Col} variant="success">Button #3</Button>
            </Row>
        </>
    )
};

export default Teste;