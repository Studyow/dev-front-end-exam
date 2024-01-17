<script setup lang="ts">
const { data: global } = await useFetch('https://super7tech.com/developer_exam/api/global')
</script>

<template>

<!-- footer banner -->
  <div class="container-fluid my-3">
    <nuxt-link :to="global.download_app.link"><img :src="global.download_app.img" width="100%" alt="gif"/></nuxt-link>
  </div>

<!-- contact -->
  <div class="row contact-bg">
    <div class="col-sm-12 col-md-4 d-flex justify-content-center align-items-center" 
      v-for="dataContact of global.contact" :key="dataContact.label">
      <img class="m-3" :src="dataContact.img" width="35px" alt="gif"/>
      <strong class="pe-2">{{dataContact.label}}:</strong>
      {{dataContact.value}}
    </div>
  </div>

<!-- main footer -->
  <nav class="navbar navbar-dark bg-dark">
        <div class="col-sm-6 col-md-3 d-flex justify-content-center align-items-center"
          v-for="dataFooter of global.footer" :key="dataFooter.name">
            <img class="m-3" :src="dataFooter.img" width="" alt="gif"/>
            <!-- <span class="text-light"> {{ dataFooter.name }} </span> -->
            <!-- <nuxt-link :to="dataFooter.link">visit</nuxt-link> -->
        </div>
  </nav>
</template>