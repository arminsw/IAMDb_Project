<script setup>
    import { useMovieStore } from '@/stores/movieStore';
    const movieStore = useMovieStore();
    const props = defineProps(['movieData']);

    const toggleFavorite = (event) => {
        event.stopPropagation();
        movieStore.toggleFavorite(props.movieData.id);
    };
</script>

<template>
    <div>
        <img class="favorite_icon" 
        :src="movieStore.isFavorite(movieData.id) ? '/favoriteLiked.svg' : '/favorite.svg'" 
        alt="Favorite Button" 
        @click="toggleFavorite"/>
    </div>
</template>

<style scoped>
    .favorite_icon {
        width: 24px;
        cursor: pointer;
    }
</style>