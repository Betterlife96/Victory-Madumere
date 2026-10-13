export interface Project {
  id: string;
  title: string;
  tagline: string;
  image: string;
  technologies: string[];
  overview: string;
  challenge: string;
  contribution: string[];
  technicalApproach: string[];
  uxuiApproach: string[];
  results: string[];
  metrics: { label: string; value: string }[];
  keyCapabilities: string[];
  demoType: 'analytics' | 'ecommerce' | 'sentiment';
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: 'Victory Madumere',
  title: 'Senior Frontend Developer',
  subtitle: 'React · TypeScript · Next.js · UX/UI Engineering',
  location: 'Berlin, Germany',
  availability: 'Open to opportunities',
  email: 'tory.madumere@gmail.com',
  headline: 'Building digital experiences that feel as good as they perform.',
  leadBio:
    "I'm a Berlin-based frontend developer focused on creating scalable, intuitive, and high-performance web applications. I combine thoughtful UX/UI engineering with modern frontend architecture to build digital products that are beautiful, accessible, and reliable.",
  detailedBio:
    'With nearly five years of hands-on experience across e-commerce platforms, real-time analytics dashboards, and customer sentiment systems, I specialize in translating complex technical requirements and intricate Figma designs into production-ready frontend systems. My work bridges engineering rigor with user-centered design, ensuring that every interface is fast, accessible, and easy to maintain.',
  education: {
    degree: 'B.Sc. Computer Science',
    institution: 'University of Birmingham',
    location: 'United Kingdom',
    period: 'March 2019 – September 2021',
  },
  cvPath: '/Victory_Madumere_CV.pdf',
};

