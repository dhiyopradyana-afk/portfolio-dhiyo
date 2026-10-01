import { Project, EducationItem, ExperienceItem, SkillCategory } from '../types/portfolio';

// Local high-fidelity visual assets
import portraitImg from '../assets/images/dhiyo_executive_official_1790860842578.jpg';
import winaImg from '../assets/images/wina_img_1173_replica_1790859312972.jpg';
import hospiAiImg from '../assets/images/project_hospi_ai_1790857837016.jpg';
import gadgetHematImg from '../assets/images/project_gadget_hemat_1790857849255.jpg';
import tradingSimImg from '../assets/images/project_trading_sim_1790857870256.jpg';

export const personalInfo = {
  name: 'I Nyoman Dhiyo Pradyana Putra',
  shortName: 'Dhiyo Pradyana',
  role: 'Digital Business Student | Entrepreneur | Digital Marketing Enthusiast',
  location: 'Badung, Bali, Indonesia',
  email: 'pradyanaputra30@gmail.com',
  whatsappNumber: '+6282146591836',
  whatsappDisplay: '+62 821-4659-1836',
  instagram: 'https://www.instagram.com/dhiyo._aj?stkn=MTN4aGJ6MzRtamlzcA%3D%3D&utm_source=qr',
  instagramHandle: '@dhiyo._aj',
  linkedin: 'https://www.linkedin.com/in/pradyana-putra-a4860a388?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  linkedinHandle: 'in/pradyana-putra-a4860a388',
  winaInstagram: 'https://www.instagram.com/the_wina_guesthouse?stkn=MXJ3enJhY2N5NDlsOQ==',
  winaInstagramHandle: '@the_wina_guesthouse',
  defaultPortrait: portraitImg,
  tagline: 'Bridging modern digital commerce, AI workflows, and hands-on hospitality entrepreneurship in Bali.',
  aboutBio:
    'Saya adalah mahasiswa Bisnis Digital di Politeknik Internasional Bali yang memiliki ketertarikan pada dunia bisnis, teknologi, dan pemasaran digital. Selain menjalani pendidikan, saya juga mengelola bisnis penginapan sendiri dan mengembangkan berbagai proyek digital. Saya senang mempelajari hal-hal baru, membangun ide bisnis, serta memanfaatkan teknologi untuk menciptakan peluang usaha.',
  aboutBioEnglish:
    'I am a Digital Business student at Politeknik Internasional Bali with a deep passion for modern commerce, technology, and data-driven digital marketing. Alongside my academic curriculum, I own and operate The Wina Guest House in Canggu, Bali, while engineering forward-looking digital initiatives. I thrive on validating new venture concepts and leveraging artificial intelligence to build real-world competitive advantage.',
  pillars: [
    {
      label: 'Young Entrepreneur',
      desc: 'Owner & business manager directing day-to-day operations and growth for The Wina Guest House in Canggu.',
    },
    {
      label: 'Digital Business Scholar',
      desc: 'Active student at Politeknik Internasional Bali focusing on digital business models, marketing, and venture scaling.',
    },
    {
      label: 'AI & Tech Enthusiast',
      desc: 'Passionate about AI prompting, workflow automation, and applying cutting-edge intelligence to business processes.',
    },
    {
      label: 'Hospitality Management Experience',
      desc: 'Proven track record optimizing bookings, OTA channels like Booking.com, and local SEO in competitive tourist hubs.',
    },
    {
      label: 'Digital Business Development',
      desc: 'Committed to conceptualizing and testing high-intent digital projects from affiliate SEO to fintech simulations.',
    },
  ],
  languages: [
    { name: 'Bahasa Indonesia', level: 'Native proficiency' },
    { name: 'English', level: 'Basic & Working proficiency' },
  ],
};

