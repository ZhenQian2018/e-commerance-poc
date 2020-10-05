// import axios from 'axios';
// import AuthenticationService from '../service/AuthenticationService'
// import {LOGIN_SUCESS,LOGIN_FAILED} from '../redux/actions/loginActions'
// import * as actions from './apiGen';
// import { push } from 'react-router-redux'
// // 引入解析token方法
// import jwt_decode from 'jwt-decode'
// // 引入设置token方法
// import setAuthToken from '../components/auth/setAuthToken'



// const api = ({ dispatch }) => next => action => {
//     if (action.type !== actions.loginBegan.type ) {
//         return next(action);
//     }
//     console.log(actions.loginBegan.type);
//     const { url, method, data , onSucess, onError } = action.payload;
//     console.log(action.payload);
//     try {
//         AuthenticationService.executeJwtAuthenticationService(url,method,data)
//         .then((response

//         )=>{
//             console.log(response);

            
//           if (response.data.message==="login"){
            
//             const token = response.data.token;
//             console.log(token)
//             localStorage.setItem('jwToken',token)
//             //设置axios的headers token
//             setAuthToken(token)
//             // 解析token
//             const decoded = jwt_decode(token)
//               if(onSucess){
//                 dispatch({
//                     type: actions.loginSuccess.type,
//                     payload: { loginName:"login",isLogin:1}
//                   });
//               }
//               else{
//                 dispatch(actions.loginSuccess({payload: { loginName:"login",isLogin:1}}))
//               }
            
//           }
//           else{
    
//             dispatch({
//               type: actions.loginFailed.type,
//               payload: { loginName:"not login",isLogin:0}
//             });
//           }
//         //dispatch({ type: onSucess, payload: Response.data })
//     })
//     }
//     catch (error) {
//         //genreal
//         dispatch(actions.loginFailed(error))

//         //
//         if(onError){dispatch({ type: onError, payload: error })}
        

//     }

// }



//     ;
