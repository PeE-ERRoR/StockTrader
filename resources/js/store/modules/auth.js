import axios from 'axios'
import router from '../../routers'

const state = {
    idToken: null,
    userId: null,
    user: null
}

const mutations = {
    authUser (state, userData) {
        state.idToken = userData.token
        state.userId = userData.id
    },
    storeUser(state, user) {
        state.user = user
    },
    clearAuthData(state) {
        state.idToken = null
        state.userId = null
        state.user = null
    }
}

const actions = {
    signup({commit}, formData) {
        axios.post('/register', {
            email: formData.email,
            password: formData.password,
            confirm_password: formData.confirmPassword,
            name: formData.firstName,
            firstname: formData.firstName,
            lastName: formData.lastName,
            age: formData.age
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    },
    signin({commit, dispatch}, formData) {
        axios.post('/login', {
            email: formData.email,
            password: formData.password,
        })
        .then((response) => {
            commit('authUser', {
                token: response.data.success.token,
                id: ''
            })
            const now = new Date()
            const expirationDate = new Date(now.getTime() + 60 * 10000)
            localStorage.setItem('token', response.data.success.token)
            localStorage.setItem('expiresIn', 60 * 10000)
            dispatch('storeUser')
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    },
    logout({commit, state}) {
        if (!state.idToken) {
            return
        }
        axios.defaults.headers.common['Authorization'] = 'Bearer '+state.idToken
        axios.post('/logout')
        .then((response) => {
            commit('clearAuthData')
            localStorage.removeItem('token')
            localStorage.removeItem('expirationDate')
            localStorage.removeItem('userId')
            router.replace('/')
        }).catch((error) => {
            console.log(error)
        })
    },
    tryAutoLogin({commit}) {
        const token = localStorage.token
        if (!token) {
            return
        }
        const expirationDate = localStorage.expirationDate
        const now = new Date()
        if (now >= expirationDate) {
            return
        }
        const userId = localStorage.userId
        commit('authUser', {
            token: token,
            userId: ''
        })
        const user = localStorage.userId
        commit('storeUser', user)
    },
    storeUser({commit, state}) {
        if (!state.idToken) {
            return
        }
        axios.defaults.headers.common['Authorization'] = 'Bearer '+state.idToken
        axios.get('/getProfile')
        .then((response) => {
            commit('storeUser', response.data)
            localStorage.setItem('userId', response.data)
            console.log(response.data)
        })
    },
    fetchUser({commit, state}) {
        if (!state.token) {
            return
        }
        axios.defaults.headers.common['Authorization'] = 'Bearer '+state.idToken
        axios.get('/getProfile')
        .then((response) => {
            commit('storeUser', response.data)
            console.log(response)
        })
    }
}

const getters = {
    user(state) {
        return state.user
    },
    isAuthenticated(state) {
        return state.idToken !== null
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}