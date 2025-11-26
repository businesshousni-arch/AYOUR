import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useGlobal } from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, convertPrice, t, language, dir } = useGlobal();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" dir={dir}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Drawer */}
      <div className={`relative w-full max-w-md bg-siral-50 h-full shadow-2xl flex flex-col transform transition-transform duration-300 ${language === 'ar' ? '-translate-x-0' : 'translate-x-0'}`}>
        <div className="p-4 border-b border-siral-200 flex justify-between items-center bg-white">
          <h2 className="text-xl font-serif font-bold text-siral-800">{t('cart_title')}</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-siral-500 hover:text-siral-800">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-siral-400">
              <p className="text-lg mb-4">{t('cart_empty')}</p>
              <button 
                onClick={() => setIsCartOpen(false)} 
                className="text-siral-700 underline"
              >
                {t('nav_shop')}
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white p-3 rounded-lg shadow-sm border border-siral-100">
                <img src={item.image} alt={item.name[language]} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif font-bold text-siral-800 line-clamp-1">{item.name[language]}</h3>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-siral-600 font-medium mt-1">{convertPrice(item.price)}</p>
                  
                  <div className="flex items-center gap-3 mt-3">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-full border border-siral-300 flex items-center justify-center text-siral-600 hover:bg-siral-100"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full border border-siral-300 flex items-center justify-center text-siral-600 hover:bg-siral-100"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-siral-200">
            <div className="flex justify-between items-center mb-4 text-lg font-bold text-siral-900">
              <span>{t('cart_total')}</span>
              <span>{convertPrice(total)}</span>
            </div>
            <button 
              onClick={() => {
                setIsCartOpen(false);
                navigate('/checkout');
              }}
              className="w-full bg-siral-700 text-white py-3 rounded hover:bg-siral-800 transition-colors font-medium"
            >
              {t('checkout_btn')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;