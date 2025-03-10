<script setup>
    import Ratings from '@/components/Ratings.vue';
    defineProps(['coverData'])
</script>
<template>
    <div class="wrapper">
        <Ratings :ratingData="coverData"/>
        <img class="img" :src="`${coverData.poster}`" alt="Movie Cover">
    </div>
</template>

<style scoped>
    .img {
        width: 100%;
        height: auto;
    }
    @media screen and (min-width: 450px) {
        .img {
            width: 100%;
            height: 312px;
        }
        .wrapper {
            display: flex;
            flex-direction: column-reverse;
        }
    }
</style>