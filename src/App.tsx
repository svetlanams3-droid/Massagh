import { useState, useEffect, useRef, createContext, useContext, useCallback } from 'react';
import { Language, t } from './i18n';
import { SiteContent, defaultContent, loadContent, saveContent, resetContent } from './data/content';

// ============ CONTEXT ============
interface AppContextType {
  lang: Language;
  setLang: (l: Language) => void;
  content: SiteContent;
  setContent: (c: SiteContent) => void;
  isAdmin: boolean;
  setIsAdmin: (v: boolean) => void;
}

const AppContext = createContext<AppContextType>({
  lang: 'en',
  setLang: () => {},
  content: defaultContent,
  setContent: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
});

function useApp() {
  return useContext(AppContext);
}

// ============ ADMIN PASSWORD ============
const ADMIN_PASSWORD = 'admin123';

// ============ MAIN APP ============
export default function App() {
  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem('serenity_lang') as Language) || 'en';
  });
  const [content, setContentState] = useState<SiteContent>(loadContent);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem('serenity_lang', l);
  }, []);

  const setContent = useCallback((c: SiteContent) => {
    setContentState(c);
    saveContent(c);
  }, []);

  return (
    <AppContext.Provider value={{ lang, setLang, content, setContent, isAdmin, setIsAdmin }}>
      <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ReviewsSection />
          <BookingSection />
        </main>
        <Footer onAdminClick={() => setShowAdmin(true)} />
        {showAdmin && <AdminModal onClose={() => setShowAdmin(false)} />}
        {isAdmin && <AdminPanel onClose={() => setIsAdmin(false)} />}
      </div>
    </AppContext.Provider>
  );
}

