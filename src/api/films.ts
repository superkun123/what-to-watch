import axios from "axios"
import { APIRoute, API_URL } from "@/consts"

export function getFilms() {
    return axios.get(API_URL + APIRoute.Films)
}

export function getFilm(id: string | string[]) {
    return axios.get(`${API_URL}${APIRoute.Films}/${id}`)
}

export function getFilmPromo() {
    return axios.get(API_URL + APIRoute.Promo)
}

export function getFilmReviews(id: string | string[]) {
    return axios.get(`${API_URL}${APIRoute.Comments}/${id}`)
}