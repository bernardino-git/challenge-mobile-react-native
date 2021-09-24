export interface IComic {
  id: number;
  title: string;
  description: string | null;
  thumbnail: {
    path: string;
  };
}
