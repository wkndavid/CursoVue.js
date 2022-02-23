<template>
    <div class="input-group mb-3"> <br>
        <button @click.stop.prevent="decrement(11)" class="btn btn-outline-secondary" type="button" id="button-addon1"> - </button>

        <input :value="$store.state.counter" type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">

        <button @click.stop.prevent="increment(11)" class="btn btn-outline-secondary" type="button" id="button-addon2"> + </button>

    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Counter',

    data() {
        return {
            
        }
    },
    computed: {
        ...mapState({
        counter: state => state.counter
        })
    },
    methods: {
        ...mapMutations(['increment', 'decrement']),
        // increment(){
        // this.$store.commit('increment', 10 );
        // },
        // decrement(){
        // this.$store.commit('decrement', 10 );
        // },
    },
}
</script>

<style>

</style>
