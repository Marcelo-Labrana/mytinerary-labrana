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
    addComment: (itineraryId, comment)=>{
        return(async(dispatch,getState)=>{
            let response = await axios.put(`http://localhost:4000/api/itinerary/comments/${itineraryId}`, {type: "add", comment: comment})
            dispatch({type:"comments", payload: true})

        })

    },
    deleteComment: (itineraryId, commentId)=>{
        return(async(dispatch,getState)=>{
            let response = await axios.put(`http://localhost:4000/api/itinerary/comments/${itineraryId}`, {type: "delete", comment: commentId})
            dispatch({type:"comments", payload: true})
            return response

        })
    },
    editComment: (itineraryId, comment, commentId)=>{
        return(async(dispatch, getState)=>{
            let response = await axios.put(`http://localhost:4000/api/itinerary/comments/${itineraryId}`, {type: 'edit', comment: comment, commentId: commentId})
            dispatch({type:"comments", payload: true})
        })
    }
    

    
}

export default cityActions