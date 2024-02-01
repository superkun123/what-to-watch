export enum APIRoute {
    Films = '/films',
    Favorite = '/favorite',
    Promo = '/promo',
    Login = '/login',
    Logout = '/logout',
    Comments = '/comments',
    SimilarFilms = '/similar'
}

export const movieItemTabsTitles = ['Overview', 'Details', 'Reviews']
export const ratingTitle = ['Must watch', 'Good', 'Not great not terrible', 'terrible', 'horror has a face']

export const API_URL = 'https://13.design.pages.academy/wtw';
export const FAKE_LOGIN_URL = 'https://fakestoreapi.com/auth/login';
export const REQUEST_TIMEOUT = 5000;
export const DEFAULT_TAB = 'Overview';
export const DEFAULT_GENRE = 'All';
export const DEFAULT_FILMS_COUNT = 8;
export const monthsName = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];