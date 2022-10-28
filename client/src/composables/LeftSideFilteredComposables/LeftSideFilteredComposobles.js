
import { useStore } from 'vuex';
import { computed, ref, reactive } from 'vue';
import { useRoute } from 'vue-router';


export function allFilteredFunction(route) {

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
        {url:route}
    ]);
    
    
    //Filtered Item Clicked
    const filteredName = (itemname, item) => {
        console.log('main filtered name work ', itemname,' ',item);
        let temp = {[item]:itemname};
        filtered_item.value.push(temp);
        store.dispatch('LOAD_FILTERED_PRODUCTS',filtered_item.value)
    }
    //Filetered Item UnClicked
    const unFilteredName = (itemname, item) => {
        console.log('main unfiltered name work ', itemname,' ',item);
        for(let i=0;i<filtered_item?.value?.length;i++){
            if(filtered_item?.value[i]?.[item] === itemname){
                console.log('yes equal : ',i);
                filtered_item?.value?.splice(i,1);
            }
        }
        store.dispatch('LOAD_FILTERED_PRODUCTS',filtered_item.value)
    }

    return {brands, departments, formulations, styles, materials,closuretypes, linningdescriptions, filteredName, unFilteredName}

}

