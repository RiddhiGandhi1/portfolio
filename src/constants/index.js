import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  doyenhub,
  cbpatel,
  vnsgu,
  jigarvakil,
  robofun,
  RiyaPatel,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiPhp,
  SiLaravel,
  SiVuedotjs,
  SiNuxtdotjs,
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink =
  "https://www.canva.com/design/DAGVtigpF68/m-x_Uhj7ylAB0_PgwnXtXg/view?utm_content=DAGVtigpF68&utm_campaign=designshare&utm_medium=link&utm_source=editor";

export const callToAction = "https://www.linkedin.com/in/riddhii-gandhi";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-2",
    icon: vnsgu,
    title: "Veer Narmad South Gujarat University",
    degree: "Master of Computer Applications",
    duration: "2020 - 2024",
    content1: "Post-Graduated with a distinction.",
  },
  {
    id: "education-1",
    icon: cbpatel,
    title: "C B Patel Computer College",
    degree: "Bachelor of Computer Applications",
    duration: "2017- 2020",
    content1: "Graduated with a distinction.",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethglobal,
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article:
      "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-2",
    icon: polkadot,
    event: "Polkadot Hackathon: Europe Edition",
    position: "2nd Runner Up in the ink! Smart Contract Category",
    content1:
      "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
    content2: "",
    content3: "",
    github: "https://github.com/pranav2305/GreenTrust",
  },
  {
    id: "a-3",
    icon: lightspeed,
    event: "Warpspeed by Lightspeed",
    position: "1st Runner Up",
    content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
    content2: "Top 3 projects using Replit",
    content3: "1st Runner Up by Amazon Web Services (AWS)",
    article: "https://shorturl.at/fhjsT",
  },
  {
    id: "a-5",
    icon: manipal,
    event: "Manipal Hackathon'22",
    position: "Consolation Prize",
    content1: "Top 10 among 500+ teams across India",
    content2:
      "Developed a cross-platform mobile application to address the problem of social cohesion.",
    content3: "",
    article: "https://shorturl.at/exEIQ",
  },
  {
    id: "a-6",
    icon: icon,
    event: "ICON Hyperbuild Hackathon",
    position: "Honorable Mention",
    content1:
      "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
    content2: "",
    content3: "",
    project: "https://devpost.com/software/green-trust-xj2w6g",
  },
  {
    id: "a-7",
    icon: ethforall,
    event: "ETHForAll 2023",
    position: "Top 3 Superfluid Projects",
    content1:
      "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
    content2: "",
    content3: "",
    project: "https://devfolio.co/projects/green-trust-ed14",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-11",
        icon: SiPhp,
        name: "PHP",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      // {
      //   id: "f-1",
      //   icon: SiDjango,
      //   name: "Django",
      // },
      {
        id: "f-2",
        icon: SiLaravel,
        name: "Laravel",
      },
      {
        id: "f-3",
        icon: SiVuedotjs,
        name: "Vue Js",
      },
      {
        id: "f-4",
        icon: SiNuxtdotjs,
        name: "Nuxt Js",
      },
      {
        id: "f-5",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-6",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Doyenhub Software Solution Pvt Ltd, India",
    logo: "",
    link: "https://www.doyenhub.com",
    positions: [
      {
        title: "Software Developer",
        duration: "June 2022 - Present",
        content: [
          {
            text: "I specialised in working with Laravel, Vue.js, and Nuxt.js, I contributed to the many projects..",
            link: "",
          },
        ],
      },
      {
        title: "Software Developer Intern",
        duration: "Jan 2022 - June 2022",
        content: [
          {
            text: "Worked with the Exadata Cloud@Customer team in the Database Unit.",
            link: "",
          },
          {
            text: "Wrote APIs in Java to help gracefully migrate a running ExaC@C infrastructure to a new region in the case of a region failure",
            link: "",
          },
        ],
      },
    ],
  },
  // {
  //   organisation: "Averlon",
  //   logo: averlon,
  //   link: "https://averlon.ai/",
  //   positions: [
  //     {
  //       title: "Software Developer Intern",
  //       duration: "Sept 2023 - Feb 2024",
  //       content: [
  //         {
  //           text: "Added support for the discoverability of Microsoft Azure assets utilising Go and Gremlin.",
  //           link: "",
  //         },
  //         {
  //           text: "Extended support for Azure for reachability analysis of assets for cloud security posture management.",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   organisation: "IRIS, NITK",
  //   logo: iris,
  //   link: "https://iris.nitk.ac.in/about_us",
  //   positions: [
  //     {
  //       title: "Tech Lead",
  //       duration: "Apr 2023 - Apr 2024",
  //       content: [
  //         {
  //           text: "Led a team of 40+ students in digitizing administrative, academic and alumni-related work.",
  //           link: "",
  //         },
  //         {
  //           text: "Managed all phases of Software Development Life Cycle (SDLC) for 15+ modules.",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Web Lead",
  //       duration: "Apr 2022 - Present",
  //       content: [
  //         {
  //           text: "Managed a team of 6 student developers while also overlooking multiple modules.",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Web Developer",
  //       duration: "Nov 2021 - Apr 2022",
  //       content: [
  //         {
  //           text: "Added Conditional Fields support to the Forms Module.",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Web Developer Intern",
  //       duration: "Jun 2021 - Oct 2021",
  //       content: [
  //         {
  //           text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Robofun Lab",
    // github: "https://github.com/ayush4345/Comicify.ai",
    link: "https://www.robofunlab.com/",
    image: robofun,
    content:
      "In this project, my role is as a full stack developer. The administrative side of the project is developed using Vue.js technology, while the user side utilizes Nuxt.js technology.  In the backend, Laravel technology is used. The project encompasses features such as tutor management, online registration, competition management, branch management, and more.",
    stack: [
      {
        id: "f-2",
        icon: SiLaravel,
        name: "Laravel",
      },
      {
        id: "f-3",
        icon: SiVuedotjs,
        name: "Vue Js",
      },
      {
        id: "f-4",
        icon: SiNuxtdotjs,
        name: "Nuxt Js",
      },
    ],
  },
  {
    id: "project-2",
    title: "Saas E Com",
    // link: "https://green-trust-fantom.netlify.app/",
    // image: greentrust,
    content:
      "This Laravel-based project is also a tenancy-based system where multiple tenants have their own websites and can upload products. It incorporates three payment methods: cash on delivery (COD), Sadad, and Fatoorah. Moreover, it is a language-based project supporting both English and Qatar languages.",
    stack: [
      {
        id: "f-2",
        icon: SiLaravel,
        name: "Laravel",
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// What My Colleagues Say About Me
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Working with Riddhi has been a privilege—she's a natural collaborator who brings clarity and energy to every project. Her ability to balance team dynamics while driving results is truly impressive.",
        link: "",
      },
    ],
    name: "Jigar Vakil",
    designation: "Software Developer",
    currentCompany: "La Net Team Software Solutions Pvt. LTD.",
    logo: jigarvakil,
  },
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Whenever I faced complex challenges, Riddhi was the one I turned to. Her resourcefulness and calm under pressure ensured I always found the best path forward.",
        link: "",
      },
    ],
    name: "Riya Patel",
    designation: "Software Developer",
    currentCompany: "La Net Team Software Solutions Pvt. LTD.",
    logo: RiyaPatel,
  },
  // {
  //   id: 2,
  //   organisation: "Google Developer Student Club, NITK",
  //   title: "Co-Chair",
  //   duration: "December 2021 - Present",
  //   content: [
  //     {
  //       text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
  //       link: "",
  //     },
  //     {
  //       text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
  //       link: "https://incident.nitk.ac.in/",
  //     },
  //   ],
  //   logo: gdsc,
  // },
  // {
  //   id: 3,
  //   organisation: "Genesis, NITK",
  //   title: "Competitions Head",
  //   duration: "Sep 2021 - Present",
  //   content: [
  //     {
  //       text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
  //       link: "",
  //     },
  //     {
  //       text: "Won 7 inter-college solo dance competitions",
  //       link: "",
  //     },
  //   ],
  //   logo: genesis,
  // },
  // {
  //   id: 4,
  //   organisation: "IRIS, NITK",
  //   title: "Tutor",
  //   duration: "Jan 2022 - Jan 2022",
  //   content: [
  //     {
  //       text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
  //       link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
  //     },
  //   ],
  //   logo: iris,
  // },
  // {
  //   id: 5,
  //   organisation: "E-Cell, NITK",
  //   title: "Executive Member",
  //   duration: "Sep 2021 - Apr 2022",
  //   content: [
  //     {
  //       text: "Organised the season 3 of the E-Cell NITK Podcast",
  //       link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
  //     },
  //     {
  //       text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
  //       link: "",
  //     },
  //   ],
  //   logo: ecell,
  // },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/riddhii-gandhi",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/RiddhiGandhi1",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:riddhigandhi.dev@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Riddhi Gandhi  ",
  githubUsername: "RiddhiGandhi1",
  tagLine: "Software Engineer | Laravel Developer",
  intro:
    "Software Developer from India who is either busy improving her  craft or pondering over the next big idea.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
