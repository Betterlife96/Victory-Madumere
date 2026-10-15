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
  phone: '+4915223429486',
  availability: 'Open to opportunities',
  email: 'tory.madumere@gmail.com',
  headline: 'Building digital experiences that feel as good as they perform.',
  leadBio:
    'Frontend-focused Software Engineer with 5+ years of experience developing scalable web applications, e-commerce platforms, and digital products using React, TypeScript, JavaScript, and Next.js. Strong background in frontend architecture, UX/UI engineering, reusable component systems, API integration, and performance optimization.',
  detailedBio:
    'Experienced in building responsive, accessible interfaces and supporting complex e-commerce workflows. Combines full-stack engineering expertise with a product-focused approach to delivering intuitive, maintainable, and high-performance digital experiences across enterprise applications, global consumer brands, and real-time data platforms.',
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
    context: 'At Etc GMBH Solutions on scalable web applications using React, TypeScript, Node.js, and Express.js.',
  },
  {
    metric: '2,000+',
    label: 'Daily E-Commerce Transactions',
    context: 'On high-conversion React storefronts and checkout workflows integrated with Stripe & PayPal.',
  },
  {
    metric: '50,000+',
    label: 'Customer Reviews Handled',
    context: 'Processed through high-throughput feedback forms and real-time administrative dashboards.',
  },
  {
    metric: '18%',
    label: 'Faster Resolution Time',
    context: 'Achieved through streamlined triage, interactive sentiment analysis, and optimized frontend delivery.',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Etc GMBH Solutions',
    role: 'Full Stack Web Developer',
    location: 'Berlin, Germany',
    period: 'September 2024 – September 2026',
    summary:
      'Developing and maintaining scalable web applications using React, TypeScript, Node.js, and Express.js, supporting over 1,500 active users.',
    achievements: [
      'Developed and maintained scalable web applications using React, TypeScript, Node.js, and Express.js, supporting over 1,500 active users.',
      'Led frontend architecture decisions and built reusable React component systems to improve maintainability, consistency, and development efficiency.',
      'Translated UX/UI designs and product requirements into responsive, accessible, production-ready interfaces.',
      'Integrated RESTful APIs and backend services to support dynamic, data-driven application features.',
      'Collaborated with UX/UI designers, product managers, and QA engineers to improve usability, application performance, and software delivery.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'Frontend Architecture', 'UX/UI Engineering'],
  },
  {
    company: "L'Oréal",
    role: 'E-commerce Developer',
    location: 'London, United Kingdom',
    period: 'October 2022 – September 2024',
    summary:
      'Built responsive, conversion-focused e-commerce interfaces and reusable frontend components using React and TypeScript across global product lines.',
    achievements: [
      'Built responsive, conversion-focused e-commerce interfaces and reusable frontend components using React and TypeScript to improve development consistency across product lines.',
      'Implemented and maintained API integrations for product catalog, cart, and payment workflows, increasing checkout reliability and data accuracy.',
      'Authored unit and integration tests and participated in code reviews to raise code quality and reduce regressions.',
      'Collaborated with product managers and designers to deliver user-centered features and streamline release handoffs.',
    ],
    technologies: ['React', 'TypeScript', 'E-commerce', 'Checkout APIs', 'Stripe', 'Unit Testing', 'Design Systems'],
  },
  {
    company: "L'Oréal",
    role: 'Digital Product Engineer',
    location: 'London, United Kingdom',
    period: 'February 2022 – October 2022',
    summary:
      'Contributed to the development of web-based digital products and responsive user interfaces with cross-functional teams.',
    achievements: [
      'Contributed to the development of web-based digital products and responsive user interfaces.',
      'Translated product requirements and UX/UI specifications into reusable frontend features.',
      'Supported API integrations, debugging, testing, and application improvements.',
      'Collaborated with cross-functional teams to deliver reliable and user-centered digital experiences.',
    ],
    technologies: ['React', 'JavaScript', 'Digital Products', 'API Integration', 'Responsive Design', 'Cross-functional'],
  },
  {
    company: 'Tribal Tech',
    role: 'Full Stack Developer Intern',
    location: 'Manchester, United Kingdom',
    period: 'January 2021 – June 2021',
    summary:
      'Supported the development of frontend and backend application features using React, JavaScript, Node.js, and Express.js.',
    achievements: [
      'Supported the development of frontend and backend application features using React, JavaScript, Node.js, and Express.js.',
      'Built interactive frontend components and administrative dashboards for data visualization and reporting.',
      'Assisted with REST API integration, debugging, and application testing.',
      'Participated in code reviews and collaborated with developers to improve application reliability.',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'Dashboards', 'REST APIs', 'Debugging'],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform Development',
    tagline: 'High-conversion retail frontend supporting 2,000+ daily transactions',
    image: '/projects/ecommerce_platform_preview.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Stripe', 'PayPal'],
    overview:
      'Frontend architecture and interface engineering for a scalable, modern e-commerce storefront and administrative back-office supporting over 2,000 daily transactions.',
    challenge:
      'Designing checkout workflows with minimal cart abandonment, bulletproof client-side input validation, and seamless multi-provider payment reconciliation (Stripe & PayPal).',
    contribution: [
      'Developed a scalable React-based e-commerce application supporting over 2,000 daily transactions.',
      'Built responsive customer-facing shopping interfaces and administrative dashboards for inventory, sales, and user management, focusing on usability and consistent UX/UI.',
      'Integrated Stripe and PayPal into secure checkout workflows, connecting frontend components with backend APIs and authentication services.',
      'Engineered atomic design tokens and reusable UI components for cart, checkout, and inventory views.',
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
      'Standardized reusable component library, boosting feature delivery speed and code consistency.',
      'Smooth checkout experience with sub-200ms form validation feedback.',
    ],
    metrics: [
      { label: 'Daily Transactions', value: '2,000+' },
      { label: 'Payment Providers', value: 'Stripe & PayPal' },
      { label: 'Architecture', value: 'Reusable Components' },
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
    id: 'analytics-dashboard',
    title: 'Real-Time Analytics Dashboard',
    tagline: 'Interactive operational monitoring platform with live telemetry streaming',
    image: '/projects/analytics_dashboard_preview.jpg',
    technologies: ['React', 'Chart.js', 'WebSockets', 'REST APIs', 'TypeScript'],
    overview:
      'An interactive, responsive analytics dashboard engineered to help teams monitor user engagement, operational telemetry, and performance through intuitive data visualizations and low-latency streaming.',
    challenge:
      'Handling high-frequency WebSocket data updates without causing browser jank, layout thrashing, or UI stuttering on low-end hardware, while maintaining accessible tabular fallbacks.',
    contribution: [
      'Developed a responsive, real-time analytics dashboard using React and Chart.js, presenting complex engagement and operational data through intuitive, interactive visualizations.',
      'Built reusable UI components and consistent dashboard interfaces to improve clarity, usability, and maintainability.',
      'Integrated real-time data updates using WebSockets and backend APIs.',
      'Implemented role-based access control (RBAC), supporting tailored dashboard experiences for administrators, analysts, and clients.',
      'Developed export and reporting functionality to improve access to business insights.',
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
      'Maintained 60 FPS scrolling and chart interaction during continuous live updates.',
      'Tailored role-based views for administrators, analysts, and clients.',
    ],
    metrics: [
      { label: 'Stream Latency', value: '< 40ms' },
      { label: 'Rendering', value: '60 FPS Canvas' },
      { label: 'Access Control', value: 'Multi-Role RBAC' },
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
    id: 'sentiment-system',
    title: 'Customer Feedback & Sentiment System',
    tagline: 'Sentiment analysis frontend and dashboard handling 50,000+ customer reviews',
    image: '/projects/feedback_sentiment_preview.jpg',
    technologies: ['React', 'Node.js', 'REST APIs', 'MongoDB', 'D3.js'],
    overview:
      'Developed React-based customer review collection forms and interactive administrative dashboards for a customer sentiment analysis platform processing over 50,000 reviews.',
    challenge:
      'Presenting complex sentiment telemetry (NPS distributions, thematic clustering, and negative trend escalations) in an intuitive dashboard that operational managers could immediately act upon.',
    contribution: [
      'Integrated frontend components with Node.js APIs and backend sentiment-analysis services to deliver processed insights.',
      'Supported a platform processing 50,000+ reviews and reduced negative-feedback resolution time by 18% through improved triage and visibility.',
      'Developed React-based feedback forms and interactive admin dashboards, integrating Node.js APIs to present customer reviews and sentiment analysis insights.',
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
      { label: 'Accessibility', value: 'WCAG 2.1 AA' },
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
      'UI Component Libraries',
      'Design-to-Development Handoff',
      'User-Centered Design',
      'Interactive Prototyping',
      'Visual Consistency',
      'Cross-Browser Compatibility',
    ],
  },
  {
    category: 'Frontend Architecture',
    skills: [
      'Component-Based Architecture',
      'Reusable UI Components',
      'React Hooks & Custom Hooks',
      'Context API',
      'Redux & State Management',
      'Component Composition',
      'Design System Implementation',
    ],
  },
  {
    category: 'E-commerce & Digital Products',
    skills: [
      'E-commerce Development',
      'Digital Shopping Experiences',
      'Product & Inventory Interfaces',
      'Checkout Workflows',
      'Payment Integration (Stripe, PayPal)',
      'API Integration',
      'User Experience Optimization',
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
      'Code Reviews',
    ],
  },
  {
    category: 'Performance & Accessibility',
    skills: [
      'Web Performance Optimization',
      'Code Splitting & Lazy Loading',
      'Responsive Design',
      'WCAG 2.1 Accessibility',
      'Semantic HTML',
      'Lighthouse Optimization',
    ],
  },
  {
    category: 'API Integration',
    skills: ['REST APIs', 'GraphQL', 'WebSockets', 'Authentication & Authorization', 'Third-Party Webhooks'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'CI/CD Pipelines', 'Agile / Scrum', 'Cross-functional Collaboration'],
  },
  {
    category: 'Additional Technical Skills',
    skills: ['Node.js', 'Express.js', 'SQL', 'MongoDB', 'AWS', 'Docker', 'Firebase'],
  },
  {
    category: 'Languages',
    skills: ['English (Fluent)', 'German (Working proficiency)'],
  },
];
