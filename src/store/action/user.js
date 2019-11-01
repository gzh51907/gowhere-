function login(userInf) {
    return {
        type: 'SET_USER_INF',
        payload: userInf,
    }
}

function logout() {
    return {
        type: 'REMOVE_USER_INF'
    }
}

export default {
    login,
    logout
}