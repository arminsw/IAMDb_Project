<script setup>
    import RatingCircle from '@/components/RatingCircle.vue';
    const data = defineProps(['ratingData'])
    const formattedRatings = JSON.parse(data.ratingData.ratings).map(rating => `${rating.Value} on ${rating.Source}`);    
</script>

<template>
    <div class="content_wrapper">
        <div class="imdb_rating_wrapper">
            <RatingCircle :imdbRating="ratingData.imdb_rating"/>
            <div class="imdb_rating">
                <p class="imdb_rating_number">{{ ratingData.imdb_votes }}</p>
                <p class="imdb_rating_text">ratings on IMDB</p>
            </div>
        </div>
        <div class="other_rating_wrapper">
            <p>{{ formattedRatings[1] }}</p>
            <p>{{ formattedRatings[2] }}</p>
        </div>
    </div>
</template>

<style scoped>
    .content_wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .imdb_rating_wrapper {
        display: flex;
        align-items: center;
        justify-content: start;
        flex-wrap: wrap;
        margin: 18px 0px;
    }

    .imdb_rating {
        margin-left: 18px;
    }

    .imdb_rating_number {
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        font-family: var(--f-roboto);
        opacity: 80%;
    }

    .imdb_rating_text {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        font-family: var(--f-roboto);
        opacity: 60%;
        margin-top: 6px;
    }

    .other_rating_wrapper {
        font-size: 13px;
        font-weight: 400;
        line-height: 24px;
        opacity: 50%;
    }
    @media screen and (min-width: 450px) {
        .content_wrapper {
            width: 210px;
        }

        .imdb_rating_wrapper {
            margin: 30px 0px;
        }
    }
</style>