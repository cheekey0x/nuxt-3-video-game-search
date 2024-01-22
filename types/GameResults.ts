export type GameResults = {
  results: {
    id: string;
    name: string;
    genres: {
      name: string;
    }[];
    concepts: {
      id: string;
      name: string;
    }[];
    original_release_date: string;
    deck: string | null;
    summary: string;
    image: {
      original_url: string;
    };
  }
}