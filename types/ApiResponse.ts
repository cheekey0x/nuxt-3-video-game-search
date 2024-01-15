import type { Game } from "./Game";

export type ApiResponse = {
  page: number;
  results: Game[];
  total_pages: number;
  total_results: number;
}