import * as ReadableApi from '../utils/api';
import asyncRequestAction from './asyncRequestAction';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const fetchCategories = () => asyncRequestAction(
  ReadableApi.Categories.all,
  categories => ({
    type: LOAD_CATEGORIES,
    categories
  }));