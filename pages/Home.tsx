import React, { useEffect, useState } from 'react';
import { ArrowRight, Truck, Award, Leaf, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { useGlobal } from '../context/GlobalContext';
import { PRODUCTS } from '../data/mockData';
import ProductCard from '../components/UI/ProductCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t, language, dir } = useGlobal();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2670&auto=format&fit=crop',
      title: t('hero_title_1'),
      subtitle: t('hero_subtitle_1'),
    },
    {
      image: 'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?q=80&w=2670&auto=format&fit=crop',
      title: 'Taliouine Saffron',
      subtitle: 'The worlds purest Red Gold',
    },
    {
      image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?q=80&w=2670&auto=format&fit=crop',
      title: 'Art of Hospitality',
      subtitle: 'Experience the Moroccan Tea Ritual',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-siral-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img src={slide.image} alt="Hero" className="w-full h-full object-cover animate-pulse-slow" style={{ animationDuration: '10s' }} />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <h1 className={`font-serif text-4xl md:text-7xl text-siral-50 mb-6 drop-shadow-lg transform transition-transform duration-1000 ${index === activeSlide ? 'translate-y-0' : 'translate-y-10'}`}>
                {slide.title}
              </h1>
              <p className="font-sans text-lg md:text-2xl text-siral-100 mb-10 max-w-2xl drop-shadow-md leading-relaxed">
                {slide.subtitle}
              </p>
              <a 
                href="#shop"
                className="bg-siral-700/90 backdrop-blur-sm hover:bg-siral-600 text-white px-10 py-4 rounded-full text-lg font-bold tracking-wide transition-all transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 border border-siral-500"
              >
                {t('hero_cta')}
                {dir === 'rtl' ? <ArrowRight className="rotate-180" size={20}/> : <ArrowRight size={20}/>}
              </a>
            </div>
          </div>
        ))}
        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeSlide ? 'bg-siral-50 w-8' : 'bg-white/40 w-4 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-siral-200">
          <div className="flex flex-col items-center text-center p-6 group hover:bg-white hover:shadow-lg hover:rounded-xl transition-all duration-300">
            <div className="w-20 h-20 bg-siral-50 rounded-full flex items-center justify-center text-siral-700 mb-6 group-hover:scale-110 transition-transform">
              <Award size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif font-bold text-xl mb-3 text-siral-900">100% Authentic</h3>
            <p className="text-siral-500 leading-relaxed">Sourced directly from certified cooperatives in the Atlas Mountains.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 group hover:bg-white hover:shadow-lg hover:rounded-xl transition-all duration-300">
            <div className="w-20 h-20 bg-siral-50 rounded-full flex items-center justify-center text-siral-700 mb-6 group-hover:scale-110 transition-transform">
              <Leaf size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif font-bold text-xl mb-3 text-siral-900">Organic & Natural</h3>
            <p className="text-siral-500 leading-relaxed">Harvested by hand with no additives or preservatives. Just pure nature.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 group hover:bg-white hover:shadow-lg hover:rounded-xl transition-all duration-300">
            <div className="w-20 h-20 bg-siral-50 rounded-full flex items-center justify-center text-siral-700 mb-6 group-hover:scale-110 transition-transform">
              <Truck size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif font-bold text-xl mb-3 text-siral-900">Fast Shipping</h3>
            <p className="text-siral-500 leading-relaxed">Reliable, tracked delivery across Morocco and worldwide.</p>
          </div>
        </div>
      </section>

      {/* Categories Grid - Responsive */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/#shop" className="group relative overflow-hidden rounded-xl aspect-[3/4] md:aspect-[4/5] shadow-md hover:shadow-2xl transition-all">
            <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop" alt="Pure Spices" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <h3 className="font-serif text-3xl font-bold mb-3">{t('feat_pure')}</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">The finest single-origin spices.</p>
              <span className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
                {t('cat_explore')} <ArrowRight size={16} />
              </span>
            </div>
          </Link>
          
          <Link to="/#shop" className="group relative overflow-hidden rounded-xl aspect-[3/4] md:aspect-[4/5] shadow-md hover:shadow-2xl transition-all md:mt-12">
            <img src="https://images.unsplash.com/photo-1599940859674-a7fef05b94ae?q=80&w=800&auto=format&fit=crop" alt="Blends" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <h3 className="font-serif text-3xl font-bold mb-3">{t('feat_blends')}</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">Masterfully mixed for perfect Tagines.</p>
              <span className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
                {t('cat_explore')} <ArrowRight size={16} />
              </span>
            </div>
          </Link>
          
          <Link to="/#shop" className="group relative overflow-hidden rounded-xl aspect-[3/4] md:aspect-[4/5] shadow-md hover:shadow-2xl transition-all">
            <img src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=800&auto=format&fit=crop" alt="Gifts" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <h3 className="font-serif text-3xl font-bold mb-3">{t('feat_gifts')}</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">Luxury boxes for the ones you love.</p>
              <span className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
                {t('cat_explore')} <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="container mx-auto px-4 pt-10">
        <div className="text-center mb-16">
          <span className="text-siral-600 font-bold uppercase tracking-[0.2em] text-xs block mb-4">Curated Selection</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-siral-900">{t('feat_pure')}</h2>
          <div className="w-24 h-1 bg-siral-300 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Signature Blend Highlight */}
      <section className="bg-zellige py-24 relative overflow-hidden border-y border-siral-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative group">
             <div className="absolute inset-0 border-2 border-siral-400 rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
             <img 
               src="https://images.unsplash.com/photo-1599940859674-a7fef05b94ae?q=80&w=2532&auto=format&fit=crop" 
               alt="Spices" 
               className="rounded-lg shadow-2xl relative z-10 w-full"
             />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-start">
            <span className="text-siral-500 font-serif italic text-xl block mb-2">The Crown Jewel</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-siral-900 mb-8 leading-tight">
              {t('feat_blends')}
            </h2>
            <p className="text-siral-700 text-lg leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              Our Ras El Hanout is not just a spice mix; it is history in a jar. 
              Composed of over 35 hand-selected spices including rosebuds, lavender, and galangal, 
              it brings the complex flavors of the Imperial Cities directly to your home cooking.
            </p>
            <a href="#shop" className="inline-block bg-siral-900 text-siral-50 px-8 py-4 rounded-lg font-bold hover:bg-siral-800 transition-all hover:shadow-xl">
              Shop Signature Blends
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-siral-900 mb-16">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-xl shadow-sm border border-siral-100 hover:shadow-lg transition-shadow">
            <div className="text-yellow-500 mb-6 flex justify-center gap-1">
                {[1,2,3,4,5].map(i => <Award key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-siral-600 italic mb-8 font-serif text-lg">"The saffron quality is unmatched. I used a few strands and the color was incredible."</p>
            <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-siral-200 rounded-full flex items-center justify-center font-bold text-siral-700">S</div>
                <p className="font-bold text-siral-900 uppercase tracking-wide text-sm">Sarah M.</p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-sm border border-siral-100 hover:shadow-lg transition-shadow">
            <div className="text-yellow-500 mb-6 flex justify-center gap-1">
                {[1,2,3,4,5].map(i => <Award key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-siral-600 italic mb-8 font-serif text-lg">"Fast delivery to Casablanca. The packaging feels like a luxury gift itself."</p>
            <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-siral-200 rounded-full flex items-center justify-center font-bold text-siral-700">A</div>
                <p className="font-bold text-siral-900 uppercase tracking-wide text-sm">Amine B.</p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-sm border border-siral-100 hover:shadow-lg transition-shadow">
            <div className="text-yellow-500 mb-6 flex justify-center gap-1">
                {[1,2,3,4,5].map(i => <Award key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-siral-600 italic mb-8 font-serif text-lg">"The Ras El Hanout completely transformed my Tagine. Authentic Moroccan flavor."</p>
            <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-siral-200 rounded-full flex items-center justify-center font-bold text-siral-700">J</div>
                <p className="font-bold text-siral-900 uppercase tracking-wide text-sm">Julie D.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 mt-12">
        <div className="bg-siral-900 text-siral-100 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-between">
            <div>
                <span className="text-siral-400 uppercase tracking-widest text-sm font-bold block mb-4">{t('nav_contact')}</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 text-siral-50">{t('contact_title')}</h2>
                
                <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-siral-800 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="text-siral-200" size={24} />
                    </div>
                    <div>
                    <h4 className="font-bold text-siral-100 text-lg mb-1">{t('contact_visit')}</h4>
                    <p className="text-siral-400">12 Avenue Mohammed V<br/>Gueliz, Marrakech, Morocco</p>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-siral-800 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="text-siral-200" size={24} />
                    </div>
                    <div>
                    <h4 className="font-bold text-siral-100 text-lg mb-1">Email</h4>
                    <p className="text-siral-400">hello@siralbanna.com</p>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-siral-800 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="text-siral-200" size={24} />
                    </div>
                    <div>
                    <h4 className="font-bold text-siral-100 text-lg mb-1">{t('form_phone')}</h4>
                    <p className="text-siral-400">+212 524 00 00 00</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex gap-4">
                 {/* Social Icons Placeholder */}
            </div>
          </div>
          
          <div className="md:w-1/2 bg-siral-50 p-12 md:p-16 text-siral-900">
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-siral-500 uppercase tracking-wider mb-2">{t('form_name')}</label>
                <input type="text" className="w-full border border-siral-200 p-4 rounded-lg bg-white focus:outline-none focus:border-siral-500 focus:ring-4 focus:ring-siral-100 transition-all" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-siral-500 uppercase tracking-wider mb-2">Email</label>
                <input type="email" className="w-full border border-siral-200 p-4 rounded-lg bg-white focus:outline-none focus:border-siral-500 focus:ring-4 focus:ring-siral-100 transition-all" placeholder="name@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-siral-500 uppercase tracking-wider mb-2">Message</label>
                <textarea rows={4} className="w-full border border-siral-200 p-4 rounded-lg bg-white focus:outline-none focus:border-siral-500 focus:ring-4 focus:ring-siral-100 transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-siral-900 text-white py-4 rounded-lg font-bold hover:bg-siral-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
                {t('send_message')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;