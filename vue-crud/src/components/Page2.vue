<template>
    <div>
        <h1>Page 2</h1>

        <p>{{`${num1} + ${num2} equal ${num3}`}}</p>
        <input v-model="num1">
        <input v-model="num2">
        <button v-on:click="storeNumber">Store</button>
    </div>
</template>

<script>
    export default {
        name: "Page2",
        data: () => ({num1: 1, num2: 2}),
        computed: {
            num3: function () {
                //this.$parent.updateStore(this.sumValues());
                return this.sumValues();
            }
        },
        methods: {
            storeNumber: function () {
                //alert(this.num3);
                this.$parent.updateStore(this.num3)
            },
            sumValues: function () {
                let res = (+this.num1) + (+this.num2)
                return (res)
            }
        },
        watch: {
            num1: function () {
                this.$parent.updateStore(this.sumValues());
            },
            num2: function () {
                this.$parent.updateStore(this.sumValues());
            },
        }

    }
</script>

<style scoped>

</style>