export const experienceData: ExperienceItem = {
  company: 'THE WINA GUEST HOUSE',
  position: 'Owner & Business Manager',
  location: 'Canggu, Bali, Indonesia',
  period: '2023 — Present',
  description:
    'The Wina Guest House is a boutique lodging establishment located in Canggu, Bali, owned and actively operated by Dhiyo. It represents a hands-on proving ground where digital marketing, revenue management, and hospitality operations intersect.',
  indonesianDesc:
    'The Wina Guest House merupakan bisnis penginapan yang saya miliki dan kelola di kawasan Canggu, Bali. Fokus utama saya adalah memastikan kepuasan tamu, mengoptimalkan okupansi kamar, dan mengembangkan kehadiran digital penginapan secara berkelanjutan.',
  image: winaImg,
  websiteUrl: 'https://thewinaguesthouse.com', // user can replace with actual domain
  instagramUrl: 'https://www.instagram.com/the_wina_guesthouse?stkn=MXJ3enJhY2N5NDlsOQ==',
  instagramHandle: '@the_wina_guesthouse',
  responsibilities: [
    {
      title: 'Managing & Scaling Hospitality Operations',
      description: 'Overseeing daily guest satisfaction, property maintenance schedules, room inventory, and financial budget allocation.',
    },
    {
      title: 'Digital Marketing Strategy Formulation',
      description: 'Designing tailored multi-channel campaigns targeting international travelers, digital nomads, and staycationers in Canggu.',
    },
    {
      title: 'Social Media Marketing & Brand Presence',
      description: 'Curating engaging visual content, stories, and promotions across Instagram and meta channels to foster community interest.',
    },
    {
      title: 'OTA Channel & Booking.com Optimization',
      description: 'Fine-tuning rates, availability calendars, high-resolution photography, and guest reviews on Booking.com and major booking platforms.',
    },
    {
      title: 'Website Development & Local SEO Architecture',
      description: 'Implementing search engine optimization, Google Business profile enhancement, and responsive landing pages to drive direct commission-free reservations.',
    },
  ],
  keyMetrics: [
    { label: 'Location', value: 'Canggu, Bali' },
    { label: 'Direct Operations', value: 'Owner-Led' },
    { label: 'Channels', value: 'Booking.com & Direct' },
    { label: 'Strategy', value: 'SEO & Social First' },
  ],
};

