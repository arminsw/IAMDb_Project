<script setup lang="ts">
    import { ref, shallowRef, watch } from 'vue';
    import { useRouter } from 'vue-router';
    import { useSpeechRecognition } from '@vueuse/core'
    import { useMovieStore } from '@/stores/movieStore';

    const router = useRouter();
    const movieStore = useMovieStore();
    const query = ref('');
    const lang = shallowRef('en-US')
    const speech = useSpeechRecognition({ lang, continuous: true });
    const { isListening, start, stop, result } = speech;

    watch(result, (newResult) => {
        if (newResult) {
            query.value = newResult;
        }
    });

    const search = () => {
        movieStore.genreQuery = '';
        movieStore.searchQuery = query.value;
        router.push('/list');
    }
</script>

<template>
    <div class="searchBar_bundle">
        <img class="search_img" src="/searchIcon.svg" alt="Search Icon" title="Search" @click="search">
        <input class="searchBar" type="text" v-model="query" @keydown.enter="search">
        <div class="microphone_img_wrapper">
            <img class="microphone_img" :src="isListening ? '/microphoneRed.svg' : '/microphone.svg'" alt="Microphone Icon" title="Search by Voice" @click="isListening ? stop() : start()">
        </div>
    </div>
</template>

<style scoped>
    .searchBar_bundle {
        position: relative;
        margin: 32px 0px;
    }

    .searchBar {
        width: 100%;
        height: 48px;
        padding: 12px 72px 12px 56px;
        border-radius: 16px;
        background: var(--c-blue);
        outline-style: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: var(--c-fonts);
        border: none;
    }

    .search_img {
        width: 24px;
        position: absolute;
        top: 12px;
        left: 16px;
    }
    
    .microphone_img_wrapper {
        width: 40px;
        position: absolute;
        top: 12px;
        right: 16px;
        border-left: 2px solid var(--c-background);
    }
    
    .microphone_img {
        width: 24px;
        margin-left: auto;
    }
    
    .search_img, .microphone_img {
        cursor: pointer;
    }
</style>