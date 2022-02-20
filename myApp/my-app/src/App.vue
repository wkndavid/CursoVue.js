<template>
    <nav class="navbar position-fixed d-flex flex-column align-items-start top-0 left-0 bg-dark" style="width: 250px; height: 100vh;">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }">
            Home
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="{ name: 'company' }">
            Empresa
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="{ name: 'team', params: { color: 'Green', member: 'David'} }">
            Equipe
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="{ name: 'contact' }">
            Contato
          </router-link>
        </li> 
      </ul> 
    </nav>

    <main class="mt-5" style="margin-left: 260px;">
      <div id="main">
            <router-view/>
      </div>
    </main>
</template>

<script>

export default {
  name: 'App',

  methods: {
    goBack(){
      this.$router.go(-1);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
