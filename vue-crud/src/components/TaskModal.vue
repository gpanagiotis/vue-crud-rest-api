<template>
    <b-modal id="modal-1" title="BootstrapVue"  v-on:ok="submitModal" >
        <form ref="form" @submit.stop.prevent="submitModal">
            <p class="my-4">Task</p>
            <b-form-input v-model="name" placeholder="Name"></b-form-input>
            <b-form-input v-model="body" placeholder="Body"></b-form-input>
        </form>
    </b-modal>
</template>

<script>
    export default {
        name: "TaskModal",
        data: () => ({
            name: null,
            body: null
        }),
        methods:{
            submitModal() {
                //if (!this.checkFormValidity()) {return}
                //this.$parent.addTask(this.$data);
                this.$parent.addTask({name:this.name, body:this.body});
            }
        },
    }
</script>

<style scoped>

</style>
