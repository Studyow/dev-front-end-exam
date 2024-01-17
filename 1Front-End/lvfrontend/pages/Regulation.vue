<script setup lang="ts">
const { data: regulation } = await useFetch('https://super7tech.com/developer_exam/api/peraturan')
</script>

<template>
    <div class="container">
        <nav class="mt-5">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link btnTabs active text-primary" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Terms and Regulation</button>
        </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
            <!-- {{regulation[0].title}} -->
            {{regulation[0].content}}</div>
        </div>
    </div>
</template>