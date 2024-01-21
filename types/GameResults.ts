export type GameResults = {
  results: {
    id: string;
    name: string;
    genres: {
      genre: string;
    }[];
    concepts: string,
    original_release_date: string;
    deck: string | null;
    summary: string;
    image: {
      original_url: string;
    };
  }
}