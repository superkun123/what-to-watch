import { defineStore } from "pinia";
import { getFilmsById } from "@/api/films";
import type { movieData } from "@/types/types";
import { ref, shallowRef } from "vue";
import type { AxiosResponse, AxiosError} from 'axios';
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
        isLoaded.value = false;
        isError.value = false; 
    }
    
    function fetchFilmData(id:string | string[]) {
        getFilmsById(id).then((response:AxiosResponse) => {
            filmData.value = response.data as movieData
            filmGenre.value = filmData.value.genre
            filmId.value = filmData.value.id
        })
        .catch((error:AxiosError) => {
            isError.value = true;
        })
        .then(() => {
            getSimilarFilms();
        })
        .finally(() => {
            isLoaded.value = true
        })
    }

    const getSimilarFilms = function()  {
        const filmsStore = useFilmsStore();
        if (!filmsStore.fetchedfilmsPreviewList) {
            filmsStore.fetchFilmsPreview().then(() => {
                similarFilmsData.value = filmsStore?.fetchedfilmsPreviewList?.filter((item) => item.genre === filmGenre.value && item.id !== filmId.value); 
            })
        } else {
            similarFilmsData.value = filmsStore.fetchedfilmsPreviewList.filter((item) => item.genre === filmGenre.value && item.id !== filmId.value);
        }
    }

    return {filmData, filmGenre, isLoaded, isError, similarFilmsData, fetchFilmData, getSimilarFilms, $reset}
})