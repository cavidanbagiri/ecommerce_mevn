
import axios from 'axios';

export default {
    state: {
        
        //Load All Choosing Items and Assign
        all_products: [],
        //After Loading All Choosing, Load All Brands To all_marks as Set
        all_brands: [],
        
        //Makeups Filtered Items
        all_departments : [],
        all_formulation : [],

        //Accessories Filtered Items
        all_style : [],
        all_material : [],
        all_closure_type : [],
        all_linning_description : [],

        //Get One Product Item
        product_item : null,
    },
    getters: {
        //After Getting Product Page, Main Side WIll Show page items woth this
        GETALLPRODUCTS: (state) => state.all_products,
        //This is common getters because all items have brands
        GETALLMARKS: (state) => state.all_brands,
        //Belongs to Makeup
        GETALLDEPARTMENTS: (state) => state.all_departments,
        GETALLFORMULATIONS: (state) => state.all_formulation,
        GETFILTEREDPERFUMES: (state) => state.filtered_perfumes,
        //Belongs To Accessories
        GETALLSTYLES: (state) => state.all_style,
        GETALLMATERIAL: (state) => state.all_material,
        GETALLCLOSURETYPE: (state) => state.all_closure_type,
        GETALLLINNINGDESCRIPTION: (state) => state.all_linning_description,
        //********************************** */
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
            //For Common products because all items has brands
            let temp_brands = new Set();
            //For Taking Makeups Filtering Items
            let temp_departments = new Set();
            let temp_formulation = new Set();
            //For Taking Accessories Filtering Items
            let temp_styles = new Set();
            let temp_material = new Set();
            let temp_closuretype = new Set();
            let temp_linningdescription = new Set();
            data.filter((item)=>{
                temp_brands.add(item?.brand);
                temp_departments.add(item?.department);
                temp_formulation.add(item?.formulation);
                temp_styles.add(item?.style);
                temp_material.add(item?.material);
                temp_closuretype.add(item?.closuretype);
                temp_linningdescription.add(item?.linningdescription);
            })
            state.all_brands = temp_brands;
            state.all_departments = temp_departments;
            state.all_formulation = temp_formulation;
            state.all_style = temp_styles;
            state.all_material = temp_material;
            state.all_closure_type = temp_closuretype;
            state.all_linning_description = temp_linningdescription;
        },
        //For Getting One Item
        SETPRODUCTITEM(state, data){
            state.product_item = data.data;
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
        //Get Filtered Items
        async LOAD_FILTERED_PRODUCTS({ state },filtered_items) {
            let url = 'localhost:3000/'+filtered_items[0].url
            let query = '';
            for(let i in filtered_items){
                if(i>=1){
                    for(let [key,value] of Object.entries(filtered_items[i])){
                        if(query===''){
                            query+='?'+key+'='+value
                        }
                        else{
                            query+='&&'+key+'='+value
                        }
                    }
                }
            }
            url+=query;
            console.log(url);
            // axios.get(url).
            //     then((respond) => {
            //         console.log('respond is for makeup query : ',respond.data);
            //     }).catch((err) => {
            //         console.log('Error Happen inside Of Perfume get Page : ', err);
            //     })
        },
        //Get One Product By id
        async LOAD_ONE_DATA({state}, url){
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
            }).catch(err => {
                console.log(err);
            });
        }

    },
}

// SETFILTEREDRESULT(state,all_filtered_items){
//     //Create Temporary Array 
//     let temp = [];
//     for(let [key, value] of Object.entries(all_filtered_items.sex_clicked)){
//         if(value){
//             for(let i in state.all_perfumes){
//                 if(state.all_perfumes[i].sex === key){
//                     temp.push(state.all_perfumes[i]);
//                 }
//             }
//         }
//     }
//     state.filtered_result = temp;
//     console.log('filtered sex result : ',state.filtered_result)
//     if(state.filtered_result.length > 0 ){
//         if(all_filtered_items.clicked_brands.length>0){
//             console.log('enter if for brands');
//             let temp = [];
//             for(let i in all_filtered_items.clicked_brands){
//                 for(let j in state.filtered_result){
//                     if(all_filtered_items.clicked_brands[i] === state.filtered_result[j].brand){
//                         temp.push(state.filtered_result[j]);
//                     }
//                 }
//             }
//             state.filtered_result = temp;
//         }
//     }
//     else{
//         if(all_filtered_items.clicked_brands.length>0){
//             console.log('enter if for brands');
//             let temp = [];
//             for(let i in all_filtered_items.clicked_brands){
//                 for(let j in state.all_perfumes){
//                     if(all_filtered_items.clicked_brands[i] === state.all_perfumes[j].brand){
//                         temp.push(state.all_perfumes[j]);
//                     }
//                 }
//             }
//             state.filtered_result = temp;
//         }
//     }
// },