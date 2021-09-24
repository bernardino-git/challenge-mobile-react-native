import { action } from 'typesafe-actions';
import { ComicsTypes, IComic } from './types';

export const loadRequest = () => action(ComicsTypes.LOAD_REQUEST);

export const loadSuccess = (data: IComic[]) =>
  action(ComicsTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(ComicsTypes.LOAD_FAILURE);
