export interface Experience{
  slug: string,
  organization: string,
  role: string,
  description: string | null
}

export const experiences: Experience[] = [
  {
    slug: "lockheed-martin-test-engineer-intern",
    organization: "Lockheed Martin",
    role: "Test Engineer Intern",
    description: null,
  },
  {
    slug: "scope-lab-reu",
    organization: "Computing Research Association",
    role: "Undergraduate Researcher",
    description: null,
  },
  {
    slug: "fidelity-fidhacks-westlake-2026",
    organization: "Fidelity FidHacks Westlake 2026",
    role: "Fluuurish — 1st place",
    description: null,
  },
  {
    slug: "acm-uta-community-officer",
    organization: "ACM @ UTA",
    role: "Community Officer",
    description: null,
  },
  {
    slug: "acm-create-bughouse",
    organization: "ACM Create",
    role: "bugHouse developer/member",
    description: null,
  },
];
