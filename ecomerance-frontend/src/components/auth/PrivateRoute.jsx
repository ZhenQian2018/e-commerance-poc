
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import {CheckLogin } from '../../service/CheckLogin'
import setAuthToken from './setAuthToken'
import jwt_decode from 'jwt-decode'
import AuthenticationService from '../../service/AuthenticationService'
import LoginRegister from "../../pages/other/LoginRegister";
class AuthorizedRoute extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props
        localStorage.getItem('jwToken')//false //sessionStorage.getItem("userName") != null ? true : false;
        //console.log(isLogged);
        if(localStorage) {
            console.log("login")
            //setLoginRedirectUrl(this.props.location.pathname);
        }
        return (
                <Route {...rest} render={props => {
                    console.log(props)
                    return localStorage.getItem('jwToken')
                            ?  <Component {...props} />
                            : <Redirect to="/login-register" />
                }} />
        )
    }
}
 
export default AuthorizedRoute