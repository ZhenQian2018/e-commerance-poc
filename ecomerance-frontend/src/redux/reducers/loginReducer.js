
import {updateUser,updatePass,loginSuccess,loginFailed,loginBegan,logoutBegan,logoutSccess,logoutFailed}from '../../middleware/apiGen';
import * as actions from'../../middleware/apiGen'
import * as ActionEvent from '../../static/actionsEvent';
import {createReducer} from'@reduxjs/toolkit'
const initState = {
  email:"",
  username:"",
  password:"",
  toPath:"home-fashion",
  loginStatus:{ loginName: "not login",
  isLogin: 0,
  status:"free"
}
};
//  const loginReducer = createReducer(initState,{

//   updateUser:(state,action)=>{
//     console.log("updatinguser")
//     state.push({username:action.payload})

//   },
//   loginBegan:(state,action)=>{
    
//     state.push({
//       loginStatus:{
// message:"loginBegan",
// isLogin:0,
// loginName:"login"

//       }

//     })

//   }
  


// })


const loginReducer = (state = initState, action) => {
  console.log(action.type)
 
  if (action.type === actions.loginSuccess.type) {
    console.log(state);
    console.log(action.payload);

      
    return {
      ...state,
      loginStatus: action.payload
    };
  }
  else if(action.type===actions.registerBegan.type){
    console.log(action.payload)
    return {
      ...state,
      loginStatus:action.payload
    }
  }
  else if(action.type===actions.registerSuccess.type){
    console.log(action.payload)
    return {
      ...state,
      loginStatus:action.payload
    }
  }
  else if(action.type===actions.registerFailed.type){
    console.log(action.payload)
    return {
      ...state,
      loginStatus:action.payload
    }
  }
  else if(action.type=== actions.signout.type){
    console.log("logout brgan");
    console.log(action.payload);
    return{
      ...state,
      username:"",
  password:"",
  toPath:"home-fashion",
      loginStatus:action.payload

    }

  }
  else if(action.type===actions.loginFailed.type){
    console.log("login failed");
    console.log("action.payload");
    
    return{
      ...state,
      loginStatus:action.payload

    }

  }
  else if(action.type===actions.updateEmail.type){
    console.log("update email",action.payload)
    return {
      ...state,
      email:action.payload
    }
  }
  else if(action.type===actions.loginBegan.type){
    console.log(action.payload)
    return {
      ...state,
      loginStatus:action.payload
    }
  }
  else if(action.type === actions.updatePass.type){
    return{
      ...state,
      password:action.payload

    }


  }
  else if(action.type ===actions.updateUser.type){
    console.log("updateUser");
    return{
      ...state,
      username:action.payload

    }


  }
  else if(action.type === ActionEvent.Login_Redirect_Event){
    return{
      ...state,
      redirectTo:{toPath:action.toPath}

    }
  }

  return state;
};

export default loginReducer;
