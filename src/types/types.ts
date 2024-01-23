export type CatalogMovieCard = {
  genre: string
  id: string
  name: string
  previewImage: string
  previewVideoLink: string
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

export type CatalogMovieData = CatalogMovieCard[]
