// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

// const Login = () => {
//   const { login } = useAuth();
//   const { handleSubmit, register } = useForm();
//   const history = useHistory();

//   const onSubmit = async data => {
//     try {
//       await login(data);
//       history.push('/');
//     } catch (error) {
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input type="email" name="email" ref={register} />
//         <input type="password" name="password" ref={register} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();

  const onSubmit = async data => {
    try {
      const response = await axios.post(`https://react-tt-api.onrender.com/api/users/login`, data);
      const token = response.data.token; // Assuming the API returns a token
      localStorage.setItem('token', token); // Store the token in local storage
      history.push('/');
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={register({ required: true })}
        />
        {errors.email && <p>Email is required</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        {errors.password && <p>Password is required</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
