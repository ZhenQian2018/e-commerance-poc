import AuthenticationService from '../../../service/AuthenticationService'
import * as acitons2 from '../../../middleware/apiGen'
// 引入解析token方法
import jwt_decode from 'jwt-decode'
// 引入设置token方法
import setAuthToken from '../../../components/auth/setAuthToken'
import {store} from "../../../index"
export function registerUser(auth,post,username,pass,email){
    console.log("register began",auth)
    
    return function(dispatch) {
        dispatch(acitons2.registerBegan({loginName:"not login",isLogin:0,status:"begin"}))
        AuthenticationService.executeRegister(auth,post,{
            email:email,password:pass,username:username
        })
        .then(response=>{
            
            console.log(response.data);

            
            if (response.data.message==="success"){
              
              
              dispatch(acitons2.registerSuccess({loginName:"not login",isLogin:0,status:"free"} ))
       
               
              
            }
            else{
                dispatch(acitons2.registerFailed({loginName:"not login",isLogin:0,status:"free"}))
            
            }

           
            
        })
        .catch(error=>{
            dispatch(acitons2.registerFailed({loginName:"not login",isLogin:0,status:"free"}))

        })

}}
export function authenticateUser(auth,post,email,pass) {
    console.log("login began")
    console.log(auth,post,email,pass)
    return function(dispatch) {
        dispatch(acitons2.loginBegan({loginName:"login",isLogin:0,status:"begin"}))
        AuthenticationService.executeJwtAuthenticationService(auth,post,{
            email:email,password:pass
        })
        .then(response=>{
            
            console.log(response);

            
            if (response.data.message==="login"){
              
              const token = response.data.token;
              console.log(token)
              localStorage.setItem('jwToken',token)
              //设置axios的headers token
              setAuthToken(token)
              // 解析token
              const decoded = jwt_decode(token)
              dispatch(acitons2.loginSuccess({loginName:"login",isLogin:1,status:"free"} ))
       
               
              
            }
            else{
                dispatch(acitons2.loginFailed({loginName:"not login",isLogin:0,status:"free"}))
            
            }

           
            
        })
        .catch(error=>{
            dispatch(acitons2.loginFailed({loginName:"not login",isLogin:0,status:"free"}))

        })
      
 
    }
  }


// export const authenticateUser = async(username,pass)=>{
//     console.log("login began")

//     return function(dispatch,getState){
//         dispatch(acitons2.loginBegan)
    
       




//     }
// }