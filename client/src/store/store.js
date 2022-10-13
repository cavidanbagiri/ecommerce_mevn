

import { createStore } from 'vuex';
import ProductStore from './product';
import UserStore from './user';
import createPersistedState from "vuex-persistedstate";


const store = createStore({

    modules:{
        productStore: ProductStore,
        userStore: UserStore
    },

    plugins: [createPersistedState()]

})

export default store;

