import Navbar from "./Components/Navbar";
import LoginPage from "./Pages/Login";
import HomePage from "./Pages/Homepage";
import SignUpPage from "./Pages/Signup";

import Setting from "./Pages/Setting";
import ProfileUpdate from "./Pages/ProfilePic";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";

import { useEffect } from "react";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <>
      <Navbar />

      <Routes>
       
      <Route  path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />}/>
        
       <Route   path="/signup"   element={!authUser ? <SignUpPage /> : <Navigate to="/" />}/>
         
       <Route  path="/login"   element={!authUser ? <LoginPage /> : <Navigate to="/" />}/>

        <Route   path="/profile"  element={authUser ? <ProfileUpdate /> : <Navigate to="/login" />}/>
        
        <Route  path="/profile/update"   element={authUser ? <ProfileUpdate /> : <Navigate to="/login" />} />
       
         
      </Routes>

      <Toaster />
    </>
  );
};

export default App;
