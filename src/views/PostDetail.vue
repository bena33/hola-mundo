<script>

import Extras from "../components/Extras.vue";

export default {
  name: "MiComponente",
  components: {
    Extras,
  },
  data() {
    return {
      noticia: {},
      id: null,
      fechaformat: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.fetchNoticia();
  },
  methods: {
    async fetchNoticia() {
      const response = await fetch(
        `https://lontanagroup.com/wp-json/wp/v2/posts/${this.id}`
      );
      const data = await response.json();
      this.noticia = data;

      let fecha = this.noticia.date;
      fecha = new Date(fecha);
      this.fechaformat = fecha.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    },
  },

};
</script>

<template>
  <section>
    <div class="container">
      <div class="row row-cols-2">
        <div class="col-9">
          <img
            :src="noticia.yoast_head_json.og_image[0].url" 
            class="img-fluid"
          /> <!--salta un errror pero sigue funcionando-->
          <h2>{{ noticia.title.rendered }}</h2>
          <p>{{ fechaformat }}</p>
          <div v-html="noticia.content.rendered"></div>
        </div>
        <div class="col-3">
          <Extras></Extras>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
svg{ 
  overflow: hidden;
}
</style>
