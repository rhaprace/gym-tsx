import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import LogIn from "./components/Login/index.tsx";
import SignUp from "./components/signup/index.tsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import DashBoard from "./components/dashboard/index.tsx";
import AuthRoute from "./AuthRoute.tsx";
const firebaseConfig = {
  apiKey: "AIzaSyCm7qGQgD1lW74T1-TEV6uAPIYL_FrAtro",
  authDomain: "atletech.firebaseapp.com",
  projectId: "atletech",
  storageBucket: "atletech.firebasestorage.app",
  messagingSenderId: "125287754441",
  appId: "1:125287754441:web:bbb56d6b06089e45ccbb18"
};
const app = initializeApp(firebaseConfig);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/dashboard" element={<AuthRoute><DashBoard/></AuthRoute>} />
          <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  </StrictMode>
);
