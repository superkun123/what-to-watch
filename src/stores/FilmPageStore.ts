import { defineStore } from "pinia";
import { getFilm, getSimilarFilms, getFilmReviews } from "@/api/films";
import type { MovieData, Comments } from "@/types/types";
import { shallowReactive } from "vue";
import type { CatalogMovieData } from "@/types/types";

export const useFilmPageStore = defineStore('filmPageStore', () => {

    const filmResponse = shallowReactive({
        data: <MovieData | null>(null),
        isError: <boolean>(false),
        isLoaded: <boolean>(false)
    })

    const similarFilmsResponse = shallowReactive({
        data: <CatalogMovieData | null>(null),
        isError: <boolean>(false),
        isLoaded: <boolean>(false)
    })

    const filmCommentsResponse = shallowReactive({
        data: <Comments | null>(null),
        isError: <boolean>(false),
        isLoaded: <boolean>(false)
    })

    function $reset() {
        filmResponse.data = null;
        similarFilmsResponse.data = null;
        filmResponse.isError, similarFilmsResponse.isError = false;
        filmResponse.isLoaded, similarFilmsResponse.isLoaded = false;
    }

    async function fetchFilmData(id: string) {
        try {
            try {
                const response = await getFilm(id);
                filmResponse.data = response.data as MovieData;
            } catch (error) {
                filmResponse.isError = true;
            }
        } finally {
            filmResponse.isLoaded = true;
        }
    }

    async function fetchSimilarFilmsData(id: string) {
        try {
            try {
                const response = await getSimilarFilms(id);
                similarFilmsResponse.data = response.data as CatalogMovieData;
            } catch (error) {
                similarFilmsResponse.isError = true;
            }
        } finally {
            similarFilmsResponse.isLoaded = true;
        }
    }

    async function fetchFilmComments(id:string) {
        try {
            try {
                const response = await getFilmReviews(id);
                filmCommentsResponse.data = response.data as Comments;
            } catch (error) {
                filmCommentsResponse.isError = true;
            }
        } finally {
            filmCommentsResponse.isLoaded = true;
        }
    }

    return { filmResponse, similarFilmsResponse, filmCommentsResponse, fetchFilmData, fetchSimilarFilmsData, fetchFilmComments, $reset }
})