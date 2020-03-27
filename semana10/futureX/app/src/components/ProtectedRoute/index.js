import React from 'react';
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                const token = localStorage.getItem('token')
                if (token === null) {
                    return <Redirect to={ //redireciona pra login
                        {
                            pathname: "/login",
                            state: {
                                from: props.location
                            }
                        }
                    }/> 
                } else {
                    return <Component {...props} />
                }
            }}
        />
    )
}