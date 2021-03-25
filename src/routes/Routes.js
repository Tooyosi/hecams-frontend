import React, {lazy} from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import AuthLayout from "../layout/Auth";
import { auth as AuthRoutes } from ".";
import ScrollToTop from "../components/common/ScrollToTop";



const childRoutes = (Layout, routes) =>
    routes.map(({ path, component: Component }, index) =>
        <Route
            key={index}
            path={path}
            render={props => (
                <Layout>
                    <Component  {...props} />
                </Layout>
            )}
        />
    );

const Routes = () => (
    <Router>
        <ScrollToTop>
            <Switch>
                {childRoutes(AuthLayout, AuthRoutes)}
            </Switch>
        </ScrollToTop>
    </Router>
);

export default Routes;