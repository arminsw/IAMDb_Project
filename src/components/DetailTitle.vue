<script setup>
    import Favorite from '@/components/FavoriteHeart.vue';
    defineProps(['titleData'])
</script>

<template>
    <div class="title_wrapper">
        <div class="title_flex">
            <h2 class="title">{{ titleData.title }}</h2>
            <Favorite class="favorite--desktop" :movieData="titleData"/>
        </div>
        <div class="title_detail">{{ titleData.genres.join(', ') }}</div>
        <p class="title_desc">
            {{ titleData.plot }}
        </p>
        <div class="tags">
            <div class="tag">{{ titleData.rated }}</div>
            <div class="tag">{{ titleData.year }}</div>
            <div class="tag flex"><img class="clock" src="/clock.svg" alt="Clock Picture">{{ titleData.runtime }}</div>
        </div>
    </div>
</template>

<style scoped>
    .title_wrapper {
        position: relative;
    }

    .title {
        font-size: 48px;
        font-weight: 700;
        line-height: 58px;
    }

    .favorite--desktop {
        display: none;
    }

    .title_detail {
        font-size: 12px;
        font-weight: 300;
        line-height: 15px;
        opacity: 40%;
    }

    .title_desc {
        margin-top: 18px;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        opacity: 60%;
        text-align: justify;
    }

    .title_flex {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .tags {
        display: flex;
        gap: 12px;
    }

    .tag {
        background: var(--c-blue);
        border-radius: 8px;
        padding: 6px 12px;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        margin-top: 18px;
    }

    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .clock {
        width: 12px;
        margin-right: 6px;
    }
    @media screen and (min-width: 450px) {
        .favorite--desktop {
            display: block;
        }

    }
</style>