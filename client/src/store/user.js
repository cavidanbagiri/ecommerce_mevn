import axios from 'axios';

export default {

    state: {
        current_user:null
    },
    getters: {
        //Get Current User After Login
        GETCURRENTUSER: (state)=>state.current_user
    },
    mutations: {
        //
        SETCURRENTUSER: (state, data)=>{
            state.current_user = data
            console.log('user data : ', state.current_user);
        }
    },
    actions: {
        //User Register Page
        async REGISTERCURRENTUSER({state},userData){
            axios.post('http://localhost:3000/users/register', userData).
            then((respond)=>{
                console.log('current user : ',respond.data);
            }).catch((err)=>{
                console.log('register user err : ', err);
            })
        },
        //User Login Page
        async LOGINCURRENTUSER({state},userData){
            console.log('userdata is : ',userData);
            axios.post('http://localhost:3000/users/login', userData).
            then((respond)=>{
                console.log('current user : ',respond.data);
                this.commit('SETCURRENTUSER', userData);
            }).catch((err)=>{
                console.log('register user err : ', err);
            })
        }
    },


}