<template>
    <div>
        <h1>helloWorld Vue CLI</h1>
        {{ msg }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'My first App in VUE CLI.',
            };  
        },
        created(){},
        
        methods: {},
    };
</script>

<style>
    .title {}
</style>