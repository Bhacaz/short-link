<template>
  <div id="stats">
    <section class="section">
      Total: {{count}}
    </section>
  </div>
</template>

<script>
import SupabaseService from "@/common/supabase.service";

export default {
  name: 'Footer',
  data () {
    return {
      count: 0
    }
  },
  created () {
    SupabaseService.getUrlsCount(count => this.count = count)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #stats {
   position: absolute;
   bottom: 0;
   width: 100%;
 }
</style>
