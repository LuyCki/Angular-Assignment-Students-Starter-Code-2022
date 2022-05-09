export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageLink: string;
  isPremium: boolean
  isAvailable: boolean;
  created: Date;
}
