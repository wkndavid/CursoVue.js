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
  computed: {
    ...mapGetters({
      $_fullName: 'fullName'
    })
  }
}
</script>
