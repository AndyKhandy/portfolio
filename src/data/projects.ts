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
  role: string | null;
  challenges: string | null;
  lessons: string | null;
  result: string | null;
  changes: string | null;
}

// Add local public paths here, e.g. screenshots: ['/projects/bughouse/home.png', '/projects/bughouse/board.png'].
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
    techStack: ["React", "TypeScript", "FastAPI", "Supabase", "Tailwind CSS"],
    githubUrl: null,
    liveDemoUrl: null,
    role: null,
    challenges: null,
    lessons: null,
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
    techStack: ["React", "TypeScript", "Spring Boot", "CSS", "LocalStorage"],
    githubUrl: "https://github.com/AndyKhandy/UR2PhD-Alloy",
    liveDemoUrl: null,
    role: null,
    challenges: null,
    lessons: null,
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
    githubUrl: null,
    liveDemoUrl: null,
    role: null,
    challenges: null,
    lessons: null,
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
    githubUrl: null,
    liveDemoUrl: null,
    role: null,
    challenges: null,
    lessons: null,
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
    githubUrl: null,
    liveDemoUrl: null,
    role: null,
    challenges: null,
    lessons: null,
    result: null,
    changes: null,
  },
];
