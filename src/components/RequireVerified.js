import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../services/store/useUserStore';

export default function RequireVerified() {
    const { id, isVerified } = useUserStore(s => s.user);
    
    if (id && !isVerified) {
        return <Navigate to="/verify-email" replace />;
    }

    return <Outlet />;
  }