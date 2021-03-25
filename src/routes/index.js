import React, { lazy, Suspense } from 'react';

const Login = lazy(()=> import("../pages/Auth/Login/index"))

const authRoutes = {
    path: "/",
    name: "Login",
    component: Login,
  };

export const auth = [
    authRoutes
]