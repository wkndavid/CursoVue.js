<template>
  <div class="container mt-5">
    {{ $_fullName }} <br>

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
    ...mapGetters('users', {
      $_fullName: 'fullName',
      // $_getPostById: 'getPostById'
    })
  },
}
</script>
