export type TProductSize = 'S' | 'M' | 'L';

export type TProductColor = 'red' | 'blue' | 'green';

export type TSortBy = 'title' | 'category' | 'price';

export type TSortOrder = 'asc' | 'desc';
type TRating = {
  count: number;
  rate: number;
};
export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity?: number;
  size?: TProductSize;
  color?: TProductColor;
  rating: TRating;
};
