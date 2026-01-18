"use client";

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireRole?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAuth = true,
  requireRole 
}) => {
  const { isAuthenticated, isAdmin } = useAuth();

  // If route doesn't require authentication, allow access
  if (!requireAuth) {
    return <>{children}</>;
  }

  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If specific role is required and user doesn't have it, redirect to unauthorized
  if (requireRole === 'admin' && !isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;