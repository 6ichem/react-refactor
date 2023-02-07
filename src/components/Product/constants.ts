export interface ProductType {
  id?: number;
  title: string;
  description: string;
  price: number;
  isFavorite?: boolean;
  rating?: { rate: number; count: number };
}
