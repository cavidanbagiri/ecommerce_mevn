import axios from 'axios';

export default {

    state: {
        current_user_email:null
    },
    getters: {
        //Get Current User After Login
        GETCURRENTUSER: (state)=>state.current_user_email
    },
    mutations: {
        //
        SETCURRENTUSER: (state, data)=>{
            state.current_user_email = data
            console.log('user data : ', state.current_user_email);
        }
    },
    actions: {
        //User Register Page
        async REGISTERCURRENTUSER({state},userData){
            axios.post('http://localhost:3000/users/register', userData).
            then((respond)=>{
                console.log('1 current user : ',respond.data);
            }).catch((err)=>{
                console.log('register user err : ', err);
            })
        },
        //User Login Page
        async LOGINCURRENTUSER({state},userData){
            console.log('userdata is : ',userData);
            axios.post('http://localhost:3000/users/login', userData).
            then((respond)=>{
                this.commit('SETCURRENTUSER', respond.data.message.email);
            }).catch((err)=>{
                console.log('register user err : ', err);
            })
        }
    },


}