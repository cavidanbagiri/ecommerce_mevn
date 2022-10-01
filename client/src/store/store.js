

import axios from 'axios';

import { createStore } from 'vuex';

//Import Modules Here
import ProductStore from './product';

const store = createStore({

    modules:{
        productStore: ProductStore
    }

})

export default store;

