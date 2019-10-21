import weapons from '../../data/weapon';

const state = {
    weapons: []
};

const mutations = {
    'SET_STOCKS' (state, weapons) {
        state.weapons = weapons;
    },
    'RND_STOCKS' (state) {
        state.weapons.forEach(weapon => {
          weapon.price = Math.round(weapon.price * (1 + Math.random() - 0.4));  
        });
    }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', weapons);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    weapons: state => {
        return state.weapons;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};