<template>
  <div>
      <h1>A Empresa</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt molestiae, ex provident quibusdam nostrum consectetur vitae numquam a magni velit, est, reprehenderit deserunt quos sint cum aliquam ullam quam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nostrum eos aliquid? Vero soluta, repellendus tempora nam at minus blanditiis eum nesciunt dicta in repellat optio beatae iste commodi eligendi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente nulla, perspiciatis labore dolorum a voluptas nobis adipisci consequuntur. Ut minus saepe velit iste cumque consectetur reprehenderit, fuga ad fugit?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate minima quod iusto ullam deserunt alias id facere, incidunt a ex facilis eveniet consequatur et molestias non veniam. Animi, magni tempora!
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, natus dolorum at inventore sint ipsa tempore ex mollitia non doloremque libero quo, repellat vel eveniet dolor labore eum. Illum, velit?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolor, ea itaque distinctio, quo inventore maxime magnam, odit suscipit dignissimos beatae incidunt nisi molestias quae quidem alias quia nemo voluptatem!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe minus earum impedit hic unde ex aliquid alias, consectetur in culpa? Culpa soluta nulla eligendi autem magnam nam tempora consequuntur delectus.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quam aliquid laborum earum nostrum inventore in ad, illo veniam fuga maxime doloribus repellendus dicta? Repellendus iusto molestiae in officiis officia.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatum amet deleniti vitae quaerat. Dignissimos nisi tenetur quia officiis quo optio hic officia reiciendis, quidem quas, similique inventore necessitatibus? Asperiores.</p>
  </div>

  <div :class="{ 'sidebar': sidebar }">
      <router-link :to="{ name: 'company-history'}">
          História
      </router-link>
      |
      <router-link :to="{ name: 'company-awards'}">
          Prêmios
      </router-link>
  </div>

  <router-view></router-view>
</template>

<script>
export default {
    name: 'Company',

    data(){
        return {

        };
    },

    computed: {
        sidebar(){
        return this.$route.meta.sidebar;
        },
    },

    methods: {},
};
</script>

<style>
    .sidebar {
        background-color: #ccc;
    }
</style>