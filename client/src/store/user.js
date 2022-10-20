import axios from 'axios';

export default {

    state: {
        current_user_email:null,
        basket_data:[]
    },
    getters: {
        //Get Current User After Login
        GETCURRENTUSER: (state)=>state.current_user_email,
        GETBASKETDATA: (state)=>state.basket_data
    },
    mutations: {
        //Set Current User
        SETCURRENTUSER: (state, data)=>{
            state.current_user_email = data
            console.log('user data : ', state.current_user_email);
        },
        //Set Basket Data to Basket data
        SETBASKETDATA: (state, data)=>{
            state.basket_data = data;
            console.log('basket data : ',state.basket_data);
        }
    },
    actions: {
        //User Register Page
        async REGISTERCURRENTUSER({state},userData){
            await axios.post('http://localhost:3000/users/register', userData).
            then((respond)=>{
                console.log('1 current user : ',respond.data);
            }).catch((err)=>{
                console.log('register user err : ', err);
            })
        },
        //User Login Page
        async LOGINCURRENTUSER({state},userData){
            console.log('userdata is : ',userData);
            await axios.post('http://localhost:3000/users/login', userData).
            then((respond)=>{
                this.commit('SETCURRENTUSER', respond.data.message.email);
            }).catch((err)=>{
                console.log('register user err : ', err);
            })
            
        },
        //User Add Basket Page
        async AddBasket({state}, productData){
            await axios.post('http://localhost:3000/users/addproduct', productData).
            then((respond)=>{
                console.log('product data : ',productData);
                console.log('respond data : ',respond.data);
            }).catch((err)=>{
                console.log('register user err : ', err);
            })
        },
        //Load User Basket
        async GETBASKET({state}){
            await axios.get('http://localhost:3000/users/basket').
            then((respond)=>{
                console.log('basket product data : ',respond.data);
                this.commit('SETBASKETDATA',respond.data);
            }).catch((err)=>{
                console.log('basket product err : ', err);
            })
        }
        
    },


}