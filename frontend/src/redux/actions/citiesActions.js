import axios from 'axios'

const citiesActions = {
    fetchCities: () => {
        return ((dispatch, getState) => {
            axios.get('http://localhost:4000/api/cities')
                .then(res => dispatch({ type: 'fetch', payload: res.data.response }))
        })
    },
    filterCities: (cities, value) => {

        return (dispatch, getState) => {

            const filteredCities = cities.filter(searchCity => {
                return (
                    searchCity.city.toLowerCase().startsWith(value.toLowerCase().trim())
                    || searchCity.country.toLowerCase().startsWith(value.toLowerCase().trim()))
            })

            dispatch({ type: 'filter', payload: filteredCities })
        }
    },
    fetchCity: (cityId) => {
        
        return (dispatch, getState) => {
            axios.get(`http://localhost:4000/api/cities/${cityId}`)
            .then(res=>dispatch({type:'fetchCity', payload: res.data}))
        }
    }
}

export default citiesActions