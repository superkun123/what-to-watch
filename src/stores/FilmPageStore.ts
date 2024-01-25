import { defineStore } from "pinia";
import { getFilm } from "@/api/films";
import type { movieData } from "@/types/types";
import { ref, shallowRef } from "vue";
import { useFilmsStore } from "./FilmsPreviewStore";
import type { CatalogMovieData } from "@/types/types";

export const useFilmPageStore = defineStore('filmPageStore', () => {
    const filmData = shallowRef<movieData | null>(null)
    const similarFilmsData = shallowRef<CatalogMovieData | null | undefined>(null)
    const filmGenre = ref<string | null>(null)
    const filmId = ref<string | null>(null)
    const isLoaded = ref<boolean>(false)
    const isError = ref<boolean>(false)

    function $reset() {
        filmData.value = null;
        filmGenre.value = null;
        similarFilmsData.value = null;
        filmId.value = null;
        isLoaded.value = false;
        isError.value = false; 
    }
    
    async function fetchFilmData(id:string | string[]) {
        try {
            try {
                const response = await getFilm(id);
                filmData.value = response.data as movieData;
                filmGenre.value = filmData.value.genre;
                filmId.value = filmData.value.id;
            } catch (error) {
                isError.value = true;
            }
            getSimilarFilms();
        } finally {
            isLoaded.value = true;
        }
    }

    const getSimilarFilms = async function()  {
        const filmsStore = useFilmsStore();
        if (!filmsStore.fetchedfilmsPreviewList) {
            await filmsStore.fetchFilmsPreview()
        }
        similarFilmsData.value = filmsStore && filmsStore.fetchedfilmsPreviewList ?
        filmsStore.fetchedfilmsPreviewList.filter((item) => item.genre === filmGenre.value && item.id !== filmId.value) 
        : null;
    }

    return {filmData, isLoaded, isError, similarFilmsData, fetchFilmData, getSimilarFilms, $reset}
})