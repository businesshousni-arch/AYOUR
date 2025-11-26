import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Globe, Search } from 'lucide-react';
import { useGlobal } from '../../context/GlobalContext';

const Header = () => {
  const { language, setLanguage, currency, setCurrency, cart, setIsCartOpen, t, dir } = useGlobal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Promo Bar */}
      <div className="bg-siral-900 text-siral-50 text-[10px] md:text-xs py-2.5 text-center relative overflow-hidden tracking-widest font-bold">
        <div className="absolute inset-0 shimmer-bg opacity-30 animate-shimmer"></div>
        <p className="relative z-10 font-sans uppercase">
          {language === 'ar' ? 'شحن مجاني للطلبات فوق 500 درهم' : 'Free Shipping on orders over 500 MAD'}
        </p>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 border-b ${
          isScrolled ? 'bg-white/95 border-siral-200/50 shadow-sm backdrop-blur-md py-3' : 'bg-siral-50 border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-siral-800 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-siral-800 tracking-tighter hover:opacity-80 transition-opacity">
            Siralbanna<span className="text-siral-500 text-4xl">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 font-sans text-sm font-bold uppercase tracking-widest text-siral-900">
            <Link to="/" className="hover:text-siral-600 transition-colors relative group">
                {t('nav_home')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-siral-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/#shop" className="hover:text-siral-600 transition-colors relative group">
                {t('nav_shop')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-siral-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/recipes" className="hover:text-siral-600 transition-colors relative group">
                {t('nav_recipes')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-siral-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/blog" className="hover:text-siral-600 transition-colors relative group">
                {t('nav_blog')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-siral-500 transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
             <button className="hidden md:block text-siral-800 hover:text-siral-600">
                <Search size={20} strokeWidth={1.5} />
             </button>
             
             <div className="h-4 w-[1px] bg-siral-300 hidden md:block"></div>

            {/* Currency Toggle */}
            <button 
              onClick={() => setCurrency(currency === 'MAD' ? 'EUR' : currency === 'EUR' ? 'USD' : 'MAD')}
              className="text-xs font-bold text-siral-600 hover:text-siral-900 transition-colors w-8"
            >
              {currency}
            </button>

            {/* Language Toggle */}
            <button 
              onClick={() => setLanguage(language === 'en' ? 'fr' : language === 'fr' ? 'ar' : 'en')}
              className="flex items-center gap-1 text-xs font-bold text-siral-600 hover:text-siral-900 transition-colors"
            >
              <Globe size={16} strokeWidth={1.5} />
              <span className="uppercase">{language}</span>
            </button>

            {/* Cart Trigger */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative text-siral-800 hover:text-siral-600 transition-colors"
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-siral-700 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-sm animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-siral-50/95 backdrop-blur-xl pt-24 px-8 animate-fade-in">
          <nav className="flex flex-col gap-8 text-2xl font-serif text-siral-900 text-center">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-siral-600">{t('nav_home')}</Link>
            <Link to="/#shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-siral-600">{t('nav_shop')}</Link>
            <Link to="/recipes" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-siral-600">{t('nav_recipes')}</Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-siral-600">{t('nav_blog')}</Link>
            <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-siral-600">{t('nav_contact')}</Link>
          </nav>
          
          <div className="mt-12 flex justify-center gap-8 text-siral-500">
             <button>Search</button>
             <button>Account</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;