import type { Game } from "./Game";

export type Response = {
  page: number;
  results: Game[];
  total_pages: number;
  total_results: number;
}