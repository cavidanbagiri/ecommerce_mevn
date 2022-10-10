
import { useStore } from 'vuex';
import { computed, ref, reactive } from 'vue';

export function allFilteredFunction() {

    //Get Store
    const store = useStore();

    //Get All Filtered Result From Store 
    let brands = computed(() => { return store.getters['GETALLMARKS']; })
    let departments = computed(() => { return store.getters['GETALLDEPARTMENTS']; })
    let formulations = computed(() => { return store.getters['GETALLFORMULATIONS']; })
    let styles = computed(() => { return store.getters['GETALLSTYLES']; })
    let materials = computed(() => { return store.getters['GETALLMATERIAL']; })
    let closuretypes = computed(() => { return store.getters['GETALLCLOSURETYPE']; })
    let linningdescriptions = computed(() => { return store.getters['GETALLLINNINGDESCRIPTION']; })
    
    let filtered_item = ref([
        {url:'makeup'}
    ]);
    
    
    //Brands Clicked
    const filteredName = (itemname, item) => {
        
        let temp = {[item]:itemname};
        filtered_item.value.push(temp);
        store.dispatch('LOAD_FILTERED_PRODUCTS',filtered_item.value)
    }
    //Brands UnClicked
    const unFilteredName = (itemname, item) => {
        let temp = {itemname:itemname,item:item};
        filtered_item.value.s
    }

    return {brands, departments, formulations, styles, materials,closuretypes, linningdescriptions, filteredName, unFilteredName}

}























// import { useStore } from 'vuex';
// import { computed, ref, reactive } from 'vue';

// export function allFilteredFunction() {

//     //Get Store
//     const store = useStore();

//     //Create Common FIltered Items
//     let all_filtered_items = reactive({
//         // sex_clicked : [],
//         sex_clicked : reactive({ Man: false, Woman: false, unisex: false, child: false }),
//         // sex_clicked : null,
//         clicked_brands : []
//     });

//     //Get All Brands From Store 
//     let brands = computed(() => { return store.getters['GETALLMARKS']; })
//     let departments = computed(() => { return store.getters['GETALLDEPARTMENTS']; })
//     let formulations = computed(() => { return store.getters['GETALLFORMULATIONS']; })
//     //Clicked Brands
//     let clicked_brands = ref([]);
//     //Create Sex Filter Array

//     let sex_clicked = reactive({ Man: false, Woman: false, unisex: false, child: false });
//     //Sex Clicked
//     const checkedSex = () => {
//         // store.commit('SETFILTEREDPRODUCTSFORSEXFILTER', sex_clicked);
//         // store.commit('SETFILTEREDRESULT', sex_clicked, clicked_brands)
//         // all_filtered_items.sex_clicked = sex_clicked;
//         // store.commit('SETFILTEREDRESULT', all_filtered_items);
//     }
    
//     //Brands Clicked
//     const filteredName = (item) => {
//         clicked_brands.value.push(item);
//         all_filtered_items.clicked_brands.push(item);
//         // store.commit('SETFILTEREDPRODUCTS', clicked_brands);
//         // store.commit('SETFILTEREDRESULT', sex_clicked, clicked_brands)
//         // all_filtered_items.sex_clicked = sex_clicked;
//         // store.commit('SETFILTEREDRESULT', all_filtered_items);
//     }
//     //Brands UnClicked
//     const unFilteredName = (brand) => {
//         clicked_brands.value = clicked_brands.value.filter((item) => item !== brand);
//         all_filtered_items.clicked_brands = clicked_brands.value.filter((item) => item !== brand);
//         // store.commit('SETFILTEREDPRODUCTS', clicked_brands);
//         // store.commit('SETFILTEREDRESULT', sex_clicked, clicked_brands)
//         // all_filtered_items.sex_clicked = sex_clicked;
//         // store.commit('SETFILTEREDRESULT', all_filtered_items);
//     }
//     return {brands, sex_clicked, departments, formulations, filteredName, unFilteredName, checkedSex}

// }

