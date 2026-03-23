export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  role: string;
  timeline: string;
  tools: string[];
  problem: string;
  research: string;
  process: string;
  solution: string;
  outcome: string;
}

export const initialProjects: Project[] = [
  {
    id: "1",
    slug: "finflow-banking-app",
    title: "FinFlow — Mobile Banking Redesign",
    description: "Reimagining the mobile banking experience for a younger demographic, focusing on clarity, trust, and financial literacy.",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
    role: "Lead UX Designer",
    timeline: "Jan 2024 – Apr 2024",
    tools: ["Figma", "Maze", "Hotjar", "Miro"],
    problem: "The existing mobile banking app had a 62% drop-off rate during onboarding. Users aged 18–30 reported feeling overwhelmed by dense financial jargon and a cluttered interface that prioritized features over comprehension.",
    research: "Conducted 24 user interviews across three demographics, ran a competitive audit of 8 fintech apps, and deployed an unmoderated usability study with 150 participants. Key insight: users wanted to feel 'guided' rather than 'informed' — they preferred progressive disclosure over information density.",
    process: "Started with affinity mapping from research data, then developed three distinct personas. Created user journey maps highlighting emotional states at each touchpoint. Ran two rounds of design sprints, testing low-fidelity wireframes before moving to high-fidelity prototypes. Iterated based on A/B testing results.",
    solution: "Designed a step-by-step onboarding flow with contextual tooltips, simplified the navigation to 4 core tabs, and introduced a 'Financial Health Score' dashboard that gamified savings goals. Used a warm, approachable visual language with illustrations instead of stock photography.",
    outcome: "Onboarding completion increased from 38% to 81%. App store rating improved from 3.2 to 4.6 stars. Monthly active users grew by 34% within three months of launch. The Financial Health Score became the most-used feature.",
  },
  {
    id: "2",
    slug: "mediconnect-healthcare-portal",
    title: "MediConnect — Patient Portal",
    description: "Designing an accessible healthcare portal that bridges the communication gap between patients and providers.",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    role: "UX Designer & Researcher",
    timeline: "Jun 2023 – Oct 2023",
    tools: ["Figma", "UserTesting", "Optimal Workshop", "Notion"],
    problem: "Patients over 55 struggled to navigate the existing portal, with 70% requiring phone support for basic tasks like viewing test results or scheduling appointments. The interface was designed by engineers with minimal user input.",
    research: "Ran contextual inquiries with 18 patients in clinic waiting rooms, conducted card sorting exercises with 40 participants to restructure information architecture, and performed accessibility audits against WCAG 2.1 AA standards. Discovered that typography size, color contrast, and cognitive load were the primary barriers.",
    process: "Rebuilt the information architecture from scratch using tree testing results. Developed an accessibility-first design system with minimum 16px body text, 4.5:1 contrast ratios, and clear visual hierarchy. Prototyped key flows and tested with screen readers and assistive technologies.",
    solution: "Created a dashboard-first experience with large, clearly labeled action cards. Implemented a 'Quick Actions' bar for the three most common tasks. Added a built-in glossary for medical terms and a simplified messaging system with read receipts and response time estimates.",
    outcome: "Phone support calls decreased by 58%. Task completion rate for users 55+ improved from 31% to 87%. The portal received recognition from the Healthcare Information Management Systems Society (HIMSS) for accessibility excellence.",
  },
  {
    id: "3",
    slug: "culinary-canvas-recipe-platform",
    title: "Culinary Canvas — Recipe Platform",
    description: "A community-driven recipe platform designed to make cooking approachable for beginners while satisfying experienced home chefs.",
    thumbnail: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
    role: "Product Designer",
    timeline: "Nov 2023 – Feb 2024",
    tools: ["Figma", "Principle", "Airtable", "Lookback"],
    problem: "Existing recipe platforms overwhelmed beginners with complex instructions and ingredient lists while failing to engage experienced cooks who wanted community features and advanced techniques. There was no middle ground.",
    research: "Surveyed 300 home cooks across skill levels, analyzed usage patterns of 5 competing platforms, and conducted diary studies with 12 participants over two weeks. Found that beginners wanted visual step-by-step guidance while experts wanted to customize, share, and discuss techniques.",
    process: "Developed a skill-based personalization framework that adapts content presentation based on user proficiency. Created interactive prototypes for both beginner and advanced flows. Tested with 30 participants across skill levels in moderated sessions, iterating on the adaptive UI logic.",
    solution: "Designed a 'Skill Mode' toggle that adjusts recipe detail level — beginners see photo-illustrated steps with timer integrations, while advanced users see concise instructions with technique notes. Built a community section with recipe remixes, technique discussions, and chef spotlights.",
    outcome: "Beta launch attracted 12,000 users in the first month. Beginner users reported 40% higher confidence in trying new recipes. The 'Skill Mode' feature was highlighted in a TechCrunch article about adaptive UI design.",
  },
];
