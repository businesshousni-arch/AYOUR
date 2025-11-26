import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useGlobal } from '../../context/GlobalContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, convertPrice, addToCart, t } = useGlobal();

  return (
    <div className="group bg-white rounded-lg transition-all duration-300 border border-siral-100 hover:border-siral-200 hover:shadow-xl overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[4/5] overflow-hidden bg-siral-50">
        <img 
          src={product.image} 
          alt={product.name[language]} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tags.includes('Organic') && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-siral-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">
            Organic
          </span>
        )}
        
        {/* Hover Actions */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-4">
             <button 
                onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                }}
                className="flex-1 bg-siral-900 text-white py-3 rounded shadow-lg hover:bg-siral-800 flex items-center justify-center gap-2 text-sm font-bold"
            >
                <ShoppingCart size={16} /> {t('add_to_cart')}
            </button>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">
            <span className="text-[10px] uppercase tracking-widest text-siral-500">{product.category}</span>
        </div>
        <Link to={`/product/${product.id}`} className="block mb-auto">
          <h3 className="font-serif font-bold text-lg text-siral-900 hover:text-siral-600 transition-colors line-clamp-2 leading-tight">
            {product.name[language]}
          </h3>
        </Link>
        
        <div className="mt-4 pt-4 border-t border-siral-50 flex items-center justify-between">
            <span className="font-bold text-siral-800 text-lg">
                {convertPrice(product.price)}
            </span>
            <div className="flex items-center gap-1">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs text-siral-400 font-medium">{product.rating}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;