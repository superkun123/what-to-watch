import axios from "axios"
import { APIRoute, API_URL, FAKE_LOGIN_URL, FAKE_POSTCOMMENT_URL} from "@/consts"
import type { AuthHeader } from "@/types/types";

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

export function getSimilarFilms(id: string | string[]) {
    return instance.get(`${APIRoute.Films}/${id}${APIRoute.SimilarFilms}`)
}

export function getFilmPromo() {
    return instance.get(APIRoute.Promo)
}

export function getFilmReviews(id: string | string[]) {
    return instance.get(`${APIRoute.Comments}/${id}`)
}

export function login(authHeader:AuthHeader) {
    return instance.post(FAKE_LOGIN_URL, {
        username: "mor_2314",
        password: "83r5^_"
    })
}

export function postReview(text:string, rating:number) {
    return instance.post(FAKE_POSTCOMMENT_URL, {
        reviewText: text,
        rating: rating
    })
}