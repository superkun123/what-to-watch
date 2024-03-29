import { defineStore } from "pinia";
import { ref } from "vue";
import { login } from "@/api/api";
import type { AuthHeader } from "@/types/types";


export const useAuthStore = defineStore('authStore', () => {
    const isAuth = ref<boolean>(false)
    const isLoaded = ref<boolean>(false)
    const isError = ref<boolean>(false)
    const isLoading = ref<boolean>(false);
    const token = ref<string | null>(null)

    function $reset() {
        isAuth.value = false;
        isLoaded.value = false;
        isError.value = false;
    }

    async function auth(authHeader:AuthHeader) {
        try {
            try {
                isLoading.value = true;
                const response = await login(authHeader);
                token.value = response.data.token
                localStorage.setItem("token", token.value ?? '');
                isAuth.value = true;
            } catch (error) {
                isLoading.value = false;
                isError.value = true;
            }
        } finally {
            isLoading.value = false;
            isLoaded.value = true;
        }
    }

    if (localStorage.getItem("token")) {
        isAuth.value = true;
    }

    return { isAuth, isLoaded, isError, isLoading, token, $reset, auth }
})