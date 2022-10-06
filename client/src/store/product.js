
import axios from 'axios';

export default {
    state: {
        //Load All Perfumes and Assign
        all_products: [],
        //After Loading All Perfumes, Load All Brands To all_marks as Set
        all_brands: [],
        //Filtered Products -> After Filter Checkbox selected, This States will be change
        filtered_perfumes : [],
        //Filtered Products -> After Filter Checkbox Selected, Products Will Filtered For Sex
        filtered_sexs : [],
        //Get All Filtered Result
        filtered_result : [],
        //Get One Product Item
        product_item : null,
    },
    getters: {
        //Get All Perfumes
        GETALLPRODUCTS: (state) => state.all_products,
        GETALLMARKS: (state) => state.all_brands,
        GETFILTEREDPERFUMES: (state) => state.filtered_perfumes,
        GETALLFILETEREDSEX: (state) => state.filtered_sex,
        GETFILTEREDRESULT: (state) => state.filtered_result,
        GETPRODUCTITEM (state) {
            return state.product_item
        }
    },
    mutations: {
        //Get Products Data && Set Inside Of all_perfumes
        SETALLPRODUCTS(state, data) {
            state.all_products = data;
        },
        //Get Products Data && Set Marks For Left Side Marks
        SETALLMARKS(state, data){
            let temp_marks = new Set();
            data.filter((item)=>{
                temp_marks.add(item.brand)
            })
            state.all_brands = temp_marks;
        },
        //For Getting One Item
        SETPRODUCTITEM(state, data){
            console.log('from setting : ', data);
            state.product_item = data.data;
        },
        SETFILTEREDRESULT(state,all_filtered_items){
            //Create Temporary Array 
            let temp = [];
            for(let [key, value] of Object.entries(all_filtered_items.sex_clicked)){
                if(value){
                    for(let i in state.all_perfumes){
                        if(state.all_perfumes[i].sex === key){
                            temp.push(state.all_perfumes[i]);
                        }
                    }
                }
            }
            state.filtered_result = temp;
            console.log('filtered sex result : ',state.filtered_result)
            if(state.filtered_result.length > 0 ){
                if(all_filtered_items.clicked_brands.length>0){
                    console.log('enter if for brands');
                    let temp = [];
                    for(let i in all_filtered_items.clicked_brands){
                        for(let j in state.filtered_result){
                            if(all_filtered_items.clicked_brands[i] === state.filtered_result[j].brand){
                                temp.push(state.filtered_result[j]);
                            }
                        }
                    }
                    state.filtered_result = temp;
                }
            }
            else{
                if(all_filtered_items.clicked_brands.length>0){
                    console.log('enter if for brands');
                    let temp = [];
                    for(let i in all_filtered_items.clicked_brands){
                        for(let j in state.all_perfumes){
                            if(all_filtered_items.clicked_brands[i] === state.all_perfumes[j].brand){
                                temp.push(state.all_perfumes[j]);
                            }
                        }
                    }
                    state.filtered_result = temp;
                }
            }
        },
    },
    actions: {
        //Load Current Products when enter view page
        async LOAD_ALL_PRODUCTS({ state }, product_catalog) {
            axios.get('http://localhost:3000/'+product_catalog).
                then((respond) => {
                    this.commit('SETALLPRODUCTS', respond.data);
                    this.commit('SETALLMARKS', respond.data);
                }).catch((err) => {
                    console.log('Error Happen inside Of Perfume get Page : ', err);
                })
        },
        //Get One Product By id
        async LOAD_ONE_DATA({state}, url){
            console.log('catalog is from vuex : ', url.catalog,' id is : ', url.id);
            await axios.get('http://localhost:3000/product/'+url.id+'?catalog='+url.catalog).
                then(async(respond) => {
                    await this.commit('SETPRODUCTITEM', respond)
                }).catch((err) => {
                    console.log('Error Happen inside Of Perfume get Page : ', err);
                })
        },
        //Create Product
        async CREATE_DATA({ state }, formData) {
            axios.post("http://localhost:3000/create", formData).then(res => {
                console.log('clicked ', res);
            }).catch(err => {
                console.log(err);
            });
        }

    },
}

