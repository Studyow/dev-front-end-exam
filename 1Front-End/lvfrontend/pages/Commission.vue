<script setup lang="ts">
const { data: commission } = await useFetch('https://super7tech.com/developer_exam/api/komisi')
</script>

<template>
    <div class="container">
        <nav class="mt-5">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link btnTabs active text-primary" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Commission System Details</button>
            <button class="nav-link btnTabs" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Terms of payment</button>
        </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">{{commission[0].content}}</div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">{{commission[1].content}}</div>
        </div>
    </div>
</template>