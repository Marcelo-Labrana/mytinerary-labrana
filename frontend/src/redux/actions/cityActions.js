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
    addComment: (itineraryId, comment, token)=>{
        return(async(dispatch,getState)=>{
            let response = await axios.put(`http://localhost:4000/api/itinerary/comments/${itineraryId}`, {type: "add", comment: comment}, {headers:{'Authorization':'Bearer '+token}})
            dispatch({type:"fetchItineraries", payload: response.data.response})
            return response
        })

    },
    deleteComment: (itineraryId, commentId,token)=>{
        return(async(dispatch,getState)=>{
            let response = await axios.put(`http://localhost:4000/api/itinerary/comments/${itineraryId}`, {type: "delete", comment: commentId}, {headers:{'Authorization':'Bearer '+token}})
            dispatch({type:"fetchItineraries", payload: response.data.response})
            return response

        })
    },
    editComment: (itineraryId, comment, commentId, token)=>{
        return(async(dispatch, getState)=>{
            let response = await axios.put(`http://localhost:4000/api/itinerary/comments/${itineraryId}`, {type: 'edit', comment: comment, commentId: commentId}, {headers:{'Authorization':'Bearer '+token}})
            dispatch({type:"fetchItineraries", payload: response.data.response})
            return response
        })
    },
    like: (itineraryId, token)=>{
        return(async(dispatch, getState)=>{
            console.log(itineraryId)
            let response = await axios.put(`http://localhost:4000/api/itinerary/likes/${itineraryId}`, {}, {headers:{'Authorization':'Bearer '+token}})
            return response
        })
    }
    

    
}

export default cityActions