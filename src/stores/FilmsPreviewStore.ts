import { defineStore } from "pinia";
import { getFilms, getFilmPromo } from "@/api/films";
import type { CatalogMovieData, PromoFilm  } from "@/types/types";
import { ref, shallowRef } from "vue";

export const useFilmsStore = defineStore('previewFilms', () => {
    const fetchedfilmsPreviewList = shallowRef<CatalogMovieData | null>(null)
    const filmPromoData = shallowRef<PromoFilm | null>(null)
    const isLoaded = ref<boolean>(false)
    const isError = ref<boolean>(false)
    const promoIsLoaded = ref<boolean>(false)
    const promoIsError = ref<boolean>(false)
    
   async function fetchFilmsPreview()  {
        try {
           try {
               const response = await getFilms();
               fetchedfilmsPreviewList.value = response.data as CatalogMovieData;
           } catch (error) {
               isError.value = true;
           }
       } finally {
           isLoaded.value = true;
       }
    }

    async function fetchFilmPromo() {
        try {
            try {
                const response = await getFilmPromo();
                filmPromoData.value = response.data as PromoFilm;
            } catch (error) {
                promoIsError.value = true;
            }
        } finally {
            promoIsLoaded.value = true;
        }
    }

    return {fetchedfilmsPreviewList, filmPromoData, isLoaded, isError, promoIsLoaded, promoIsError, fetchFilmsPreview, fetchFilmPromo}
})