export const projectsData: Project[] = [
  {
    id: 'hospi-ai',
    number: '01',
    title: 'HOSPI AI',
    category: 'Artificial Intelligence & Hospitality Technology',
    shortDesc:
      'Smart hotel service assistant powered by artificial intelligence designed to bridge hotel guests with departments with zero latency.',
    fullDesc:
      'HOSPI AI is an intelligent conversational hospitality assistant that eliminates communication friction between hotel guests and hotel departments. From handling immediate housekeeping requests, room service coordination, and concierge recommendations to automated ticket escalation, HOSPI AI streamlines the modern guest experience while reducing front-desk workload.',
    indonesianDesc:
      'HOSPI AI adalah konsep Smart Hotel Service Assistant berbasis kecerdasan buatan yang dirancang untuk membantu menghubungkan tamu hotel dengan berbagai departemen secara lebih cepat dan efisien.',
    image: hospiAiImg,
    tags: ['AI Prompting', 'Hospitality Tech', 'NLP Automation', 'Smart Concierge'],
    features: [
      'Natural AI guest concierge responding 24/7 in multiple languages',
      'Automated routing of housekeeping, maintenance, and F&B requests',
      'Instant department ticketing dashboard for hotel management',
      'Seamless mobile guest interface without mandatory app downloads',
    ],
    interactiveType: 'hospi-ai',
    externalUrl: '#',
  },
  {
    id: 'gadget-hemat',
    number: '02',
    title: 'GADGET HEMAT',
    category: 'Affiliate Marketing & SEO',
    shortDesc:
      'Editorial affiliate platform and buyer guide engineered around targeted search intent for budget-conscious consumer technology.',
    fullDesc:
      'Gadget Hemat is a high-intent digital portal focused on objective consumer electronics reviews, price comparisons, and high-value gadget recommendations. Built to capitalize on organic search traffic, the project pairs in-depth keyword analysis with transparent product breakdowns, generating sustainable affiliate commissions from major marketplace ecosystems.',
    indonesianDesc:
      'Gadget Hemat merupakan konsep website yang berfokus pada rekomendasi gadget dengan harga terjangkau. Proyek ini dirancang untuk mengembangkan pemasaran afiliasi melalui konten SEO dan ulasan produk.',
    image: gadgetHematImg,
    tags: ['SEO Strategy', 'Affiliate Funnels', 'Keyword Intent', 'Consumer Tech'],
    features: [
      'Comprehensive product specification indexing and price-to-value scoring',
      'Search Engine Optimization (SEO) tuned for high-intent Indonesian tech shoppers',
      'Affiliate link attribution tracking with transparent buyer guides',
      'Lightweight, high-speed mobile reading experience with zero layout shift',
    ],
    interactiveType: 'gadget-hemat',
    externalUrl: '#',
  },
  {
    id: 'trading-simulator',
    number: '03',
    title: 'TRADING SIMULATOR',
    category: 'Financial Technology',
    shortDesc:
      'Interactive risk-free financial trading simulator with virtual balances designed for practical market education.',
    fullDesc:
      'Trading Simulator is a specialized fintech educational web application enabling aspiring traders to practice candlestick chart reading, technical analysis, and position sizing using virtual paper money. Without risking real capital, users experience realistic market volatility and develop disciplined trading habits.',
    indonesianDesc:
      'Trading Simulator merupakan proyek website simulasi trading yang dirancang sebagai media pembelajaran. Pengguna dapat mempelajari trading menggunakan saldo virtual tanpa mempertaruhkan uang sungguhan.',
    image: tradingSimImg,
    tags: ['FinTech UI', 'Interactive Charts', 'Virtual Capital', 'Market Education'],
    features: [
      'Real-time interactive candlestick simulation chart with technical overlays',
      'Simulated virtual trading balance ($10,000 USD virtual credit) with instant execution',
      'Clean dark-mode trading workstation layout inspired by professional institutional terminals',
      'Built-in risk management and profit/loss calculation feedback',
    ],
    interactiveType: 'trading-sim',
    externalUrl: '#',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'pib-bali',
    number: '01',
    institution: 'Politeknik Internasional Bali (PIB)',
    program: 'Program Studi Bisnis Digital',
    period: '2023 — Present',
    status: 'Active Undergraduate Student',
    description:
      'Comprehensive study of modern digital commerce, marketing psychology, venture scaling, technological innovations, and business leadership tailored for modern digital ecosystems.',
    indonesianDesc:
      'Mempelajari bisnis digital, pemasaran, teknologi, dan pengembangan usaha secara mendalam.',
    highlights: [
      'Digital Commerce & Multi-Channel Business Models',
      'Digital Marketing Strategy, Content Funnels & Analytics',
      'New Venture Creation, Market Validation & Financial Planning',
      'Application of AI tools for enterprise efficiency',
    ],
  },
  {
    id: 'smk-triatma-jaya',
    number: '02',
    institution: 'SMK Pariwisata Triatma Jaya Badung',
    program: 'Jurusan Perangkat Lunak dan Gim (Software & Game Development)',
    period: 'Graduated',
    status: 'Vocational High School Diploma',
    description:
      'Technical foundational studies in software engineering, algorithmic logic, computer programming, web architecture, and interactive game development.',
    indonesianDesc:
      'Mempelajari dasar-dasar perangkat lunak dan pengembangan gim.',
    highlights: [
      'Foundations of Programming, Computational Logic & Web Development',
      'Game Logic, Interactive User Interfaces & Systems Design',
      'Database basics, version control, and collaborative project planning',
      'Problem-solving discipline and digital system structuring',
    ],
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'DIGITAL MARKETING',
    subtitle: 'Driving discovery, qualified visibility, and conversion funnels',
    icon: 'TrendingUp',
    skills: [
      {
        name: 'Search Engine Optimization (SEO)',
        note: 'Keyword research, on-page content architecture, search intent mapping, and local SEO for hospitality.',
      },
      {
        name: 'Social Media Marketing',
        note: 'Audience engagement, visual storytelling, content calendars, and brand awareness campaigns.',
      },
      {
        name: 'Digital Advertising',
        note: 'Targeted paid ad concepts, audience segmentation, conversion tracking, and campaign ROI principles.',
      },
    ],
  },
  {
    title: 'TECHNOLOGY',
    subtitle: 'Harnessing modern digital tools, AI intelligence, and visual craftsmanship',
    icon: 'Cpu',
    skills: [
      {
        name: 'AI Prompting',
        note: 'Prompt engineering for generative workflows, business research, copywriting, and operational automation.',
      },
      {
        name: 'Website Planning',
        note: 'Information architecture, wireframing, conversion-focused layout design, and domain planning.',
      },
      {
        name: 'Canva & Graphic Design',
        note: 'Brand assets, marketing collaterals, promotional banners, and visual social media templates.',
      },
    ],
  },
  {
    title: 'BUSINESS',
    subtitle: 'Strategic execution, customer-centric operations, and venture management',
    icon: 'Briefcase',
    skills: [
      {
        name: 'Entrepreneurship',
        note: 'Hands-on business ownership, ideation to execution, opportunity validation, and resilience.',
      },
      {
        name: 'Business Development',
        note: 'Strategic partnerships, customer acquisition pipelines, revenue diversification, and market expansion.',
      },
      {
        name: 'Business Management',
        note: 'Day-to-day lodging operations, guest relations, vendor coordination, and budget management.',
      },
    ],
  },
];
