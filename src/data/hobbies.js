const hobbies = [
  {
    id: "fiberArts",
    name: "Knitting & Crochet",
    bgColor: "#d8b4e2",
    icon: "🧶",
    projects: [
      {
        id: "kn1",
        name: "Florence Miller Raglan Sweater",
        status: "Paused",
        startDate: "",
        endDate: "",
        hoursSpent: 30,
        notes: "Hard af but fun",
        projectDetails: {
          currentRow: 42,
          stitchCount: 150,
          link: "https://www.ravelry.com/patterns/library/step-by-step-sweater",
          tutorial: "https://www.youtube.com/watch?v=wtofisZp7EA",
          yarn: "Cotton Lily Sugar'n Cream",
          tools: "4.5mm circular needles",
          skillLevel: "Beginner",
          colors: ["#f3d0c3", "#e2a1c3"],
        },
        tags: ["spring", "wearable"],
      },
      {
        id: "fc1",
        name: "Toadstool Cottage Coaster Set",
        status: "Paused",
        startDate: "2025-03-01",
        endDate: "",
        hoursSpent: 12,
        notes: "Red yarn is too bright, might swap for brick tone.",

        projectDetails: {
          currentRow: 10,
          stitchCount: 72,
          link: "https://www.lovecrafts.com/en-gb/p/toadstool-coasters-crochet-pattern-by-sweet-bee-crochet",
          tutorial: "",
          yarn: "Bernat Handicrafter Cotton",
          tools: "5mm crochet hook",
          skillLevel: "Beginner",
          colors: ["#d94343", "#fff6dc"],
        },
        tags: ["decor", "forestcore", "gift"],
      },
    ],
  },
  {
    id: "coding",
    name: "Coding",
    bgColor: "#3f0013",
    icon: "💻",
    projects: [
      {
        id: "c1",
        name: "Everwood Quests",
        status: "In Progress",
        hoursSpent: 4,
        startDate: "2025-02-28T20:00:30Z",
        endDate: "",
        notes: "",
        links: {},
        projectDetails: {
          link: "https://github.com/maishamir/eveQuests",
          milestones: [
            { state: "Planning", complete: true },
            { state: "Wireframing", complete: true },
            { state: "Features", complete: true },
            { state: "Testing", complete: false },
          ],
        },

        tags: ["productivity", "whimsical"],
      },
      {
        id: "c2",
        name: "Hobby Tracker",
        status: "In Progress",
        startDate: "2025-04-12T14:36:00Z",
        endDate: "",
        notes: "",

        projectDetails: {
          link: "https://github.com/maishamir/hobby-tracker",
          milestones: [
            { state: "Planning", complete: true },
            { state: "Wireframing", complete: false },
            { state: "Features", complete: false },
            { state: "Testing", complete: false },
          ],
        },
        tags: ["productivity", "dashboard"],
      },
    ],
  },
  {
    id: "art",
    name: "Art",
    bgColor: "#ffeedb",
    icon: "🎨",
    projects: [
      {
        id: "a1",
        name: "Cozy Mushroom Market Sketch",
        status: "In Progress",
        startDate: "2025-04-08",
        endDate: "",
        notes: "Sunshade looks like udders 😭 will fix in the ink pass.",
        
        tags: ["illustration", "mushrooms", "cozycore"],
        projectDetails: {
          link: "https://www.pinterest.com/pin/775744014271588504/",
          milestones: [
            { state: "Sketch", complete: true },
            { state: "Line Art", complete: false },
            { state: "Color Pass", complete: false },
            { state: "Shading & Highlights", complete: false },
            { state: "Completed", complete: false },
          ],
        },
      },
    ],
  },
];

export default hobbies;
