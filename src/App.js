// import Navbar from "./components/Navbar/Navbar";
// import Card from "./components/Card/Card" 
// import Home from "./components/homee/Home";
// import SignupPage from "./components/SignupPage/SignupPage";
// import Slider from './components/Slider/Slider';

// function App() {
//   const cardContent = [
//     'Rawand',
//     'Rawand',
//     'Rawand',

//   ];
//   return (
//     <div className="App">
      
//       <Navbar/>
//       <Card/>
//       <Home/>
//       <SignupPage/>
//       <Slider cards={cardContent} />

//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Slider from './components/Slider/Slider';

// const App = () => {
  // const cardContent = [
  //   'محتوى البطاقة الأولى',
  //   'محتوى البطاقة الثانية',
  //   'محتوى البطاقة الثالثة'
  // ];

//   return (
//     <div className="app">
//       <h1>سلايدر بدون مكتبات</h1>
      // <Slider cards={cardContent} />
//     </div>
//   );
// };

// export default App;







// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { ThemeProvider } from './components/hooks/useThemeContext';
// import { AuthProvider } from './components/hooks/useAuth';
// import { PATHS } from './components/router/constants';
// import Home from './components/Home/Home';
// import Login from './components/Login/Login';
// import Signup from './components/Signup/Signup';
// import Profile from './components/Profile/Profile';
// import Admin from './components/Admin/Admin';
// import Sidebar from './components/Sidebar/Sidebar';
// import Header from './components/Header/Header';


import React from "react";
import { AuthProvider } from "./components/auth";
import { Route, Router, Routes } from "react-router-dom"; 

import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";
// import { NextPage } from "./components/NextPage";
import { NotMatch } from "./components/NotMatch";
// import { Products } from "./components/Products";
// import { FeaturedProducts } from "./components/FeaturedProducts";
// import { NewProducts } from "./components/NewProducts";
// import { Users } from "./components/Users";
// import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import { Profile } from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <NavigationBar />
      <Router>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
            </React.Suspense>
          }
        />
         {/* <Route path="nextPage" element={<NextPage />} /> 
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="features" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route> 
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} /> */}
          <Route path="admin" element={<Admin />} />
        {/* </Route> */}
        
        <Route path="profile" element={
        <Profile />} />

        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotMatch />} />
      </Router>
    </AuthProvider>
  );
}

export default App;












// const App = () => {
//   return (
//     <ThemeProvider>
//       <AuthProvider>
//         <Router>
//           <div>
//             <Sidebar />
//             <div>
//               <Header />
//               <Switch>
//                 <Route path={PATHS.HOME} exact component={Home} />
//                 <Route path={PATHS.LOGIN} exact component={Login} />
//                 <Route path={PATHS.SIGNUP} exact component={Signup} />
//                 <Route path={PATHS.PROFILE} exact component={Profile} />
//                 <Route path={PATHS.ADMIN.ROOT} exact component={Admin} />
//                 {/* Add a 404 Not Found route */}
//               </Switch>
//             </div>
//           </div>
//         </Router>
//       </AuthProvider>
//     </ThemeProvider>
//   );
// };

// export default App;
