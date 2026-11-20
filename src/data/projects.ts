export interface Project {
  slug: string;
  title: string;
  shortDescription: string | null;
  longDescription: string | null;
  image: string | null;
  screenshots: string[];
  techStack: string[];
  githubUrl: string | null;
  liveDemoUrl: string | null;
  challenges: string | null;
  updates: Update[] | null;
  result: string | null;
  changes: string | null;
  caseStudy?: CaseStudy;
}

export type UpdateType = "feature" | "fix" | "improvement" | "refactor";

export interface Update {
  date: string;
  type: UpdateType;
  text: string;
}

export interface CaseStudyHighlight {
  type: UpdateType;
  title: string;
  text: string;
}

export interface CaseStudy {
  context: string;
  ownership: string[];
  architecture: string[];
  decision: {
    title: string;
    rationale: string;
  };
  highlights: CaseStudyHighlight[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "bughouse",
    title: "bugHouse",
    shortDescription:
      "A full-stack tutoring center management system for tracking student check-ins, tutor availability, and live occupancy.",
    longDescription:
      "Digitize tutoring center check-ins with student ID scanning, live occupancy tracking, tutor availability, and role-based dashboards. Built with React, TypeScript, FastAPI, and Supabase, bugHouse provides real-time metrics, administrative controls, and a centralized system for managing tutoring center activity.",
    image: null,
    screenshots: [
      "/bugHouse/main.png",
      "/bugHouse/team.png",
      "/bugHouse/adminView.png",
    ],
    techStack: [
      "React",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "Tailwind CSS",
      "MagSwipe ID Scanner",
    ],
    githubUrl: null,
    liveDemoUrl: null,
    challenges: null,
    caseStudy: {
      context:
        "UTA's largest Computer Science tutoring center needed a reliable alternative to paper sign-in sheets, which made attendance and occupancy difficult to track.",
      ownership: [
        "Built React and TypeScript dashboard experiences for center operations.",
        "Integrated Supabase data access and attendance analytics.",
        "Translated director feedback into dashboard requirements and helped coordinate the team.",
      ],
      architecture: [
        "University ID swipe",
        "Python scanner program",
        "Supabase PostgreSQL + RLS",
        "Role-based React dashboards",
      ],
      decision: {
        title: "Keep attendance events and reporting summaries separate",
        rationale:
          "Raw swipe events preserve an audit trail, while daily summaries keep occupancy and reporting views fast without repeatedly processing every scan.",
      },
      highlights: [
        {
          type: "feature",
          title: "Tutor arrival visibility",
          text: "Added scheduled-shift status so administrators can quickly see which tutors have arrived.",
        },
        {
          type: "fix",
          title: "Defensive swipe handling",
          text: "Ignored rapid duplicate scans and prevented unmatched check-ins from carrying into the next day.",
        },
        {
          type: "refactor",
          title: "Centralized database mapping",
          text: "Moved database-to-frontend property conversion into a shared helper after resolving snake_case and camelCase mismatches.",
        },
      ],
      outcome:
        "Presented at STEMPOSIUM and approved for continued development toward real-world deployment.",
    },
    updates: [
      {
        date: "10/26/2026",
        type: "refactor",
        text: "Integrated six open pull requests and validated the combined system with CI checks.",
      },
      {
        date: "10/26/2026",
        type: "fix",
        text: "Corrected student totals and attendance charts to use unique visits instead of occupancy snapshots.",
      },
      {
        date: "4/26/2026",
        type: "feature",
        text: "Added tutor-hours trends and scrollable analytics charts for administrators.",
      },
      {
        date: "02/25/2026",
        type: "feature",
        text: "Create the repository!",
      },
    ],
    result: null,
    changes: null,
  },
  {
    slug: "alloy-block-based-editor",
    title: "AlloyBlocks",
    shortDescription:
      "A block-based programming environment for visually creating, running, and exploring Alloy models.",
    longDescription:
      "Build Alloy models using custom drag-and-drop Blockly components instead of writing the modeling language entirely by hand. AlloyBlocks converts visual blocks into Alloy code, executes models through a Spring Boot backend using the Alloy Java API, and visualizes generated instances with interactive React Flow graphs.",
    image: null,
    screenshots: [
      "/AlloyBlocks/editor.png",
      "/AlloyBlocks/code.png",
      "/AlloyBlocks/graph.png",
    ],
    techStack: [
      "React",
      "JavaScript",
      "Blockly",
      "Spring Boot",
      "Docker",
      "CSS",
      "LocalStorage",
    ],
    githubUrl: "https://github.com/AndyKhandy/UR2PhD-Alloy",
    liveDemoUrl: null,
    challenges: null,
    caseStudy: {
      context:
        "Alloy is powerful for formal modeling but its logic and declarative constraints can be difficult for beginners to learn through text alone.",
      ownership: [
        "Developed 41 custom Blockly components for Alloy constructs.",
        "Built generators that turn connected blocks into Alloy source code.",
        "Implemented the Spring Boot integration with the Alloy Analyzer and interactive instance graphs.",
      ],
      architecture: [
        "React + Blockly workspace",
        "Alloy code generation",
        "Spring Boot + Alloy Analyzer",
        "JSON results",
        "ELK.js + React Flow graph",
      ],
      decision: {
        title: "Use Blockly and Spring Boot instead of building editor infrastructure from scratch",
        rationale:
          "Blockly supplied mature drag-and-drop and connection behavior, while Spring Boot directly integrates with Alloy's Java API. That left more time for the learning-focused modeling experience.",
      },
      highlights: [
        {
          type: "feature",
          title: "Visual Alloy modeling",
          text: "Created custom blocks and generators for most non-temporal Alloy constructs.",
        },
        {
          type: "feature",
          title: "Interactive solver results",
          text: "Converted analyzer atoms and relations into pan-and-zoom React Flow graphs with ELK-based layout.",
        },
        {
          type: "improvement",
          title: "Guided structural validity",
          text: "Used block connection constraints to reduce invalid expression combinations before a model is run.",
        },
      ],
      outcome:
        "Established the technical foundation for ongoing undergraduate research into block-based Alloy learning experiences.",
    },
    updates: [
      {
        date: "9/03/2026",
        type: "feature",
        text: "Enhanced Blockly editing with persistent flyouts, multi-relation signatures, and clearer subset models.",
      },
      {
        date: "8/31/2026",
        type: "refactor",
        text: "Replaced hover-only validation tooltips with an accessible click-to-open issues panel.",
      },
      {
        date: "7/31/2026",
        type: "feature",
        text: "Added workspace validation, disabled invalid runs, and surfaced model results through feedback toasts.",
      },
      {
        date: "5/24/2026",
        type: "feature",
        text: "Added quantifier blocks and visualized Skolem variables in generated Alloy instances.",
      },
    ],
    result: null,
    changes: null,
  },
  {
    slug: "fluuurish",
    title: "Fluuurish",
    shortDescription:
      "A gamified financial literacy mobile app that helps early-career users build stronger money habits through lessons, goals, and rewards.",
    longDescription:
      "Learn personal finance through interactive lessons, quizzes, budgeting tools, streaks, and a garden that grows as users make progress. Fluuurish combines financial education with gamification, community features, personalized onboarding, and an AI companion to make developing healthy financial habits more engaging.",
    image: null,
    screenshots: ["/Fluuuurish/main.png", "/Fluuuurish/overview.png"],
    techStack: [
      "React Native",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Gemini API",
    ],
    githubUrl: "https://github.com/KrishPatelShah/FidHacks",
    liveDemoUrl: "https://fluuurish.vercel.app/",
    challenges: null,
    caseStudy: {
      context:
        "Fluuurish helps early-career women build financial knowledge and habits through lessons, quizzes, budgeting tools, and a progress garden.",
      ownership: [
        "Built React Native and TypeScript features, including stock-market data integration.",
        "Integrated financial lessons and Gemini-generated quiz experiences.",
        "Helped connect frontend and backend work while unblocking teammates during a 24-hour hackathon.",
      ],
      architecture: [
        "React Native + Expo",
        "FastAPI",
        "PostgreSQL + Docker Compose",
        "Gemini quiz service",
        "Twelve Data market API",
      ],
      decision: {
        title: "Keep AI credentials server-side and preserve the demo when market data fails",
        rationale:
          "FastAPI keeps the Gemini key out of the mobile client, while clearly labeled fallback stock data keeps the product demonstrable during external API failures.",
      },
      highlights: [
        {
          type: "feature",
          title: "Market-data interaction",
          text: "Connected range-based stock charts to Twelve Data responses and React state.",
        },
        {
          type: "feature",
          title: "Grounded quiz delivery",
          text: "Used curated lesson content to guide Gemini-generated quiz questions returned as structured JSON.",
        },
        {
          type: "improvement",
          title: "Reproducible backend setup",
          text: "Worked through Docker Compose networking to coordinate the FastAPI and PostgreSQL services.",
        },
      ],
      outcome:
        "Won 1st place at Fidelity FidHacks Westlake after delivering a working product with a five-person team in 24 hours.",
    },
    updates: [
      {
        date: "7/10/2026",
        type: "feature",
        text: "Added live stock data and range-based charts to make the market tab interactive.",
      },
      {
        date: "7/10/2026",
        type: "feature",
        text: "Expanded lesson modules and rewarded every passed quiz with garden growth.",
      },
      {
        date: "7/10/2026",
        type: "improvement",
        text: "Introduced a dyslexia-friendly reading mode and improved profile navigation accessibility.",
      },
      {
        date: "7/10/2026",
        type: "fix",
        text: "Fixed community statistics and garden progression so engagement data stays accurate.",
      },
    ],
    result: null,
    changes: null,
  },
  {
    slug: "row-lets-do",
    title: "Row-lets Do",
    shortDescription:
      "A Pokémon-inspired todo list application with priority levels, project tabs, and due dates built with vanilla JavaScript.",
    longDescription:
      "Create, edit, save, and delete todos; group them into custom projects; and keep them between visits with Local Storage. Todos use easy, medium, and hard priority levels, with responsive layouts for desktop and mobile.",
    image: null,
    screenshots: [
      "/Row-Lets-Do/main.png",
      "/Row-Lets-Do/noTodo.png",
      "/Row-Lets-Do/hideSideBar.png",
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Local Storage"],
    githubUrl: "https://github.com/AndyKhandy/todo_list",
    liveDemoUrl: "https://andykhandy.github.io/todo_list/",
    challenges: null,
    updates: [
      {
        date: "9/22/2026",
        type: "feature",
        text: "Implemented drag-and-drop reordering for todos.",
      },
      {
        date: "5/29/2026",
        type: "fix",
        text: "Kept todo counts accurate when tasks are deleted instead of completed.",
      },
      {
        date: "5/24/2026",
        type: "feature",
        text: "Added a progress meter to show task completion at a glance.",
      },
      {
        date: "2/16/2026",
        type: "fix",
        text: "Made todos without due dates editable without invalid date errors.",
      },
    ],
    result: null,
    changes: null,
  },
  {
    slug: "pokevault",
    title: "PokeVault",
    shortDescription:
      "A Pokémon trading card storefront where users can browse cards, view details, and manage a shopping cart.",
    longDescription:
      "Browse Pokémon trading cards using data from the Pokémon TCG API, view detailed card information, and add or remove cards from a persistent shopping cart. PokeVault uses React to provide a responsive storefront experience while demonstrating API integration, routing, reusable components, and state management.",
    image: null,
    screenshots: [
      "/PokeVault/main.png",
      "/PokeVault/cards.png",
      "/PokeVault/featured.png",
    ],
    techStack: ["React", "JavaScript", "CSS", "React Router"],
    githubUrl: "https://github.com/AndyKhandy/shopping_cart",
    liveDemoUrl: null,
    challenges: null,
    updates: [
      {
        date: "6/14/2026",
        type: "fix",
        text: "Reduced Pokémon TCG API requests to improve storefront load times.",
      },
      {
        date: "6/14/2026",
        type: "improvement",
        text: "Added a loading experience and responsive layouts for smaller screens.",
      },
      {
        date: "6/13/2026",
        type: "feature",
        text: "Built cart quantity controls, sales-tax totals, and add-to-cart notifications.",
      },
      {
        date: "6/11/2026",
        type: "refactor",
        text: "Refactored card fetching into a reusable hook and cleaned up storefront styling.",
      },
    ],
    result: null,
    changes: null,
  },
];
