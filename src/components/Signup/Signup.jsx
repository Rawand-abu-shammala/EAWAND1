// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// const Signup = () => {
//   const { handleSubmit, register, errors, watch } = useForm();
//   const history = useHistory();

//   const onSubmit = async data => {
//     try {
//       await axios.post(`${https://react-tt-api.onrender.com/api}/users/signup`, data);
//       history.push('/auth/login');
//     } catch (error) {
//       // Handle signup error
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           ref={register({ required: true })}
//         />
//         {errors.name && <p>Name is required</p>}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           ref={register({ required: true })}
//         />
//         {errors.email && <p>Email is required</p>}

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           ref={register({ required: true })}
//         />
//         {errors.password && <p>Password is required</p>}

//         <input
//           type="password"
//           name="repeatPassword"
//           placeholder="Repeat Password"
//           ref={register({
//             required: true,
//             validate: value => value === watch('password'),
//           })}
//         />
//         {errors.repeatPassword && <p>Passwords must match</p>}

//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;





import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const { handleSubmit, register, errors, watch } = useForm();
  const history = useHistory();

  const onSubmit = async data => {
    try {
      await axios.post('https://react-tt-api.onrender.com/api/users/signup', data);
      history.push('/auth/login');
    } catch (error) {
      // Handle signup error
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Input fields and error messages */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
