import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'
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

export const setEditing = () => dispatch => {
    dispatch({ type: 'SET_EDITING' })
}

export const editEvent = (id, change) => dispatch => {
    axiosWithAuth().put(`https://cors-anywhere.herokuapp.com/https://mogserver.herokuapp.com/api/mogmod/${id}/weekly`, change)
        .then(res => {
            dispatch({ type: 'UPDATE' })
        })
        .catch(err => {
            dispatch({ type: 'ERROR', payload: err })
        })
}

export const del = (id) => dispatch => {
    dispatch({ type: 'DELETE' })
    axiosWithAuth().delete(`https://cors-anywhere.herokuapp.com/https://mogserver.herokuapp.com/api/mogmod/${id}/weekly`)
        .then()
        .catch(err => {
            console.log(err)
            dispatch({ type: 'ERROR', payload: err })
        })
}

//https://xivapi.com/character/search?name=[name]