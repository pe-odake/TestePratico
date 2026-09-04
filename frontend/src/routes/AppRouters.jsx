import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import { getToken } from '../service/auth.js';

function RotaToken({ children }) {
    const token = getToken();
    if (!token) {
        return <Navigate to="/" />;
    }
    return children;
}

function AppRouters() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={
                <RotaToken>
                    <Home />
                </RotaToken>
            } />
        </Routes>
    );
}
export default AppRouters;