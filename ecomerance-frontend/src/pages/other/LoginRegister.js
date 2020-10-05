import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { connect } from "react-redux";
import { browserHistory } from 'react-router';
import {authenticateUser,registerUser} from '../../redux/actions/asyncActions/loginAction'
import { Route, Redirect } from 'react-router-dom'
import * as actions from '../../middleware/apiGen'
import {store} from '../../index'
const LoginRegister = ({ location,login,userID,password,islogin,logout,email }) => {
  const { pathname } = location;
  const updateUser =(evt)=>{
    store.dispatch(actions.updateUser(evt.target.value))
  }
  const updateEmail =(evt)=>{
    console.log(evt.target.value);
    store.dispatch(actions.updateEmail(evt.target.value));

  }
  const updatePass =(evt)=>{
    console.log(evt.target.value);
    store.dispatch(actions.updatePass(evt.target.value));

  }
  const handleLogin = () => {
    console.log("login clicked");
    console.log(email);
    console.log(password);

    store.dispatch(authenticateUser("/api/authenticate","post",email,password));
     
  }
  const handleRegister = () => {
    console.log("Register clicked");
    console.log(userID);
    console.log(password);

    store.dispatch(registerUser("/api/register","post",userID,password,email));
     
  }


  console.log(userID,password);

const loginBody = ()=>{
  
  
  return(
  <Fragment>
  <MetaTags>s
    <title>Flone | Login</title>
    <meta
      name="description"
      content="Compare page of flone react minimalist eCommerce template."
    />
  </MetaTags>
  <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
  <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
    Login Register
  </BreadcrumbsItem>
  <LayoutOne headerTop="visible">
    {/* breadcrumb */}
    <Breadcrumb />
    <div className="login-register-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 ml-auto mr-auto">
            <div className="login-register-wrapper">
              <Tab.Container defaultActiveKey="login">
                <Nav variant="pills" className="login-register-tab-list">
                  <Nav.Item>
                    <Nav.Link eventKey="login">
                      <h4>Login</h4>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="register">
                      <h4>Register</h4>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="login">
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <form>
                          <input
                            type="text"
                            name="user-name"
                            placeholder="Username"
  
                            onChange = {evt=>updateEmail(evt)}
                              
                          />
                          <input
                            type="password"
                            name="user-password"
                            placeholder="Password"
                            onChange = {evt=>updatePass(evt)}
                          
                          />
                          <div className="button-box">
                            <div className="login-toggle-btn">
                              <input type="checkbox" />
                              <label className="ml-10">Remember me</label>
                              <Link to={process.env.PUBLIC_URL + "/"}>
                                Forgot Password?
                              </Link>
                            </div>
                            <button type="button" onClick={handleLogin}  >
                              <span>Login</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="register">
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <form>
                          <input
                            type="text"
                            name="user-name"
                            placeholder="Username"
                            onChange = {evt=>updateUser(evt)}
                          />
                          <input
                            type="password"
                            name="user-password"
                            placeholder="Password"
                            onChange = {evt=>updatePass(evt)}
                          />
                          <input
                            name="user-email"
                            placeholder="Email"
                            type="email"
                            onChange = {evt=>updateEmail(evt)}
                          />
                          <div className="button-box">
                            <button type="button"
                            onClick={handleRegister}
                            >
                              
                              <span>Register</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutOne>
</Fragment>)
}

  console.log(islogin)
  if(islogin===0){
    console.log("not login");
    return loginBody();
  ;}
  else {
    return (
      <Route render={props => {
          return  <Redirect to="/" />
      }} />)
    

    
      
  }
  
};

LoginRegister.propTypes = {
  location: PropTypes.object
};

const  mapStateToProps=(state)=> {
  console.log(state);
  return {
    userID:state.loginData.username,
    password:state.loginData.password,
    islogin:state.loginData.loginStatus.isLogin,
    email:state.loginData.email

  };
}
const mapDispatchToProps = dispatch => {
  return {
    login: (url,method,username, pass) => {
      authenticateUser(url,method,username, pass);
    },
  
    logout:()=>{
      dispatch(actions.signout({loginName:"not login",isLogin:0}))
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(LoginRegister);
