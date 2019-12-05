import React from 'react';
import { Card,  Button } from 'react-bootstrap';

const PortfolioContainer = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} style={{ height: '130px', width: '80%', margin: 'auto', padding: '10%' }}/>
            <Card.Body style={{ margin: 'auto' }}>
                <Button variant="primary" href={props.url} target="_blank">{props.name}</Button>
            </Card.Body>
        </Card>
    )
}

export default PortfolioContainer;