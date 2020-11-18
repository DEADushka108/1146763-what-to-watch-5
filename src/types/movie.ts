export interface Movie {
  id: number;
  isFavorite: boolean;
  title: string;
  genre: string;
  releaseDate: number;
  runTime: number;
  cover: string;
  poster: string;
  previewSrc: string;
  videoSrc: string;
  rating: {
    score: number;
    count: number;
  };
  description: string;
  director: string;
  cast: string[];
  backgroundImage: string;
  backgroundColor: string;
}
