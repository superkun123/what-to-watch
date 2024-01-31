import { defineStore } from "pinia";
import { getFilms, getFilmPromo } from "@/api/films";
import type { CatalogMovieData, PromoFilm } from "@/types/types";
import { shallowReactive } from "vue";

export const useFilmsStore = defineStore('previewFilms', () => {
    const filmsListResponse = shallowReactive({
        data: <CatalogMovieData | null>(null),
        isError: <boolean>(false),
        isLoaded: <boolean>(false)
    })

    const filmPromoResponse = shallowReactive({
        data: <PromoFilm | null>(null),
        isError: <boolean>(false),
        isLoaded: <boolean>(false)
    })

    async function fetchFilmsPreview() {
        try {
            try {
                const response = await getFilms();
                filmsListResponse.data = response.data as CatalogMovieData;
            } catch (error) {
                filmsListResponse.isError = true;
            }
        } finally {
            filmsListResponse.isLoaded = true;
        }
    }

    async function fetchFilmPromo() {
        try {
            try {
                const response = await getFilmPromo();
                filmPromoResponse.data = response.data as PromoFilm;
            } catch (error) {
                filmPromoResponse.isError = true;
            }
        } finally {
            filmPromoResponse.isLoaded = true;
        }
    }

    return { filmsListResponse, filmPromoResponse, fetchFilmsPreview, fetchFilmPromo }
})