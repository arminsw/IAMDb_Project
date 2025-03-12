<script setup>
    import BackButton from '@/components/BackButton.vue';
    import { computed } from 'vue';
    const props = defineProps(['genreTitle', 'searchTitle'])
    const titleToShow = computed(() => {
        if (props.genreTitle) {
            return `for "${props.genreTitle}" Genre`;
        }
        if (props.searchTitle) {
            return `for "${props.searchTitle}"`;
        }
        return "for All the Movies";
    })
</script>

<template>
    <div class="header">
        <RouterLink to="/" title="Back to Home"><BackButton/></RouterLink>
        <div class="result">
            Result
            <br>
            <div class="result_detail">{{ titleToShow }}</div>
        </div>
        <div class="profile_section"></div>
    </div>
</template>

<style scoped>
    .header {
        width: 100%;
        display: flex;
        margin-top: 32px;
    }

    .result {
        width: 100%;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
    }

    .result_detail {
        font-size: 12px;
        font-weight: 300;
        line-height: 15px;
        opacity: 40%;
    }

    .profile_section {
        width: 40px;
    }

    @media screen and (min-width: 450px) {
        .header {
            margin-top: 50px;
        }
    }
</style>