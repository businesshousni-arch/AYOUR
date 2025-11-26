export type Language = 'en' | 'fr' | 'ar';
export type Currency = 'MAD' | 'EUR' | 'USD';

export interface Product {
  id: string;
  slug: string;
  name: {
    en: string;
    fr: string;
    ar: string;
  };
  price: number; // In MAD
  category: 'spices' | 'blends' | 'gifts';
  description: {
    en: string;
    fr: string;
    ar: string;
  };
  image: string;
  rating: number;
  reviews: number;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Recipe {
  id: string;
  title: { en: string; fr: string; ar: string };
  image: string;
  ingredients: { en: string[]; fr: string[]; ar: string[] };
  instructions: { en: string; fr: string; ar: string };
}

export interface BlogPost {
  id: string;
  title: { en: string; fr: string; ar: string };
  excerpt: { en: string; fr: string; ar: string };
  date: string;
  image: string;
}

export interface TranslationState {
  [key: string]: {
    en: string;
    fr: string;
    ar: string;
  };
}