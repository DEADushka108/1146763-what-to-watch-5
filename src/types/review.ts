export interface Review {
  id: number;
  author: {
    id: number;
    name: string;
  };
  text: string;
  date: string;
  rating: number;
}
