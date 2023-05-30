<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      news: [],
    };
  },
  async created() {
    const response = await fetch(
      "https://lontanagroup.com/wp-json/wp/v2/posts?per_page=9"
    );
    this.news = await response.json();
  },
  methods: {
    formatDate(date) {
      let fecha = new Date(date);
      return fecha.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>
<template>
  <div class="row row-cols-3 gy-5">
    <article class="col" v-for="(n, index) in news" :key="n.id">
      <div class="blog-post shadow ">
        <div class="blog-img d-block overflow-hidden position-relative">
        <img
          :src="n.yoast_head_json.og_image[0].url"
          class="img-fluid"
          alt="Imagen de la noticia"
        />
        </div>
        <div class="content p-3">
          <h2 class="resume-title"><!--ellos usan un plugin de javascript para truncar el texto-->
            <a>
              <RouterLink :to="`/${n.id}`" class="text-decoration-none">{{
              n.title.rendered
            }}</RouterLink>
            </a>
          </h2>
          <p class="resume-text">{{ n.excerpt.rendered }}</p>
          <div class="d-flex justify-content-between">
            <small class="text-muted">{{ formatDate(n.date) }}</small>
            <small>
              <a href="#" @click="reloadPage" class="text-decoration-none">Noticias</a>
            </small>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<style>
.resume-title{
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
color: #009ee0;
}
.resume-text{
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
}
</style>

