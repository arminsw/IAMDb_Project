<script setup>
    import ListHeader from '@/components/ListHeader.vue';
    import SearchBar from '@/components/SearchBar.vue'
    import ItemCard from '@/components/ItemCard.vue';

    import { computed } from 'vue';
    import { useMovieStore } from '@/stores/movieStore';
    
    const movieStore = useMovieStore();

    const isFound = computed(() => {
        return filteredMoviesBySearch.value.length
    })

    const genreQuery = computed(() => movieStore.genreQuery);
    const filteredMoviesByGenre = computed(() => {
        return movieStore.allMovies.filter((movie) => {
            return movie.genres.some((item) => {
                return item.includes(genreQuery.value)
            })
        })
    });

    const searchQuery = computed(() => movieStore.searchQuery);
    const filteredMoviesBySearch = computed(() => {
        return movieStore.allMovies.filter((movie) => {
            return movie.title.toLowerCase().includes(searchQuery.value.toLowerCase().trim())
        })
    });
</script>

<template>
    <ListHeader :genreTitle="genreQuery" :searchTitle="searchQuery"/>
    <SearchBar />
    <div v-if="isFound === 0">
        No Results Found
    </div>
    <div v-else class="items_wrapper">
        <ItemCard v-if="searchQuery !== ''" v-for="movie in filteredMoviesBySearch" :movieData="movie"/>
        <ItemCard v-else-if="genreQuery !== ''" v-for="movie in filteredMoviesByGenre" :movieData="movie"/>
        <ItemCard v-else v-for="movie in movieStore.allMovies" :movieData="movie"/>
    </div>
</template>

<style scoped>
    

    @media screen and (min-width: 450px) {
        .items_wrapper {
            padding-bottom: 50px;
        }

    }
</style>
