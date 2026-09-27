import blog1 from '../assets/images/blog-1.png';
import blog2 from '../assets/images/blog-2.png';
import blog3 from '../assets/images/blog-3.png';
import blog4 from '../assets/images/blog-4.png';

// Placeholder blog posts — real HGRTC blog content diye pore replace hobe
const blogs = [
  {
    id: 1,
    image: blog1,
    date: "TBA",
    author: "HGRTC Team",
    category: "Research",
    title: "The Role of Molecular Biology in Personalized Medicine",
    excerpt: "Placeholder excerpt — real summary HGRTC theke asle boshanor.",
    intro: {
      heading: "Science is Evolving — Rapidly",
      paragraph: "Placeholder intro paragraph — real article intro HGRTC theke asle eikhane boshbe.",
    },
    sections: [
      {
        heading: "1. AI and Machine Learning in Research",
        paragraphs: ["Placeholder paragraph — real content pore boshanor."],
        list: [
          "Placeholder point one.",
          "Placeholder point two.",
          "Placeholder point three.",
        ],
      },
      {
        heading: "2. Automation and the Rise of Smart Labs",
        paragraphs: ["Placeholder paragraph — real content pore boshanor."],
      },
      {
        heading: "3. Growth of Personalized Medicine Research",
        paragraphs: ["Placeholder paragraph — real content pore boshanor."],
      },
    ],
    conclusionHeading: "Conclusion: The Future is Already Here",
    conclusion: "Placeholder conclusion — real closing paragraph HGRTC theke asle boshbe.",
    gallery: [blog1, blog2],
  },
  {
    id: 2,
    image: blog2,
    date: "TBA",
    author: "HGRTC Team",
    category: "Technology",
    title: "Lab Automation: Is AI the Future of Research?",
    excerpt: "Placeholder excerpt — real summary HGRTC theke asle boshanor.",
    intro: { heading: "Automation Is Reshaping the Lab", paragraph: "Placeholder intro paragraph." },
    sections: [
      { heading: "1. Where Automation Helps Most", paragraphs: ["Placeholder paragraph."], list: ["Point one.", "Point two.", "Point three."] },
      { heading: "2. Human Expertise Still Matters", paragraphs: ["Placeholder paragraph."] },
    ],
    conclusionHeading: "Conclusion: A Hybrid Future",
    conclusion: "Placeholder conclusion paragraph.",
    gallery: [blog2, blog3],
  },
  {
    id: 3,
    image: blog3,
    date: "TBA",
    author: "HGRTC Team",
    category: "Research",
    title: "How Modern Labs Are Revolutionizing Scientific Discovery",
    excerpt: "Placeholder excerpt — real summary HGRTC theke asle boshanor.",
    intro: { heading: "A New Era for Discovery", paragraph: "Placeholder intro paragraph." },
    sections: [
      { heading: "1. Data-Driven Research", paragraphs: ["Placeholder paragraph."], list: ["Point one.", "Point two."] },
      { heading: "2. Collaboration Across Borders", paragraphs: ["Placeholder paragraph."] },
    ],
    conclusionHeading: "Conclusion: Discovery Never Stops",
    conclusion: "Placeholder conclusion paragraph.",
    gallery: [blog3, blog4],
  },
  {
    id: 4,
    image: blog4,
    date: "TBA",
    author: "HGRTC Team",
    category: "Trends",
    title: "Emerging Trends in Laboratory Science for 2025 and Beyond",
    excerpt: "Placeholder excerpt — real summary HGRTC theke asle boshanor.",
    intro: { heading: "What's Next in Laboratory Science", paragraph: "Placeholder intro paragraph." },
    sections: [
      { heading: "1. Sustainability in the Lab", paragraphs: ["Placeholder paragraph."], list: ["Point one.", "Point two.", "Point three."] },
      { heading: "2. Precision Medicine Grows Up", paragraphs: ["Placeholder paragraph."] },
    ],
    conclusionHeading: "Conclusion: Staying Ahead",
    conclusion: "Placeholder conclusion paragraph.",
    gallery: [blog4, blog1],
  },
];

export default blogs;