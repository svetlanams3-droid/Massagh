export type Language = 'en' | 'ru';

export interface Translations {
  [key: string]: {
    en: string;
    ru: string;
  };
}

export const translations: Translations = {
  // Header
  'nav.services': { en: 'Services', ru: 'Услуги' },
  'nav.about': { en: 'About', ru: 'О нас' },
  'nav.reviews': { en: 'Reviews', ru: 'Отзывы' },
  'nav.booking': { en: 'Book Now', ru: 'Записаться' },
  'nav.contact': { en: 'Contact', ru: 'Контакты' },

  // Hero
  'hero.badge': { en: 'Premium Mobile Massage in Seattle', ru: 'Премиальный выездной массаж в Сиэтле' },
  'hero.title': { en: 'Relaxation Comes to Your Door', ru: 'Расслабление приходит к вам домой' },
  'hero.subtitle': {
    en: 'Experience the luxury of professional massage therapy in the comfort of your own home. Our certified therapist brings the spa to you — with a professional table, premium oils, and pure dedication to your well-being.',
    ru: 'Насладитесь роскошью профессионального массажа в уюте вашего дома. Наш сертифицированный мастер привозит спа к вам — с профессиональным столом, премиальными маслами и полной отдачей вашему благополучию.'
  },
  'hero.cta': { en: 'Book Your Session', ru: 'Записаться на сеанс' },
  'hero.cta2': { en: 'View Services', ru: 'Наши услуги' },

  // Services
  'services.badge': { en: 'Our Services', ru: 'Наши услуги' },
  'services.title': { en: 'Massage Therapies Tailored to You', ru: 'Массажные процедуры для вас' },
  'services.subtitle': {
    en: 'Each session includes setup and cleanup. We bring everything needed for a complete spa experience right to your home.',
    ru: 'Каждый сеанс включает установку и уборку. Мы привозим всё необходимое для полноценного спа-опыта прямо к вам домой.'
  },

  // Service cards
  'service.deepTissue.title': { en: 'Deep Tissue Massage', ru: 'Глубокий тканевой массаж' },
  'service.deepTissue.desc': {
    en: 'Targeted pressure to release chronic muscle tension and knots. Ideal for those with persistent pain, stiff neck, or tight shoulders. Uses slow, firm strokes reaching the deepest layers of muscle tissue.',
    ru: 'Целенаправленное давление для снятия хронического напряжения мышц и узлов. Идеально при постоянных болях, скованности шеи или плеч. Используются медленные, глубокие движения до самых глубоких слоёв мышечной ткани.'
  },
  'service.deepTissue.price': { en: 'From $150', ru: 'От $150' },
  'service.deepTissue.duration': { en: '60 / 90 min', ru: '60 / 90 мин' },

  'service.swedish.title': { en: 'Swedish Massage', ru: 'Шведский массаж' },
  'service.swedish.desc': {
    en: 'Classic relaxation technique using long, flowing strokes, kneading, and circular movements. Perfect for first-timers or anyone seeking full-body relaxation and stress relief.',
    ru: 'Классическая техника расслабления с использованием длинных скользящих движений, разминания и круговых приёмов. Идеально для начинающих или всех, кто ищет полное расслабление и снятие стресса.'
  },
  'service.swedish.price': { en: 'From $130', ru: 'От $130' },
  'service.swedish.duration': { en: '60 / 90 min', ru: '60 / 90 мин' },

  'service.sports.title': { en: 'Sports Massage', ru: 'Спортивный массаж' },
  'service.sports.desc': {
    en: 'Designed for active individuals and athletes. Combines techniques to prevent injuries, improve flexibility, and enhance performance. Great before or after workouts and competitions.',
    ru: 'Разработан для активных людей и спортсменов. Сочетает техники для предотвращения травм, улучшения гибкости и повышения результативности. Отлично подходит до и после тренировок и соревнований.'
  },
  'service.sports.price': { en: 'From $160', ru: 'От $160' },
  'service.sports.duration': { en: '60 / 90 min', ru: '60 / 90 мин' },

  'service.aromatherapy.title': { en: 'Aromatherapy Massage', ru: 'Ароматерапевтический массаж' },
  'service.aromatherapy.desc': {
    en: 'A sensory journey combining gentle massage with carefully selected essential oils. Lavender for calm, eucalyptus for clarity, or custom blends for your unique needs. A truly transformative experience.',
    ru: 'Сенсорное путешествие, сочетающее нежный массаж с тщательно подобранными эфирными маслами. Лаванда для спокойствия, эвкалипт для ясности или индивидуальные смеси для ваших уникальных потребностей.'
  },
  'service.aromatherapy.price': { en: 'From $140', ru: 'От $140' },
  'service.aromatherapy.duration': { en: '60 / 90 min', ru: '60 / 90 мин' },

  // About
  'about.badge': { en: 'Why Choose Us', ru: 'Почему мы' },
  'about.title': { en: 'Professional Care, Your Comfort', ru: 'Профессиональный забота, ваш комфорт' },
  'about.desc': {
    en: 'With over 8 years of experience and certified in multiple modalities, our therapist brings the full spa experience to your doorstep across all of Seattle — from Capitol Hill to Ballard, Fremont to West Seattle.',
    ru: 'Более 8 лет опыта и сертификация в различных техниках. Наш мастер привозит полноценный спа-опыт к вашему порогу по всему Сиэтлу — от Capitol Hill до Ballard, от Fremont до West Seattle.'
  },
  'about.feature1.title': { en: 'Professional Equipment', ru: 'Профессиональное оборудование' },
  'about.feature1.desc': { en: 'We bring a full-size portable massage table, premium linens, and all necessary supplies.', ru: 'Привозим полноформатный портативный массажный стол, премиальное бельё и все необходимые принадлежности.' },
  'about.feature2.title': { en: 'Premium Oils & Products', ru: 'Премиальные масла' },
  'about.feature2.desc': { en: 'Organic, hypoallergenic massage oils and lotions. Custom blends available upon request.', ru: 'Органические, гипоаллергенные массажные масла и лосьоны. Индивидуальные смеси по запросу.' },
  'about.feature3.title': { en: 'All Seattle Areas', ru: 'Все районы Сиэтла' },
  'about.feature3.desc': { en: 'We serve the entire Seattle metro area. No extra charge for travel within city limits.', ru: 'Обслуживаем весь метрополитен Сиэтла. Без доплаты за выезд в пределах города.' },
  'about.feature4.title': { en: 'Flexible Scheduling', ru: 'Гибкое расписание' },
  'about.feature4.desc': { en: 'Evenings and weekends available. Book online in seconds through our Calendly integration.', ru: 'Доступны вечера и выходные. Бронируйте онлайн за секунды через нашу интеграцию с Calendly.' },

  // Reviews
  'reviews.badge': { en: 'Client Reviews', ru: 'Отзывы клиентов' },
  'reviews.title': { en: 'What Our Clients Say', ru: 'Что говорят наши клиенты' },
  'reviews.subtitle': { en: 'Trusted by hundreds of satisfied clients across Seattle', ru: 'Нам доверяют сотни довольных клиентов по всему Сиэтлу' },

  // Booking
  'booking.badge': { en: 'Book a Session', ru: 'Записаться на сеанс' },
  'booking.title': { en: 'Schedule Your Massage', ru: 'Запланируйте свой массаж' },
  'booking.subtitle': {
    en: 'Choose a time that works best for you. We\'ll come to your location anywhere in Seattle with everything we need.',
    ru: 'Выберите удобное для вас время. Мы приедем к вам в любую точку Сиэтла со всем необходимым.'
  },
  'booking.cta': { en: 'Or book by phone: (206) 555-0123', ru: 'Или по телефону: (206) 555-0123' },

  // Footer
  'footer.tagline': {
    en: 'Premium mobile massage therapy serving all of Seattle. Professional care at your doorstep.',
    ru: 'Премиальный выездной массаж по всему Сиэтлу. Профессиональная забота у вашего порога.'
  },
  'footer.services': { en: 'Services', ru: 'Услуги' },
  'footer.quickLinks': { en: 'Quick Links', ru: 'Быстрые ссылки' },
  'footer.contact': { en: 'Contact', ru: 'Контакты' },
  'footer.phone': { en: '(206) 555-0123', ru: '(206) 555-0123' },
  'footer.email': { en: 'hello@serenitytouch.com', ru: 'hello@serenitytouch.com' },
  'footer.address': { en: 'Serving all Seattle areas', ru: 'Обслуживаем все районы Сиэтла' },
  'footer.hours': { en: 'Mon-Sun: 9AM - 9PM', ru: 'Пн-Вс: 9:00 - 21:00' },
  'footer.rights': { en: '© 2025 Serenity Touch Mobile Massage. All rights reserved.', ru: '© 2025 Serenity Touch Мобильный Массаж. Все права защищены.' },
  'footer.privacy': { en: 'Privacy Policy', ru: 'Политика конфиденциальности' },
  'footer.terms': { en: 'Terms of Service', ru: 'Условия использования' },

  // Reviews content
  'review1.name': { en: 'Sarah M.', ru: 'Сара М.' },
  'review1.text': {
    en: 'Absolutely incredible experience! The therapist arrived on time, set up everything professionally, and gave me the best deep tissue massage I\'ve ever had. My chronic back pain has significantly improved.',
    ru: 'Абсолютно невероятный опыт! Мастер прибыл вовремя, всё профессионально установил и сделал лучший глубокий массаж, который я когда-либо получала. Мои хронические боли в спине значительно уменьшились.'
  },

  'review2.name': { en: 'David K.', ru: 'Дэвид К.' },
  'review2.text': {
    en: 'As a software developer with constant desk work, this mobile massage service is a lifesaver. The sports massage helped me recover from a shoulder injury faster than I expected. Highly recommend!',
    ru: 'Как разработчик, работающий за столом, этот выездной массаж — настоящее спасение. Спортивный массаж помог мне восстановиться после травмы плеча быстрее, чем я ожидал. Очень рекомендую!'
  },

  'review3.name': { en: 'Emily R.', ru: 'Эмили Р.' },
  'review3.text': {
    en: 'The aromatherapy session was pure bliss. The essential oil blend was perfectly chosen for my stress levels. I fell into the deepest sleep that night. Already booked my next appointment!',
    ru: 'Ароматерапевтический сеанс был чистым блаженством. Смесь эфирных масел была идеально подобрана для моего уровня стресса. Той ночью я спала крепче всего. Уже записалась на следующий сеанс!'
  },

  'review4.name': { en: 'Michael T.', ru: 'Майкл Т.' },
  'review4.text': {
    en: 'I was skeptical about mobile massage but this exceeded all expectations. The portable table was incredibly comfortable, the linens were luxurious, and the massage technique was top-notch. Worth every penny.',
    ru: 'Я скептически относился к выездному массажу, но это превзошло все ожидания. Портативный стол был невероятно удобным, бельё роскошным, а техника массажа на высшем уровне. Стоит каждого цента.'
  },

  'review5.name': { en: 'Jennifer L.', ru: 'Дженнифер Л.' },
  'review5.text': {
    en: 'Booked a Swedish massage for my birthday and it was the perfect gift to myself. The therapist was so professional and skilled. My husband was so impressed he booked a session for himself the next week!',
    ru: 'Заказала шведский массаж на день рождения — идеальный подарок себе. Мастер был очень профессионален и умел. Муж был так впечатлён, что записался на сеанс на следующей неделе!'
  },

  'review6.name': { en: 'Robert C.', ru: 'Роберт С.' },
  'review6.text': {
    en: 'Living in Capitol Hill, I thought getting regular massages would be a hassle. This service changed everything. Professional, punctual, and the quality rivals any high-end spa I\'ve been to. 10/10.',
    ru: 'Живя на Capitol Hill, я думал, что регулярный массаж будет хлопотным делом. Этот сервис всё изменил. Профессионально, пунктуально, а качество не уступает любому дорогому спа, в котором я был. 10/10.'
  },
};

export function t(key: string, lang: Language): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] || entry.en || key;
}
