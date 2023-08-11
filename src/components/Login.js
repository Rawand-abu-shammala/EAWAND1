import {React , useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

export default function Login() {
    const [user , setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const location = useLocation();
    const redicrectPath = location.state?.path || "/";


    const handleLogin = ()=>{
        auth.login(user)
        navigate(redicrectPath, {replace: true});
    }

  return (
    <div>
        <label>
        Username : <input type='text' onChange={(e)=> setUser(e.target.value)}/>
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './auth';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const auth = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     auth.login(email);
//     navigate('/');
//   };

//   const handleSignUp = () => {
//     // Perform validation checks here before signing up
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     // Perform signup logic here, for example:
//     auth.signup(email, password);
//     navigate('/');
//   };

//   return (
//     <div>
//       <label>
//         Email: <input type="email" onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Password: <input type="password" onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Confirm Password:{' '}
//         <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
//       </label>
//       <br />
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={handleSignUp}>Sign Up</button>
//     </div>
//   );
// }




