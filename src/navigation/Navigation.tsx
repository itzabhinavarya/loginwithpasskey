import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import Homepage from '../components/homepage/Homepage';
import Settings from '../components/settings/Settings';
import ProtectedRoute from '../authRoute/ProtectedRoute';
import PublicRoute from '../authRoute/PublicRoute';
import Pagenotfound from '../components/pagenotfound/pagenotfound';

const Navigation: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path="/setting" element={<Settings />} />
            </Route>
            <Route path="*" element={<Pagenotfound />} />
        </Routes>
    );
}

export default Navigation;
