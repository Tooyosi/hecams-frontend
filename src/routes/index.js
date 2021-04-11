import { lazy } from 'react';

const Login = lazy(() => import("pages/Auth/Login/index"))
const Forgot = lazy(() => import("pages/Auth/Forgot/index"))
const Remember = lazy(() => import("pages/Auth/Remember/index"))
const Dashboard = lazy(() => import("pages/Dashboard/index"))
const LandingPage = lazy(() => import("pages/Landing/index"))

const landingRoutes = {
  path: "/",
  name: "Landing",
  component: LandingPage,
};


const authRoutes = {
  path: "/login",
  name: "Login",
  children: [
    {
      path: "/remember",
      name: "Remember",
      component: Remember
    },
    {
      path: "/forgot",
      name: "Forgot",
      component: Forgot
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
};

const dashboardRoutes = {
  path: "/dashboard",
  name: "Dashboard",
  items: [
    { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard', badge: '4', badgeClassName: 'p-badge-info' },
  ],
  component: Dashboard,
};

export const auth = [
  authRoutes
]


export const landing = [
  landingRoutes
]
export const dashboard = [
  dashboardRoutes
]


export default [
  dashboardRoutes,
]