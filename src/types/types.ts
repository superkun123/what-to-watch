export type CatalogMovieCard = {
  genre: string
  id: string
  name: string
  previewImage: string
  previewVideoLink: string
}

export type PromoFilm = {
  id: string
  name: string
  posterImage: string
  backgroundImage: string
  videoLink: string
  genre: string
  released: number
  isFavorite: boolean
}

export type VideoType = {
  src: string
  poster?: string
  width?: string
  height?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  videoFormat: string
}

export type movieData = {
  id: string
  name: string
  posterImage: string
  backgroundImage: string
  backgroundColor: string
  videoLink: string
  description: string
  rating: number
  scoresCount: number
  director: string
  starring: string[]
  runTime: number
  genre: string
  released: number
  isFavorite: boolean
}

export type movieDescription = {
  rating: number
  scoresCount: number
  description: string
  director: string
  starring: string[]
}

export type movieDetails = {
  director: string
  starring: string[]
  runtime: number
  genre: string
  release: number
}

export type FilterList = {
  fantasy: string,
  comedy: string,
  crime: string,
  action: string,
  drama: string,
  adventure: string
}

export type CatalogMovieData = CatalogMovieCard[]
