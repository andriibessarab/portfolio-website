const siteData = {
  header: {
    initials: "AB",
    name: "Andrii Bessarab",
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    }
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Andrii",
    subtitle: "Mechatronics Engineering @ UWaterloo | SWE Intern @ Loadlink",
    resume: {
      label: "Resume",
      href: "/resume.pdf"
    },
    workCta: {
      label: "View My Work",
      to: "/projects"
    },
    scrollCueStorageKey: "heroScrollCueSeenV3"
  },
  about: {
    title: "About Me",
    fields: [
      {
        label: "// EDUCATION",
        value: "BASc Honours Mechatronics Engineering (Co-op), University of Waterloo (2025-2030)"
      },
      { label: "// CURRENT ROLE", value: "Junior Software Engineering Intern @ Loadlink Technologies" }
    ],
    descriptionSegments: [
      { text: "I'm a " },
      { text: "Mechatronics Engineering", highlight: true },
      { text: " student at the University of Waterloo with hands-on experience across " },
      { text: "full-stack web development", highlight: true },
      { text: ", " },
      { text: "embedded systems", highlight: true },
      { text: ", and " },
      { text: "robotics software", highlight: true },
      {
        text: ". I build systems end-to-end, from algorithm design and hardware integration to production-ready interfaces. Through internships, tutoring, and robotics leadership, I've focused on delivering reliable software with measurable impact."
      }
    ],
    dragHint: "[ DRAG TO INTERACT ]",
    gallery: [
      {
        title: "Prototype Bench",
        base: "/gallery/gallery-1",
        ratio: "aspect-[3/4]",
        tone: "from-blueprint/20 via-slate-900/70 to-terminal/15"
      },
      {
        title: "Sensor Wiring Pass",
        base: "/gallery/gallery-2",
        ratio: "aspect-[4/3]",
        tone: "from-terminal/18 via-slate-900/75 to-blueprint/12"
      },
      {
        title: "CAD Assembly Snapshot",
        base: "/gallery/gallery-3",
        ratio: "aspect-[10/16]",
        tone: "from-blueprint/15 via-slate-900/80 to-slate-950"
      },
      {
        title: "Testing Rig",
        base: "/gallery/gallery-4",
        ratio: "aspect-[16/10]",
        tone: "from-terminal/14 via-slate-900/75 to-blueprint/12"
      },
      {
        title: "Lab Notebook Capture",
        base: "/gallery/gallery-5",
        ratio: "aspect-[2/3]",
        tone: "from-blueprint/18 via-slate-950 to-terminal/12"
      }
    ]
  },
  featuredProjects: {
    title: "Featured Projects",
    description: "High-impact robotics and software projects spanning embedded control, pathfinding, and autonomous systems.",
    ctaLabel: "View All Projects",
    names: ["Skewbot", "Draw2Route", "Custom Robotics Controller"]
  },
  experience: {
    title: "Experience",
    entries: [
      {
        company: "Loadlink Technologies",
        role: "Junior Software Engineering Intern",
        location: "Mississauga, ON",
        dateRange: "Jan 2026 - Present",
        highlights: [
          "Contributed to development of a major company project in React Native.",
          "Closed over 20 tickets in the first three weeks by shipping production-ready fixes and features."
        ],
        stackTitle: "Stack Used",
        stack: "React Native, JavaScript/TypeScript, Git, Agile Delivery"
      },
      {
        company: "Competitive Programming Tutor",
        role: "Tutor",
        location: "Remote",
        dateRange: "Aug 2025 - Present",
        highlights: [
          "Provided paid tutoring for students preparing for the Canadian Computing Competition (CCC).",
          "Developed custom practice material and coached Java, C++, algorithms, and problem-solving strategy.",
          "Strengthened communication and instructional skills through personalized 1:1 mentoring."
        ]
      },
      {
        company: "Country Day School, FRC Team 4951",
        role: "Robotics Lead Programmer & Student Coordinator",
        location: "Ontario, Canada",
        dateRange: "Nov 2022 - May 2025",
        highlights: [
          "Led development of an automated Java codebase with AprilTag-based localization and autonomous path following.",
          "Engineered a custom competition controller that improved control system efficiency.",
          "Mentored junior programmers and supported mechanical design workflows in Onshape."
        ],
        stackTitle: "Stack Used",
        stack: "Java, WPILib, Computer Vision, Onshape, Git"
      }
    ]
  },
  skills: {
    title: "Skills Matrix",
    groups: [
      {
        title: "Programming Languages",
        items: ["Java", "Python", "C++", "C", "JavaScript", "SQL"]
      },
      {
        title: "Web Development",
        items: [
          "React.js",
          "Node.js",
          "Flask",
          "Django",
          "Heroku",
          "HTML",
          "CSS",
          "SCSS",
          "JSON",
          "PostgreSQL",
          "Bootstrap",
          "RESTful APIs"
        ]
      },
      {
        title: "Concepts",
        items: [
          "Software Architecture",
          "SDLC",
          "OOP",
          "Algorithms",
          "Data Structures",
          "Embedded Systems",
          "Robotics",
          "3D Printing",
          "Testing",
          "CI/CD",
          "Databases",
          "Scalability & Security",
          "UX"
        ]
      },
      {
        title: "Hardware",
        items: ["Soldering", "Arduino", "Electronics Hardware Design", "Measuring Tools"]
      },
      {
        title: "Tools",
        items: [
          "Git",
          "GitHub",
          "Figma",
          "Heroku",
          "Onshape",
          "SOLIDWORKS",
          "AutoCAD",
          "Ultimaker Cura",
          "Excel"
        ]
      },
      {
        title: "Core Competencies",
        items: ["Team Leadership", "Project Management", "Teamwork", "Communication", "Problem Solving"]
      }
    ]
  },
  contact: {
    title: "Let's Connect",
    description: "Open to internships, software roles, and technical collaborations across hardware + web.",
    email: "contact@andriibessarab.com",
    resume: {
      label: "Resume",
      href: "/resume.pdf"
    },
    socials: [
      { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/andriibessarab/" },
      { platform: "github", label: "GitHub", href: "https://github.com/andriibessarab" }
    ],
    form: {
      title: "Engineering Intake",
      action: "https://formspree.io/f/xeolpynk",
      subject: "New portfolio message",
      submitLabel: "Send Message",
      emailPattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
      emailValidationMessage: "Please enter a valid email address (example: name@domain.com)."
    }
  },
  projectsPage: {
    title: "All Projects",
    description:
      "Real projects across robotics, embedded control, AI, and full-stack engineering, each built to solve a concrete problem and ship reliably."
  },
  footer: {
    name: "Andrii Bessarab",
    copyrightText: "All rights reserved."
  }
};

export default siteData;
