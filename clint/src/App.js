import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';  // Importing the CSS file

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/Users')
      .then(res => {
        setUsers(res.data);
      });
  }, [users]);

  const createUser = () => {
    Axios.post('http://localhost:3001/createUser', {
      name: name,
      age: age,
      email: email,
    }).then(res => {
      console.log(res.data);
    });
  };

  return (
    <>
      {users.map(user => {
        return (
          <div className='card' key={user.id}>
            <ul>
              <li>Name: {user.name}</li>
              <li>Age: {user.age}</li>
              <li>Email: {user.email}</li>
            </ul>
          </div>
        );
      })}

      <div>
        <input type='text' placeholder='Name' onChange={e => setName(e.target.value)} />
        <input type='text' placeholder='Age' onChange={e => setAge(e.target.value)} />
        <input type='text' placeholder='Email' onChange={e => setEmail(e.target.value)} />
        <button onClick={createUser}>Create User</button>
      </div>
    </>
  );
}
