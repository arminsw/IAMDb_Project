<script setup>
    import { onMounted } from 'vue';
    import { useMovieStore } from '@/stores/movieStore';

    const movieStore = useMovieStore();

    onMounted(() => {
        movieStore.fetchMovies();
    });
</script>

<template>
    <div class="container">
        <RouterView/>
    </div>
</template>