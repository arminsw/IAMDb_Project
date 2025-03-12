<script setup>
    defineProps(['detailData'])
</script>

<template>
    <div class="detail_wrapper">
        <div class="main_title">Details</div>
        <div class="flex">
            <div class="title">Directors</div>
            <div class="desc">{{ detailData.director }}</div>
        </div>
        <div class="flex">
            <div class="title">Writers</div>
            <div class="desc">{{ detailData.writer }}</div>
        </div>
        <div class="flex">
            <div class="title">Actors</div>
            <div class="desc">{{ detailData.actors }}</div>
        </div>
        <div class="flex">
            <div class="title">Country</div>
            <div class="desc">{{ detailData.country }}</div>
        </div>
        <div class="flex">
            <div class="title">Language</div>
            <div class="desc">{{ detailData.language }}</div>
        </div>
        <div class="flex">
            <div class="title">Awards</div>
            <div class="desc">{{ detailData.awards }}</div>
        </div>
    </div>
</template>

<style scoped>
    .flex {
        display: flex;
        align-items: center;
        padding: 12px 0px;
        border-bottom: 1px solid var(--c-blue);
    }

    .flex:last-child {
        border-bottom: none;
    }
    
    .title {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        opacity: 80%;
        width: 170px;
    }

    .desc {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        opacity: 60%;
        width: 236px;
    }

    .main_title {
        font-size: 28px;
        font-weight: 700;
        line-height: 50px;
    }

    .detail_wrapper {
        padding-bottom: 54px;
    }
</style>