export const ACHIEVEMENTS = [
  {
    metric: '1,500+',
    label: 'Active Users Supported',
    context: 'At Etc GMBH Solutions on responsive React/TypeScript enterprise web applications.',
  },
  {
    metric: '25%',
    label: 'Reduction in Page Load Time',
    context: 'Achieved at Aero Interactive through code splitting, asset optimization, and rendering improvements.',
  },
  {
    metric: '50,000+',
    label: 'Customer Reviews Handled',
    context: 'At Tribal Tech across high-traffic responsive forms and real-time administrative dashboards.',
  },
  {
    metric: '15%',
    label: 'Improvement in Delivery Speed',
    context: 'Through reusable component libraries, design token systems, and standardized frontend architecture.',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Etc GMBH Solutions',
    role: 'Full Stack Web Developer',
    location: 'Berlin, Germany',
    period: 'September 2024 – Present',
    summary:
      'Leading frontend engineering and full-stack integration for responsive enterprise web platforms serving over 1,500 active users in the DACH region.',
    achievements: [
      'Developed responsive frontend applications using React, TypeScript, and modern JavaScript, supporting over 1,500 active users.',
      'Translated UX/UI specifications and product requirements into accessible, reusable frontend components.',
      'Contributed to frontend architecture and reusable component systems, improving maintainability and consistency.',
      'Worked closely with UX/UI designers, product managers, and QA engineers to deliver production-ready interfaces.',
      'Helped implement consistent design patterns and user-centered interfaces across application features.',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'REST APIs', 'Node.js', 'Figma', 'Jest'],
  },
  {
    company: 'Aero Interactive',
    role: 'Front-End Developer',
    location: 'London, United Kingdom',
    period: 'June 2023 – March 2024',
    summary:
      'Engineered high-throughput interactive data visualization interfaces and real-time monitoring solutions with strict WCAG 2.1 accessibility criteria.',
    achievements: [
      'Developed responsive and accessible web interfaces using React, Vue.js, and modern JavaScript.',
      'Built a real-time analytics dashboard using React, Chart.js, and WebSockets.',
      'Transformed complex information into intuitive, interactive visualizations.',
      'Contributed to a 25% reduction in average page loading time.',
      'Improved application accessibility in alignment with WCAG 2.1 standards.',
      'Ensured consistent user experiences across desktop, tablet, and mobile.',
    ],
    technologies: ['React', 'Vue.js', 'TypeScript', 'WebSockets', 'Chart.js', 'WCAG 2.1', 'Performance Optimization'],
  },
  {
    company: 'Tribal Tech',
    role: 'Full Stack Developer Intern',
    location: 'London, United Kingdom',
    period: 'November 2021 – April 2023',
    summary:
      'Contributed to the frontend engineering of customer feedback workflows and administrative analytics tooling processing high-volume consumer feedback.',
    achievements: [
      'Developed interactive admin dashboards using React and D3.js.',
      'Built responsive frontend forms and interfaces for a customer feedback platform handling over 50,000 reviews.',
      'Collaborated on debugging, code reviews, and application improvements.',
      'Contributed to a 20% reduction in reported bugs.',
    ],
    technologies: ['React', 'D3.js', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'MongoDB', 'Git'],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'analytics-dashboard',
    title: 'Real-Time Analytics Dashboard',
    tagline: 'Interactive operational monitoring platform with live telemetry streaming',
    image: '/src/assets/images/analytics_dashboard_preview_1791930392957.jpg',
    technologies: ['React', 'Chart.js', 'WebSockets', 'REST APIs', 'TypeScript'],
    overview:
      'An interactive, responsive analytics dashboard engineered to help teams monitor user engagement, operational telemetry, and performance through intuitive data visualizations and low-latency streaming.',
    challenge:
      'Handling high-frequency WebSocket data updates without causing browser jank, layout thrashing, or UI stuttering on low-end hardware, while maintaining accessible tabular fallbacks.',
    contribution: [
      'Architected the real-time event pipeline decoupling WebSocket message streams from React render lifecycles.',
      'Built custom responsive charting components on top of Chart.js with dynamic downsampling for high-frequency tick streams.',
      'Implemented role-based dashboard viewports tailored for administrators, analysts, and enterprise clients.',
      'Engineered data export modules enabling CSV and JSON metric extraction directly in the client.',
    ],
    technicalApproach: [
      'Employed Web Workers for telemetry buffer crunching and delta calculations.',
      'Integrated resilient WebSocket reconnection with exponential backoff and connection state telemetry.',
      'Strict TypeScript interfaces for real-time payload verification.',
      'Optimized memoization and lightweight canvas-based chart rendering.',
    ],
    uxuiApproach: [
      'Designed high-contrast dark mode visualization palettes ensuring WCAG 2.1 AA legibility.',
      'Created micro-interactions showing real-time data ingestion without distracting notification badges.',
      'Responsive multi-breakpoint grid that gracefully shifts from multi-widget Bento cards on desktop to linear stack on mobile.',
    ],
    results: [
      'Engineered stable live telemetry handling continuous WebSocket events.',
      'Contributed to a 25% reduction in average dashboard loading time through modular code-splitting.',
      'Maintained 60 FPS scrolling and chart interaction during continuous live updates.',
    ],
    metrics: [
      { label: 'Latency', value: '< 40ms' },
      { label: 'Load Improvement', value: '25%' },
      { label: 'Concurrent Views', value: 'Multi-Role' },
    ],
    keyCapabilities: [
      'Real-time WebSocket data streaming',
      'Interactive Chart.js visualizations',
      'Role-based access control (Admin / Analyst / Client)',
      'Client-side CSV/JSON reporting & data export',
      'Responsive multi-device layout architecture',
      'WCAG 2.1 AA accessible data tables',
    ],
    demoType: 'analytics',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform Development',
    tagline: 'High-conversion retail frontend supporting 2,000+ daily transactions',
    image: '/src/assets/images/ecommerce_platform_preview_1791930393856.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Stripe', 'PayPal'],
    overview:
      'Frontend architecture and interface engineering for a scalable, modern e-commerce storefront and administrative back-office supporting over 2,000 daily transactions.',
    challenge:
      'Designing checkout workflows with minimal cart abandonment, bulletproof client-side input validation, and seamless multi-provider payment reconciliation (Stripe & PayPal).',
    contribution: [
      'Engineered the core product browsing catalogue with instantaneous multi-faceted filtering and search.',
      'Developed accessible, step-by-step checkout workflows with inline input validation and error feedback.',
      'Integrated Stripe Elements and PayPal SDK with PCI-compliant token handling.',
      'Built merchant administration views for live inventory tracking and real-time sales reporting.',
    ],
    technicalApproach: [
      'Built atomic, reusable design tokens and UI components (buttons, input fields, modals, toast alerts).',
      'Implemented optimistic UI updates for instant cart item adjustments and pricing calculations.',
      'Leveraged modern REST endpoints with client-side caching to eliminate duplicate product queries.',
    ],
    uxuiApproach: [
      'Streamlined checkout flow into a single-glance review system to reduce user cognitive load.',
      'Designed mobile-first touch ergonomics with 48px tap targets for cart and purchase buttons.',
      'Subtle feedback animations for item additions and order completion state transitions.',
    ],
    results: [
      'Supported over 2,000 daily customer transactions with zero checkout flow regression.',
      'Standardized reusable component library, boosting feature delivery speed by 15%.',
      'Smooth checkout experience with sub-200ms form validation feedback.',
    ],
    metrics: [
      { label: 'Daily Transactions', value: '2,000+' },
      { label: 'Delivery Speed Boost', value: '15%' },
      { label: 'Payment Providers', value: 'Stripe & PayPal' },
    ],
    keyCapabilities: [
      'Faceted product filtering & dynamic search',
      'Secure multi-gateway payment (Stripe & PayPal)',
      'Step-by-step intuitive checkout experience',
      'Inventory management & sales dashboard',
      'Responsive design across mobile, tablet, and desktop',
      'Optimistic cart state & client-side caching',
    ],
    demoType: 'ecommerce',
  },
  {
    id: 'sentiment-system',
    title: 'Customer Feedback & Sentiment System',
    tagline: 'Sentiment analysis frontend and dashboard handling 50,000+ customer reviews',
    image: '/src/assets/images/feedback_sentiment_preview_1791930393886.jpg',
    technologies: ['React', 'Node.js', 'REST APIs', 'MongoDB', 'D3.js'],
    overview:
      'Developed React-based customer review collection forms and interactive administrative dashboards for a customer sentiment analysis platform processing over 50,000 reviews.',
    challenge:
      'Presenting complex sentiment telemetry (NPS distributions, thematic clustering, and negative trend escalations) in an intuitive dashboard that operational managers could immediately act upon.',
    contribution: [
      'Engineered responsive, accessible customer feedback forms with dynamic questioning paths.',
      'Built interactive administrative dashboards visualizing sentiment shifts, review volume, and NPS trends.',
      'Implemented automated ticket routing interfaces that prioritized severe negative feedback.',
      'Contributed to an 18% improvement in negative-feedback resolution time.',
    ],
    technicalApproach: [
      'Utilized React state management and modular chart widgets for customizable dashboard grids.',
      'Constructed REST client integration with real-time feedback ingestion webhooks.',
      'Implemented debounced search and filtering across thousands of review records.',
    ],
    uxuiApproach: [
      'Devised an intuitive color-coded sentiment spectrum paired with explicit text labels for accessibility.',
      'Created actionable review cards allowing one-click escalations and direct customer responses.',
      'Designed frictionless 3-step submission forms achieving high mobile completion rates.',
    ],
    results: [
      'Platform reliably handled over 50,000 customer reviews.',
      'Contributed to an 18% improvement in negative-feedback resolution time.',
      'Achieved full WCAG 2.1 compliance on public-facing consumer submission forms.',
    ],
    metrics: [
      { label: 'Reviews Processed', value: '50,000+' },
      { label: 'Resolution Speed', value: '+18%' },
      { label: 'Defect Reduction', value: '20%' },
    ],
    keyCapabilities: [
      'Multi-channel customer review submission',
      'NPS and sentiment scoring telemetry',
      'Interactive sentiment distribution charts',
      'Urgent negative review prioritization',
      'Admin triage and escalation workflows',
      'Accessible, mobile-optimized feedback forms',
    ],
    demoType: 'sentiment',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Development',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'HTML5', 'CSS3 / Tailwind', 'Vue.js'],
  },
  {
    category: 'UX/UI Engineering',
    skills: [
      'Figma-to-Code Implementation',
      'Design Systems',
      'Reusable UI Components',
      'User-Centered Design',
      'Interactive Prototyping',
      'Cross-Browser Compatibility',
    ],
  },
  {
    category: 'Frontend Architecture',
    skills: [
      'Component-Based Architecture',
      'React Hooks & Custom Hooks',
      'Context API',
      'Redux & State Management',
      'Component Composition',
      'Modular Clean Code',
    ],
  },
  {
    category: 'Testing & Quality',
    skills: [
      'Jest',
      'React Testing Library',
      'Cypress',
      'Playwright',
      'Unit Testing',
      'Integration Testing',
      'Debugging & Profiling',
      'Peer Code Reviews',
    ],
  },
  {
    category: 'Performance & Accessibility',
    skills: [
      'Web Performance Optimization',
      'Code Splitting & Lazy Loading',
      'Responsive Design',
      'WCAG 2.1 Standards',
      'Semantic HTML',
      'Lighthouse Optimization',
    ],
  },
  {
    category: 'APIs & Integration',
    skills: ['REST APIs', 'GraphQL', 'WebSockets', 'Authentication & JWT', 'Authorization & RBAC', 'Third-Party SDKs'],
  },
  {
    category: 'Backend & Tools',
    skills: ['Node.js', 'Express.js', 'SQL', 'MongoDB', 'AWS', 'Docker', 'Firebase', 'Git & GitHub', 'CI/CD Pipelines'],
  },
];
