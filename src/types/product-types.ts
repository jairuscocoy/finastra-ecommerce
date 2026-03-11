type TProductSize = 'S' | 'M' | 'L';

type TProductColor = 'red' | 'blue' | 'green';

export type TSortBy = 'title' | 'category' | 'price'

export type TSortOrder = 'asc' | 'desc';

export type TProduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity?: number;
  size?: TProductSize;
  color?: TProductColor;
};
