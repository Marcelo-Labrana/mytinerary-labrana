import axios from 'axios'

const usersActions = {
    
    fetchUsers: () =>{
        return ((dispatch, getState) => {
            axios.get('http://localhost:4000/api/users')
                .then(res => {
                    console.log(res.data)
                    dispatch({ type: 'fetchUsers', payload: res.data })})
        })
    },

    fetchUser: (user) => {
        return(async(dispatch, getState) => {
            let response = await  axios.get(`http://localhost:4000/api/users/${user}`)
            dispatch({type: "fetchUser", payload:response.data})
            //axios.get(`http://localhost:4000/api/itinerary/${cityId}`)
            //.then(res=>dispatch({type: "fetch", payload:res.data.response}))
        })
    },
    addUser: (email, password, fname, lname, img, country)=>{
        return async(dispatch, getState)=>{
            try{
                const user = await axios.post('http://localhost:4000/api/users',{email, password, fname, lname, img, country})
                dispatch({type: 'addUser', payload:user})
            }catch(error){console.error(error)}
        }
    },
    signUser: (email, password)=>{
        return async(dispatch,getState)=>{
            try{
                console.log(email, password)
                const signedUser = await axios.post('http://localhost:4000/api/user',{email, password})
                console.log(signedUser.data)
                dispatch({type: 'signUser', payload:signedUser.data})
            
            }catch(error){console.error(error)}
        }
    }
    

    
}

export default usersActions