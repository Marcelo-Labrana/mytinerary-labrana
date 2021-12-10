const initialState = {
    users : [],
    user: null
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
                users: action.payload

            }
       default:
           return state
   }
   //return state;
}

export default usersReducer