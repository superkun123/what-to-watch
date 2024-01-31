import { defineStore } from "pinia";
import { getFilms, getFilmPromo } from "@/api/films";
import type { CatalogMovieData, PromoFilm } from "@/types/types";
import { shallowRef } from "vue";

export const useFilmsStore = defineStore('previewFilms', () => {
    const filmsListResponse = shallowRef({
        data: <CatalogMovieData | null>(null),
        isError: <boolean>(false),
        isLoaded: <boolean>(false)
    })

    const filmPromoResponse = shallowRef({
        data: <PromoFilm | null>(null),
        isError: <boolean>(false),
        isLoaded: <boolean>(false)
    })

    async function fetchFilmsPreview() {
        try {
            try {
                const response = await getFilms();
                filmsListResponse.value.data = response.data as CatalogMovieData;
            } catch (error) {
                filmsListResponse.value.isError = true;
            }
        } finally {
            filmsListResponse.value.isLoaded = true;
        }
    }

    async function fetchFilmPromo() {
        try {
            try {
                const response = await getFilmPromo();
                filmPromoResponse.value.data = response.data as PromoFilm;
            } catch (error) {
                filmPromoResponse.value.isError = true;
            }
        } finally {
            filmPromoResponse.value.isLoaded = true;
        }
    }

    return { filmsListResponse, filmPromoResponse, fetchFilmsPreview, fetchFilmPromo }
})