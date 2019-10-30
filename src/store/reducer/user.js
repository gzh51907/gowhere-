let initialState = {
    userInf:{
        username:'gay文'
    }
}

function reducer(state = initialState, { type, payload }) {//action,解构
    switch (type) {
        case 'SET_USER_INF':
            return {
                ...state,
                userInf: [payload]
            }
        case 'REMOVE_USER_INF':
            return {
                ...state,
                userInf:{}
            }
        default:
            return state
    }
}


export default reducer