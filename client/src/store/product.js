
import axios from 'axios';

export default {
    state: {
        
        //Load All Products From Product Models for Search bar
        search_products: [],

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

        //Get Filtered Result
        all_filtered_result:[],

        //Get All Product 5 pcs Items For Home
        all_product_for_home : []

    },
    getters: {
        //Get Search Bar Products
        GETSEARCHPRODUCT: (state) => state.search_products,
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
        //Get FIltered Result
        GETFILTEREDRESULT: (state) => state.all_filtered_result,
        //Get Product Item with ID
        GETPRODUCTITEM (state) { return state.product_item },
        //get All Products 5 pcs for showing home page
        GETALLPRODUCTFORHOME: (state) => state.all_product_for_home
    },
    mutations: {
        //Set Search Bar Products
        SETSEARCHPRODUCT(state, data) {
            state.search_products = data;
            console.log('search product : ',state.search_products);
        },
        //Get Products Data && Set Inside Of all_perfumes
        SETALLPRODUCTS(state, data) {
            state.all_products = data;
        },
        //Get Filtered Data and ser all_filtered_result 
        SETFILTEREDRESULT(state, data){
            state.all_filtered_result = data;
        },
        //Set Data Form Showing Home Page
        SETALLPRODUCTFORHOME(state, data){
            state.all_product_for_home = data;
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
        //Load All Products From Product Models for getting this in search bar
        async LOADSEARCHBARPRODUCTS({state}, keys){
            console.log('keys : ', keys)    ;
            await axios.get('api/search?value='+keys).
                then((respond) => {
                    this.commit('SETSEARCHPRODUCT', respond.data);
                }).catch((err) => {
                    console.log('Error Happen inside Of Perfume get Page : ', err);
                })
        },
        //Load Current Products when enter view page
        async LOAD_ALL_PRODUCTS({ state }, product_catalog) {
            await axios.get('api/'+product_catalog).
                then((respond) => {
                    this.commit('SETALLPRODUCTS', respond.data);
                    this.commit('SETALLMARKS', respond.data);
                }).catch((err) => {
                    console.log('Error Happen inside Of Perfume get Page : ', err);
                })
        },
        //Load Current Products when enter view page
        async LOAD_ALL_PRODUCT_FOR_HOME({ state }) {
            console.log('load for search bar');
            axios.get('api/').
                then((respond) => {
                    this.commit('SETALLPRODUCTFORHOME',respond.data);
                }).catch((err) => {
                    console.log('Error Happen inside Of Perfume get Page : ', err);
                })
        },
        //Get Filtered Items
        async LOAD_FILTERED_PRODUCTS({ state },filtered_items) {
            let url = 'api'+filtered_items[0].url+'/filters';
            let query = '';
            for(let i in filtered_items){
                if(i>=1){
                    for(let [key,value] of Object.entries(filtered_items[i])){
                        if(query===''){
                            query+='?'+key+'='+value
                        }
                        else{
                            query+='&'+key+'='+value
                        }
                    }
                }
            }
            url+=query;
            axios.get(url).
                then((respond) => {
                    //If Filtered Data return back any product , this commit will work else return empty
                    this.commit('SETFILTEREDRESULT', respond.data);
                }).catch((err) => {
                    console.log('Error Happen inside Of Perfume get Page : ', err);
                })
        },
        //Get One Product By id
        async LOAD_ONE_DATA({state}, url){
            console.log('console work');
            await axios.get('/api/product/'+url.id+'?catalog='+url.catalog).
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
