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
    addUser: (email, password, fname, lname, img, country, google)=>{
        return async(dispatch, getState)=>{
            try{
                const user = await axios.post('http://localhost:4000/api/users',{email, password, fname, lname, img, country,google})
                if(user.data.success && !user.data.error){
                    
                    localStorage.setItem('token', user.data.response.token)
                    //localStorage.setItem('name', user.data.response.fname)
                    //localStorage.setItem('image', user.data.response.img)
                    dispatch({type: 'addUser', payload:user.data})}
                else{return user.data.error}
                
            }catch(error){console.error(error)}
        }
    },
    logOut: (algo)=>{
        return async(dispatch, getState)=>{
            try{localStorage.clear()
            dispatch({type:'logOut', payload: {} })}
            catch(error){console.error(error)}
        }
    },

    signUser: (email, password,google)=>{
        return async(dispatch,getState)=>{
            try{
                //console.log(email, password)
                const signedUser = await axios.post('http://localhost:4000/api/users/sign_in',{email, password, google})
                //console.log(signedUser.data)
                if(signedUser.data.success && !signedUser.data.error) {
                    localStorage.setItem('token', signedUser.data.response.token)
                    //localStorage.setItem('name', signedUser.data.response.fname)
                    //localStorage.setItem('image', signedUser.data.response.img)
                    dispatch({type: 'signUser', payload:signedUser.data})
                }
                else{return {errors: signedUser.data.error}}
            }catch(error){console.error(error)}
        }
    },
    signToken: (token)=>{
        return async(dispatch, getState)=>{
            try{
                const signedUser = await axios.post('http://localhost:4000/api/users/sign_in/token',{},{headers:{'Authorization':'Bearer '+token}})
                //console.log(signedUser)
                if(signedUser.data.success && !signedUser.data.error){
                    
                    dispatch({type:'signToken', payload: signedUser.data})}
                else throw new Error("Something went wrong with token authorization")
                    
            }catch(error){
                localStorage.clear()
                dispatch({type:'logOut', payload:{}})
            }
        }
    }
    
    

    
}

export default usersActions