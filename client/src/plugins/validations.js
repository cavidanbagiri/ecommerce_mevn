
import {defineRule, Form as VeeForm, Field as VeeField, ErrorMessage, configure} from 'vee-validate';
import {required, email, min, confirmed} from '@vee-validate/rules';


export default {

    install:(app, options)=>{

        app.component('VeeForm',VeeForm);
        app.component('VeeField',VeeField);
        app.component('ErrorMessage', ErrorMessage);


        defineRule('required', required);
        defineRule('email',email);
        defineRule('min',min);
        defineRule('confirmed', confirmed);

        configure({
            generateMessage:(context)=>{
                const messages={
                    required : `${context.field} is required`,
                    email: `This field must be an ${context.field}`,
                    min: `${context.field} must be min 8 characters`,
                    confirm : `${context.field} is not true with password field`
                }
                const message = messages[context.rule.name] ? messages[context.rule.name] : `The ${context.field} ia invalid`; 
                return message;
            }
        })

    }

}
