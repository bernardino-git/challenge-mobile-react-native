/**
 * Action types
 */
 export enum ComicsTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface IComic {
  id: number;
  title: string;
  description: string | null;
  thumbnail: {
    path: string;
  };
}

/**
 * State type
 */
export interface ComicsState {
  readonly data: IComic[]
  readonly loading: boolean
  readonly error: boolean
}