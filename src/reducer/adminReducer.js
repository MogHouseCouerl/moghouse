const initialState = {
    fc: {},
    editing: false,
    error: ''
}

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_FC': return state

        case 'SET_FC':
            return {
                ...state,
                fc: action.payload
            }

        case 'SET_EDITING':
            return {
                ...state, editing: true
            }

        case 'UPDATE':
            return {
                ...state, editing: false
            }

        case 'ERROR':
            return {
                ...state, editing: false, error: action.payload
            }

        case 'DELETE':
            return {
                ...state
            }

        default: return state
    }
}