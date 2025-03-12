<script setup>
    import ListHeader from '@/components/ListHeader.vue';
    import SearchBar from '@/components/SearchBar.vue'
    import ItemCard from '@/components/ItemCard.vue';
    import { computed } from 'vue';
    import { useMovieStore } from '@/stores/movieStore';
    
    const movieStore = useMovieStore();
    const genreQuery = computed(() => movieStore.genreQuery);
    const searchQuery = computed(() => movieStore.searchQuery);
    const filteredMovies = computed(() => {
        if (searchQuery.value) {
            return movieStore.allMovies.filter((movie) =>
                movie.title.toLowerCase().includes(searchQuery.value.toLowerCase().trim())
            );
        } 
        if (genreQuery.value) {
            return movieStore.allMovies.filter((movie) =>
                movie.genres.some((item) => item.includes(genreQuery.value))
            );
        }
        return movieStore.allMovies;
    });
    const isFound = computed(() => filteredMovies.value.length > 0);
</script>

<template>
    <ListHeader :genreTitle="genreQuery" :searchTitle="searchQuery"/>
    <SearchBar />
    <div v-if="!isFound">No Results Found</div>
    <div v-else class="items_wrapper">
        <ItemCard v-for="movie in filteredMovies" :movieData="movie" />
    </div>
</template>

<style scoped>
    @media screen and (min-width: 450px) {
        .items_wrapper {
            padding-bottom: 50px;
        }
    }
</style>
