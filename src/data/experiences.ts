export interface Experience {
  slug: string;
  organization: string;
  role: string;
  dates: string;
  description: string | null;
  long_description: string | null;
  logo: string | null;
  publicDetail?: {
    context: string;
    contributions: string[];
    takeaway: string;
  };
}

export const experiences: Experience[] = [
  {
    slug: "lockheed-martin-test-engineer-intern",
    organization: "Lockheed Martin Missiles & Fire Control",
    role: "Test Engineer Intern",
    dates: "June 2026 - Present",
    description:
      "Supported systems integration and testing by developing software interfaces and helping verify hardware-software interactions.",
    long_description:
      "Worked as a Test Engineer Intern in Lockheed Martin’s Systems Integration Lab, contributing to integration, testing, and verification efforts across hardware and software systems. My work included developing software interfaces through an existing hardware abstraction layer, supporting communication between multiple components, and helping document and validate system behavior. The role also gave me experience working in an Agile engineering environment with tools such as LabVIEW, TestStand, GitLab, and Jira while collaborating with engineers across different disciplines.",
    logo: null,
    publicDetail: {
      context:
        "I worked on software that supports hardware testing and validation in a systems integration environment.",
      contributions: [
        "Built a LabVIEW GUI that helps engineers interact with hardware components during test and simulation work.",
        "Worked through an existing hardware abstraction layer so the interface did not need to handle device-specific logic directly.",
        "Collaborated with software, electrical, mechanical, and systems engineers while validating behavior against requirements.",
      ],
      takeaway:
        "The role reinforced that reliable software depends on clear interfaces, verification, and communicating at the right technical level for each engineering partner.",
    },
  },
  {
    slug: "break-through-tech-ai",
    organization: "Break Through Tech",
    role: "AI Program Fellow (Incoming)",
    dates: "Begins December 1, 2026",
    description:
      "Incoming fellow in Break Through Tech’s AI Program, focused on machine-learning foundations, real-world projects, and mentorship.",
    long_description:
      "Beginning December 1, I will participate in Break Through Tech’s AI Program for undergraduates pursuing data science, AI, and machine learning. The program includes machine-learning foundations, an AI Studio project applying ML to a real-world challenge, and mentorship and career coaching. I’m looking forward to building stronger AI/ML skills and adding a hands-on project to my portfolio.",
    logo: null,
  },
  {
    slug: "scope-lab-reu",
    organization: "Computing Research Association",
    role: "Undergraduate Researcher",
    dates: "Feburary 2026 - Present",
    description:
      "Researched block-based programming interfaces for the Alloy modeling language and built prototypes to study usability and structure.",
    long_description:
      "Conducted undergraduate research through the Computing Research Association’s UR2PhD and REU programs on block-based interfaces for the Alloy modeling language. I helped design and develop visual programming prototypes that allow users to construct Alloy models through Blockly-based components rather than writing everything as text. The research compares different interface structures, including tree-based and linear approaches, and examines tradeoffs involving readability, nesting complexity, and ease of learning. The project also includes a React frontend, custom Blockly blocks, a Spring Boot backend using the Alloy Java API, and graph-based visualization of Alloy instances.",
    logo: null,
    publicDetail: {
      context:
        "I am researching whether a block-based editor can make Alloy's formal modeling concepts more approachable for beginners.",
      contributions: [
        "Designed and implemented Blockly-based interfaces for constructing Alloy models visually.",
        "Built the end-to-end workflow from generated Alloy code through Spring Boot and the Alloy Analyzer to graph-based results.",
        "Explored interface trade-offs involving readability, nesting, structure, and learning support.",
      ],
      takeaway:
        "The work has taught me to build around a research question, make architectural trade-offs explicit, and distinguish a working prototype from a validated research finding.",
    },
  },
  {
    slug: "acm-uta-community-officer",
    organization: "ACM @ UTA",
    role: "Community Officer",
    dates: "August 2026 - Present",
    description:
      "Help support ACM @ UTA’s community through student engagement, events, and initiatives that connect computer science students.",
    long_description:
      "Serve as a Community Officer for ACM @ UTA, helping strengthen the organization’s student community and support initiatives that bring computer science students together. My role involves contributing to event planning, student engagement, and community-focused activities while working with other officers to create a welcoming environment for members. The position has also given me more experience with leadership, communication, and collaborating within a student organization.",
    logo: null,
  },
];
