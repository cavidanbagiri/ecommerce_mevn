

import { createStore } from 'vuex';
import ProductStore from './product';
import UserStore from './user';
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })

const store = createStore({

    modules:{
        productStore: ProductStore,
        userStore: UserStore
    },

    plugins: [vuexLocal.plugin]

})

export default store;

