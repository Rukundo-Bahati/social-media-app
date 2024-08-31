import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import { DarkMode } from "@mui/icons-material";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authenticationContext";
// import { Switch, Route } from 'react-router-dom';
import LeftBar from "./components/leftbar/LeftBar";
import NavBar from "./components/navbar/NavBar";
import RightBar from "./components/rightbar/RightBar";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import './style.scss';
import './App.css';

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'} ${darkMode ? 'dark-mode-transition' : ''}`}>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({ children }) => {
    console.log("Current User:", currentUser);
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  }
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
