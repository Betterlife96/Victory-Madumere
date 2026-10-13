import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Dimensions: Standard A4 (595.28 x 841.89)
  const pageWidth = 595.28;
  const pageHeight = 841.89;

  // Colors
  const navyDark = rgb(0.06, 0.16, 0.32); // #0F2952
  const bluePrimary = rgb(0.12, 0.32, 0.68); // #1E52AD
  const textDark = rgb(0.12, 0.14, 0.18);
  const textMuted = rgb(0.38, 0.42, 0.48);
  const sidebarBg = rgb(0.94, 0.96, 0.98); // soft tinted sidebar #F0F4FA
  const borderLight = rgb(0.85, 0.88, 0.92);

  // -------------------------------------------------------------
  // Helper functions
  // -------------------------------------------------------------
  function wrapText(text: string, font: any, size: number, maxWidth: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // =============================================================
  // PAGE 1
  // =============================================================
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);

  // Decorative soft background accents
  page1.drawRectangle({
    x: 400,
    y: 0,
    width: pageWidth - 400,
    height: pageHeight,
    color: sidebarBg,
  });

  // Top header decorative accent
  page1.drawRectangle({
    x: 0,
    y: pageHeight - 6,
    width: pageWidth,
    height: 6,
    color: bluePrimary,
  });

  let leftY = pageHeight - 48;
  const leftX = 40;
  const leftWidth = 345;

  let rightY = pageHeight - 48;
  const rightX = 415;
  const rightWidth = 145;

  // Header: Name & Title
  page1.drawText('VICTORY', {
    x: leftX,
    y: leftY,
    size: 28,
    font: fontBold,
    color: navyDark,
  });
  leftY -= 28;

  page1.drawText('MADUMERE', {
    x: leftX,
    y: leftY,
    size: 28,
    font: fontBold,
    color: navyDark,
  });
  leftY -= 24;

  page1.drawText('Senior Frontend Developer | React, TypeScript, Next.js', {
    x: leftX,
    y: leftY,
    size: 13,
    font: fontBold,
    color: bluePrimary,
  });
  leftY -= 20;

  // Summary Paragraph
  const summary =
    'Senior Frontend Developer with nearly 5 years of experience building scalable, high-performance web applications using React, TypeScript, Next.js, and modern JavaScript. Experienced in frontend architecture, UX/UI engineering, reusable component libraries, and translating Figma designs into accessible, responsive, production-ready interfaces. Delivered solutions supporting 1,500+ active users and platforms handling 50,000+ customer reviews, while contributing to a 25% reduction in page load times and a 15% improvement in delivery speed. Skilled in developing intuitive, user-centered experiences that combine technical excellence, visual consistency, and business objectives.';

  const summaryLines = wrapText(summary, fontRegular, 8.8, leftWidth);
  for (const line of summaryLines) {
    page1.drawText(line, {
      x: leftX,
      y: leftY,
      size: 8.8,
      font: fontRegular,
      color: textDark,
      lineHeight: 12.5,
    });
    leftY -= 12.5;
  }
  leftY -= 14;

  // PROFESSIONAL EXPERIENCE Header
  page1.drawText('PROFESSIONAL EXPERIENCE', {
    x: leftX,
    y: leftY,
    size: 11.5,
    font: fontBold,
    color: navyDark,
  });
  leftY -= 16;

  // Job 1: Etc GMBH Solutions
  page1.drawText('Full Stack Web Developer at Etc GMBH Solutions, Berlin', {
    x: leftX,
    y: leftY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });
  leftY -= 12;

  page1.drawText('SEPT 2024 — PRESENT', {
    x: leftX,
    y: leftY,
    size: 8,
    font: fontBold,
    color: bluePrimary,
  });
  leftY -= 13;

  const etcBullets = [
    'Developed responsive, user-centric web application interfaces using React, TypeScript, and modern JavaScript, supporting 1,500+ active users.',
    'Translated UX/UI design specifications and product requirements into interactive, accessible, and reusable frontend components.',
    'Led frontend architecture decisions and developed scalable, reusable React and TypeScript component systems, establishing consistent UI patterns and improving application maintainability, performance, and development efficiency.',
    'Collaborated with UX/UI designers, product managers, and QA engineers to translate design specifications and business requirements into accessible, responsive, and production-ready interfaces.',
    'Drove UX/UI implementation in collaboration with designers, product managers, and QA engineers, translating product requirements into accessible, responsive interfaces while maintaining design consistency across application features.',
  ];

  for (const b of etcBullets) {
    const lines = wrapText(b, fontRegular, 8.5, leftWidth - 14);
    page1.drawText('•', { x: leftX + 2, y: leftY, size: 8.5, font: fontBold, color: bluePrimary });
    for (let i = 0; i < lines.length; i++) {
      page1.drawText(lines[i], {
        x: leftX + 14,
        y: leftY,
        size: 8.5,
        font: fontRegular,
        color: textDark,
      });
      leftY -= 11.8;
    }
    leftY -= 3;
  }
  leftY -= 8;

  // Job 2: Aero Interactive
  page1.drawText('Front-End Developer at Aero Interactive, London', {
    x: leftX,
    y: leftY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });
  leftY -= 12;

  page1.drawText('JUN 2023 — MAR 2024', {
    x: leftX,
    y: leftY,
    size: 8,
    font: fontBold,
    color: bluePrimary,
  });
  leftY -= 13;

  const aeroBulletsPage1 = [
    'Developed responsive, accessible, and visually consistent web interfaces using React, Vue.js, and modern JavaScript (ES6+), ensuring seamless experiences across desktop, tablet, and mobile devices.',
  ];

  for (const b of aeroBulletsPage1) {
    const lines = wrapText(b, fontRegular, 8.5, leftWidth - 14);
    page1.drawText('•', { x: leftX + 2, y: leftY, size: 8.5, font: fontBold, color: bluePrimary });
    for (let i = 0; i < lines.length; i++) {
      page1.drawText(lines[i], {
        x: leftX + 14,
        y: leftY,
        size: 8.5,
        font: fontRegular,
        color: textDark,
      });
      leftY -= 11.8;
    }
    leftY -= 3;
  }

  // --- Right Column (Page 1) ---
  page1.drawText('Details', {
    x: rightX,
    y: rightY,
    size: 11.5,
    font: fontBold,
    color: navyDark,
  });
  rightY -= 16;

  page1.drawText('Berlin, Berlin, Germany', {
    x: rightX,
    y: rightY,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });
  rightY -= 12;

  page1.drawText('+4915223429486', {
    x: rightX,
    y: rightY,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });
  rightY -= 12;

  page1.drawText('tory.madumere@gmail.com', {
    x: rightX,
    y: rightY,
    size: 8.5,
    font: fontRegular,
    color: bluePrimary,
  });
  rightY -= 26;

  // CORE SKILLS
  page1.drawText('CORE SKILLS', {
    x: rightX,
    y: rightY,
    size: 11.5,
    font: fontBold,
    color: navyDark,
  });
  rightY -= 16;

  // Skill category 1: Frontend Development
  page1.drawText('Frontend Development:', {
    x: rightX,
    y: rightY,
    size: 9,
    font: fontBold,
    color: textDark,
  });
  rightY -= 12;

  const feSkills = 'React, TypeScript, JavaScript (ES6+), Next.js, HTML5, CSS3, Vue.js';
  for (const l of wrapText(feSkills, fontRegular, 8.2, rightWidth)) {
    page1.drawText(l, { x: rightX, y: rightY, size: 8.2, font: fontRegular, color: textDark });
    rightY -= 11;
  }
  rightY -= 10;

  // Skill category 2: UX/UI Engineering
  page1.drawText('UX/UI Engineering:', {
    x: rightX,
    y: rightY,
    size: 9,
    font: fontBold,
    color: textDark,
  });
  rightY -= 12;

  const uxSkills =
    'Figma-to-Code Implementation, Design Systems, UI Component Libraries, Design-to-Development Handoff, User-Centered Design, Interactive Prototyping, Visual Consistency, Cross-Browser Compatibility';
  for (const l of wrapText(uxSkills, fontRegular, 8.2, rightWidth)) {
    page1.drawText(l, { x: rightX, y: rightY, size: 8.2, font: fontRegular, color: textDark });
    rightY -= 11;
  }

  // =============================================================
  // PAGE 2
  // =============================================================
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);

  // Sidebar background
  page2.drawRectangle({
    x: 400,
    y: 0,
    width: pageWidth - 400,
    height: pageHeight,
    color: sidebarBg,
  });

  // Top header decorative accent
  page2.drawRectangle({
    x: 0,
    y: pageHeight - 6,
    width: pageWidth,
    height: 6,
    color: bluePrimary,
  });

  let p2LeftY = pageHeight - 42;
  let p2RightY = pageHeight - 42;

  // Aero Interactive continuation bullets
  const aeroBulletsPage2 = [
    'Built an interactive real-time analytics dashboard using React, Chart.js, and WebSockets, transforming complex datasets into intuitive visualizations and user-friendly interfaces.',
    'Optimized frontend rendering and application performance, reducing average page load times by 25% across core pages.',
    'Improved application accessibility in alignment with WCAG 2.1 standards, enhancing usability and inclusive user experiences.',
  ];

  for (const b of aeroBulletsPage2) {
    const lines = wrapText(b, fontRegular, 8.5, leftWidth - 14);
    page2.drawText('•', { x: leftX + 2, y: p2LeftY, size: 8.5, font: fontBold, color: bluePrimary });
    for (let i = 0; i < lines.length; i++) {
      page2.drawText(lines[i], {
        x: leftX + 14,
        y: p2LeftY,
        size: 8.5,
        font: fontRegular,
        color: textDark,
      });
      p2LeftY -= 11.8;
    }
    p2LeftY -= 3;
  }
  p2LeftY -= 8;

  // Job 3: Tribal Tech
  page2.drawText('Full Stack Developer Intern at Tribal Tech, London', {
    x: leftX,
    y: p2LeftY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });
  p2LeftY -= 12;

  page2.drawText('NOV 2021 — APR 2023', {
    x: leftX,
    y: p2LeftY,
    size: 8,
    font: fontBold,
    color: bluePrimary,
  });
  p2LeftY -= 13;

  const tribalBullets = [
    'Developed interactive React-based admin dashboards using D3.js to visualize operational data and support business reporting.',
    'Built responsive frontend forms and user interfaces for a customer feedback platform processing over 50,000 reviews.',
    'Collaborated on debugging, code reviews, and application improvements, contributing to a 20% reduction in reported bugs.',
  ];

  for (const b of tribalBullets) {
    const lines = wrapText(b, fontRegular, 8.5, leftWidth - 14);
    page2.drawText('•', { x: leftX + 2, y: p2LeftY, size: 8.5, font: fontBold, color: bluePrimary });
    for (let i = 0; i < lines.length; i++) {
      page2.drawText(lines[i], {
        x: leftX + 14,
        y: p2LeftY,
        size: 8.5,
        font: fontRegular,
        color: textDark,
      });
      p2LeftY -= 11.8;
    }
    p2LeftY -= 3;
  }
  p2LeftY -= 12;

  // EDUCATION
  page2.drawText('EDUCATION', {
    x: leftX,
    y: p2LeftY,
    size: 11.5,
    font: fontBold,
    color: navyDark,
  });
  p2LeftY -= 16;

  page2.drawText('B.Sc. Computer Science at University of Birmingham, United Kingdom', {
    x: leftX,
    y: p2LeftY,
    size: 9,
    font: fontBold,
    color: textDark,
  });
  p2LeftY -= 12;

  page2.drawText('MAR 2019 — SEPT 2021', {
    x: leftX,
    y: p2LeftY,
    size: 8,
    font: fontBold,
    color: bluePrimary,
  });
  p2LeftY -= 18;

  // SELECTED PROJECTS
  page2.drawText('SELECTED PROJECTS', {
    x: leftX,
    y: p2LeftY,
    size: 11.5,
    font: fontBold,
    color: navyDark,
  });
  p2LeftY -= 16;

  // Project 1: Real-Time Analytics Dashboard
  page2.drawText('Real-Time Analytics Dashboard', {
    x: leftX,
    y: p2LeftY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });
  p2LeftY -= 13;

  const proj1Bullets = [
    'Developed a responsive, real-time analytics dashboard using React and Chart.js, presenting complex engagement and operational data through intuitive, interactive visualizations.',
    'Built reusable UI components and consistent dashboard interfaces to improve clarity, usability, and maintainability.',
    'Integrated real-time data updates using WebSockets and backend APIs.',
    'Implemented role-based access control (RBAC), supporting tailored dashboard experiences for administrators, analysts, and clients.',
    'Developed export and reporting functionality to improve access to business insights.',
  ];

  for (const b of proj1Bullets) {
    const lines = wrapText(b, fontRegular, 8.2, leftWidth - 14);
    page2.drawText('•', { x: leftX + 2, y: p2LeftY, size: 8.2, font: fontBold, color: bluePrimary });
    for (let i = 0; i < lines.length; i++) {
      page2.drawText(lines[i], { x: leftX + 14, y: p2LeftY, size: 8.2, font: fontRegular, color: textDark });
      p2LeftY -= 11.2;
    }
    p2LeftY -= 2;
  }
  p2LeftY -= 8;

  // Project 2: E-Commerce Platform Development
  page2.drawText('E-Commerce Platform Development', {
    x: leftX,
    y: p2LeftY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });
  p2LeftY -= 13;

  const proj2Bullets = [
    'Developed a scalable React-based e-commerce application supporting over 2,000 daily transactions.',
    'Built responsive customer-facing shopping interfaces and administrative dashboards for inventory, sales, and user management.',
    'Integrated Stripe and PayPal payment gateways into secure checkout workflows.',
    'Connected frontend interfaces with backend APIs and authentication services to support reliable user interactions.',
  ];

  for (const b of proj2Bullets) {
    const lines = wrapText(b, fontRegular, 8.2, leftWidth - 14);
    page2.drawText('•', { x: leftX + 2, y: p2LeftY, size: 8.2, font: fontBold, color: bluePrimary });
    for (let i = 0; i < lines.length; i++) {
      page2.drawText(lines[i], { x: leftX + 14, y: p2LeftY, size: 8.2, font: fontRegular, color: textDark });
      p2LeftY -= 11.2;
    }
    p2LeftY -= 2;
  }
  p2LeftY -= 8;

  // Project 3: Customer Feedback & Sentiment System
  page2.drawText('Customer Feedback & Sentiment System', {
    x: leftX,
    y: p2LeftY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });
  p2LeftY -= 13;

  const proj3Bullets = [
    'Integrated frontend components with Node.js APIs and backend sentiment-analysis services to deliver processed insights.',
    'Supported a platform processing 50,000+ reviews and reduced negative-feedback resolution time by 18% through improved triage and visibility.',
    'Developed React-based feedback forms and interactive admin dashboards, integrating Node.js APIs to present customer reviews and sentiment analysis insights.',
  ];

  for (const b of proj3Bullets) {
    const lines = wrapText(b, fontRegular, 8.2, leftWidth - 14);
    page2.drawText('•', { x: leftX + 2, y: p2LeftY, size: 8.2, font: fontBold, color: bluePrimary });
    for (let i = 0; i < lines.length; i++) {
      page2.drawText(lines[i], { x: leftX + 14, y: p2LeftY, size: 8.2, font: fontRegular, color: textDark });
      p2LeftY -= 11.2;
    }
    p2LeftY -= 2;
  }

  // --- Right Column (Page 2) ---
  const rightSections = [
    {
      title: 'Frontend Architecture:',
      content:
        'Component-Based Architecture, Reusable UI Components, React Hooks, Context API, Redux, State Management, Component Composition, Design System Implementation',
    },
    {
      title: 'Testing & Quality:',
      content:
        'Jest, React Testing Library, Cypress, Playwright, Unit Testing, Integration Testing, Debugging, Code Reviews',
    },
    {
      title: 'Performance & Accessibility:',
      content:
        'Web Performance Optimization, Code Splitting, Lazy Loading, Responsive Design, WCAG 2.1 Accessibility',
    },
    {
      title: 'API Integration:',
      content: 'REST APIs, GraphQL, WebSockets, Authentication & Authorization',
    },
    {
      title: 'Tools & Workflow:',
      content: 'Git, GitHub, CI/CD, Agile/Scrum, Cross-functional Collaboration',
    },
    {
      title: 'Additional Technical Skills:',
      content: 'Node.js, Express.js, SQL, MongoDB, AWS, Docker, Firebase',
    },
  ];

  for (const sec of rightSections) {
    page2.drawText(sec.title, {
      x: rightX,
      y: p2RightY,
      size: 9,
      font: fontBold,
      color: textDark,
    });
    p2RightY -= 12;

    for (const l of wrapText(sec.content, fontRegular, 8.2, rightWidth)) {
      page2.drawText(l, { x: rightX, y: p2RightY, size: 8.2, font: fontRegular, color: textDark });
      p2RightY -= 11;
    }
    p2RightY -= 8;
  }

  // LANGUAGES
  page2.drawText('LANGUAGES', {
    x: rightX,
    y: p2RightY,
    size: 11.5,
    font: fontBold,
    color: navyDark,
  });
  p2RightY -= 16;

  page2.drawText('English', {
    x: rightX,
    y: p2RightY,
    size: 8.5,
    font: fontBold,
    color: textDark,
  });
  p2RightY -= 12;

  page2.drawText('German', {
    x: rightX,
    y: p2RightY,
    size: 8.5,
    font: fontBold,
    color: textDark,
  });

  const pdfBytes = await pdfDoc.save();

  // Save to public root and public/cv
  const targetDir1 = path.resolve(process.cwd(), 'public');
  const targetDir2 = path.resolve(process.cwd(), 'public/cv');

  if (!fs.existsSync(targetDir1)) fs.mkdirSync(targetDir1, { recursive: true });
  if (!fs.existsSync(targetDir2)) fs.mkdirSync(targetDir2, { recursive: true });

  const path1 = path.join(targetDir1, 'Victory_Madumere_CV.pdf');
  const path2 = path.join(targetDir2, 'Victory_Madumere_CV.pdf');

  fs.writeFileSync(path1, pdfBytes);
  fs.writeFileSync(path2, pdfBytes);

  console.log(`Successfully generated PDF CV at: ${path1} and ${path2}`);
}

generateCV().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
