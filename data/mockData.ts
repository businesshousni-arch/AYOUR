import { BlogPost, Product, Recipe, TranslationState } from '../types';

export const TRANSLATIONS: TranslationState = {
  nav_home: { en: 'Home', fr: 'Accueil', ar: 'الرئيسية' },
  nav_shop: { en: 'Shop', fr: 'Boutique', ar: 'المتجر' },
  nav_recipes: { en: 'Recipes', fr: 'Recettes', ar: 'وصفات' },
  nav_blog: { en: 'Journal', fr: 'Journal', ar: 'المدونة' },
  nav_contact: { en: 'Contact', fr: 'Contact', ar: 'اتصل بنا' },
  
  hero_title_1: { en: 'The Essence of Morocco', fr: 'L\'Essence du Maroc', ar: 'جوهر المغرب' },
  hero_subtitle_1: { en: 'Hand-picked spices from the Atlas Mountains', fr: 'Épices triées sur le volet des montagnes de l\'Atlas', ar: 'توابل مختارة بعناية من جبال الأطلس' },
  hero_cta: { en: 'Discover Collection', fr: 'Découvrir la Collection', ar: 'اكتشف المجموعة' },
  
  feat_pure: { en: 'Pure Spices', fr: 'Épices Pures', ar: 'توابل نقية' },
  feat_blends: { en: 'Signature Blends', fr: 'Mélanges Signature', ar: 'خلطات خاصة' },
  feat_gifts: { en: 'Luxury Gifts', fr: 'Cadeaux de Luxe', ar: 'هدايا فاخرة' },

  add_to_cart: { en: 'Add to Cart', fr: 'Ajouter au panier', ar: 'أضف إلى السلة' },
  out_of_stock: { en: 'Out of Stock', fr: 'Rupture de stock', ar: 'نفد من المخزون' },
  
  cart_title: { en: 'Your Cart', fr: 'Votre Panier', ar: 'عربتك' },
  cart_empty: { en: 'Your cart is empty', fr: 'Votre panier est vide', ar: 'سلتك فارغة' },
  cart_total: { en: 'Total', fr: 'Total', ar: 'المجموع' },
  checkout_btn: { en: 'Proceed to Checkout', fr: 'Passer à la caisse', ar: 'إتمام الشراء' },
  
  footer_crafted: { en: 'Crafted with ❤️ in Morocco', fr: 'Fabriqué avec ❤️ au Maroc', ar: 'صنع بـ ❤️ في المغرب' },

  checkout_title: { en: 'Checkout', fr: 'Caisse', ar: 'الدفع' },
  form_name: { en: 'Full Name', fr: 'Nom complet', ar: 'الاسم الكامل' },
  form_address: { en: 'Address', fr: 'Adresse', ar: 'العنوان' },
  form_city: { en: 'City', fr: 'Ville', ar: 'المدينة' },
  form_phone: { en: 'Phone', fr: 'Téléphone', ar: 'الهاتف' },
  
  pay_cod: { en: 'Cash on Delivery', fr: 'Paiement à la livraison', ar: 'الدفع عند الاستلام' },
  pay_card: { en: 'Credit Card', fr: 'Carte bancaire', ar: 'بطاقة ائتمان' },
  pay_paypal: { en: 'PayPal', fr: 'PayPal', ar: 'PayPal' },
  
  card_number: { en: 'Card Number', fr: 'Numéro de carte', ar: 'رقم البطاقة' },
  card_holder: { en: 'Card Holder Name', fr: 'Nom du titulaire', ar: 'اسم حامل البطاقة' },
  card_expiry: { en: 'Expiry (MM/YY)', fr: 'Expiration (MM/AA)', ar: 'تاريخ الانتهاء' },
  card_cvv: { en: 'CVV', fr: 'CVV', ar: 'رمز التحقق' },
  paypal_desc: { en: 'Securely connect to your PayPal account to complete this transaction.', fr: 'Connectez-vous en toute sécurité à votre compte PayPal pour terminer cette transaction.', ar: 'اتصل بأمان بحساب PayPal الخاص بك لإتمام هذه المعاملة.' },
  paypal_merchant: { en: 'Merchant', fr: 'Marchand', ar: 'التاجر' },
  your_paypal: { en: 'Your PayPal Email', fr: 'Votre email PayPal', ar: 'بريد باي بال الخاص بك' },

  processing: { en: 'Processing...', fr: 'Traitement...', ar: 'جاري المعالجة...' },

  place_order: { en: 'Place Order', fr: 'Commander', ar: 'تأكيد الطلب' },

  ingredients: { en: 'Ingredients', fr: 'Ingrédients', ar: 'المكونات' },
  chef_tips: { en: 'Chef Tips', fr: 'Conseils du Chef', ar: 'نصائح الشيف' },
  reviews: { en: 'Reviews', fr: 'Avis', ar: 'التقييمات' },

  read_more: { en: 'Read Article', fr: 'Lire l\'article', ar: 'اقرأ المقال' },
  view_recipe: { en: 'View Recipe', fr: 'Voir la recette', ar: 'عرض الوصفة' },
  close: { en: 'Close', fr: 'Fermer', ar: 'إغلاق' },

  contact_title: { en: 'Get in Touch', fr: 'Contactez-nous', ar: 'تواصل معنا' },
  contact_visit: { en: 'Visit Us', fr: 'Rendez-nous visite', ar: 'زورونا' },
  send_message: { en: 'Send Message', fr: 'Envoyer le message', ar: 'أرسل رسالة' },
  
  cat_explore: { en: 'Explore', fr: 'Explorer', ar: 'استكشف' }
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'saffron-taliouine',
    name: { en: 'Royal Taliouine Saffron', fr: 'Safran Royal Taliouine', ar: 'زعفران تالوين الملكي' },
    price: 450,
    category: 'spices',
    description: {
      en: 'The red gold of Morocco. Hand-harvested in Taliouine, known for the highest crocin content in the world. Perfect for paella, risotto, and tea.',
      fr: 'L\'or rouge du Maroc. Récolté à la main à Taliouine. Parfait pour la paella, le risotto et le thé.',
      ar: 'الذهب الأحمر المغربي. تم حصاده يدوياً في تالوين. مثالي للبايلا ، الريزوتو والشاي.'
    },
    image: 'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?q=80&w=800&auto=format&fit=crop',
    rating: 5,
    reviews: 124,
    tags: ['Organic', 'Premium']
  },
  {
    id: '2',
    slug: 'ras-el-hanout',
    name: { en: 'Ras El Hanout Imperial', fr: 'Ras El Hanout Impérial', ar: 'رأس الحانوت الملكي' },
    price: 85,
    category: 'blends',
    description: {
      en: 'A complex blend of 35 spices including rosebuds, lavender, and cardamom. The ultimate flavor booster for tagines.',
      fr: 'Un mélange complexe de 35 épices incluant boutons de rose, lavande et cardamome.',
      ar: 'خليط معقد من 35 نوعًا من التوابل بما في ذلك براعم الورد والخزامى والهيل.'
    },
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: 89,
    tags: ['Best Seller', 'Blend']
  },
  {
    id: '3',
    slug: 'cumin-beldi',
    name: { en: 'Cumin Beldi', fr: 'Cumin Beldi', ar: 'كمون بلدي' },
    price: 45,
    category: 'spices',
    description: {
      en: 'Intensely aromatic wild cumin from the Alnif region. Essential for grilled meats and salads.',
      fr: 'Cumin sauvage intensément aromatique de la région d\'Alnif.',
      ar: 'كمون بري ذو رائحة قوية من منطقة النيف. ضروري للحوم المشوية والسلطات.'
    },
    image: 'https://images.unsplash.com/photo-1599940859674-a7fef05b94ae?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 56,
    tags: ['Organic']
  },
  {
    id: '4',
    slug: 'sweet-paprika',
    name: { en: 'Sweet Paprika', fr: 'Paprika Doux', ar: 'بابريكا حلوة' },
    price: 35,
    category: 'spices',
    description: {
      en: 'Sun-dried peppers ground into a fine, vibrant red powder. Adds color and mild sweetness.',
      fr: 'Piments séchés au soleil et moulus en une poudre rouge vibrante.',
      ar: 'فلفل مجفف تحت الشمس ومطحون إلى مسحوق أحمر زاهي.'
    },
    image: 'https://images.unsplash.com/photo-1627237006880-9941a39dc4dc?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    reviews: 34,
    tags: ['Essential']
  },
  {
    id: '5',
    slug: 'moroccan-mint-tea-mix',
    name: { en: 'Moroccan Mint Tea Mix', fr: 'Mélange Thé à la Menthe', ar: 'خليط الشاي المغربي' },
    price: 65,
    category: 'blends',
    description: {
      en: 'Gunpowder green tea mixed with dried spearmint and wormwood for an authentic ceremony.',
      fr: 'Thé vert Gunpowder mélangé avec de la menthe verte séchée et de l\'absinthe.',
      ar: 'شاي أخضر ممزوج بالنعناع المجفف والشيبة لتحضير شاي أصيل.'
    },
    image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviews: 210,
    tags: ['Tea', 'Culture']
  },
  {
    id: '6',
    slug: 'tagine-spice',
    name: { en: 'Tagine Spice Blend', fr: 'Épices à Tajine', ar: 'توابل الطاجين' },
    price: 55,
    category: 'blends',
    description: {
      en: 'Perfect for lamb or vegetable tagines with ginger, turmeric and saffron notes.',
      fr: 'Parfait pour les tajines d\'agneau ou de légumes avec des notes de gingembre et safran.',
      ar: 'مثالي لطواجن اللحم أو الخضار مع نكهات الزنجبيل والزعفران.'
    },
    image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: 112,
    tags: ['Cooking']
  }
];

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: { en: 'Traditional Lamb Tagine', fr: 'Tajine d\'Agneau Traditionnel', ar: 'طاجين اللحم التقليدي' },
    image: 'https://images.unsplash.com/photo-1511690656952-34342d2c7135?q=80&w=800&auto=format&fit=crop',
    ingredients: { 
      en: ['1kg Lamb shoulder', '2 onions, chopped', '2 tbsp Siralbanna Tagine Blend', 'Prunes and Almonds', 'Olive Oil'], 
      fr: ['1kg Épaule d\'agneau', '2 oignons', '2 càs Mélange Tajine', 'Pruneaux et Amandes', 'Huile d\'olive'], 
      ar: ['1 كجم كتف غنم', '2 بصل', '2 ملاعق كبيرة توابل طاجين', 'برقوق ولوز', 'زيت زيتون'] 
    },
    instructions: { 
      en: '1. Marinate the lamb with spices and oil for 1 hour.\n2. In a Tagine, sear the meat until browned.\n3. Add onions and cover with water.\n4. Simmer on low heat for 2.5 hours.\n5. Add prunes in the last 20 minutes.', 
      fr: '1. Mariner l\'agneau avec les épices.\n2. Saisir la viande.\n3. Ajouter les oignons et l\'eau.\n4. Mijoter 2.5 heures.\n5. Ajouter les pruneaux.', 
      ar: '1. تتبيل اللحم بالتوابل والزيت.\n2. تحمير اللحم في الطاجين.\n3. إضافة البصل والماء.\n4. الطهي على نار هادئة لمدة ساعتين ونصف.\n5. إضافة البرقوق في آخر 20 دقيقة.' 
    }
  },
  {
    id: '2',
    title: { en: 'Moroccan Mint Tea', fr: 'Thé à la Menthe Marocain', ar: 'الشاي المغربي' },
    image: 'https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=800&auto=format&fit=crop',
    ingredients: { 
      en: ['1 tbsp Green Tea (Gunpowder)', 'Fresh Mint bouquet', '4-5 Sugar cubes', '1L Boiling Water'], 
      fr: ['1 càs Thé Vert', 'Menthe Fraîche', 'Sucre', '1L Eau Bouillante'], 
      ar: ['ملعقة شاي أخضر', 'باقة نعناع طازج', 'سكر', 'لتر ماء مغلي'] 
    },
    instructions: { 
      en: '1. Rinse the tea leaves with boiling water.\n2. Add mint and sugar to the pot.\n3. Fill with boiling water.\n4. Let steep for 5 minutes.\n5. Pour from high up to create foam.', 
      fr: '1. Rincer le thé.\n2. Ajouter menthe et sucre.\n3. Infuser 5 min.\n4. Verser de haut.', 
      ar: '1. تشليل حبوب الشاي.\n2. إضافة النعناع والسكر.\n3. إضافة الماء المغلي.\n4. ترك الشاي ينقع 5 دقائق.\n5. صب الشاي من الأعلى لتكوين الرغوة.' 
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: { en: 'The History of Ras El Hanout', fr: 'L\'Histoire de Ras El Hanout', ar: 'تاريخ رأس الحانوت' },
    excerpt: { en: 'Discover the origins of the king of spices.', fr: 'Découvrez les origines du roi des épices.', ar: 'اكتشف أصول ملك التوابل.' },
    date: 'Oct 12, 2023',
    image: 'https://images.unsplash.com/photo-1509358271058-acd25fa4b90d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: { en: 'Saffron Harvesting', fr: 'Récolte du Safran', ar: 'حصاد الزعفران' },
    excerpt: { en: 'Why it takes 150 flowers to make 1 gram. The process involves waking up at dawn to pick the delicate Crocus Sativus flowers before the sun becomes too hot.', fr: 'Pourquoi il faut 150 fleurs pour 1 gramme. Le processus implique de se réveiller à l\'aube.', ar: 'لماذا نحتاج 150 زهرة لإنتاج جرام واحد. تتطلب العملية الاستيقاظ عند الفجر لقطف الزهور الدقيقة.' },
    date: 'Nov 05, 2023',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: { en: 'A Guide to Moroccan Clay', fr: 'Guide de l\'Argile Marocaine', ar: 'دليل الطين المغربي' },
    excerpt: { en: 'Cooking with unglazed clay tagines imparts an earthy flavor that cannot be replicated by metal cookware.', fr: 'Cuisiner avec des tajines en terre cuite donne une saveur unique.', ar: 'الطبخ في طواجن الطين غير المزجج يضفي نكهة ترابية لا يمكن تقليدها.' },
    date: 'Jan 15, 2024',
    image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=800&auto=format&fit=crop'
  }
];