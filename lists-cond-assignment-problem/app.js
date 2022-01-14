const app = Vue.createApp({
    data(){
        return {
            inputText: '',
            tasks: [],
            showTasks: true,
        };
    },
    computed: {
        taskStatus(){
            return (this.showTasks) ? "Hide List": "Show List";
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.inputText);
            this.inputText = '';
        },
        toggleTasks(){
            this.showTasks = !this.showTasks;
        }
    }
});

app.mount("#assignment");