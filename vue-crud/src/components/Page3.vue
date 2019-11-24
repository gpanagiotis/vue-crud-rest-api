<template>
    <div>
        <h1>Page 3</h1>
        <p>Stored value is {{stored}}</p>
        <p>myGlobalVar value is {{ store }}</p>
        <p>myGlobalVar value is {{ this.store }}</p>
        <p>myGlobalVar value is {{ this.$data.store }}</p>
        <p>myGlobalVar value is {{ this.$options.name }}</p>


        <p>myGlobalVar value is {{ this.$data.data }}</p>
        <p>myGlobalVar value is {{ this.data }}</p>
        <p>myGlobalVar value is {{ this.$props.stored }}</p>
        <p>myGlobalVar value is {{ this.$store.state.myGlobalVar }}</p>

        <p>myGlobalVar value is {{ this.$data.data }}</p>
        <p>myGlobalVar value is {{ this.$options.data().data }}</p>
        <p>myGlobalVar value is {{ this.$options.props }}</p>
        <p>myGlobalVar value is {{ stored }}</p>
        <p>myGlobalVar value is {{ stored2 }}</p>
    </div>
</template>

<script>
    export default {
        name: "Page3",

        data: () => {
          return {
              store: 'native data value',
              data : 'my var "data"'
          }
        },
        props: {
            stored: String,
            stored2 : String
        }
    }
</script>

<style scoped>

</style>
