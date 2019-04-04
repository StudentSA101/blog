<template>
  <div class="col-md-4">
    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary"></strong>
        <h3 class="mb-4">{{postData.title}}</h3>
        <div class="mb-1 text-muted">{{postData.published_at}}</div>
        <p class="card-text mb-auto" v-html="postData.summary"></p>
        <a :href="postData.url" class="stretched-link">Continue reading</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['post'],
    data(){
      return {
        postData: JSON.parse(this.post),
      }
    }
  }
</script>