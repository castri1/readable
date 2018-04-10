import * as ReadableApi from '../utils/api';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const fetchCategories = () => dispatch => (
  ReadableApi
    .Categories.all().then(categories => dispatch({
      type: LOAD_CATEGORIES,
      categories
    }))
)