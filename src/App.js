import Navbar from "./components/Navbar/Navbar";
// import Card from "./components/Card/Card" 
// import Home from "./components/homee/Home";
// import SignupPage from "./components/SignupPage/SignupPage";
import Slider from './components/Slider/Slider';

function App() {
  const cardContent = [
    'Rawand',
    'Rawand',
    'Rawand',

  ];
  return (
    <div className="App">
      
      <Navbar/>
      {/* <Card/> */}
      {/* <Home/> */}
      {/* <SignupPage/> */}
      <Slider cards={cardContent} />

    </div>
  );
}

export default App;


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
