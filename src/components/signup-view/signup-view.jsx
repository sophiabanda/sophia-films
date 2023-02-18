import { useState } from 'react';

export const SignUp = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    //input will be a string, so state starts as empty string

    const handleSubmit = (e) => {
        e.preventDefault();
        //prevents default behavior of page reloading every time a field is submitted. default form behavior it to reload the entire page with submit.

        const data = {
            Name: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch('https://sophia-films.herokuapp.com/users', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if(response.ok) {
                alert('Signup successful!');
                window.location.reload();
            } else {
                alert('Signup failed.')
            }
        })
    };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Birthday:
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};


