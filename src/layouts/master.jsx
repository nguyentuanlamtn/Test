import React from 'react';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { routes } from '../routes/index'

const Master = () => {
    return (
        <>
            <Header></Header>
            <BrowserRouter>
                <Switch>
                    {routes.map((route) => (
                        route.routes.map((routeChild) => (
                            <Route
                            path={routeChild.path}
                            key={`route02-${routeChild.path}`}
                            exact={routeChild.exact}
                            >
                            {routeChild.component}
                            </Route>
                        ))
                    ))}
                </Switch>
            </BrowserRouter>
            <Footer></Footer>
        </>
    )
}

export default Master