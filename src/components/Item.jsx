import React from 'react'
import { Card } from 'react-bootstrap';


const Item = ({user}) => {

    const {name, username, email} = user;

        return (
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Usuarios</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
                <Card.Text>{username}</Card.Text>
                <Card.Text>{email}</Card.Text>
            </Card.Body>
            </Card>
        )
}

export default Item
