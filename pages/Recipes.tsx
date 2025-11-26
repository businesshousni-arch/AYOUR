import React, { useState } from 'react';
import { useGlobal } from '../context/GlobalContext';
import { RECIPES } from '../data/mockData';
import { ChefHat, X, Clock, Users } from 'lucide-react';
import { Recipe } from '../types';

const Recipes = () => {
  const { t, language, dir } = useGlobal();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-siral-900 mb-4">{t('nav_recipes')}</h1>
        <p className="text-siral-600 max-w-2xl mx-auto">
          Explore the authentic tastes of Morocco. From traditional Tagines to the ceremonial mint tea, bring the flavor home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RECIPES.map(recipe => (
          <div 
            key={recipe.id} 
            onClick={() => setSelectedRecipe(recipe)}
            className="bg-white rounded-xl overflow-hidden shadow-md group cursor-pointer border border-siral-100 hover:shadow-xl transition-all"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={recipe.image} 
                alt={recipe.title[language]} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white flex gap-4">
                 <span className="flex items-center gap-1 text-sm bg-black/50 px-2 py-1 rounded"><Clock size={14}/> 45 min</span>
                 <span className="flex items-center gap-1 text-sm bg-black/50 px-2 py-1 rounded"><Users size={14}/> 4 pax</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold text-siral-800 mb-3">{recipe.title[language]}</h3>
              <div className="flex gap-2 flex-wrap mb-4">
                {recipe.ingredients.en.slice(0, 3).map((ing, i) => (
                    <span key={i} className="text-xs bg-siral-100 text-siral-700 px-2 py-1 rounded-full truncate max-w-[100px]">{ing}</span>
                ))}
                {recipe.ingredients.en.length > 3 && <span className="text-xs bg-siral-100 text-siral-700 px-2 py-1 rounded-full">+{recipe.ingredients.en.length - 3}</span>}
              </div>
              <button className="flex items-center gap-2 text-siral-700 font-bold uppercase tracking-wide text-sm hover:text-siral-900 transition-colors">
                <ChefHat size={16} /> {t('view_recipe')}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir={dir}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedRecipe(null)}></div>
          <div className="relative bg-siral-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl flex flex-col md:flex-row animate-fade-in">
            <button 
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full text-siral-900 hover:bg-white"
            >
              <X size={24} />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img src={selectedRecipe.image} alt={selectedRecipe.title[language]} className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-1/2 p-8 bg-white">
              <h2 className="text-3xl font-serif font-bold text-siral-900 mb-6">{selectedRecipe.title[language]}</h2>
              
              <div className="mb-6">
                <h3 className="font-bold text-siral-800 uppercase tracking-widest text-sm mb-3 border-b border-siral-100 pb-2">{t('ingredients')}</h3>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients[language === 'ar' ? 'ar' : language === 'fr' ? 'fr' : 'en'].map((ing, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-siral-600">
                      <span className="w-1.5 h-1.5 bg-siral-400 rounded-full"></span>
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-siral-800 uppercase tracking-widest text-sm mb-3 border-b border-siral-100 pb-2">Instructions</h3>
                <p className="text-siral-600 whitespace-pre-line leading-relaxed">
                  {selectedRecipe.instructions[language === 'ar' ? 'ar' : language === 'fr' ? 'fr' : 'en']}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;