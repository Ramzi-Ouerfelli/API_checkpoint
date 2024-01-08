import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const UserCard = ({user}) => {
  return (
    <Card style={{ width: '15rem' , margin:"10px"  }}>
      <Card.Img variant="top" src="https://www.odishatreasury.gov.in/echallan/resources/images/user-generic.png" />
      <Card.Body>
        <Card.Title>{user.name + " " + user.username}</Card.Title>
        <Card.Text>
        <ListGroup variant="flush">
        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
        <ListGroup.Item>Street: {user.address.street}</ListGroup.Item>
        <ListGroup.Item>City: {user.address.city}</ListGroup.Item>
      </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard