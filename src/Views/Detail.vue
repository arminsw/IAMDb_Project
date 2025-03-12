<script setup>
    import FavoriteButton from '@/components/FavoriteButton.vue';
    import BackButton from '@/components/BackButton.vue';
    import DetailTitle from '@/components/DetailTitle.vue';
    import DetailCover from '@/components/DetailCover.vue';
    import DetailDetail from '@/components/DetailDetail.vue';
    import { ref } from 'vue';
    import { useMovieStore } from '@/stores/movieStore';

    const movieStore = useMovieStore();
    const movieId = movieStore.selectedMovie;
    
    const movieDetail = ref(null);
    const fetchDetails = async () => {
        const response = await fetch(`https://moviesapi.codingfront.dev/api/v1/movies/${movieId}`);
        if (response.ok) {
            const result = await response.json();
            movieDetail.value = result;
        }
    }
    fetchDetails();
</script>

<template>
    <div v-if="movieDetail">
        <img class="background" :src="`${movieDetail.images}`" alt="Cover Picture">
        <div class="back"></div>
        <FavoriteButton class="favorite" :movieData="movieDetail"/>
        <div class="content_wrapper">
            <RouterLink to="/list" title="Back to List"><BackButton/></RouterLink>
            <div class="content">
                <div class="components">
                    <DetailTitle class="title_comp" :titleData="movieDetail"/>
                    <DetailCover class="cover_comp" :coverData="movieDetail"/>
                    <DetailDetail class="detail_comp" :detailData="movieDetail"/>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p class="loading">Loading Movie Details...</p>
    </div>
</template>

<style scoped>
    .loading {
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        line-height: 1;
        margin-top: 30%
    }
    .background {
        object-fit: cover;
        object-position: top;
        width: 100%;
        height: 380px;
        position: absolute;
        top: 0px;
        right: 0px;
        left: 0px;
    }

    .back {
        width: 100%;
        height: 380px;
        position: absolute;
        top: 0px;
        right: 0px;
        left: 0px;
        background: linear-gradient(#070D2300, #070D23B2, #070D23E5, #070D23);
    }

    .content_wrapper {
        position: relative;
        margin-top: 32px;
    }

    .content {
        width: 100%;
        margin-top: 100px;
        position: relative;
    }

    .foo {
        width: 100%;
    }

    .favorite {
        display: block;
    }

    .detail_comp {
        margin-top: 18px;
    }

    @media screen and (min-width: 450px) {
        .content_wrapper {
            margin-top: 50px;
        }
        .favorite {
        display: none;
        }

        .cover_comp {
            position: absolute;
            top: 0px;
            left: 0px;
        }

        .components {
            width: 642px;
            margin-left: auto;
        }
    }
</style>