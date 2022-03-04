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
    const post = this.$_getPostById(1);
    console.log(post);
},

  computed: {
    ...mapGetters('users', {
      $_fullName: 'fullName',
    }),
    ...mapGetters('posts', {
      $_getPostById: 'getPostById'
    })
  },
}
</script>
