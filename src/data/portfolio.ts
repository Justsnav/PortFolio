// =============================================================================
// PORTFOLIO CONFIGURATION & DATA FILE
// =============================================================================
// All personal information, projects, links, skills, and quotes are defined here.
// To change any text, image, or link on your portfolio, simply edit the values below.
//
// 💡 TIPS FOR IMAGES & RESUME:
// - Place image files in the "public" folder (e.g. public/profile.jpg, public/newBackground.png).
// - Reference them with a leading slash: "/profile.jpg" or "/newBackground.png".
// - When you run `npm run build`, Vite automatically includes everything in "public".
// =============================================================================

// -----------------------------------------------------------------------------
// 1. PROFILE DETAILS
// -----------------------------------------------------------------------------
export const profile = {
  name: "Abhinav Kumar",
  initials: "AB",
  role: "Developer in Progress · Builder by Passion",
  intro:
    "Curious by nature, developer by choice. I turn ideas into interactive experiences, build tools that make life easier, and constantly push myself to create better software.",
  email: "003abhinavkumar@gmail.com",

  // Social & Coding Links
  github: "https://github.com/Justsnav",
  linkedin: "https://www.linkedin.com/in/kumar-abhi-nav",
  leetcode: "https://leetcode.com/u/rag_spark_40/",
  leetcodeUsername: "rag_spark_40",
  githubUsername: "Justsnav",
  codolio: "https://codolio.com/profile/rag_spark_40",

  // Assets (located in the /public folder)
  resumeUrl: "/Abhinav_KS_Resume.pdf",
  avatarUrl: "/profile.jpg",          // Your circular profile picture
  bannerUrl: "/newBackground.png",     // Hero section background image
};

// -----------------------------------------------------------------------------
// 2. PROJECTS
// -----------------------------------------------------------------------------
// To add a new project, simply copy one of the objects below and paste it into the array.
// - github: Your GitHub repo link (e.g. "https://github.com/Justsnav/repo-name")
// - demo: Your live deployed link (e.g. "https://myproject.vercel.app") - leave "" if none
// - accent: Card theme color: "violet" | "blue" | "green" | "orange"
// -----------------------------------------------------------------------------
export interface Project {
  name: string;
  description: string;
  tags: string[];
  accent: "violet" | "blue" | "green" | "orange";
  github?: string; // GitHub repository URL (leave "" or omit if not available)
  demo?: string;   // Live demo URL (leave "" or omit if not available)
}

export const projects: Project[] = [
  {
    name: "Prompt Optimizer",
    description:
      "A full-stack developer tool that helps users refine LLM prompts by removing unnecessary wording and reducing token usage. Features a rule-based prompt compression engine, token counting, estimated API cost analysis, secure authentication, and saved prompt history.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "js-tiktoken",
    ],
    accent: "violet",
    github: "https://github.com/Justsnav", // 👈 Add your repo link here
    demo: "",                              // 👈 Add your live demo link here
  },
  {
    name: "Task Manager",
    description:
      "A full-stack task management application designed to simplify daily planning and improve productivity. Enables users to organize tasks, manage their progress, prioritize work, and maintain a structured workflow through an intuitive interface backed by RESTful APIs and persistent database storage.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    accent: "blue",
    github: "https://github.com/Justsnav", // 👈 Add your repo link here
    demo: "",                              // 👈 Add your live demo link here
  },
  {
    name: "Expense Tracker",
    description:
      "A personal finance application that helps users record expenses, categorize transactions, and understand their spending habits. Includes structured expense tracking, visual summaries, and insights into spending patterns to support better budgeting and more informed financial decisions.",
    tags: [
      "React",
      "TypeScript",
      "Firebase",
      "Data Visualization",
    ],
    accent: "green",
    github: "https://github.com/Justsnav", // 👈 Add your repo link here
    demo: "",                              // 👈 Add your live demo link here
  },
  {
    name: "KalaSetu",
    description:
      "A digital platform built to connect artisans directly with potential buyers and help preserve traditional craftsmanship. Combines product discovery and artisan-focused tools with an AI-powered chatbot, digital bookkeeping, and learning resources to support artisans in managing and growing their businesses.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "React Query",
      "AI Integration",
    ],
    accent: "orange",
    github: "https://github.com/Justsnav", // 👈 Add your repo link here
    demo: "",                              // 👈 Add your live demo link here
  },
];

// -----------------------------------------------------------------------------
// 3. CODING PROFILES
// -----------------------------------------------------------------------------
// Format: [Platform Name, Username / Handle, Profile URL]
// -----------------------------------------------------------------------------
export const codingProfiles = [
  ["LeetCode", "rag_spark_40", "https://leetcode.com/u/rag_spark_40/"],
  ["Codeforces", "YOUR_CODEFORCES_USERNAME", "https://codeforces.com/profile/rag-spark-40"],
  ["CodeChef", "YOUR_CODECHEF_USERNAME", "YOUR_CODECHEF_PROFILE_URL"],
  ["GeeksforGeeks", "YOUR_GFG_USERNAME", "YOUR_GFG_PROFILE_URL"],
  ["HackerRank", "YOUR_HACKERRANK_USERNAME", "YOUR_HACKERRANK_PROFILE_URL"],
  ["AtCoder", "YOUR_ATCODER_USERNAME", "YOUR_ATCODER_PROFILE_URL"],
  ["GitHub", "Justsnav", "https://github.com/Justsnav"],
] as const;

// -----------------------------------------------------------------------------
// 4. TECH STACK & TOOLS
// -----------------------------------------------------------------------------
// Format: [Display Label, Devicon Icon Path]
// Icons are fetched automatically from devicon.dev via cdn.jsdelivr.net
// -----------------------------------------------------------------------------
export const tech = [
  ["C++", "cplusplus/cplusplus-original.svg"],
  ["JavaScript", "javascript/javascript-original.svg"],
  ["TypeScript", "typescript/typescript-original.svg"],
  ["SQL", "azuresqldatabase/azuresqldatabase-original.svg"],
  ["HTML", "html5/html5-original.svg"],
  ["CSS", "css3/css3-original.svg"],
  ["React", "react/react-original.svg"],
  ["Tailwind CSS", "tailwindcss/tailwindcss-original.svg"],
  ["Node.js", "nodejs/nodejs-original.svg"],
  ["Express", "express/express-original.svg"],
  ["MongoDB", "mongodb/mongodb-original.svg"],
  ["MySQL", "mysql/mysql-original.svg"],
  ["Firebase", "firebase/firebase-plain.svg"],
  ["Git", "git/git-original.svg"],
  ["GitHub", "github/github-original.svg"],
] as const;

// -----------------------------------------------------------------------------
// 5. INSPIRATIONAL QUOTES
// -----------------------------------------------------------------------------
// Format: [Quote text, Author]
// -----------------------------------------------------------------------------
export const quotes = [
  ["The secret of getting ahead is getting started.", "Mark Twain"],
  ["Simplicity is the soul of efficiency.", "Austin Freeman"],
  ["Great things are done by a series of small things brought together.", "Vincent van Gogh"],
  ["The only way to learn a new programming language is by writing programs in it.", "Dennis Ritchie"],
];
