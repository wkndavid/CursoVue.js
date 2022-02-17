<template>
  <div>
      <h1>Home</h1>
      <p>My HomePage Company</p>
  </div>
</template>

<script>
export default {
    name: 'Home',

    data(){
        return {

        };
    },   

    created() {
        console.log(this.$route);
        console.log(this.$router);
        },

    methods: {},
};
</script>
