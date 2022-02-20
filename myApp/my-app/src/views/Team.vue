<template>
  <div class="position-fixed d-flex flex-column align-items-start">
      <h1>Equipe</h1>

      {{ member }}

      <div v-if="member === 'David'">
          Bio David
      </div>

      <div v-else-if="member === 'Isaac'">
          Bio Isaac
      </div>

      <div v-else>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nemo temporibus qui tenetur dolorum natus consequatur perspiciatis doloribus! Perferendis ratione enim eos, laboriosam error excepturi blanditiis quis perspiciatis aliquam ab.</p>

      </div>

  </div>
</template>

<script>
export default {
    name: 'Team',
    
    props: {
        color: {
            type: String,
            default: '',            
        },
        member: {
            type: String,
            default: 'David',
        }
    },

    data() {
        return {

        };
    },

    methods: {},
};
</script>
