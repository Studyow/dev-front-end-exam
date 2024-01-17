<script setup lang="ts">
const { data: count } = await useFetch('https://super7tech.com/developer_exam/api/global')
</script>

<template>
  <p>Page visits: {{ count }}</p>
</template>