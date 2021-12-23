import axios from 'axios'

const activitiesActions = {
    fetchActivities: (itineraryId) => {
        return(async(dispatch, getState) => {
            try{
                let response = await  axios.get(`http://localhost:4000/api/activities/${itineraryId}`)
                return response.data
            }catch(error){console.error(error)}
            //console.log(response.data)
            //return response.data
            //dispatch({type: "fetchActivities", payload:response.data})
            //axios.get(`http://localhost:4000/api/itinerary/${cityId}`)
            //.then(res=>dispatch({type: "fetch", payload:res.data.response}))
        })
    },
    

    
}

export default activitiesActions