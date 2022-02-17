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
        // this.$router.push('/a-empresa')
        // this.$router.push({ path: '/a-empresa'})
        // this.$router.push({ name: 'company'})
        // this.$router.push({ name: 'company', query: { curso: 'laravue'}})
        // this.$router.push({ name: 'company', hash: '#laravue'})
        this.$router.push({ name: 'team', params: { member: 'david-jesus' }})
        console.log(this.$router);
        },

    methods: {},
};
</script>
