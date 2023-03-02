import { useEffect, useState } from 'react';

export const ProfileView = () => {

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token] = useState(storedToken ? storedToken : null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetch(`https://sophia-films.herokuapp.com/users`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      setUsername(res.Name)
    })
  }, [token])

  return (
    <>
      <img></img>
      <h1>{`Name: ${username}`}</h1>
      <h3>{`Birthday: ${user.birthday}`}</h3>
    </>
  )
}


