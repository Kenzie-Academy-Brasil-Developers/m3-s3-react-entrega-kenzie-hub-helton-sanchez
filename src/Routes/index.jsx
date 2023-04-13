import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import Register from "../pages/Register/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/home" element={<ProtectedRoutes />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
