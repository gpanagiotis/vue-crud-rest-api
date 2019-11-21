<template>
    <div>

        <b-table striped hover :items="tasks" :fields="tasksColumns"></b-table>
        <b-button v-b-modal.modal-1>+</b-button>
        <TaskModal/>
        <!--        <table>-->
        <!--            <thead>-->
        <!--            <tr>-->
        <!--                <th>a/a</th>-->
        <!--                <th>Id</th>-->
        <!--                <th>Name</th>-->
        <!--                <th>Body</th>-->
        <!--            </tr>-->
        <!--            </thead>-->
        <!--            <tbody>-->
        <!--            <tr v-for="(task,index) in tasks" :key="index">-->
        <!--                <td>{{ index+1 }}</td>-->
        <!--                <td>{{ task.id }}</td>-->
        <!--                <td>{{ task.name }}</td>-->
        <!--                <td>{{ task.body }}</td>-->
        <!--            </tr>-->
        <!--            </tbody>-->

        <!--        </table>-->

    </div>
</template>

<script>
    import axios from 'axios'
    import TaskModal from './TaskModal.vue'

    export default {
        name: "Page1",

        //data: function() { return {name:'Panagiotis', surname:"Giannitsaros"}; }
        data: () => ({
            tasks: [],
            tasksColumns: [
                {key: 'body'},
                {key: 'name'}
            ],
        }),
        components: {
            TaskModal
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
                        this.tasks = response.data
                        // eslint-disable-next-line no-console
                        console.log(this.tasks)
                    }
                )
            },
        }
    }
</script>

<style scoped>

</style>
