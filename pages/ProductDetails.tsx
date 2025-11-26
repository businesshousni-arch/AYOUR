import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Truck, ShieldCheck, ChevronRight } from 'lucide-react';
import { useGlobal } from '../context/GlobalContext';
import { PRODUCTS } from '../data/mockData';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language, convertPrice, addToCart, dir } = useGlobal();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'tips'>('description');

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div className="p-20 text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-siral-500 mb-8">
        <span onClick={() => navigate('/')} className="cursor-pointer hover:text-siral-700">{t('nav_home')}</span>
        <ChevronRight size={14} className={dir === 'rtl' ? 'rotate-180' : ''} />
        <span className="font-bold text-siral-800">{product.name[language]}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-siral-100 rounded-lg overflow-hidden shadow-lg">
            <img src={product.image} alt={product.name[language]} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <span className="text-siral-600 text-sm uppercase tracking-widest">{product.category}</span>
          <h1 className="text-4xl font-serif font-bold text-siral-900 mt-2 mb-4">{product.name[language]}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-siral-700">{convertPrice(product.price)}</span>
            <div className="flex text-yellow-500 text-sm">★★★★★ <span className="text-siral-400 ml-2">({product.reviews} reviews)</span></div>
          </div>

          <p className="text-siral-600 leading-relaxed mb-8">
            {product.description[language]}
          </p>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center border border-siral-300 rounded-lg">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-siral-100 text-siral-600"
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center font-bold text-lg">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-siral-100 text-siral-600"
              >
                <Plus size={18} />
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-siral-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-siral-800 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <ShoppingBag size={20} />
              {t('add_to_cart')}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-siral-600 mb-12">
            <div className="flex items-center gap-3 bg-siral-50 p-3 rounded">
              <Truck size={20} className="text-siral-700" />
              <span>{t('pay_cod')} Available</span>
            </div>
            <div className="flex items-center gap-3 bg-siral-50 p-3 rounded">
              <ShieldCheck size={20} className="text-siral-700" />
              <span>Quality Guarantee</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-siral-200 pt-8">
            <div className="flex gap-8 border-b border-siral-200 mb-6">
              <button 
                onClick={() => setActiveTab('description')}
                className={`pb-2 font-serif font-bold text-lg transition-colors ${activeTab === 'description' ? 'text-siral-800 border-b-2 border-siral-800' : 'text-siral-400'}`}
              >
                Details
              </button>
              <button 
                onClick={() => setActiveTab('tips')}
                className={`pb-2 font-serif font-bold text-lg transition-colors ${activeTab === 'tips' ? 'text-siral-800 border-b-2 border-siral-800' : 'text-siral-400'}`}
              >
                {t('chef_tips')}
              </button>
            </div>
            
            <div className="text-siral-600 leading-relaxed min-h-[100px]">
              {activeTab === 'description' ? (
                <p>
                   Ethically sourced from small cooperatives in Morocco. Stored in airtight, UV-protected packaging to maintain freshness and aroma for up to 2 years.
                </p>
              ) : (
                <p>
                  Best used towards the end of cooking to preserve the delicate aroma. Store in a cool, dark place. Perfect for marinating meats or sprinkling over roasted vegetables.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;