<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      news: [],
      numero: null,
      url: window.location.origin,
    };
  },
  async created() {
    const response = await fetch(
      "https://lontanagroup.com/wp-json/wp/v2/posts"
    );
    this.news = await response.json();

    this.numero = this.$route.params.id;
  },
  computed: {
    filteredNews() {
      return this.news.filter((n) => n.id != this.numero).slice(0, 3);
    },
  },
};
</script>
<template>
  <aside class="sidebar" >
    <h3>Autor</h3>
    <h3>Post recientes</h3>
    <div v-for="n in filteredNews" :key="n.id" class="pb-5">
      <div>
        <div class="row">
          <div class="col">
            <a :href="`${url}/${n.id}`">
              <img
                :src="n.yoast_head_json.og_image[0].url"
                class="img-fluid"
              />
            </a>
          </div>
          <div class="col resume-title">
            <a :href="`${url}/${n.id}`" class="text-decoration-none">{{
              n.title.rendered
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
<style>
svg{
  overflow: hidden;
}
.resume-title{
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
color: #009ee0;
}
</style>
