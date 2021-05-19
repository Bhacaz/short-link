<template>
  <section class="section">
    <input class="input is-primary" type="text" placeholder="Create short link" v-model="newUrl">
    <button class="button is-primary is-light" id="add-button" @click="addUrl()">Short and Copy</button>
  </section>

  <div class="container">
    <span v-for="url in urls" :key="url">
      <p>{{url.url.substring(0,20)}}... | <router-link :to="url.short">{{url.short}}</router-link></p>
    </span>
  </div>
  <Footer/>
</template>

<script>
import Footer from '../components/Footer.vue'
import SupabaseService from "@/common/supabase.service";

export default {
  name: 'Main',
  components: {
    Footer
  },
  data () {
    return {
      urls: null,
      newUrl: null
    }
  },
  created () {
    this.urls = null
    SupabaseService.getUrls(data => this.urls = data);
    if (this.$route.query.l) {
      this.newUrl = this.$route.query.l
    }
  },
  methods: {
    addUrl() {
      SupabaseService.createShortUrl(this.newUrl, newUrl => {
        this.urls.unshift(newUrl)
        const container = this.$refs.container
        // eslint-disable-next-line no-unused-vars
        this.$copyText(location.origin + '/' + newUrl.short, container, (_) => {})
        this.$router.push(newUrl.short + '?view')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-button {
  margin: 1.5em;
}
</style>
