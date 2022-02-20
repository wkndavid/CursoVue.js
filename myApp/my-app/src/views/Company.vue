<template>
  <div>
      <h1>A Empresa</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem nulla molestias aut ex adipisci dolor, incidunt reprehenderit sapiente consequatur deserunt quis debitis dolorem esse labore ab inventore, voluptate neque!</p>
  </div>

  <div :class="{ 'sidebar': sidebar }">
      <router-link :to="{ name: 'company-history'}">
          História
      </router-link>
      |
      <router-link :to="{ name: 'company-awards'}">
          Prêmios
      </router-link>
  </div>

  <router-view></router-view>
</template>

<script>
export default {
    name: 'Company',

    data(){
        return {

        };
    },

    computed: {
        sidebar(){
        return this.$route.meta.sidebar;
        },
    },

    methods: {},
};
</script>

<style>
    .sidebar {
        background-color: #ccc;
    }
</style>