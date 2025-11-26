import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useGlobal } from '../../context/GlobalContext';

const Footer = () => {
  const { t } = useGlobal();
  
  return (
    <footer className="bg-siral-900 text-siral-100 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl text-siral-50 mb-4">Siralbanna.</h3>
            <p className="text-siral-300 text-sm leading-relaxed">
              Bringing the authentic flavors of Moroccan heritage to your kitchen. Ethically sourced, premium quality.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 text-siral-200">Shop</h4>
            <ul className="space-y-2 text-sm text-siral-300">
              <li>Pure Spices</li>
              <li>Signature Blends</li>
              <li>Gift Sets</li>
              <li>Accessories</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 text-siral-200">Legal</h4>
            <ul className="space-y-2 text-sm text-siral-300">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Shipping Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 text-siral-200">Connect</h4>
            <div className="flex gap-4 mb-4">
              <Instagram size={20} className="hover:text-siral-400 cursor-pointer" />
              <Facebook size={20} className="hover:text-siral-400 cursor-pointer" />
              <Twitter size={20} className="hover:text-siral-400 cursor-pointer" />
            </div>
            <p className="text-sm text-siral-400">hello@siralbanna.com</p>
          </div>
        </div>
        
        <div className="border-t border-siral-800 mt-12 pt-8 text-center text-sm text-siral-400">
          <p>&copy; {new Date().getFullYear()} Siralbanna. {t('footer_crafted')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;