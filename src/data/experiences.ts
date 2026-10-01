export interface Experience{
  slug: string,
  organization: string,
  role: string,
  dates: string,
  description: string | null,
  long_description: string | null,
  logo: string | null
}

export const experiences: Experience[] = [
  {
    slug: "lockheed-martin-test-engineer-intern",
    organization: "Lockheed Martin Missiles & Fire Control",
    role: "Test Engineer Intern",
    dates: "June 2026 - Present",
    description: "Supported systems integration and testing by developing software interfaces and helping verify hardware-software interactions.",
    long_description: "Worked as a Test Engineer Intern in Lockheed Martin’s Systems Integration Lab, contributing to integration, testing, and verification efforts across hardware and software systems. My work included developing software interfaces through an existing hardware abstraction layer, supporting communication between multiple components, and helping document and validate system behavior. The role also gave me experience working in an Agile engineering environment with tools such as LabVIEW, TestStand, GitLab, and Jira while collaborating with engineers across different disciplines.",
    logo: null
  },
  {
    slug: "scope-lab-reu",
    organization: "Computing Research Association",
    role: "Undergraduate Researcher",
    dates: "Feburary 2026 - Present",
    description: "Researched block-based programming interfaces for the Alloy modeling language and built prototypes to study usability and structure.",
    long_description: "Conducted undergraduate research through the Computing Research Association’s UR2PhD and REU programs on block-based interfaces for the Alloy modeling language. I helped design and develop visual programming prototypes that allow users to construct Alloy models through Blockly-based components rather than writing everything as text. The research compares different interface structures, including tree-based and linear approaches, and examines tradeoffs involving readability, nesting complexity, and ease of learning. The project also includes a React frontend, custom Blockly blocks, a Spring Boot backend using the Alloy Java API, and graph-based visualization of Alloy instances.",
    logo: null
  },
  {
    slug: "fidelity-fidhacks-westlake-2026",
    organization: "Fidelity FidHacks Westlake 2026",
    role: "Fluuurish — 1st place",
    dates: "July 2026",
    description: "Built a gamified financial literacy app with my team and earned 1st place at Fidelity’s FidHacks Westlake hackathon.",
    long_description: "Participated in Fidelity Investments’ FidHacks Westlake hackathon, where my team built Fluuurish, a gamified financial literacy mobile application focused on helping early-career women build stronger financial habits. I contributed to product ideation, backend development, and the final pitch, including features such as a progress garden, community tools, budgeting visualizations, onboarding assessments, and an AI financial-learning companion. The application was built with React Native, Expo, FastAPI, PostgreSQL, Docker, and external APIs. Our team placed 1st out of 11 teams after incorporating mentor feedback and refining the product during the 24-hour event.",
    logo: null
  },
  {
    slug: "acm-uta-community-officer",
    organization: "ACM @ UTA",
    role: "Community Officer",
    dates: "August 2026 - Present",
    description: "Help support ACM @ UTA’s community through student engagement, events, and initiatives that connect computer science students.",
    long_description: "Serve as a Community Officer for ACM @ UTA, helping strengthen the organization’s student community and support initiatives that bring computer science students together. My role involves contributing to event planning, student engagement, and community-focused activities while working with other officers to create a welcoming environment for members. The position has also given me more experience with leadership, communication, and collaborating within a student organization.",
    logo: null
  },
];
