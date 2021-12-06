import axios from 'axios'

const cityActions = {
    fetchItineraries: (cityId) => {
        return(async(dispatch, getState) => {
            let response = await  axios.get(`http://localhost:4000/api/itinerary/${cityId}`)
            dispatch({type: "fetchItineraries", payload:response.data})
            //axios.get(`http://localhost:4000/api/itinerary/${cityId}`)
            //.then(res=>dispatch({type: "fetch", payload:res.data.response}))
        })
    },
    

    
}

export default cityActions