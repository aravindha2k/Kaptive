// // src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import MainLayout from './layouts/MainLayout';
// import Charts from './pages/Charts';
// import Tables from './pages/Tables';
// import Reports from './pages/Reports';
// import Forecast from './pages/Forecast';
// import Login from './components/Login';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         {isAuthenticated ? (
//           <Route element={<MainLayout onLogout={handleLogout} />}>
//             <Route path="/" element={<Navigate to="/charts" />} />
//             <Route path="charts" element={<Charts />} />
//             <Route path="tables" element={<Tables />} />
//             <Route path="reports" element={<Reports />} />
//             <Route path="forecast" element={<Forecast />} />
//           </Route>
//         ) : (
//           <Route path="*" element={<Navigate to="/login" />} />
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react'
import DashBoard from '../Pages/DashBoard';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
// import Charts from './Charts';
import Tables from './Tables';
import Reports from './Reports';
// import Forecast from './Forecast';
import Login from '../Pages/Login';
// import CustomBarChart from './Forecast';
import Charts from './Charts';

const AllRoutes = ({isAuth, setIsAuth}) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuth(true);
        console.log(isAuth);
        navigate("/")
    };
    
    const handleLogout = () => {
        setIsAuth(false);
    };

  return (
    <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {isAuth?
        (
            <Route element={<DashBoard onLogout={handleLogout} />}>
                <Route path="/" element={<Navigate to="/charts" />} />
                <Route path="charts" element={<Charts />} />
                <Route path="tables" element={<Charts />} />
                <Route path="reports" element={<Charts />} />
                <Route path="forecast" element={<Charts />} />
            </Route>

        ):
        (
            <Route path="*" element={<Navigate to="/login" />} />
        )}

    </Routes>
  )
}

export default AllRoutes