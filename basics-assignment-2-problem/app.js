const app = Vue.createApp({

    data(){
        return {
            p1: '',
            p2: '',
        };
    },
    methods: {
        showAlert: function(){
            alert('Hello');
        },
        showP1: function (event) {
            this.p1 = event.target.value;
        },
        showP2: function (event) {
            this.p2 = event.target.value;
        }
    }

});

app.mount("#assignment");