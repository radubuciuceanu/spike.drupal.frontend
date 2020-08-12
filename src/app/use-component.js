import { Collection } from 'src/app/collection-common'
import { Movie } from 'src/app/movie-common'
import { Season } from 'src/app/season-common'

export const useComponent = ({ entityBundle }) => {
  if (entityBundle === 'collection') {
    return Collection
  }

  if (entityBundle === 'show') {
    return Collection
  }

  if (entityBundle === 'movie') {
    return Movie
  }

  if (entityBundle === 'season') {
    return Season
  }

  return null
}
