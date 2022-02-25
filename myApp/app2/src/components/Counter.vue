<template>
    <div class="input-group mb-3"> <br>
        <button @click.stop.prevent="decrement()" class="btn btn-outline-secondary" type="button" id="button-addon1"> - </button>

        <input :value="$store.state.counter" type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">

        <button @click.stop.prevent="increment()" class="btn btn-outline-secondary" type="button" id="button-addon2"> + </button>

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
        ...mapMutations({
            $_add: 'INCREMENT',
            $_remove: 'DECREMENT',
        }),
        increment(){
        this.$_add(7);
        },
        decrement(){
        this.$_remove(7);
        },
    },
}
</script>

<style>

</style>
