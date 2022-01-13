import S from '@sanity/desk-tool/structure-builder'
import categories from './categories'

import { 
  MdMovieFilter, 
  MdOutlineLocalMovies, 
  MdOutlinePortrait, 
  MdOutlinePlayCircleOutline,
  MdSettingsSuggest 
} from 'react-icons/md'


export default S.listItem()
  .title('Movie Database Example')
  .icon(MdMovieFilter)
  .child(
    S.list()
      .title('Movie Database Example')
      .items([
        S.documentTypeListItem('movie')
          .title('Movies')
          .icon(MdOutlineLocalMovies),
        S.documentTypeListItem('person')
          .title('People')
          .icon(MdOutlinePortrait),
        S.documentTypeListItem('screening')
          .title('Screenings')
          .icon(MdOutlinePlayCircleOutline),
      ])
  )