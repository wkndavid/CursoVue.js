<template>
    <div class="input-group mb-3"> <br>
        <button @click.stop.prevent="decrement()" class="btn btn-outline-secondary" type="button" id="button-addon1"> - </button>

        <input :value="$store.state.counter" type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">

        <button @click.stop.prevent="increment()" class="btn btn-outline-secondary" type="button" id="button-addon2"> + </button>

    </div>
</template>

<script>
export default {
    name: 'Counter',

    data() {
        return {
            
        }
    },
  
    methods: {
        increment(){
        this.$store.commit('increment', { value: 10 });
        },
        decrement(){
        this.$store.commit('decrement', { value: 10 });
        },
    },
}
</script>

<style>

</style>