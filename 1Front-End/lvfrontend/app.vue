<template>
  <div>
    <NuxtLayout>
       <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import '~/assets/custom.css';
import "bootstrap-icons/font/bootstrap-icons.css"

  useHead({
    title: "lv",
    link: [
      {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",
        crossorigin: "anonymous"
      }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",
        crossorigin: "anonymous"
      }
    ],
    // link: [
    //   {
    //     href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
    //     rel: "stylesheet"
    //   }
    // ],
  })
</script>