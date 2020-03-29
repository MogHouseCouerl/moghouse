const initialState = {
    fc: {}
}

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_FC': return state
        case 'SET_FC':
            return {
                ...state,
                fc: action.payload
            }
        default: return state
    }
}