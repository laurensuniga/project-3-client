import { setToken, getUserFromToken, removeToken } from './tokenService';
const BASE_URL = 'https://finding-furry-friends-api.herokuapp.com/api/users';
// 'http://localhost:3001/api/users';


function signup(user) {
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Email already taken');
    }).then(data => setToken(data.token))
}

function login(credentials) {
    return fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Bad Credentials');
    }).then(data => setToken(data.token))
}

function logout() {
    removeToken();
}

function getUser() {
    return getUserFromToken();
}


export {
    signup,
    login,
    logout,
    getUser
};