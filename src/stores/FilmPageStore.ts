import { defineStore } from "pinia";
import { getFilm, getSimilarFilms } from "@/api/films";
import type { MovieData } from "@/types/types";
import { shallowRef } from "vue";
import type { CatalogMovieData } from "@/types/types";

export const useFilmPageStore = defineStore('filmPageStore', () => {

    const filmResponse = shallowRef({
        data: <MovieData | null>(null),
        isError: <boolean>(false),
        isLoaded: <boolean>(false)
    })

    const similarFilmsResponse = shallowRef({
        data: <CatalogMovieData | null>(null),
        isError: <boolean>(false),
        isLoaded: <boolean>(false)
    })

    function $reset() {
        filmResponse.value.data = null;
        similarFilmsResponse.value.data = null;
        filmResponse.value.isError, similarFilmsResponse.value.isError = false;
        filmResponse.value.isLoaded, similarFilmsResponse.value.isLoaded = false;
    }

    async function fetchFilmData(id: string) {
        try {
            try {
                const response = await getFilm(id);
                filmResponse.value.data = response.data as MovieData;
            } catch (error) {
                filmResponse.value.isError = true;
            }
        } finally {
            filmResponse.value.isLoaded = true;
        }
    }

    async function fetchSimilarFilmsData(id: string) {
        try {
            try {
                const response = await getSimilarFilms(id);
                similarFilmsResponse.value.data = response.data as CatalogMovieData;
            } catch (error) {
                similarFilmsResponse.value.isError = true;
            }
        } finally {
            similarFilmsResponse.value.isLoaded = true;
        }
    }

    return { filmResponse, similarFilmsResponse, fetchFilmData, fetchSimilarFilmsData, $reset }
})