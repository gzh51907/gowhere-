function login(username) {
    return {
        type: 'SET_USER_INF',
        payload:{username}
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