import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNode,
  FaReact,
  FaLinux,
  FaGitSquare,
  FaFigma,
  FaJava,
  FaAws,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiJavascript,
  SiNginx,
  SiMongodb,
  SiPostgresql,
  SiAmazondynamodb,
  SiWebpack,
  SiGraphql,
  SiTypescript,
  SiJest,
  SiCypress,
} from "react-icons/si";
import { ISkills } from "../../../types";

export const skills: ISkills[] = [
  {
    icon: FaHtml5,
    title: "HTML 5",
    description:
      "I write cross-browser reusable markup code including new semantics, canvas, multimedia tags and much more.",
    color: "skyblue",
    categories: ["all", "frontend"],
  },
  {
    icon: FaCss3Alt,
    title: "CSS 3",
    description: `I'm very flexible in CSS, making layouts with using flexbox, grid or floats. I improve my designs with fancy animations and
      transitions. I write the code with BEM notiation or styled-components as well as CSS modules or CSS in JavaScript.`,
    color: "orangered",
    categories: ["all", "frontend"],
  },
  {
    icon: FaSass,
    title: "Sass",
    description: `This CSS preprocessor comes with powerful functionality. I know how to use functions, mixins, interpolations, @content
    and @import directives, reference symbol '&' and much more.`,
    color: "violet",
    categories: ["all", "frontend"],
  },
  {
    icon: SiJavascript,
    title: "JavaScript",
    description: ` I'm fluent in JavaScript using modern EcmaScript syntax. I used to teach JS on Tech Accelerator sessions for new employees at AND Digital.`,
    color: "goldenrod",
    categories: ["all", "frontend"],
  },
  {
    icon: FaReact,
    title: "React",
    description: `I'm comfortable with both functional and class based components, React
    Redux, React Router (contributed to on Github) and many related libraries, including most popular frontend frameworks like: NextJs and Gatsby.`,
    color: "skyblue",
    categories: ["all", "frontend"],
  },
  {
    icon: FaNode,
    title: "NodeJs",
    description: ` I make use of NodeJs with Express to build functional RESTful APIs. I can design and create almost every desired backend
    functionality.`,
    color: "green",
    categories: ["all", "backend"],
  },
  {
    icon: SiNginx,
    title: "Nginx",
    description: `I use Nginx as a reverse proxy server as well as a backend server to handle incoming
    requests.`,
    color: "darkgreen",
    categories: ["all", "backend"],
  },
  {
    icon: FaLinux,
    title: "Linux",
    description: `I worked with Virtual Private Servers based on Linux OS. I know its structure, commands and basics of Bash scripting
    language.`,
    color: "#f2f2f2",
    categories: ["all", "backend", "devops"],
  },
  {
    icon: SiMongodb,
    title: "MongoDB",
    description: `I know MongoDB database and worked with it mostly with mongoose ODM.`,
    color: "#4db33d",
    categories: ["all", "backend"],
  },
  {
    icon: SiPostgresql,
    title: "Postgresql",
    description: `I'm most fluent in open source PostgreSQL. Tables creations, insertions, updates, altering, transactions and
    much more SQL syntax is familiar to me.`,
    color: "skyblue",
    categories: ["all", "backend"],
  },
  {
    icon: SiAmazondynamodb,
    title: "DynamoDB",
    description: `I know this schemaless database thoroughly and used it extendently while working on serverless applications.`,
    color: "dodgerblue",
    categories: ["all", "backend", "serverless"],
  },
  {
    icon: FaGitSquare,
    title: "Git",
    description: `I master git langueage as I worked with it for many years. There is no operation I haven't performed. I also builed CI/CD pipelines with Github Actions, AWS Code Build. I worked with Github, Gitlab and CodeCommit.`,
    color: "orangered",
    categories: ["all", "backend", "frontend", "devops"],
  },
  {
    icon: FaFigma,
    title: "Figma",
    description: `I design my projects with this modern tool resembling Sketch or Adobe XD.`,
    color: "plum",
    categories: ["all", "frontend"],
  },
  {
    icon: SiWebpack,
    title: "Webpack 5",
    description: `Popular module bundler. I grasp the concepts of loaders, plugins, proxies etc... I've built and worked on many of modern JavaScript application built with Webpack.`,
    color: "skyblue",
    categories: ["all", "frontend"],
  },
  {
    icon: SiGraphql,
    title: "GraphQL",
    description: `I worked with Graph query language both on Fronted (Apollo Client) and backend (Apollo Server).`,
    color: "violet",
    categories: ["all", "frontend", "backend"],
  },
  {
    icon: SiTypescript,
    title: "TypeScript",
    description: `Superset of JavaScript used for better development experience. I fully understand its concepts of data types floating through application, interfaces and more.`,
    color: "#3970e4",
    categories: ["all", "frontend", "backend"],
  },
  {
    icon: SiJest,
    title: "Jest",
    description: `For unit test I mostly use Jest on the backend, and on frontend together with React Testing Library.`,
    color: "orangered",
    categories: ["all", "frontend", "backend"],
  },
  {
    icon: SiCypress,
    title: "Cypress",
    description: `Cypress is the main tool I use for end to end tests of the applications.`,
    color: "#4db33d",
    categories: ["all", "frontend"],
  },
  {
    icon: FaDocker,
    title: "Docker",
    description:
      "I develop container images with Docker and managing them via Docker Compose and with use of industry standard tools like AWS ECS and Fargate.",
    color: "skyblue",
    categories: ["all", "devops", "backend"],
  },
  {
    icon: SiKubernetes,
    title: "Kubernetes",
    description:
      "I manage orchestrating Containers with K8s deployments, pods, services using AWS EKS or Fargate.",
    color: "#3970e4",
    categories: ["all", "devops", "backend"],
  },
  {
    icon: FaJava,
    title: "JAVA",
    description:
      "I have basic understanding of JAVA Object Oriented approach of building simple programs in NetBeans.",
    color: "orangered",
    categories: ["all", "backend"],
  },
  {
    icon: FaAws,
    title: "Lambda",
    description:
      "I've been using Lambdas as a part of serverless architecture.",
    color: "goldenrod",
    categories: ["all", "backend", "serverless"],
  },
  {
    icon: FaAws,
    title: "API Gateway",
    description:
      "I've been using AWS API Gateway for REST Api's as a part of serverless architecture.",
    color: "goldenrod",
    categories: ["all", "backend", "serverless"],
  },
  {
    icon: FaAws,
    title: "SAM model",
    description:
      "I've been writing and managing templates to provision resources with CouldFormation as a part of AWS SAM model.",
    color: "goldenrod",
    categories: ["all", "devops", "serverless"],
  },
];
