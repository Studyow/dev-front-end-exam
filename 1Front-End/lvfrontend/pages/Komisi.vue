<script setup lang="ts">
const { data: komisi } = await useFetch('https://super7tech.com/developer_exam/api/komisi')
</script>

<template>
    {{komisi}}
</template>