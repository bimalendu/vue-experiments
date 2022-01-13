const app = Vue.createApp({
    data(){
        return {
            selClass: '',
            showPara: true,
            bgColor: '',
        };
    },
    computed: {
        paraClasses(){
            return {
                'user1': this.selClass === 'user1',
                'user2': this.selClass === 'user2',
                'hidden': !this.showPara,
                'visible': this.showPara,
            };
        }
    },
    methods: {
        togglePara(){
            this.showPara = !this.showPara;
        }
    }
});
app.mount("#assignment");