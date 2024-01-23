import { defineStore } from "pinia";
import { getFilmsPromo } from "@/api/films";
import type { CatalogMovieData } from "@/types/types";
import { ref, shallowRef } from "vue";

export const useFilmsStore = defineStore('previewFilms', () => {
    const fetchedfilmsPreviewList = shallowRef<CatalogMovieData | null>(null)
    const isLoaded = ref<boolean>(false)
    const isError = ref<boolean>(false)
    
   async function fetchFilmsPreview()  {
        try {
           try {
               const response = await getFilmsPromo();
               fetchedfilmsPreviewList.value = response.data as CatalogMovieData;
           } catch (error) {
               isError.value = true;
           }
       } finally {
           isLoaded.value = true;
       }
    }

    return {fetchedfilmsPreviewList, isLoaded, isError, fetchFilmsPreview}
})