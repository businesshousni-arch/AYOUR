import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Currency, Language, CartItem, Product } from '../types';

interface GlobalContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  convertPrice: (priceInMad: number) => string;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

import { TRANSLATIONS } from '../data/mockData';

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('MAD');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const t = (key: string): string => {
    return TRANSLATIONS[key]?.[language] || key;
  };

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const convertPrice = (priceInMad: number): string => {
    let price = priceInMad;
    let symbol = 'MAD';

    if (currency === 'EUR') {
      price = priceInMad * 0.092;
      symbol = '€';
    } else if (currency === 'USD') {
      price = priceInMad * 0.1;
      symbol = '$';
    }

    // Format RTL currency differently
    if (language === 'ar') {
      return `${price.toFixed(2)} ${currency === 'MAD' ? 'د.م' : symbol}`;
    }
    return `${symbol}${price.toFixed(2)}`;
  };

  return (
    <GlobalContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        convertPrice,
        t,
        dir,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useGlobal must be used within a GlobalProvider');
  return context;
};