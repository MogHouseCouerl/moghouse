import axios from 'axios'

export const getFc = () => dispatch => {
    dispatch({ type: "GET_FC" })
    axios.get('https://xivapi.com/freecompany/9233786610993177581')
        .then(res => {
            dispatch({ type: 'SET_FC', payload: res.data.FreeCompany })
        })
        .catch(err => {
            console.log(err)
        })
}


//https://xivapi.com/character/search?name=[name]