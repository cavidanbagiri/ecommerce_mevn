

import axios from 'axios';
import { createStore } from 'vuex';

//Import Modules Here
import ProductStore from './product';
import UserStore from './user';

const store = createStore({

    modules:{
        productStore: ProductStore,
        userStore: UserStore
    }

})

export default store;

