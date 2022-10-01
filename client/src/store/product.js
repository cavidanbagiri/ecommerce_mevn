
import axios from 'axios';

export default {
    state: {
        //Load All Perfumes and Assign
        all_perfumes: [],
        //After Loading All Perfumes, Load All Brands To all_marks as Set
        all_brands: [],
        //Filtered Products -> After Filter Checkbox selected, This States will be change
        filtered_perfumes : []
    },
    getters: {
        //Get All Perfumes
        GETALLPERFUMES: (state) => state.all_perfumes,
        GETALLMARKS: (state) => state.all_brands,
        GETFILTEREDPERFUMES: (state) => state.filtered_perfumes
    },
    mutations: {
        //Get Perfumes Data && Set Inside Of all_perfumes
        SETALLPERFUMES(state, data) {
            state.all_perfumes = data;
        },
        //Get Perfumes Data && Set Marks For Left Side Marks
        SETALLMARKS(state, data){
            let temp_marks = new Set();
            data.filter((item)=>{
                temp_marks.add(item.brand)
            })
            state.all_brands = temp_marks;
        },
        //After Checked Filtered items, this function will work
        SETFILTEREDPRODUCTS(state, filtered_brands){
            if(filtered_brands.value.length>0){
                let temp = [];
                for(let i in filtered_brands.value){
                    for(let j in state.all_perfumes){
                        if(filtered_brands.value[i] === state.all_perfumes[j].brand){
                            console.log('checked is ',filtered_brands.value[i]);
                            temp.push(state.all_perfumes[j]);
                        }
                    }
                }
                state.filtered_perfumes = temp;
            }
            else{
                state.filtered_perfumes = []
            }

        } 
    },
    actions: {
        //Load All Perfumes 
        async LOAD_ALL_PERFUMES({ state }) {
            axios.get('http://localhost:3000/perfumes').
                then((respond) => {
                    this.commit('SETALLPERFUMES', respond.data);
                    this.commit('SETALLMARKS', respond.data);
                }).catch((err) => {
                    console.log('Error Happen inside Of Perfume get Page : ', err);
                })
        }
    },
}


