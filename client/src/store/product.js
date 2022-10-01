
import axios from 'axios';

export default {
    state: {
        //Load All Perfumes and Assign
        all_perfumes: [],
        //After Loading All Perfumes, Load All Brands To all_marks as Set
        all_marks: [],
    },
    getters: {
        //Get All Perfumes
        GETALLPERFUMES: (state) => state.all_perfumes,
        GETALLMARKS: (state) => state.all_marks
    },
    mutations: {
        //Get Perfumes Data && Set Inside Of all_perfumes
        SETALLPERFUMES(state, data) {
            state.all_perfumes = data;
        },
        //Get Perfumes Data && Set Marks For Left Side Marks
        SETALLMARKS(state, data){
            console.log('All Data : ',data);
            let temp_marks = new Set();
            data.filter((item)=>{
                temp_marks.add(item.brand)
            })
            state.all_marks = temp_marks;
        }
    },
    actions: {
        //Load All Perfumes 
        async LOAD_ALL_PERFUMES({ state }) {
            console.log('Perfumes Action Can Work');
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


