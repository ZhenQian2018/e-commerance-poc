import {Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import AuthenticationService from '../service/AuthenticationService'

export const CheckLogin =()=>{

return AuthenticationService.validateToekn()

    

}

export default CheckLogin;