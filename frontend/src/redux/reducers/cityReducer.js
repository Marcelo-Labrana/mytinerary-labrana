const initialState = {
    itineraries : null,
    commentsFlag: false
}

const cityReducer = (state = initialState, action) => {
   switch(action.type){
       case 'fetchItineraries':   
           return {
               ...state,
               itineraries: action.payload
           }
        case 'comments':
            return {
                ...initialState,
                commentsFlag: true
            }
       default:
           return state
   }
   //return state;
}

export default cityReducer