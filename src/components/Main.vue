<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!<br>
        {{msg}}
      </p>
      <span v-for="url in urls" :key="url">
        <p>{{url.url}} | {{url.short}}</p>
      </span>
    </div>
  </section>
</template>

<script>
import SupabaseService from "@/common/supabase.service";

export default {
  name: 'Main',
  props: {
    msg: String
  },
  data () {
    return {
      urls: null
    }
  },
  created () {
    this.urls = null
    SupabaseService.getUrls(data => this.urls = data);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
