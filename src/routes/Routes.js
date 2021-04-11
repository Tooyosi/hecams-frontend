import React, { lazy } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import AuthLayout from "layout/Auth";
import {
    auth as AuthRoutes,
    dashboard as DashboardRoutes,
    landing as LandingRoutes
} from ".";
import ScrollToTop from "components/common/ScrollToTop";
import DashboardLayout from "layout/Dashboard";
import LandingLayout from "layout/Landing";




const childRoutes = (Layout, routes) =>
    routes.map(({ path, component: Component, children }, index) =>
        children ? (
            // Route item with children
            children.map(({ path, component: Component, }, index) => (
                <Route
                    key={index}
                    path={path}
                    render={props => (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    )}
                />
            ))
        ) : (
                <Route
                    key={index}
                    path={path}
                    render={props => (
                        <Layout>
                            <Component  {...props} />
                        </Layout>
                    )}
                />)
    );

const Routes = () => (
    <Router>
        <ScrollToTop>
            <Switch>
                {childRoutes(DashboardLayout, DashboardRoutes)}
                {childRoutes(AuthLayout, AuthRoutes)}
                {childRoutes(LandingLayout, LandingRoutes)}
            </Switch>
        </ScrollToTop>
    </Router>
);

export default Routes;