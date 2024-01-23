import { defineStore } from "pinia";
import { getFilmsPromo } from "@/api/films";
import type { CatalogMovieData } from "@/types/types";
import { computed, ref, shallowRef } from "vue";
import type { AxiosResponse, AxiosError} from 'axios';
import { DEFAULT_FILMS_COUNT } from "@/consts";
import { DEFAULT_GENRE } from "@/consts";

export const useFilmsStore = defineStore('previewFilms', () => {
    const fetchedfilmsPreviewList = shallowRef<CatalogMovieData | null>(null)
    const filterGenre = ref<string>(DEFAULT_GENRE)
    const isLoaded = ref<boolean>(false)
    const isError = ref<boolean>(false)
    const filmsShowedCount = ref<number>(DEFAULT_FILMS_COUNT)
    
   async function fetchFilmsPreview()  {
        return getFilmsPromo().then((response:AxiosResponse) => {
            fetchedfilmsPreviewList.value = response.data as CatalogMovieData
        })
        .catch((error:AxiosError) => {
            isError.value = true;
        })
        .finally(() => {
            isLoaded.value = true
        })
    }

    function changeFilterGenre(genreTitle:string) {
        filterGenre.value = genreTitle
    }

    function updateShowedFilmsCount(reset:boolean = false) {
        if (reset) {
            return filmsShowedCount.value = DEFAULT_FILMS_COUNT
        } else {
            return filmsShowedCount.value = filmsShowedCount.value + DEFAULT_FILMS_COUNT
        }
    }

    const filteredFilmsByGenre = computed(() => {
        if (filterGenre.value === DEFAULT_GENRE) {
            return fetchedfilmsPreviewList.value
        } else {
            return fetchedfilmsPreviewList.value ? fetchedfilmsPreviewList.value.filter((elem) => elem.genre === filterGenre.value) : null
        }
    }) 

    const filteredFilmsByGenreLength = computed(() => {
        return filteredFilmsByGenre.value ?  filteredFilmsByGenre.value.length : 0
    })

    const shortListFilms = computed(() => filteredFilmsByGenre.value ? filteredFilmsByGenre.value.slice(0, filmsShowedCount.value) : null)

    return {fetchedfilmsPreviewList, updateShowedFilmsCount, filmsShowedCount, isLoaded, isError, fetchFilmsPreview, changeFilterGenre, shortListFilms, filteredFilmsByGenre, filterGenre, filteredFilmsByGenreLength}
})