<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useMovieStore } from '@/stores/movieStore';

    const router = useRouter();
    const movieStore = useMovieStore();
    const allGenres = ref('');
    const defaultGenres = ref('');
    const fetchGenres = async () => {
        const response = await fetch('https://moviesapi.codingfront.dev/api/v1/genres')
        if (response.ok) {
            const result = await response.json();
            allGenres.value = result;
            defaultGenres.value = result.slice(0,4);
        } else {
            alert('Error')
        }
    };
    fetchGenres();
    
    const status = ref(false);
    const buttonText = ref('Show More');
    const showMoreLess = () => {
        status.value ? buttonText.value = 'Show More' : buttonText.value = 'Show Less';
        status.value = !status.value;
    }

    const searchCategory = (genre) => {
        movieStore.genreQuery = genre;
        router.push('/list')
    }    
    
</script>

<template>
    <div class="category_wrapper">
        <ul class="flex">
            <li class="buttons" v-if="!status" v-for='genre in defaultGenres' :title="`Search for ${genre.name}`" @click="searchCategory(genre.name)">{{ genre.name }}</li>
            <li class="buttons" v-else v-for='genre in allGenres' :title="`Search for ${genre.name}`" @click="searchCategory(genre.name)">{{ genre.name }}</li>
            <li class="moreLessButton buttons" @click="showMoreLess">
                {{ buttonText }}
                <img class="arrow_img" src="/rightArrow.svg" alt="Right Arrow">
            </li>
        </ul>
    </div>
</template>

<style scoped>
    li {
        cursor: pointer;
    }
    
    .category_wrapper {
        padding: 0px 20px;
    }

    .flex {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .buttons {
        background: var(--c-blue);
        padding: 6px 12px;
        border-radius: 6px;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
    }

    .moreLessButton {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .arrow_img {
        width: 14px;
        margin-left: 6px;
    }

    @media screen and (min-width: 450px) {
        .category_wrapper {
            padding: 0px 100px;
        }
    }
</style>