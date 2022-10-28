<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                        Create and account
                    </h1>
                    <vee-form class="space-y-4 md:space-y-6" @submit.prevent()="register" :validation-schema="schema">
                        <!-- Email Section -->
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your
                                email</label>
                            <vee-field type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
                                 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@mail.ru" required="" />
                            <ErrorMessage name="email" style="color:red"></ErrorMessage>
                        </div>
                        <!-- Password Section -->
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                            <vee-field name="password" :bails="false" v-slot="{field, errors}">
                                <input id="password" type="password" placeholder="••••••••" v-bind="field"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                                w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <div v-for="error in errors" :key="error">
                                    <span style="color:red">{{error}}</span>
                                </div>
                            </vee-field>
                        </div>
                        <!-- Confirm Section -->
                        <div>
                            <label for="confirm"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm</label>
                            <vee-field type="password" name="confirm" id="confirm" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="" />
                            <ErrorMessage name="confirm" style="color:red"></ErrorMessage>
                        </div>

                        <button class="w-full text-black bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none
                             focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
                              dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register
                        </button>
                        <router-link :to="{ path: 'Login' }">
                            <p class="text-sm font-light text-gray-500 dark:text-gray-900">
                                Already have an account? <a href="#"
                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                                    here</a>
                            </p>
                        </router-link>

                    </vee-form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { useStore } from 'vuex';
import { reactive } from 'vue';
import { ErrorMessage } from 'vee-validate';
const store = useStore();

const schema = {
    email: 'required|email',
    password: 'required|min:8',
    confirm: 'required|confirmed:@password'
}

const register = (values) => {
    console.log('clicked : ', values);
    store.dispatch('REGISTERCURRENTUSER', values);
}


</script>



<!-- <template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                        Create and account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit="register" > 
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your
                                email</label>
                            <input type="email" name="email" id="email" v-model="registering_user.email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
                                 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@mail.ru" required="">
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" v-model="registering_user.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="">
                        </div>
                        <div>
                            <label for="confirm-password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm
                                password</label>
                            <input type="confirm-password" name="confirm-password" id="confirm-password" v-model="registering_user.cofirm_password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="">
                        </div>
                        
                        <input @click="register" value="Register"
                            class="w-full text-black bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none
                             focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
                              dark:hover:bg-primary-700 dark:focus:ring-primary-800"/>
                        <router-link :to="{path:'Login'}">
                            <p class="text-sm font-light text-gray-500 dark:text-gray-900">
                                Already have an account? <a href="#"
                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                                    here</a>
                            </p>
                        </router-link>
                    </form>
                    <pre>
                        {{registering_user}}
                    </pre>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import {useStore} from 'vuex';
    import {reactive} from 'vue';
    const store = useStore();

    const registering_user = reactive({
        email:null,
        password:null,
        cofirm_password:null
    })

    const register = () => {
        if(registering_user.password === registering_user.cofirm_password){
            store.dispatch('REGISTERCURRENTUSER', registering_user);
        }
        else{
            console.log('password is not true');
        }
    }


</script> -->