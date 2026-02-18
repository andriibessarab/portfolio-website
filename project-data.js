const projects = [
  {
    title: "Skewbot",
    description:
      "Built an autonomous Skewb-solving robot with a BFS database of 3.1M optimal solutions, web-based state scanning/normalization, and serial-controlled execution with tuned PID for sub-15s solves.",
    techStack: ["C++", "BFS", "Bit Packing", "PID Control", "VEX IQ", "3D Printing", "Web Interface"],
    github: "https://github.com/andriibessarab/skewbot",
    githubLabel: "View Code",
    live: "https://www.youtube.com/shorts/zjVAyj5hkBw",
    liveLabel: "Watch Demo",
    imageSrc: "/projects/skewbot.gif",
    image: "ROBOTICS // SKEWB SOLVER",
    featured: true
  },
  {
    title: "auraforming.ai",
    description:
      "Voice-first intake platform for businesses: upload a fillable PDF, run multilingual guided interviews, validate answers with Gemini, and write results back into PDFs.",
    techStack: ["React", "Vite", "Flask", "SQLite", "Gemini API", "ElevenLabs"],
    github: "https://github.com/andriibessarab/auraforming-ai",
    githubLabel: "View Code",
    live: "",
    liveLabel: "Demo (Coming Soon)",
    liveDisabled: true,
    hideLive: true,
    imageSrc: "/projects/auraforming-ai.gif",
    image: "AI INTAKE // VOICE FORMS",
    featured: true
  },
  {
    title: "Draw2Route",
    description:
      "Built a penalty-weighted pathfinding system that maps hand-drawn routes to OpenStreetMap nodes, with projection-aware geospatial processing and real-time backend delivery to a web frontend. Won Best Use of Algorithms at RhythmHacks.",
    techStack: ["Python", "OSMnx", "OpenStreetMap", "Pathfinding", "Geospatial Graphs", "Svelte"],
    github: "https://github.com/andriibessarab/draw2route",
    githubLabel: "View Code",
    live: "https://draw2route.adamturaj.com/",
    liveLabel: "Live Website",
    imageSrc: "/projects/draw2route.gif",
    image: "RHYTHMHACKS // DRAW2ROUTE",
    featured: true
  },
  {
    title: "AI-Powered Character Learning",
    description:
      "Built a Unity simulation using a neural network and genetic algorithm to train an AI stickman to walk, reaching 100 meters after roughly 1000 simulation rounds.",
    techStack: ["C#", "Unity", "Neural Networks", "Genetic Algorithms", "Simulation"],
    github: "https://github.com/andriibessarab/walking-stickman-AI",
    githubLabel: "View Code",
    live: "https://play.unity.com/en/games/6a5da469-8c89-40d0-9c48-9a523bc01ccd/stickman-ai-learns-to-walk",
    liveLabel: "Run Simulation",
    imageSrc: "/projects/ai-stickman.gif",
    image: "AI // WALKING STICKMAN"
  },
  {
    title: "PyPI World",
    description:
      "A full-stack web app that simplifies publishing Python packages by integrating with GitHub and PyPI to automate file creation and distribution commands.",
    techStack: ["Python", "Flask", "SQLite", "Full-Stack"],
    github: "https://github.com/andriibessarab/PyPI-World",
    githubLabel: "View Code",
    live: "https://www.youtube.com/watch?v=xWlNlSefaZw",
    liveLabel: "Video Overview",
    imageSrc: "/projects/pypi-world.gif",
    image: "PYPI // RELEASE PIPELINE",
    featured: true
  },
  {
    title: "Custom Robotics Controller",
    description:
      "Designed and built a custom competition Operator Board end-to-end, including hardware layout, soldering, and C++ firmware, then deployed it throughout a record-breaking season for faster and more intuitive robot control.",
    techStack: ["C++", "Embedded Systems", "Soldering", "Electronics Design", "Mechatronics"],
    github: "https://github.com/andriibessarab/frc-team-4951-reefscape-operator-board-firmware",
    githubLabel: "View Code",
    live: "https://www.linkedin.com/in/andriibessarab/details/projects/629595032/multiple-media-viewer/?profileId=ACoAADi2ArEBM9n0BmIIC8iDqXLjdh4ow8ioeuw&treasuryMediaId=1755124159158",
    liveLabel: "View Docs",
    hideLive: true,
    imageSrc: "/projects/operator-board.jpg",
    image: "OPERATOR BOARD // CUSTOM HW",
    featured: true
  },
  {
    title: "FIRST Robotics Codebase",
    description:
      "Developed a Java codebase for a competition robot, featuring a vision system for localization, path planning, and a modular state system for intuitive control.",
    techStack: ["Java", "WPILib", "Computer Vision", "Git"],
    github: "https://github.com/andriibessarab/frc-team-4951-reefscape-codebase",
    githubLabel: "View Codebase",
    live: "https://youtu.be/EwjJItqhNNw?si=eAMLs1tZhaMsd8Xh&t=120",
    liveLabel: "Watch Demo",
    imageSrc: "/projects/frc-codebase.jpeg",
    image: "FRC // ROBOT CODE",
    featured: true
  },
  {
    title: "Tri-Tac-Toe",
    description:
      "A full-stack web game with real-time multiplayer (Socket.io) and an unbeatable AI opponent powered by the minimax algorithm. Built with React, Three.js, and Flask.",
    techStack: ["React", "Three.js", "Flask", "Socket.io"],
    github: "https://github.com/andriibessarab/tri-tac-toe",
    githubLabel: "View Code",
    live: "",
    liveLabel: "Play Game",
    liveDisabled: true,
    hideLive: true,
    imageSrc: "/projects/tri-tac-toe.gif",
    image: "3D GAME // TRI-TAC-TOE"
  },
  {
    title: "Cube X Crash",
    description:
      "A Java game built with the Swing library, featuring custom object management, a game loop, and various block types and power-ups to increase the challenge.",
    techStack: ["Java", "Swing", "Game Development"],
    github: "https://github.com/andriibessarab/cube-x-crash",
    githubLabel: "View Code",
    live: "",
    liveLabel: "Play Game",
    liveDisabled: true,
    hideLive: true,
    imageSrc: "/projects/cube-x-crash.gif",
    image: "JAVA GAME // CUBE X CRASH"
  }
];

export default projects;
