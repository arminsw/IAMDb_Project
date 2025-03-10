<script setup>
    import SearchBar from '@/components/SearchBar.vue';
    import Category from '@/components/Category.vue';
    import { onMounted } from 'vue';
    import { useMovieStore } from '@/stores/movieStore';

    const movieStore = useMovieStore();
    onMounted(() => {
        movieStore.genreQuery = '';
        movieStore.searchQuery = '';
    })
</script>
<template>
    <h1>IAMDb</h1>
    <SearchBar class="search"/>
    <Category/>
</template>

<style scoped>
    h1 {
        width: 100%;
        padding: 0px 12px;
        font-size: 100px;
        font-weight: 900;
        line-height: 121px;
        text-align: center;
        margin-top: 240px;
    }

    @media screen and (max-width: 350px) {
        h1 {
            font-size: 90px;
        }
    }

    .search {
        width: 94%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 450px) {
        h1 {
            width: 100%;
            font-size: 140px;
            line-height: 170px;
            margin-top: 222px;
        }

        .search {
            width: 100%;
        }
        
    }
</style>