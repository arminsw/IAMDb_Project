<script setup>
    import { useMovieStore } from '@/stores/movieStore';
    import { ref } from 'vue';
    const movieStore = useMovieStore();
    const props = defineProps(['movieData']);
    const isHovered = ref(false);
    const toggleFavorite = (event) => {
        event.stopPropagation();
        movieStore.toggleFavorite(props.movieData.id);
    };
</script>

<template>
    <div>
        <img class="favorite_icon" 
        :src="isHovered 
                ? (movieStore.isFavorite(movieData.id) ? '/favoriteLiked.svg' : '/favoriteHover.svg') 
                : (movieStore.isFavorite(movieData.id) ? '/favoriteLiked.svg' : '/favorite.svg')" 
        alt="Favorite Button" 
        @click="toggleFavorite"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"/>
    </div>
</template>

<style scoped>
    .favorite_icon {
        width: 24px;
        cursor: pointer;
    }
</style>