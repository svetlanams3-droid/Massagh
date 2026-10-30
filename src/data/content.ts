export interface SiteContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    cta2: string;
    backgroundImage: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      icon: string;
      title: string;
      description: string;
      price: string;
      duration: string;
      image: string;
    }[];
  };
  about: {
    badge: string;
    title: string;
    description: string;
    image: string;
    features: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      name: string;
      text: string;
      avatar: string;
      rating: number;
    }[];
  };
  booking: {
    badge: string;
    title: string;
    subtitle: string;
    calendlyUrl: string;
    phone: string;
  };
  footer: {
    tagline: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
}

export const defaultContent: SiteContent = {
  hero: {
    badge: 'Premium Mobile Massage in Seattle',
    title: 'Relaxation Comes to Your Door',
    subtitle: 'Experience the luxury of professional massage therapy in the comfort of your own home. Our certified therapist brings the spa to you — with a professional table, premium oils, and pure dedication to your well-being.',
    cta: 'Book Your Session',
    cta2: 'View Services',
    backgroundImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80',
  },
  services: {
    badge: 'Our Services',
    title: 'Massage Therapies Tailored to You',
    subtitle: 'Each session includes setup and cleanup. We bring everything needed for a complete spa experience right to your home.',
    items: [
      {
        id: 'deep-tissue',
        icon: 'fa-hand-fist',
        title: 'Deep Tissue Massage',
        description: 'Targeted pressure to release chronic muscle tension and knots. Ideal for those with persistent pain, stiff neck, or tight shoulders.',
        price: 'From $150',
        duration: '60 / 90 min',
        image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80',
      },
      {
        id: 'swedish',
        icon: 'fa-spa',
        title: 'Swedish Massage',
        description: 'Classic relaxation technique using long, flowing strokes, kneading, and circular movements. Perfect for full-body relaxation.',
        price: 'From $130',
        duration: '60 / 90 min',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80',
      },
      {
        id: 'sports',
        icon: 'fa-person-running',
        title: 'Sports Massage',
        description: 'Designed for active individuals and athletes. Combines techniques to prevent injuries, improve flexibility, and enhance performance.',
        price: 'From $160',
        duration: '60 / 90 min',
        image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600&q=80',
      },
      {
        id: 'aromatherapy',
        icon: 'fa-leaf',
        title: 'Aromatherapy Massage',
        description: 'A sensory journey combining gentle massage with carefully selected essential oils. Lavender for calm, eucalyptus for clarity.',
        price: 'From $140',
        duration: '60 / 90 min',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
      },
    ],
  },
  about: {
    badge: 'Why Choose Us',
    title: 'Professional Care, Your Comfort',
    description: 'With over 8 years of experience and certified in multiple modalities, our therapist brings the full spa experience to your doorstep across all of Seattle.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80',
    features: [
      {
        icon: 'fa-table',
        title: 'Professional Equipment',
        description: 'We bring a full-size portable massage table, premium linens, and all necessary supplies.',
      },
      {
        icon: 'fa-droplet',
        title: 'Premium Oils & Products',
        description: 'Organic, hypoallergenic massage oils and lotions. Custom blends available upon request.',
      },
      {
        icon: 'fa-location-dot',
        title: 'All Seattle Areas',
        description: 'We serve the entire Seattle metro area. No extra charge for travel within city limits.',
      },
      {
        icon: 'fa-calendar-check',
        title: 'Flexible Scheduling',
        description: 'Evenings and weekends available. Book online in seconds through our Calendly integration.',
      },
    ],
  },
  reviews: {
    badge: 'Client Reviews',
    title: 'What Our Clients Say',
    subtitle: 'Trusted by hundreds of satisfied clients across Seattle',
    items: [
      {
        id: '1',
        name: 'Sarah M.',
        text: 'Absolutely incredible experience! The therapist arrived on time, set up everything professionally, and gave me the best deep tissue massage I\'ve ever had.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        rating: 5,
      },
      {
        id: '2',
        name: 'David K.',
        text: 'As a software developer with constant desk work, this mobile massage service is a lifesaver. The sports massage helped me recover from a shoulder injury faster than I expected.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        rating: 5,
      },
      {
        id: '3',
        name: 'Emily R.',
        text: 'The aromatherapy session was pure bliss. The essential oil blend was perfectly chosen for my stress levels. I fell into the deepest sleep that night.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
        rating: 5,
      },
      {
        id: '4',
        name: 'Michael T.',
        text: 'I was skeptical about mobile massage but this exceeded all expectations. The portable table was incredibly comfortable and the massage technique was top-notch.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
        rating: 5,
      },
      {
        id: '5',
        name: 'Jennifer L.',
        text: 'Booked a Swedish massage for my birthday and it was the perfect gift to myself. The therapist was so professional and skilled. Already booked my next appointment!',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
        rating: 5,
      },
      {
        id: '6',
        name: 'Robert C.',
        text: 'Living in Capitol Hill, I thought getting regular massages would be a hassle. This service changed everything. Professional, punctual, and the quality rivals any high-end spa.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
        rating: 5,
      },
    ],
  },
  booking: {
    badge: 'Book a Session',
    title: 'Schedule Your Massage',
    subtitle: 'Choose a time that works best for you. We\'ll come to your location anywhere in Seattle with everything we need.',
    calendlyUrl: 'https://calendly.com/your-username/30min',
    phone: '(206) 555-0123',
  },
  footer: {
    tagline: 'Premium mobile massage therapy serving all of Seattle. Professional care at your doorstep.',
    phone: '(206) 555-0123',
    email: 'hello@serenitytouch.com',
    address: 'Serving all Seattle areas',
    hours: 'Mon-Sun: 9AM - 9PM',
  },
};

const STORAGE_KEY = 'serenity_touch_content';

export function loadContent(): SiteContent {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as SiteContent;
    }
  } catch (e) {
    console.error('Failed to load content from localStorage:', e);
  }
  return { ...defaultContent };
}

export function saveContent(content: SiteContent): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  } catch (e) {
    console.error('Failed to save content to localStorage:', e);
  }
}

export function resetContent(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to reset content:', e);
  }
}
