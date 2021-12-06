const initialState = {
    itineraries : null
}

const cityReducer = (state = initialState, action) => {
   switch(action.type){
       case 'fetchItineraries':   
           return {
               ...state,
               itineraries: action.payload
           }
       default:
           return state
   }
   //return state;
}

export default cityReducer