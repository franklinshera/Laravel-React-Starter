
import {
 USER_LOGIN_FAIL,
 USER_LOGIN_REQUEST,
 USER_LOGIN_SUCCESS,
 USER_LOGOUT
} from '../constants/AuthConstants'






export const LoginReducer = (state = {loggedInUser: {} ,  auth: false , loading: false} , action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return { loading: true , loggedInUser: {} , auth: false }
            

        case USER_LOGOUT:
            
            return { loading: false , loggedInUser: {} , auth: false }

        case USER_LOGIN_SUCCESS:
            
            return { loading: false , loggedInUser: action.payload.admin ,  auth: true }

        case USER_LOGIN_FAIL:
            return { loading: false , error: action.payload }

        default:
            return state
    }
}