const app = Vue.createApp({
    data() {
        return { 
            counter: 0
        };
    },
    computed: {
        result() {
            if(this.counter < 37){
                return 'Not there yet!';
            }else if(this.counter === 37){
                return this.counter;
            }else{
                return 'Too Much!';
            }
        }
    },
    watch: {
        result(value) {
            console.log('Watcher executing...');
            const that = this;
            
            setTimeout(function(){
                that.counter = 0;
            },5000);
        }
    },
    methods: {
        add_5() {
            console.log("added 5");
            this.counter = this.counter + 5;
        },
        add_1(){
            console.log("added 1");
            this.counter = this.counter + 1;
        }
    }
});

app.mount("#assignment");