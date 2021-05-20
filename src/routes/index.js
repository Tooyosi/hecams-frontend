import { lazy } from 'react';

const Login = lazy(() => import("pages/Auth/Login/index"))
const Forgot = lazy(() => import("pages/Auth/Forgot/index"))
const Remember = lazy(() => import("pages/Auth/Remember/index"))
const Dashboard = lazy(() => import("pages/Dashboard/index"))
const LandingPage = lazy(() => import("pages/homePage/Index"))
const ServicesPage = lazy(() => import("pages/homePage/Services"))
const WhyUsPage = lazy(() => import("pages/homePage/WhyUs"))
const AboutUsPage = lazy(() => import("pages/homePage/AboutUs"))
const MissionPage = lazy(() => import("pages/homePage/Mission"))
const ContactPage = lazy(() => import("pages/homePage/ContactUs"))
const OnboardPage = lazy(() => import("pages/Onboard/index"))
const ApplicationPage = lazy(() => import("pages/Application/index"))

const landingRoutes = {
  path: "/",
  name: "Landing",
  children: [
    {
      path: "/services",
      name: "Services",
      component: ServicesPage
    },
    {
      path: "/whyus",
      name: "Why Us",
      component: WhyUsPage
    },
    {
      path: "/mission",
      name: "Our Mission",
      component: MissionPage
    },
    {
      path: "/about",
      name: "About Us",
      component: AboutUsPage
    },
    {
      path: "/contact",
      name: "Contact Us",
      component: ContactPage
    },
    {
      path: "/",
      name: "Landing",
      component: LandingPage
    }
  ]
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


const onboardRoutes = {
  path: "/onboard",
  name: "Onboard",
  items: [
    { label: 'Onboard', icon: 'pi pi-fw pi-user-edit', to: '/onboard'},
  ],
  component: OnboardPage,
};


const applicationRoutes = {
  path: "/apply",
  name: "Job Application",
  component: ApplicationPage,
};


export const auth = [
  authRoutes
]


export const landing = [
  landingRoutes
]
export const dashboard = [
  dashboardRoutes,
  onboardRoutes
]

export const application =[
  applicationRoutes
]


export default [
  dashboardRoutes,
  onboardRoutes
]