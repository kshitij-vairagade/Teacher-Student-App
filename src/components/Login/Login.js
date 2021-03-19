// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import "./Login.css";

// async function loginUser(credentials){
//     return fetch("http://localhost:8080/login", {
//         method: "POST",
//         headers:{
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(credentials)
//     })
//     .then(data => data.json())
// }

// export default function Login({ setToken }) {
//   const [userID, setUserID] = useState();
//   const [password, setPassword] = useState();

//     const handleSubmit = async e => {
//         e.preventDefault();
//         const token = await loginUser({
//             userID,
//             password
//         });
//         setToken(token);
//     }

//   return (
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>User ID</p>
//           <input type="text" onChange={(e) => setUserID(e.target.value)} />
//         </label>
//         <label>
//           <p>Password</p>
//           <input
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };


import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}