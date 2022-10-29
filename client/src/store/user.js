import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';

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
            }).catch((err)=>{
                console.log('register user err : ', err);
            })
        },
        //User Login Page
        async LOGINCURRENTUSER({state},userData){
            await axios.post('http://localhost:3000/users/login', userData).
            then(async (respond)=>{
                localStorage.setItem('current_user',respond.data.message.tokens.access_token);
                let token = localStorage.getItem('current_user');
                try{
                    let decoded = await VueJwtDecode.decode(token);
                    this.commit('SETCURRENTUSER', decoded._doc.email);
                }catch(error){
                    console.log(error, 'error from decoding token')
                }
            }).catch((err)=>{
                console.log('register user err : ', err);
            })
            
        },
        //User Decode
        async DECODEUSER({state}){
            console.log('decoded work');
            let token = localStorage.getItem('current_user');
            try{
                let decoded = await VueJwtDecode.decode(token);
                // current_user.value = decoded;   
                console.log('decoded user is : ',decoded);
                this.commit('SETCURRENTUSER', decoded.email);
            }catch(error){
                console.log(error, 'error from decoding token')
            }
        },
        //User Add Basket Page
        async AddBasket({state}, productData){
            await axios.post('http://localhost:3000/users/addproduct', productData).
            then((respond)=>{
            }).catch((err)=>{
                console.log('register user err : ', err);
            })
        },
        //Load User Basket
        async GETBASKET({state}){
            await axios.get('http://localhost:3000/users/basket').
            then((respond)=>{
                this.commit('SETBASKETDATA',respond.data);
            }).catch((err)=>{
                console.log('basket product err : ', err);
            })
        }
        
    },


}