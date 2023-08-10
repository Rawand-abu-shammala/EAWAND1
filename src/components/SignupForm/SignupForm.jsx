import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; 
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Repeat Password is required'),
});

function SignupForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission, e.g., send data to the server
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="username" ref={register} placeholder="Username" />
      {errors.username && <span>{errors.username.message}</span>}
      
      <input type="email" name="email" ref={register} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input type="password" name="password" ref={register} placeholder="Password" />
      {errors.password && <span>{errors.password.message}</span>}
      
      <input type="password" name="repeatPassword" ref={register} placeholder="Repeat Password" />
      {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
      
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
