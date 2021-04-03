import React, { lazy, Suspense } from 'react';

const Login = lazy(()=> import("../pages/Auth/Login/index"))
const Dashboard = lazy(()=> import("../pages/Dashboard/index"))

const authRoutes = {
    path: "/",
    name: "Login",
    component: Login,
  };

  const dashboardRoutes = {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  };

export const auth = [
    authRoutes
]

export const dashboard = [
  dashboardRoutes
]