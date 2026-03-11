import type { TProduct, TSortBy, TSortOrder } from '../types/product-types';

export const sortProducts = (
  products: TProduct[],
  sortBy: TSortBy = 'title',
  sortOrder: TSortOrder = 'asc',
): TProduct[] => {
  const sorted = [...products].sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];

    if (typeof valA === 'string' && typeof valB === 'string')
      return valA.localeCompare(valB);
    if (typeof valA === 'number' && typeof valB === 'number')
      return valA - valB;

    return 0;
  });

  return sortOrder === 'desc' ? sorted.reverse() : sorted;
};
