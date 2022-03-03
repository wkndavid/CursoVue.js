<template>
  <div class="container mt-5">
    {{ $_fullName }} <br>
    {{ $store.state.users.first_name }} <br>
    {{ $store.state.users.email }}

    <Counter/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Counter,
  },

  created(){
  },

  computed: {
    ...mapGetters({
      $_fullName: 'fullName',
      $_getPostById: 'getPostById'
    })
  },
}
</script>
