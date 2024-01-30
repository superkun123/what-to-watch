import axios from "axios"
import { APIRoute, API_URL, FAKE_LOGIN_URL } from "@/consts"
import type { authHeader } from "@/types/types";

const instance = axios.create({
    baseURL: API_URL,
    timeout: 5000,
});

export function getFilms() {
    return instance.get(APIRoute.Films)
}

export function getFilm(id: string | string[]) {
    return instance.get(`${APIRoute.Films}/${id}`)
}

export function getFilmPromo() {
    return instance.get(APIRoute.Promo)
}

export function getFilmReviews(id: string | string[]) {
    return instance.get(`${APIRoute.Comments}/${id}`)
}

export function login(authHeader:authHeader) {
    return instance.post(FAKE_LOGIN_URL, {
        username: "mor_2314",
        password: "83r5^_"
    })
}