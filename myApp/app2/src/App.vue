<template>
  <div class="container mt-5">
    {{ $store.getters.fullName }}
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
    console.log(this.$_getPostById(2));
  },

  computed: {
    ...mapGetters({
      $_fullName: 'fullName',
      $_getPostById: 'getPostById'
    })
  },
}
</script>
