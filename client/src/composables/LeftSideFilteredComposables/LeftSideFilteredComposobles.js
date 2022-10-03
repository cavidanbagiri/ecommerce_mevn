
import { useStore } from 'vuex';
import { computed, ref, reactive } from 'vue';

export function allFilteredFunction() {

    //Get Store
    const store = useStore();
    //Create Sex Filter Array
    let sex_clicked = reactive({ Man: false, Woman: false, unisex: false, child: false });
    //Sex Clicked
    const checkedSex = () => {
        store.commit('SETFILTEREDPRODUCTSFORSEXFILTER', sex_clicked);
    }
    //Get All Brands From Store 
    let brands = computed(() => { return store.getters['GETALLMARKS']; })
    //Clicked Brands
    let clicked_brands = ref([]);
    //Brands Clicked
    const checkedBrands = (item) => {
        clicked_brands.value.push(item);
        store.commit('SETFILTEREDPRODUCTS', clicked_brands);
    }
    //Brands UnClicked
    const unCheckedBrands = (brand) => {
        clicked_brands.value = clicked_brands.value.filter((item) => item !== brand);
        store.commit('SETFILTEREDPRODUCTS', clicked_brands);
    }

    return {brands, sex_clicked, checkedBrands, unCheckedBrands, checkedSex}

    // return{
    //     sex_clicked,checkedSex, brands, clicked_brands, checkedBrands, unCheckedBrands
    // }

}

