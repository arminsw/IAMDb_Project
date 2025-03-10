<script setup>
    import { computed } from 'vue';
    import { useMovieStore } from '@/stores/movieStore';
    const movieStore = useMovieStore();
    const props = defineProps(['movieData']);

    const toggleFavorite = () => {
        movieStore.toggleFavorite(props.movieData.id);
    };

    const text = computed(() => 
        movieStore.isFavorite(props.movieData.id) ? 'Remove from Favorite' : 'Add to Favorite'
    );
    

</script>

<template>
    <div class="favorite" :class="movieStore.isFavorite(movieData.id) ? 'active' : 'deactive'" @click="toggleFavorite">{{ text }}</div>
</template>

<style scoped>
    .favorite {
        border-radius: 12px;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        padding: 12px 24px;
        position: fixed;
        bottom: 12px;
        width: 406px;
        max-width: 100%;
        z-index: 2;
    }

    .active {
        background: var(--c-blue);
    }

    .deactive {
        background: var(--c-purple);
    }
</style>