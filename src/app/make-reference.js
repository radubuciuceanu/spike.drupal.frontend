import { Movie } from 'src/app/movie-common'
import { Season } from 'src/app/season-common'

export const makeReference = ({ entityBundle }) => {
  if (entityBundle === 'movie') {
    return Movie
  }

  if (entityBundle === 'season') {
    return Season
  }

  return null
}
