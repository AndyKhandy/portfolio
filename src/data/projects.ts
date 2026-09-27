export interface Project {
  slug: string
  title: string
  shortDescription: string | null
  longDescription: string | null
  image: string | null
  screenshots: string[]
  techStack: string[]
  githubUrl: string | null
  liveDemoUrl: string | null
  role: string | null
  challenges: string | null
  lessons: string | null
  result: string | null
}

// Add local public paths here, e.g. screenshots: ['/projects/bughouse/home.png', '/projects/bughouse/board.png'].
export const projects: Project[] = [
  {
    slug: "bughouse",
    title: "bugHouse",
    shortDescription: null,
    longDescription: null,
    image: null,
    screenshots: [],
    techStack: [],
    githubUrl: null,
    liveDemoUrl: null,
    role: null,
    challenges: null,
    lessons: null,
    result: null,
  },
  {
    slug: "alloy-block-based-editor",
    title: "Alloy Block-Based Editor",
    shortDescription: null,
    longDescription: null,
    image: null,
    screenshots: [],
    techStack: [],
    githubUrl: null,
    liveDemoUrl: null,
    role: null,
    challenges: null,
    lessons: null,
    result: null,
  },
  {
    slug: "fluuurish",
    title: "Fluuurish",
    shortDescription: null,
    longDescription: null,
    image: null,
    screenshots: [],
    techStack: [],
    githubUrl: null,
    liveDemoUrl: null,
    role: null,
    challenges: null,
    lessons: null,
    result: null,
  },
  {
    slug: "row-lets-do",
    title: "Row-lets Do",
    shortDescription:
      "A Pokémon-inspired todo list application with priority levels, project tabs, and due dates built with vanilla JavaScript.",
    longDescription:
      "Create, edit, save, and delete todos; group them into custom projects; and keep them between visits with Local Storage. Todos use easy, medium, and hard priority levels, with responsive layouts for desktop and mobile.",
    image: null,
    screenshots: [],
    techStack: ["JavaScript", "HTML", "CSS", "Local Storage"],
    githubUrl: null,
    liveDemoUrl: null,
    role: null,
    challenges: null,
    lessons: null,
    result: null,
  },
  {
    slug: "pokevault",
    title: "PokeVault",
    shortDescription: null,
    longDescription: null,
    image: null,
    screenshots: [],
    techStack: [],
    githubUrl: null,
    liveDemoUrl: null,
    role: null,
    challenges: null,
    lessons: null,
    result: null,
  },
  {
    slug: "evotrack",
    title: "EvoTrack",
    shortDescription: null,
    longDescription: null,
    image: null,
    screenshots: [],
    techStack: [],
    githubUrl: null,
    liveDemoUrl: null,
    role: null,
    challenges: null,
    lessons: null,
    result: null,
  },
];
