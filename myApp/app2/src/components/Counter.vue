<template>
    <div class="input-group mb-3"> <br>
        <button @click.stop.prevent="decrement()" class="btn btn-outline-secondary" type="button" id="button-addon1"> - </button>

        <input :value="counting" type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">

        <button @click.stop.prevent="increment()" class="btn btn-outline-secondary" type="button" id="button-addon2"> + </button>

    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Counter',

    data() {
        return {
            
        }
    },
    computed: {
        ...mapState({
        counting: state => state.counter
        })
    },
    methods: {
        ...mapMutations({
            $_add: 'INCREMENT',
            $_remove: 'DECREMENT',
        }),
        ...mapActions(['counter']),
        increment(){
            this.$store.dispatch('counter', { type: 'INCREMENT', value: 8 })
        // this.$_add(7);
        },
        decrement(){
            this.$store.dispatch('counter', { type: 'DECREMENT', value: 6 })
        // this.$_remove(7);
        },
    },
}
</script>

<style>

</style>
