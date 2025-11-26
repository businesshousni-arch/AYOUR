import React, { useState } from 'react';
import { useGlobal } from '../context/GlobalContext';
import { CreditCard, Truck, CheckCircle, Wallet, Lock, Calendar, ShieldCheck } from 'lucide-react';

const Checkout = () => {
  const { cart, convertPrice, t, language, dir } = useGlobal();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'paypal'>('cod');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Card State for Visualization
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
        setIsProcessing(false);
        setStep(2);
        window.scrollTo(0,0);
    }, 2500);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    val = val.substring(0, 16);
    val = val.match(/.{1,4}/g)?.join(' ') || val;
    setCardNumber(val);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length >= 2) {
      val = val.substring(0, 2) + '/' + val.substring(2, 4);
    }
    setCardExpiry(val);
  };

  if (step === 2) {
    return (
      <div className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="w-24 h-24 bg-siral-100 text-siral-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-4xl font-serif font-bold text-siral-900 mb-4">
          {language === 'ar' ? 'شكراً جزيلاً!' : 'Shukran! Thank You!'}
        </h1>
        <p className="text-siral-600 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
          {language === 'ar' 
            ? 'تم استلام طلبك بنجاح. سنقوم بالاتصال بك قريباً لتأكيد التفاصيل.' 
            : 'Your order has been received successfully. We will contact you shortly to confirm details.'}
        </p>
        <div className="bg-white p-8 rounded-xl max-w-md mx-auto mb-8 border border-siral-200 shadow-sm">
           <p className="text-xs text-siral-400 mb-2 font-bold uppercase tracking-widest">Order Reference</p>
           <p className="text-3xl font-serif text-siral-800 tracking-wider">#SIRAL-{Math.floor(1000 + Math.random() * 9000)}</p>
        </div>
        <a href="/" className="inline-block bg-siral-700 text-white px-10 py-4 rounded-full hover:bg-siral-800 hover:shadow-lg transition-all font-bold tracking-wide">
          {language === 'ar' ? 'متابعة التسوق' : 'Continue Shopping'}
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-siral-900 mb-10 text-center">{t('checkout_title')}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column: Forms */}
        <div className="space-y-8">
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* 1. Shipping Details */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-siral-100">
              <h2 className="text-xl font-bold text-siral-800 mb-8 flex items-center gap-3 border-b border-siral-100 pb-4">
                <span className="w-8 h-8 rounded-full bg-siral-700 text-white flex items-center justify-center text-sm font-serif">1</span>
                {language === 'ar' ? 'تفاصيل الشحن' : 'Shipping Details'}
              </h2>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="group">
                  <label className="block text-xs font-bold text-siral-500 uppercase tracking-wider mb-2">{t('form_name')}</label>
                  <input required type="text" className="w-full border border-siral-200 p-4 rounded-lg bg-siral-50/50 focus:bg-white focus:outline-none focus:border-siral-500 focus:ring-4 focus:ring-siral-100 transition-all" placeholder="John Doe" />
                </div>
                
                <div className="group">
                  <label className="block text-xs font-bold text-siral-500 uppercase tracking-wider mb-2">{t('form_phone')}</label>
                  <input required type="tel" className="w-full border border-siral-200 p-4 rounded-lg bg-siral-50/50 focus:bg-white focus:outline-none focus:border-siral-500 focus:ring-4 focus:ring-siral-100 transition-all" placeholder="+212 600 000 000" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-siral-500 uppercase tracking-wider mb-2">{t('form_city')}</label>
                    <select className="w-full border border-siral-200 p-4 rounded-lg bg-siral-50/50 focus:bg-white focus:outline-none focus:border-siral-500 focus:ring-4 focus:ring-siral-100 transition-all appearance-none">
                      <option>Casablanca</option>
                      <option>Rabat</option>
                      <option>Marrakech</option>
                      <option>Fes</option>
                      <option>Tanger</option>
                      <option>Agadir</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-siral-500 uppercase tracking-wider mb-2">Zip Code</label>
                    <input type="text" className="w-full border border-siral-200 p-4 rounded-lg bg-siral-50/50 focus:bg-white focus:outline-none focus:border-siral-500 focus:ring-4 focus:ring-siral-100 transition-all" placeholder="20000" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-siral-500 uppercase tracking-wider mb-2">{t('form_address')}</label>
                  <textarea required rows={3} className="w-full border border-siral-200 p-4 rounded-lg bg-siral-50/50 focus:bg-white focus:outline-none focus:border-siral-500 focus:ring-4 focus:ring-siral-100 transition-all resize-none" placeholder="Apartment, Street, etc."></textarea>
                </div>
              </div>
            </div>

            {/* 2. Payment Method */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-siral-100">
               <h2 className="text-xl font-bold text-siral-800 mb-8 flex items-center gap-3 border-b border-siral-100 pb-4">
                <span className="w-8 h-8 rounded-full bg-siral-700 text-white flex items-center justify-center text-sm font-serif">2</span>
                {language === 'ar' ? 'طريقة الدفع' : 'Payment Method'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <label className={`relative p-4 rounded-xl flex flex-col items-center gap-3 cursor-pointer transition-all border-2 ${paymentMethod === 'cod' ? 'border-siral-600 bg-siral-50' : 'border-siral-100 hover:border-siral-300'}`}>
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="hidden" />
                  <Truck className={paymentMethod === 'cod' ? 'text-siral-700' : 'text-siral-400'} size={24} />
                  <span className={`font-bold text-xs text-center uppercase tracking-wide ${paymentMethod === 'cod' ? 'text-siral-900' : 'text-siral-500'}`}>{t('pay_cod')}</span>
                  {paymentMethod === 'cod' && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-siral-600"></div>}
                </label>

                <label className={`relative p-4 rounded-xl flex flex-col items-center gap-3 cursor-pointer transition-all border-2 ${paymentMethod === 'card' ? 'border-siral-600 bg-siral-50' : 'border-siral-100 hover:border-siral-300'}`}>
                  <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="hidden" />
                  <CreditCard className={paymentMethod === 'card' ? 'text-siral-700' : 'text-siral-400'} size={24} />
                  <span className={`font-bold text-xs text-center uppercase tracking-wide ${paymentMethod === 'card' ? 'text-siral-900' : 'text-siral-500'}`}>{t('pay_card')}</span>
                  {paymentMethod === 'card' && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-siral-600"></div>}
                </label>

                <label className={`relative p-4 rounded-xl flex flex-col items-center gap-3 cursor-pointer transition-all border-2 ${paymentMethod === 'paypal' ? 'border-siral-600 bg-siral-50' : 'border-siral-100 hover:border-siral-300'}`}>
                  <input type="radio" name="payment" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="hidden" />
                  <Wallet className={paymentMethod === 'paypal' ? 'text-siral-700' : 'text-siral-400'} size={24} />
                  <span className={`font-bold text-xs text-center uppercase tracking-wide ${paymentMethod === 'paypal' ? 'text-siral-900' : 'text-siral-500'}`}>{t('pay_paypal')}</span>
                  {paymentMethod === 'paypal' && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-siral-600"></div>}
                </label>
              </div>

              {/* Credit Card Form Section */}
              {paymentMethod === 'card' && (
                <div className="animate-fade-in">
                  {/* Visual Card Representation */}
                  <div className="w-full max-w-sm mx-auto h-56 bg-gradient-to-br from-siral-900 via-siral-800 to-siral-700 rounded-2xl p-6 text-white shadow-2xl mb-8 relative overflow-hidden transform transition-all hover:scale-105 duration-500">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-siral-500/20 rounded-full blur-2xl"></div>
                    
                    <div className="flex justify-between items-start mb-10 relative z-10">
                        <div className="w-12 h-9 bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-md flex items-center justify-center shadow-inner">
                            <div className="w-8 h-6 border border-black/10 rounded-[2px] grid grid-cols-2 gap-[2px]">
                                <div className="border-r border-black/10"></div>
                                <div></div>
                            </div>
                        </div>
                        <span className="font-serif italic text-lg opacity-90 tracking-wider">Siralbanna</span>
                    </div>
                    
                    <div className="mb-8 relative z-10">
                        <p className={`font-mono text-2xl tracking-widest drop-shadow-md ${!cardNumber ? 'opacity-50' : ''}`}>
                            {cardNumber || '0000 0000 0000 0000'}
                        </p>
                    </div>
                    
                    <div className="flex justify-between items-end relative z-10">
                        <div>
                            <p className="text-[9px] uppercase opacity-70 mb-1 tracking-widest font-bold">Card Holder</p>
                            <p className="font-medium tracking-widest uppercase text-sm truncate max-w-[150px]">
                                {cardName || 'YOUR NAME'}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-[9px] uppercase opacity-70 mb-1 tracking-widest font-bold">Expires</p>
                            <p className="font-mono text-sm tracking-wider">{cardExpiry || 'MM/YY'}</p>
                        </div>
                    </div>
                  </div>
                  
                  {/* Inputs */}
                  <div className="space-y-5 bg-siral-50/50 p-6 rounded-xl border border-siral-100">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-bold text-siral-700 flex items-center gap-2">
                            <Lock size={14} /> Secure Encryption
                        </h3>
                        <div className="flex gap-1 opacity-50 grayscale">
                             <div className="h-6 w-10 bg-gray-300 rounded"></div>
                             <div className="h-6 w-10 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-siral-500 uppercase tracking-wider mb-2">{t('card_number')}</label>
                      <input 
                        required 
                        type="text" 
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="0000 0000 0000 0000" 
                        className={`w-full border border-siral-200 p-4 rounded-lg bg-white focus:outline-none focus:border-siral-500 focus:ring-4 focus:ring-siral-100 transition-all font-mono tracking-wide ${dir === 'rtl' ? 'text-right' : ''}`} 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-siral-500 uppercase tracking-wider mb-2">{t('card_holder')}</label>
                      <input 
                        required 
                        type="text" 
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="MOHAMMED ALAMI" 
                        className="w-full border border-siral-200 p-4 rounded-lg bg-white focus:outline-none focus:border-siral-500 focus:ring-4 focus:ring-siral-100 transition-all uppercase" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-siral-500 uppercase tracking-wider mb-2">{t('card_expiry')}</label>
                        <input 
                          required 
                          type="text" 
                          value={cardExpiry}
                          onChange={handleExpiryChange}
                          placeholder="MM/YY" 
                          className={`w-full border border-siral-200 p-4 rounded-lg bg-white focus:outline-none focus:border-siral-500 focus:ring-4 focus:ring-siral-100 transition-all font-mono tracking-wide ${dir === 'rtl' ? 'text-right' : ''}`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-siral-500 uppercase tracking-wider mb-2">{t('card_cvv')}</label>
                        <div className="relative">
                           <input 
                             required 
                             type="password" 
                             value={cardCvv}
                             onChange={(e) => setCardCvv(e.target.value)}
                             placeholder="123" 
                             maxLength={4}
                             className={`w-full border border-siral-200 p-4 rounded-lg bg-white focus:outline-none focus:border-siral-500 focus:ring-4 focus:ring-siral-100 transition-all font-mono tracking-wide ${dir === 'rtl' ? 'text-right' : ''}`}
                           />
                           <Lock className={`absolute top-4 text-siral-300 pointer-events-none ${dir === 'rtl' ? 'left-4' : 'right-4'}`} size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PayPal Message */}
              {paymentMethod === 'paypal' && (
                <div className="bg-[#0070ba]/5 p-6 rounded-xl border border-[#0070ba]/20 animate-fade-in">
                  <div className="flex flex-col items-center justify-center text-center mb-6">
                     <Wallet size={48} className="text-[#0070ba] mb-3 opacity-80" />
                     <p className="text-siral-900 font-bold text-lg mb-1">{t('paypal_merchant')}:</p>
                     <p className="text-sm text-siral-500 font-mono bg-white px-3 py-1 rounded border border-[#0070ba]/10 text-[#0070ba] font-bold">
                       payments@siralbanna.com
                     </p>
                  </div>
                  
                  <div className="space-y-4">
                     <div>
                       <label className="block text-xs font-bold text-[#0070ba] uppercase tracking-wider mb-2">{t('your_paypal')}</label>
                       <input 
                         type="email" 
                         required
                         placeholder="name@example.com"
                         className="w-full border border-[#0070ba]/30 p-4 rounded-lg bg-white focus:outline-none focus:border-[#0070ba] focus:ring-4 focus:ring-[#0070ba]/10 transition-all"
                       />
                     </div>
                     <p className="text-xs text-center text-siral-400">
                       {t('paypal_desc')}
                     </p>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:sticky lg:top-28 h-fit space-y-4">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-siral-700 relative overflow-hidden">
             {/* Decorative BG */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-siral-50 rounded-full -mr-16 -mt-16 z-0"></div>

            <h2 className="text-xl font-bold text-siral-800 mb-6 font-serif relative z-10">{t('cart_title')}</h2>
            
            <div className="space-y-6 mb-8 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar relative z-10">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 py-2 border-b border-dashed border-siral-100 last:border-0 items-center">
                  <div className="relative w-16 h-16 bg-siral-50 rounded-lg overflow-hidden border border-siral-100 shrink-0">
                    <img src={item.image} alt={item.name[language]} className="w-full h-full object-cover"/>
                    <span className="absolute bottom-0 right-0 bg-siral-700 text-white text-[10px] px-1.5 py-0.5 rounded-tl font-bold">{item.quantity}x</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-siral-900 truncate">{item.name[language]}</p>
                    <p className="text-xs text-siral-500 mt-0.5">{item.category}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-siral-900 text-sm">{convertPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-siral-100 pt-6 text-sm text-siral-600 relative z-10">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">{convertPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-700 font-bold flex items-center gap-1"><ShieldCheck size={12}/> Free</span>
              </div>
              <div className="flex justify-between border-t border-siral-900 pt-4 mt-4 items-end">
                <span className="text-lg font-serif font-bold text-siral-900">{t('cart_total')}</span>
                <div className="text-right">
                    <span className="text-xs text-siral-400 block mb-1">Tax included</span>
                    <span className="text-2xl font-bold text-siral-700 leading-none">{convertPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <button 
              type="submit" 
              form="checkout-form"
              disabled={isProcessing}
              className="w-full bg-siral-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-siral-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center group"
            >
              {isProcessing ? (
                <span className="flex items-center gap-3">
                   <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   {t('processing')}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                    {t('place_order')} 
                    <span className="bg-white/20 px-2 py-0.5 rounded text-sm group-hover:bg-white/30 transition-colors">{convertPrice(total)}</span>
                </span>
              )}
            </button>
            
            <p className="text-center text-xs text-siral-400 flex items-center justify-center gap-1 mt-4">
               <Lock size={10} /> {language === 'ar' ? 'جميع المعاملات آمنة ومشفرة' : 'All transactions are secure and encrypted'}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;