import './App.scss';
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Form from './components/Form';
import FormSignup from './components/FormSignup';
import Login from './components/Login';
import FormSuccess from './components/FormSuccess';

function App() {
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Form isLoginSuccessful={isLoginSuccessful} />} />
      <Route path="/login" element={<Login onLoginSuccess={() => setIsLoginSuccessful(true)} />} />
      <Route path="/signup" element={<FormSignup />} />
      <Route path="/success" element={<FormSuccess />} />
    </Routes>
  );
}

export default App;





















// import './App.scss';
// import Form from './components/Form';
// import FormSignup from './components/FormSignup';
// import { Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import FormSuccess from './components/FormSuccess';

// function App({ users, }) {
//   return (
//         <Routes>
//         <Route path="/" element={<Form users={users} />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<FormSignup />} />
//         <Route path="/success" element={<FormSuccess />} />
//         </Routes>
//     );
// }

// export default App;