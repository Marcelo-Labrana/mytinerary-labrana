const initialState = {
    users : [],
    user: null,
    userToken: null
}

const usersReducer = (state = initialState, action) => {
   switch(action.type){
       case 'fetchUsers':   
           return {
               ...state,
               users: action.payload
           }
        case 'fetchUser':
            return {
                ...state,
                user: action.payload
            }
        case 'addUser':
            return{
                ...state,
                user: action.payload
                

            }
        case 'signUser':
            return{
                ...state,
                user: action.payload
            }
        case 'logOut':
            localStorage.clear()
            return{
                ...initialState,
            }
        case 'signToken':
            return{
                ...state,
                userToken: action.payload
            }
       default:
           return state
   }
   //return state;
}

export default usersReducer