// import { Navigate, Outlet } from 'react-router-dom';
// import LoginPage from '../Login/Login';
// import SignupPage from '../Signup/Signup';
// import HomePage from '../Home/Home';
// import ProfilePage from '../Profile/Profile';
// import AdminPage from '../Admin/Admin';

// import { PATHS } from './router';
// import AdminGuard from '../components/Guards/AdminGuard';
// import GuestGuard from '../components/Guards/GuestGuard';
// import UserGuard from '../homee/Home';

// const routes = (role) => [
  // Guest pages
//   {
//     path: PATHS.AUTH.LOGIN,
//     element: (
//       <GuestGuard role={role}>
//         <LoginPage />
//       </GuestGuard>
//     ),
//   },
//   {
//     path: PATHS.AUTH.SIGNUP,
//     element: (
//       <GuestGuard role={role}>
//         <SignupPage />
//       </GuestGuard>
//     ),
//   },
  
//   // User pages
//   {
//     path: PATHS.HOME,
//     element: (
//       <UserGuard role={role}>
//         <HomePage />
//       </UserGuard>
//     ),
//   },
//   {
//     path: PATHS.PROFILE,
//     element: (
//       <UserGuard role={role}>
//         <ProfilePage />
//       </UserGuard>
//     ),
//   },
  
//   // Admin pages
//   {
//     path: PATHS.ADMIN.ROOT,
//     element: (
//       <AdminGuard role={role}>
//         <AdminPage />
//       </AdminGuard>
//     ),
//   },
  
//   {
//     path: PATHS.ERRORS.NOT_FOUND,
//     element: <h1>Page not found 404</h1>,
//   },
//   {
//     path: '*',
//     element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
//   },
// ];

// export default routes;






// paths.js

// export const PATHS = {
//     HOME: '/',
//     AUTH: {
//       LOGIN: '/auth/login',
//       SIGNUP: '/auth/signup',
//     },
//     PROFILE: '/profile',
//     ADMIN: {
//       ROOT: '/admin',
//       USERS: '/admin/users',
//     },
//   };
  
  // export default PATHS;
  