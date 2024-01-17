<script setup lang="ts">
const { data: QA } = await useFetch('https://super7tech.com/developer_exam/api/pertanyaanAndJawaban')
</script>

<template>
    <div class="container">
        <nav class="mt-5">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link btnTabs active text-primary" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-00" type="button" role="tab" aria-controls="nav-home" aria-selected="true">General Questions</button>
            <button class="nav-link btnTabs" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-01" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Connection/Ad Issues</button>
            <button class="nav-link btnTabs" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-02" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Income/Payments</button>
            <button class="nav-link btnTabs" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-03" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Other Issue</button>
        </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-00" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">{{QA[0].content}}</div>
        <div class="tab-pane fade" id="nav-01" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">{{QA[1].content}}</div>
        <div class="tab-pane fade" id="nav-02" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">{{QA[2].content}}</div>
        <div class="tab-pane fade" id="nav-03" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">{{QA[3].content}}</div>
        </div>
    </div>
</template>