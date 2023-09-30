import { Movie } from './movie';

export interface TmdbRes {
  page: 1;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
