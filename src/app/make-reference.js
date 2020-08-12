import { Movie } from 'src/app/movie'
import { Season } from 'src/app/season'

export const makeReference = ({ entityBundle }) => {
  if (entityBundle === 'movie') {
    return Movie
  }

  if (entityBundle === 'season') {
    return Season
  }

  return null
}
