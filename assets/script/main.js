const app = Vue.createApp({
   
    data: function () {
        return {
        choosen: ''
        }   
    },
    methods:{
        meli(){
            this.choosen='meli-code';
        },
        number(){
            this.choosen='number'
        },
        password(){
            this.choosen='password-generator'
        }
    }
  
});

