import axios from "axios"
import { APIRoute, API_URL } from "@/consts"

export function getFilmsPromo () {
    return axios.get(API_URL + APIRoute.Films)
}

export function getFilmsById (id:string | string[]) {
    return axios.get(`${API_URL}${APIRoute.Films}/${id}`)
}