Vue.createApp({
    data(){
        return {
            name: 'Zaved',
            age: 30,
            age_plus_5: 35,
            url: 'https://www.google.com',
        };
    },
    methods: {
        fav_number: function(){
            let num = Math.random();
            if(num > 0.5){
                return 1;
            }
            return 0;
        }
    }
}).mount("#assignment");