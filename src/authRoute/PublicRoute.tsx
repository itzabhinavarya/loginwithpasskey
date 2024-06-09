import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const PublicRoute: React.FC = () => {
    const { user, token } = useUser();

    if (user && token) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default PublicRoute;
