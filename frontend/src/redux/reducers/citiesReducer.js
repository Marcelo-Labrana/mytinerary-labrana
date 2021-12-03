const initialState = {
     cities : [],
     aux : []

}

const citiesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'fetch':   
            return {
                ...state,
                cities: action.payload,
                aux: action.payload
            }
        case 'filter':
            return{
                ...state,
                aux: action.payload
            }
        default:
            return state
    }
    //return state;
}

export default citiesReducer