// ============ HEADER ============
function Header() {
  const { lang, setLang } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
              <i className="fa-solid fa-spa text-white text-lg"></i>
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-stone-800' : 'text-white'}`}>
              Serenity Touch
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className={`text-sm font-medium transition-colors hover:text-amber-600 ${scrolled ? 'text-stone-700' : 'text-white/90'}`}>
              {t('nav.services', lang)}
            </a>
            <a href="#about" className={`text-sm font-medium transition-colors hover:text-amber-600 ${scrolled ? 'text-stone-700' : 'text-white/90'}`}>
              {t('nav.about', lang)}
            </a>
            <a href="#reviews" className={`text-sm font-medium transition-colors hover:text-amber-600 ${scrolled ? 'text-stone-700' : 'text-white/90'}`}>
              {t('nav.reviews', lang)}
            </a>
            <a href="#booking" className={`text-sm font-medium transition-colors hover:text-amber-600 ${scrolled ? 'text-stone-700' : 'text-white/90'}`}>
              {t('nav.booking', lang)}
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-stone-100/80 rounded-full p-0.5">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-amber-700 text-white shadow-sm' : 'text-stone-600 hover:text-stone-800'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('ru')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'ru' ? 'bg-amber-700 text-white shadow-sm' : 'text-stone-600 hover:text-stone-800'}`}
              >
                RU
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-stone-700' : 'text-white'}`}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl p-6 mb-4 border border-stone-100">
            <nav className="flex flex-col gap-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-stone-700 font-medium py-2 border-b border-stone-100">{t('nav.services', lang)}</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-stone-700 font-medium py-2 border-b border-stone-100">{t('nav.about', lang)}</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-stone-700 font-medium py-2 border-b border-stone-100">{t('nav.reviews', lang)}</a>
              <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="text-stone-700 font-medium py-2">{t('nav.booking', lang)}</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// ============ HERO SECTION ============
function HeroSection() {
  const { lang, content } = useApp();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={content.hero.backgroundImage}
          alt="Massage therapy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <i className="fa-solid fa-star text-amber-400 text-xs"></i>
          <span className="text-white/90 text-sm font-medium">{content.hero.badge}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {content.hero.title}
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          {content.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50 hover:-translate-y-0.5"
          >
            <i className="fa-regular fa-calendar-check"></i>
            {content.hero.cta}
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            {content.hero.cta2}
            <i className="fa-solid fa-arrow-down text-sm"></i>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">8+</div>
            <div className="text-white/60 text-sm mt-1">{lang === 'en' ? 'Years Exp.' : 'Лет опыта'}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-white/60 text-sm mt-1">{lang === 'en' ? 'Clients' : 'Клиентов'}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">5.0</div>
            <div className="text-white/60 text-sm mt-1">{lang === 'en' ? 'Rating' : 'Рейтинг'}</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fa-solid fa-chevron-down text-white/50 text-2xl"></i>
      </div>
    </section>
  );
}

// ============ SERVICES SECTION ============
function ServicesSection() {
  const { lang, content } = useApp();

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 rounded-full px-4 py-2 mb-4">
            <i className="fa-solid fa-hand-sparkles text-sm"></i>
            <span className="text-sm font-semibold">{content.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            {content.services.title}
          </h2>
          <p className="text-stone-500 text-lg">{content.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.items.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: SiteContent['services']['items'][0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-3xl border border-stone-100 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-stone-200/50 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <i className={`fa-solid ${service.icon} text-amber-600`}></i>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-stone-800 mb-2">{service.title}</h3>
        <p className="text-stone-500 text-sm mb-4 leading-relaxed">{service.description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          <span className="text-amber-700 font-bold">{service.price}</span>
          <span className="text-stone-400 text-sm flex items-center gap-1">
            <i className="fa-regular fa-clock text-xs"></i>
            {service.duration}
          </span>
        </div>
      </div>
    </div>
  );
}

// ============ ABOUT SECTION ============
function AboutSection() {
  const { lang, content } = useApp();

  return (
    <section id="about" className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={content.about.image}
                alt="Massage therapist"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-award text-amber-600 text-xl"></i>
                </div>
                <div>
                  <div className="font-bold text-stone-800">8+ {lang === 'en' ? 'Years' : 'Лет'}</div>
                  <div className="text-stone-500 text-sm">{lang === 'en' ? 'Experience' : 'Опыта'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 rounded-full px-4 py-2 mb-4">
              <i className="fa-solid fa-heart text-sm"></i>
              <span className="text-sm font-semibold">{content.about.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-6">
              {content.about.title}
            </h2>
            <p className="text-stone-500 text-lg mb-8 leading-relaxed">
              {content.about.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {content.about.features.map((feature, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-stone-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                    <i className={`fa-solid ${feature.icon} text-amber-600`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 text-sm mb-1">{feature.title}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ REVIEWS SECTION ============
function ReviewsSection() {
  const { content } = useApp();
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.reviews.items.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [content.reviews.items.length]);

  return (
    <section id="reviews" className="py-20 md:py-32 bg-gradient-to-b from-stone-900 to-stone-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-600/10 text-amber-400 rounded-full px-4 py-2 mb-4">
            <i className="fa-solid fa-star text-sm"></i>
            <span className="text-sm font-semibold">{content.reviews.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {content.reviews.title}
          </h2>
          <p className="text-stone-400 text-lg">{content.reviews.subtitle}</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.reviews.items.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {content.reviews.items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-amber-500 w-6' : 'bg-stone-600 hover:bg-stone-500'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, index }: { review: SiteContent['reviews']['items'][0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-700 hover:bg-white/10 hover:border-amber-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <i key={i} className="fa-solid fa-star text-amber-400 text-sm"></i>
        ))}
      </div>

      {/* Text */}
      <p className="text-stone-300 text-sm leading-relaxed mb-6">"{review.text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-amber-500/30"
        />
        <div>
          <div className="text-white font-semibold text-sm">{review.name}</div>
          <div className="text-stone-500 text-xs">{review.rating === 5 ? '★★★★★' : ''}</div>
        </div>
      </div>
    </div>
  );
}

// ============ BOOKING SECTION ============
function BookingSection() {
  const { content } = useApp();
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calendly inline widget initialization
    if (calendlyRef.current && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: content.booking.calendlyUrl,
        parentElement: calendlyRef.current,
      });
    }
  }, [content.booking.calendlyUrl]);

  return (
    <section id="booking" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 rounded-full px-4 py-2 mb-4">
            <i className="fa-regular fa-calendar text-sm"></i>
            <span className="text-sm font-semibold">{content.booking.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            {content.booking.title}
          </h2>
          <p className="text-stone-500 text-lg mb-2">{content.booking.subtitle}</p>
          <p className="text-stone-400 text-sm">
            <i className="fa-solid fa-phone mr-2"></i>
            {content.booking.phone}
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={calendlyRef}
            className="min-h-[600px] rounded-2xl border border-stone-200 overflow-hidden"
            data-url={content.booking.calendlyUrl}
          ></div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer({ onAdminClick }: { onAdminClick: () => void }) {
  const { lang, content } = useApp();

  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                <i className="fa-solid fa-spa text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold">Serenity Touch</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">{content.footer.tagline}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">{t('footer.services', lang)}</h4>
            <ul className="space-y-2">
              {content.services.items.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-stone-400 hover:text-white text-sm transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">{t('footer.quickLinks', lang)}</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-stone-400 hover:text-white text-sm transition-colors">{t('nav.about', lang)}</a></li>
              <li><a href="#reviews" className="text-stone-400 hover:text-white text-sm transition-colors">{t('nav.reviews', lang)}</a></li>
              <li><a href="#booking" className="text-stone-400 hover:text-white text-sm transition-colors">{t('nav.booking', lang)}</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white text-sm transition-colors">{t('footer.privacy', lang)}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">{t('footer.contact', lang)}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-stone-400 text-sm">
                <i className="fa-solid fa-phone text-amber-500 w-4"></i>
                {content.footer.phone}
              </li>
              <li className="flex items-center gap-3 text-stone-400 text-sm">
                <i className="fa-solid fa-envelope text-amber-500 w-4"></i>
                {content.footer.email}
              </li>
              <li className="flex items-center gap-3 text-stone-400 text-sm">
                <i className="fa-solid fa-location-dot text-amber-500 w-4"></i>
                {content.footer.address}
              </li>
              <li className="flex items-center gap-3 text-stone-400 text-sm">
                <i className="fa-regular fa-clock text-amber-500 w-4"></i>
                {content.footer.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-stone-500 text-sm">{t('footer.rights', lang)}</p>
            <button onClick={onAdminClick} className="text-stone-700 hover:text-stone-400 text-xs transition-colors opacity-30 hover:opacity-100" title="Admin">
              <i className="fa-solid fa-gear"></i>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 bg-stone-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
              <i className="fa-brands fa-instagram text-white text-sm"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-stone-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
              <i className="fa-brands fa-facebook-f text-white text-sm"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-stone-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
              <i className="fa-brands fa-yelp text-white text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ ADMIN MODAL (Login) ============
function AdminModal({ onClose }: { onClose: () => void }) {
  const { setIsAdmin } = useApp();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      onClose();
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 text-stone-400">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fa-solid fa-lock text-amber-600 text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold text-stone-800">Admin Access</h3>
          <p className="text-stone-500 text-sm mt-1">Enter password to access the admin panel</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
              autoFocus
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-center text-stone-400 text-xs mt-4">Demo password: admin123</p>
      </div>
    </div>
  );
}

// ============ ADMIN PANEL ============
function AdminPanel({ onClose }: { onClose: () => void }) {
  const { content, setContent, setIsAdmin } = useApp();
  const [editContent, setEditContent] = useState<SiteContent>({ ...content });
  const [activeTab, setActiveTab] = useState<'hero' | 'services' | 'about' | 'reviews' | 'booking' | 'footer'>('hero');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setContent(editContent);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    if (confirm('Reset all content to defaults?')) {
      resetContent();
      setEditContent({ ...defaultContent });
      setContent({ ...defaultContent });
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    onClose();
  };

  const tabs = [
    { id: 'hero' as const, label: 'Hero', icon: 'fa-image' },
    { id: 'services' as const, label: 'Services', icon: 'fa-hand-sparkles' },
    { id: 'about' as const, label: 'About', icon: 'fa-heart' },
    { id: 'reviews' as const, label: 'Reviews', icon: 'fa-star' },
    { id: 'booking' as const, label: 'Booking', icon: 'fa-calendar' },
    { id: 'footer' as const, label: 'Footer', icon: 'fa-columns' },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-stone-100 overflow-y-auto">
      {/* Admin Header */}
      <div className="bg-white border-b border-stone-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-gear text-white text-sm"></i>
            </div>
            <h1 className="text-lg font-bold text-stone-800">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                <i className="fa-solid fa-check"></i> Saved!
              </span>
            )}
            <button onClick={handleReset} className="px-4 py-2 text-sm text-stone-500 hover:text-red-600 border border-stone-200 rounded-lg hover:border-red-200 transition-colors">
              <i className="fa-solid fa-rotate-left mr-1"></i> Reset
            </button>
            <button onClick={handleSave} className="px-4 py-2 text-sm bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors">
              <i className="fa-solid fa-floppy-disk mr-1"></i> Save
            </button>
            <button onClick={handleLogout} className="px-4 py-2 text-sm text-stone-500 hover:text-stone-700 border border-stone-200 rounded-lg transition-colors">
              <i className="fa-solid fa-right-from-bracket mr-1"></i> Exit
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:w-56 shrink-0">
            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.id ? 'bg-amber-600 text-white shadow-md' : 'text-stone-600 hover:bg-stone-200'}`}
                >
                  <i className={`fa-solid ${tab.icon} text-xs`}></i>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white rounded-2xl border border-stone-200 p-6 md:p-8">
            {activeTab === 'hero' && <HeroEditor content={editContent} setContent={setEditContent} />}
            {activeTab === 'services' && <ServicesEditor content={editContent} setContent={setEditContent} />}
            {activeTab === 'about' && <AboutEditor content={editContent} setContent={setEditContent} />}
            {activeTab === 'reviews' && <ReviewsEditor content={editContent} setContent={setEditContent} />}
            {activeTab === 'booking' && <BookingEditor content={editContent} setContent={setEditContent} />}
            {activeTab === 'footer' && <FooterEditor content={editContent} setContent={setEditContent} />}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ ADMIN EDITORS ============
function AdminField({ label, value, onChange, type = 'text', textarea = false }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-stone-700 mb-1.5">{label}</label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm resize-y"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-sm"
        />
      )}
    </div>
  );
}

function HeroEditor({ content, setContent }: { content: SiteContent; setContent: (c: SiteContent) => void }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <i className="fa-solid fa-image text-amber-600"></i> Hero Section
      </h2>
      <AdminField label="Badge" value={content.hero.badge} onChange={(v) => setContent({ ...content, hero: { ...content.hero, badge: v } })} />
      <AdminField label="Title" value={content.hero.title} onChange={(v) => setContent({ ...content, hero: { ...content.hero, title: v } })} />
      <AdminField label="Subtitle" value={content.hero.subtitle} onChange={(v) => setContent({ ...content, hero: { ...content.hero, subtitle: v } })} textarea />
      <AdminField label="CTA Button Text" value={content.hero.cta} onChange={(v) => setContent({ ...content, hero: { ...content.hero, cta: v } })} />
      <AdminField label="Secondary Button Text" value={content.hero.cta2} onChange={(v) => setContent({ ...content, hero: { ...content.hero, cta2: v } })} />
      <AdminField label="Background Image URL" value={content.hero.backgroundImage} onChange={(v) => setContent({ ...content, hero: { ...content.hero, backgroundImage: v } })} />
    </div>
  );
}

function ServicesEditor({ content, setContent }: { content: SiteContent; setContent: (c: SiteContent) => void }) {
  const updateService = (index: number, field: string, value: string) => {
    const items = [...content.services.items];
    items[index] = { ...items[index], [field]: value };
    setContent({ ...content, services: { ...content.services, items } });
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <i className="fa-solid fa-hand-sparkles text-amber-600"></i> Services Section
      </h2>
      <AdminField label="Section Badge" value={content.services.badge} onChange={(v) => setContent({ ...content, services: { ...content.services, badge: v } })} />
      <AdminField label="Section Title" value={content.services.title} onChange={(v) => setContent({ ...content, services: { ...content.services, title: v } })} />
      <AdminField label="Section Subtitle" value={content.services.subtitle} onChange={(v) => setContent({ ...content, services: { ...content.services, subtitle: v } })} textarea />

      <div className="mt-8 space-y-6">
        {content.services.items.map((service, i) => (
          <div key={service.id} className="border border-stone-200 rounded-xl p-5">
            <h4 className="font-semibold text-stone-700 mb-3 flex items-center gap-2">
              <i className={`fa-solid ${service.icon} text-amber-500`}></i>
              {service.title}
            </h4>
            <AdminField label="Title" value={service.title} onChange={(v) => updateService(i, 'title', v)} />
            <AdminField label="Description" value={service.description} onChange={(v) => updateService(i, 'description', v)} textarea />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdminField label="Price" value={service.price} onChange={(v) => updateService(i, 'price', v)} />
              <AdminField label="Duration" value={service.duration} onChange={(v) => updateService(i, 'duration', v)} />
            </div>
            <AdminField label="Image URL" value={service.image} onChange={(v) => updateService(i, 'image', v)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutEditor({ content, setContent }: { content: SiteContent; setContent: (c: SiteContent) => void }) {
  const updateFeature = (index: number, field: string, value: string) => {
    const features = [...content.about.features];
    features[index] = { ...features[index], [field]: value };
    setContent({ ...content, about: { ...content.about, features } });
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <i className="fa-solid fa-heart text-amber-600"></i> About Section
      </h2>
      <AdminField label="Badge" value={content.about.badge} onChange={(v) => setContent({ ...content, about: { ...content.about, badge: v } })} />
      <AdminField label="Title" value={content.about.title} onChange={(v) => setContent({ ...content, about: { ...content.about, title: v } })} />
      <AdminField label="Description" value={content.about.description} onChange={(v) => setContent({ ...content, about: { ...content.about, description: v } })} textarea />
      <AdminField label="Image URL" value={content.about.image} onChange={(v) => setContent({ ...content, about: { ...content.about, image: v } })} />

      <div className="mt-8 space-y-4">
        <h3 className="font-semibold text-stone-700">Features</h3>
        {content.about.features.map((feature, i) => (
          <div key={i} className="border border-stone-200 rounded-xl p-4">
            <AdminField label={`Feature ${i + 1} - Title`} value={feature.title} onChange={(v) => updateFeature(i, 'title', v)} />
            <AdminField label="Description" value={feature.description} onChange={(v) => updateFeature(i, 'description', v)} textarea />
            <AdminField label="Icon (FontAwesome class)" value={feature.icon} onChange={(v) => updateFeature(i, 'icon', v)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewsEditor({ content, setContent }: { content: SiteContent; setContent: (c: SiteContent) => void }) {
  const updateReview = (index: number, field: string, value: string | number) => {
    const items = [...content.reviews.items];
    items[index] = { ...items[index], [field]: value };
    setContent({ ...content, reviews: { ...content.reviews, items } });
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <i className="fa-solid fa-star text-amber-600"></i> Reviews Section
      </h2>
      <AdminField label="Badge" value={content.reviews.badge} onChange={(v) => setContent({ ...content, reviews: { ...content.reviews, badge: v } })} />
      <AdminField label="Title" value={content.reviews.title} onChange={(v) => setContent({ ...content, reviews: { ...content.reviews, title: v } })} />
      <AdminField label="Subtitle" value={content.reviews.subtitle} onChange={(v) => setContent({ ...content, reviews: { ...content.reviews, subtitle: v } })} />

      <div className="mt-8 space-y-6">
        {content.reviews.items.map((review, i) => (
          <div key={review.id} className="border border-stone-200 rounded-xl p-5">
            <h4 className="font-semibold text-stone-700 mb-3">Review #{i + 1}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdminField label="Name" value={review.name} onChange={(v) => updateReview(i, 'name', v)} />
              <AdminField label="Avatar URL" value={review.avatar} onChange={(v) => updateReview(i, 'avatar', v)} />
            </div>
            <AdminField label="Review Text" value={review.text} onChange={(v) => updateReview(i, 'text', v)} textarea />
          </div>
        ))}
      </div>
    </div>
  );
}

function BookingEditor({ content, setContent }: { content: SiteContent; setContent: (c: SiteContent) => void }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <i className="fa-solid fa-calendar text-amber-600"></i> Booking Section
      </h2>
      <AdminField label="Badge" value={content.booking.badge} onChange={(v) => setContent({ ...content, booking: { ...content.booking, badge: v } })} />
      <AdminField label="Title" value={content.booking.title} onChange={(v) => setContent({ ...content, booking: { ...content.booking, title: v } })} />
      <AdminField label="Subtitle" value={content.booking.subtitle} onChange={(v) => setContent({ ...content, booking: { ...content.booking, subtitle: v } })} textarea />
      <AdminField label="Calendly URL" value={content.booking.calendlyUrl} onChange={(v) => setContent({ ...content, booking: { ...content.booking, calendlyUrl: v } })} />
      <AdminField label="Phone" value={content.booking.phone} onChange={(v) => setContent({ ...content, booking: { ...content.booking, phone: v } })} />
    </div>
  );
}

function FooterEditor({ content, setContent }: { content: SiteContent; setContent: (c: SiteContent) => void }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <i className="fa-solid fa-columns text-amber-600"></i> Footer Section
      </h2>
      <AdminField label="Tagline" value={content.footer.tagline} onChange={(v) => setContent({ ...content, footer: { ...content.footer, tagline: v } })} textarea />
      <AdminField label="Phone" value={content.footer.phone} onChange={(v) => setContent({ ...content, footer: { ...content.footer, phone: v } })} />
      <AdminField label="Email" value={content.footer.email} onChange={(v) => setContent({ ...content, footer: { ...content.footer, email: v } })} />
      <AdminField label="Address" value={content.footer.address} onChange={(v) => setContent({ ...content, footer: { ...content.footer, address: v } })} />
      <AdminField label="Hours" value={content.footer.hours} onChange={(v) => setContent({ ...content, footer: { ...content.footer, hours: v } })} />
    </div>
  );
}

// Declare Calendly global
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}
