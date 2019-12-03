import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Skills.css';

const Skills = () => {
    return (
        <Container >
            <Row>
                <Col>
                    <ul>
                        <li>ReactJS</li>
                        <li>ES6 JavaScript</li>
                        <li>DOM manipulation</li>
                        <li>jQuery</li>
                        <li>AJAX</li>
                        <li>JSON</li>
                        <li>NodeJS</li>
                        <li>npm</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Unified Modeling Language (UML)</li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Bootstrap4</li>
                        <li>WordPress</li>
                        <li>Shopify</li>
                        <li>SEO</li>
                        <li>Object Orientated Programming</li>
                        <li>HTTP Basics</li>
                        <li>Ubuntu Linux</li>
                        <li>Python</li>
                        <li>AWS Products (S3, Rekognition, Lambda)</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;