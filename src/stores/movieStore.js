import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMovieStore = defineStore('movieStore', () => {
  const allMovies = ref([]);
  const selectedMovie = ref(null);
  const genreQuery = ref('');
  const searchQuery = ref('');

  const setSelectedMovie = (id) => {
    selectedMovie.value = id;
  };

  const fetchMovies = async () => {
    let pageCount = 1;

    const response = await fetch('https://moviesapi.codingfront.dev/api/v1/movies?page=1');
    if (response.ok) {
      const result = await response.json();
      pageCount = result.metadata.page_count;
      allMovies.value.push(...result.data);
    }

    for (let i = 2; i <= pageCount; i++) {
      const response = await fetch(`https://moviesapi.codingfront.dev/api/v1/movies?page=${i}`);
      if (response.ok) {
        const result = await response.json();
        allMovies.value.push(...result.data);
      }
    }
  };

  const favoriteList = ref([]);
  const toggleFavorite = (movieId) => {
    const index = favoriteList.value.findIndex(fav => fav === movieId);
    if (index === -1) {
        favoriteList.value.push(movieId);
    } else {
        favoriteList.value.splice(index, 1);
    }
  };

  const isFavorite = (movieId) => {
    return favoriteList.value.some(fav => fav === movieId);
  };

  return { allMovies, fetchMovies, setSelectedMovie, selectedMovie, genreQuery, searchQuery, favoriteList, toggleFavorite, isFavorite };
});
