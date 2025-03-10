<script setup>
    import Favorite from '@/components/FavoriteHeart.vue';
    import { useMovieStore } from '@/stores/movieStore';
    import { useRouter } from 'vue-router';
    
    defineProps(['movieData'])
    const router = useRouter();
    const movieStore = useMovieStore();
    const goToDetail = (id) => {
        movieStore.setSelectedMovie(id);
        router.push('/detail')        
    };
</script>

<template>
    <div class="card">
        <div class="cursor" @click="goToDetail(movieData.id)">
            <img class="picture" :src="`${movieData.poster}`" alt="Movie Cover">
        </div>
        <div class="info_wrapper cursor" @click="goToDetail(movieData.id)">
            <div class="info">
                <div>
                    <div class="title">
                        <h2 class="title_text">{{ movieData.title }}</h2>
                        <Favorite :movieData="movieData"/>
                    </div>
                    <div class="genre">{{ movieData.genres.join(', ') }}</div>
                </div>
                <div class="detail">
                    <div class="opacity">{{ movieData.year }}</div>
                    <div class="dot"></div>
                    <div class="opacity">{{ movieData.country }}</div>
                    <div class="dot"></div>
                    <div class="score">
                        <img class="score_img" src="/star.svg" alt="Star Picture">
                        <div class="opacity">{{ movieData.imdb_rating }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .cursor {
        cursor: pointer;
    }
    .info_wrapper {
        width: 100%;
    }
    .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--c-blue);
    }
    .card {
        width: 100%;
        display: flex;
        align-items: start;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--c-blue);
    }

    .card:last-child {
        border-bottom: none;
    }
    .picture {
        width: 122PX;
        height: 122PX;
        border-radius: 18PX;
        object-fit: cover;
    }

    .info {
        margin-left: 20px;
    }
    
    .title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .title_text {
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
    }
    .title_img {
        width: 24px;
        cursor: pointer;
    }
    .genre {
        font-size: 12px;
        font-weight: 300;
        line-height: 15px;
        opacity: 40%;
        display: inline;
    }
    .detail {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 10px;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
    }

    .opacity {
        opacity: 80%;
    }
    
    .score {
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .score_img {
        width: 14px;
    }

    @media screen and (min-width: 450px) {
        .picture {
            width: 137px;
            height: 137px;
        }
        .info {
            max-width: 763px;
        }

        .title {
            margin-top: 10px;
        }
    }
</style>