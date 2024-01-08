import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import UserCard from './UserCard';

const UsersList = ({users,loadUsers}) => {
  return (
    <div style={{display:'flex' , flexWrap:"wrap" , justifyContent:"center" }}>
        {loadUsers ? (
            <>
            <Spinner animation="border" variant="light" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            </>
            ) : ( 
                users.map((user)=><UserCard key={user.id} user={user} />)
        )}
    </div>
  );
};

export default UsersList;