<template>
  <section class="section">
    <a :href="urlRedirect" target="_blank">{{this.urlRedirect}}</a>
  </section>
</template>

<script>
import SupabaseService from "@/common/supabase.service";
export default {
  data () {
    return {
      urlRedirect: null
    }
  },
  beforeCreate () {
    SupabaseService.getRedirectByShort(this.$route.params.short, url => {
      if (typeof this.$route.query.view === "undefined") {
        window.location = url;
      } else {
        this.urlRedirect = url
      }
    })
  }
}
</script>
