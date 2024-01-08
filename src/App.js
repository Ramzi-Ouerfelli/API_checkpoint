import UsersList from "./Components/UsersList";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users , setUser] = useState([]);
  const [loadUsers , setLoadUsers] = useState(true);
  const getUsers = async()=>{
  const axiosResponse = await axios.get('https://jsonplaceholder.typicode.com/users')
    setLoadUsers(false)
    setUser(axiosResponse.data)
  };
  useEffect(()=>{
    getUsers()
  },[]);
  return (
    <div style={{backgroundColor:"black"}}>
      <UsersList users={users} loadUsers={loadUsers} />
    </div>
  );
};

export default App;
