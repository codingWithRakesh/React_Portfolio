import { DiJqueryLogo, DiMysql } from "react-icons/di";
import { FaBootstrap, FaBrain, FaCloud, FaCss3Alt, FaDatabase, FaDocker, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact, FaYoutube } from "react-icons/fa";
import { GrMysql, GrOracle } from "react-icons/gr";
import { PiFileSql, PiFileSqlLight, PiVectorThreeFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFastapi, SiJavascript, SiMongodb, SiNginx, SiOpenai, SiPm2, SiPostgresql, SiRedux, SiSpringboot, SiSpringsecurity, SiTypescript, SiUdemy } from "react-icons/si";
import { TbBinaryTree, TbBrandCpp, TbFileTypeSql, TbGrain, TbSql } from "react-icons/tb";
import { SiSpring } from "react-icons/si";
import { SiGooglegemini } from "react-icons/si";

const springStack = [
    {
        name: "Java",
        icon: <FaJava />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "Spring",
        icon: <SiSpring />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [60, 40],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "Spring Boot",
        icon: <SiSpringboot />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "Spring Data",
        icon: <FaDatabase />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "Spring Security",
        icon: <SiSpringsecurity />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "Spring Cloud",
        icon: <FaCloud />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "Spring AI",
        icon: <FaBrain />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
]

const nodeJsStack = [
    {
        name: "Express js",
        icon: <SiExpress />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
            {
                name: "Udemy",
                icon: <SiUdemy />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: true
    },
    {
        name: "React",
        icon: <FaReact />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
            {
                name: "Udemy",
                icon: <SiUdemy />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: true
    },
    {
        name: "Node js",
        icon: <FaNodeJs />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
            {
                name: "Udemy",
                icon: <SiUdemy />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: true
    },
    {
        name: "Next js",
        icon: <RiNextjsFill />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            }
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
    },
    {
        name: "JavaScript",
        icon: <SiJavascript />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [75, 25],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "TypeScript",
        icon: <SiTypescript />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [60, 40],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
]

const pythonStack = [
    {
        name: "Python",
        icon: <FaPython />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "FastAPI",
        icon: <SiFastapi />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
]

const databaseStack = [
    {
        name: "MongoDB",
        icon: <SiMongodb />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
            {
                name: "Udemy",
                icon: <SiUdemy />
            },
        ],
        data: [75, 25],
        checkName: "skills",
        iconOut: true,
        isCertified: true
    },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [60, 40],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "ChromaDB",
        icon: <PiVectorThreeFill />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [60, 40],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "Oracle",
        icon: <GrOracle />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [60, 40],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "MySQL",
        icon: <GrMysql />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [60, 40],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
]

const llmStack = [
    {
        name: "AI",
        icon: <TbGrain />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "ChatGPT",
        icon: <SiOpenai />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [60, 40],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "Gemini",
        icon: <SiGooglegemini />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [60, 40],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
]

export const skills = [
    ...springStack,
    ...nodeJsStack,
    ...pythonStack,
    ...databaseStack,
    ...llmStack,
    {
        name: "Docker",
        icon: <FaDocker />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            }
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
    },
    {
        name: "Nginx",
        icon: <SiNginx />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            }
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
    },
       {
        name: "PM2",
        icon: <SiPm2 />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            }
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
    },
    
    {
        name: "Redux",
        icon: <SiRedux />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [60, 40],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "HTML",
        icon: <FaHtml5 />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [90, 10],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "CSS",
        icon: <FaCss3Alt />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [85, 15],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "jQuery",
        icon: <DiJqueryLogo />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "Bootstrap",
        icon: <FaBootstrap />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [75, 25],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "Tailwind",
        icon: <RiTailwindCssFill />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "C language",
        icon: <i className="fa-solid fa-c"></i>,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [75, 25],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "C++",
        icon: <TbBrandCpp />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [75, 25],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "SQL",
        icon: <PiFileSqlLight />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            }
        ],
        data: [65, 35],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "DBMS",
        icon: <FaDatabase />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            }
        ],
        data: [65, 35],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "DSA",
        icon: <TbBinaryTree />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
            {
                name: "Udemy",
                icon: <SiUdemy />
            },
        ],
        data: [50, 50],
        checkName: "skills",
        iconOut: true,
        isCertified: true
    },
    {
        name: "Figma",
        icon: <FaFigma />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [70, 30],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "Git",
        icon: <FaGitAlt />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [85, 15],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        learn: [
            {
                name: "YouTube",
                icon: <FaYoutube />
            },
        ],
        data: [85, 15],
        checkName: "skills",
        iconOut: true,
        isCertified: false
    },
] 