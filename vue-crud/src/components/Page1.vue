<template>
    <div>

        <b-table striped hover :items="this.$store.state.tasks" :fields="tasksColumns"></b-table>
        <b-button v-b-modal.modal-1>+</b-button>
        <TaskModal/>

    </div>
</template>

<script>
    import axios from 'axios'
    import TaskModal from './TaskModal.vue'

    export default {
        name: "Page1",

        //data: function() { return {name:'Panagiotis', surname:"Giannitsaros"}; }
        data: () => ({
            //tasks: [],
            tasksColumns: [
                {key: 'name'},
                {key: 'body'},

            ],
        }),
        components: {
            TaskModal
        },
        computed: {
            mytasks: function () {
                return this.$store.state.tasks
            }
        },
        props: {age: Number, work: String},
        mounted() {
            this.getTasks()
        },
        methods: {
            addTask(newData) {
                //console.log(newData);

                /*
                axios({
                    url: window.restUrl + 'add-task',
                    data: {name: this.name, description: this.description},
                    method: 'get',
                }).*/

                axios.post(window.restUrl + 'add-task', {name: newData.name, body: newData.body}
                ).then((response) => {
                    if (response.data.status == 'ok') {
                        this.tasks.push(newData);
                    } else {
                        alert(response.data.message);
                    }
                }).catch((error) => {
                    alert(error.message());
                });

                //alert('add TODO');
            },
            getTasks() {
                axios.get(window.restUrl + 'get-data').then(
                    response => {
                        // eslint-disable-next-line no-console
                        //console.log(this.$store);
                        this.$store.state.tasks = response.data;
                        // eslint-disable-next-line no-console
                        console.log(this.$store.state.tasks)
                        //this.tasks = response.data
                    }
                )
            },
        }
    }
</script>

<style scoped>

</style>
