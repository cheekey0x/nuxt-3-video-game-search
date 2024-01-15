export type Game = {
  id: number;
  name: string;
  genre: string;
  platforms: {
    id: number;
    name: string;
  }[];
  release_date: string;
  aliases: string | null;
  summary: string;
  screenshot_path: string;
}