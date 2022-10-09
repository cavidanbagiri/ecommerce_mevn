
import { useStore } from 'vuex';
import { computed, ref, reactive } from 'vue';

export function allFilteredFunction() {

    //Get Store
    const store = useStore();

    //Create Common FIltered Items
    let all_filtered_items = reactive({
        // sex_clicked : [],
        sex_clicked : reactive({ Man: false, Woman: false, unisex: false, child: false }),
        // sex_clicked : null,
        clicked_brands : []
    });

    //Get All Brands From Store 
    let brands = computed(() => { return store.getters['GETALLMARKS']; })
    let departments = computed(() => { return store.getters['GETALLDEPARTMENTS']; })
    let formulations = computed(() => { return store.getters['GETALLFORMULATIONS']; })
    //Clicked Brands
    let clicked_brands = ref([]);
    //Create Sex Filter Array

    let sex_clicked = reactive({ Man: false, Woman: false, unisex: false, child: false });
    //Sex Clicked
    const checkedSex = () => {
        // store.commit('SETFILTEREDPRODUCTSFORSEXFILTER', sex_clicked);
        // store.commit('SETFILTEREDRESULT', sex_clicked, clicked_brands)
        all_filtered_items.sex_clicked = sex_clicked;
        store.commit('SETFILTEREDRESULT', all_filtered_items);
    }
    
    //Brands Clicked
    const checkedBrands = (item) => {
        clicked_brands.value.push(item);
        all_filtered_items.clicked_brands.push(item);
        // store.commit('SETFILTEREDPRODUCTS', clicked_brands);
        // store.commit('SETFILTEREDRESULT', sex_clicked, clicked_brands)
        all_filtered_items.sex_clicked = sex_clicked;
        store.commit('SETFILTEREDRESULT', all_filtered_items);
    }
    //Brands UnClicked
    const unCheckedBrands = (brand) => {
        clicked_brands.value = clicked_brands.value.filter((item) => item !== brand);
        all_filtered_items.clicked_brands = clicked_brands.value.filter((item) => item !== brand);
        // store.commit('SETFILTEREDPRODUCTS', clicked_brands);
        // store.commit('SETFILTEREDRESULT', sex_clicked, clicked_brands)
        all_filtered_items.sex_clicked = sex_clicked;
        store.commit('SETFILTEREDRESULT', all_filtered_items);
    }
    return {brands, sex_clicked, checkedBrands, departments, formulations, unCheckedBrands, checkedSex}

}

