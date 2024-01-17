<script setup lang="ts">
const { data: global } = await useFetch('https://super7tech.com/developer_exam/api/global')
</script>

<template>
<nav class="navbar navbar-expand-lg nav-custom-bg">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="/"><img :src="global.logo" /></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href='/'>About OLE777</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href='/Commission'>Commission</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Regulation">Regulation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/QandA">Question answer</a>
        </li>
        <li class="nav-item">
          <OfficialForm/>
        </li>
      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
      <NuxtLink class="btn btn-secondary mx-2" to="/" target="_blank" rel="noopener">
        Login
      </NuxtLink>

      <SignUpForm/>
    </div>
  </div>
</nav>
</template>