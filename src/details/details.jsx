import { DiJqueryLogo } from "react-icons/di";
import { FaBootstrap, FaCss3Alt, FaDatabase, FaFacebook, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaInstagram, FaLinkedin, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiRedux, SiTypescript } from "react-icons/si";
import ReactCertificate from '../assets/certificate/React.jpg'
import DSACertificate from '../assets/certificate/DSA.jpg'
import client1 from '../assets/images/clients/client1.png'
import client2 from '../assets/images/clients/client2.png'
import MyImage from '../assets/images/TARAPADA.jpg'
import CV from '../assets/CV/Tarapada Garai (CV).pdf'
import workExperience from '../assets/certificate/work_experience.pdf'

import ComputerCenter from '../assets/videos/Computer Center Webside.mp4'
import YouTubeClone from '../assets/videos/YouTube.mp4'
import eCommerceWebsite from '../assets/videos/Anon - eCommerce Website.mp4'
import iCoder from '../assets/videos/iCoder - Heaven for Programmers.mp4'
import instagramClone from '../assets/videos/instagram.mp4'
import NetflixClone from '../assets/videos/Netflix.mp4'
import shopping from '../assets/videos/Your Shopping.mp4'
import travel_website from '../assets/videos/Travel_website.mp4'
import portfolio from '../assets/videos/portpolio.mp4'
import firstPortfolio from '../assets/videos/first_portfolio.mp4'
import secondPortfolio from '../assets/videos/second_portfolio.mp4'

import calcluter from '../assets/images/calcluter.png'
import curancyChange from '../assets/images/curancyChange.png'
import examonline from '../assets/images/examonline.png'
import stonepapersesar from '../assets/images/stonepapersesar.png'
import tictacto from '../assets/images/tictacto.png'
import BattingGame from '../assets/images/Batting Game.png'
import fileDownloder from '../assets/images/file_downloder.png'
import { BiLogoGmail } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { FaSquareThreads, FaXTwitter } from "react-icons/fa6";

export const details = {
    home: {
        titlesHome: [
            {
                big: "12+",
                normal: "Decent Projects"
            },
            {
                big: "Front end",
                normal: "Expert"
            },
            {
                big: "DSA",
                normal: "Completed"
            },
            {
                big: "1",
                normal: "year",
                extra: "of experience"
            }
        ],
        Summary: "I help business owners and busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever. Technologies and tools that I use to create such awesome websites.",
        MyClients: [
            {
                name: "Santanu Dutta",
                founder: "Founder, Gumut RGCSA",
                saying: '“I can bet that it\'s too hard to find professional developers like Tarapada. He could peek inside my mind and made the site exactly as I wanted Much appreciated”',
                image: client1
            },
            {
                name: "Bhabasindu Garai",
                founder: "Founder, Birsingha RGCSA",
                saying: '“He has always had a good working relationship with his team members. We are glad to have witnessed his consistent growth in his professional life. We wish him all the best of luck in his future endeavors.”',
                image: client2
            }
        ]
    },
    about: {
        aboutBox: [
            {
                image: MyImage,
                CV: CV
            },
            {
                about: ["I am tarapada garai a dedicated front-end developer with six months of professional experience in creating dynamic, responsive, and user-friendly web applications. My journey into web development began with a passion for blending creativity with technology, and I have since developed a keen eye for detail and a commitment to deliver high-quality digital solutions.", "As a front-end developer, I specialize in transforming design concepts into functional and visually appealing websites. I prioritize understanding user needs to create intuitive interfaces that enhance user engagement and satisfaction. I am continually updating my skills and knowledge to stay at the forefront of industry trends and best practices.", "I am enthusiastic about taking on new challenges and collaborating on innovative projects. If you're looking for a developer who is committed to excellence and driven by a passion for web development, I would love to connect with you."],
                hobbies: ["Coding", "Painting", "Photography", "Learning", "Cycling", "Video Game"],
                languages: ["English", "Hindi", "Bengali"]
            }
        ],
        expenses: [
            {
                durationWork: "Jan,2024 - Jun,2024",
                work: "Front end Devolaper",
                peragraph: "I was working first in a Birsingha RGCSA company. It was in a computer coaching center. That's where I was working as a front end developer. Where I was working with a team. At that place we were making total 2 big websites which means we were working on 2 projects. I used technology like HTML, CSS, JavaScript, jQuery, Flex Box, Figma to make its website, the back end of its website was PHP, SQL, MySQL.",
                link: "https://computerwebside.netlify.app/",
                name: "link",
                isTrue: true
            },
            {
                durationWork: "Sep,2022 - Jun,2024",
                work: "Teaching",
                peragraph: "I have 1.5 years of experience in Birsingha RGCSA company. It is a computer coaching center where I taught Ms Paint, Bangla Word, Word Pad, Note Pad, MS Office(Word, Excel, PowerPoint), HTML & CSS, C language, Internate there",
                link: workExperience,
                name: "certificate",
                isTrue: true
            },
            {
                durationWork: "Feb,2023 - Running",
                work: "freelancing",
                peragraph: "Besides I did freelancing which I am still doing.  I did a lot of freelancing work, mostly in our village.  I have worked in cafes, coaching centers where I have used HTML, CSS, JavaScript, jQuery, React, Tailwind",
                link: "https://tarapada-projects.netlify.app/project/online%20exam/index.html",
                name: "link",
                isTrue: true
            }
        ],
        education: [
            {
                durationWork: "2024 - 2027",
                work: "Bachelor Of Computer Application",
                peragraph: "I Have Started My Bachelor Of Computer Application Degree from Brainware University (Kolkata)",
                isTrue: false
            },
            {
                durationWork: "2021 - 2024",
                work: "Bachelor Of Arts",
                peragraph: "I Have Completed My Bachelor Of Arts Degree From Swami Dhananjoy Das Kathiababa Mahavidyalaya",
                isTrue: false
            },
            {
                durationWork: "2019 - 2021",
                work: "Higher Secondary",
                peragraph: "I Completed My Higher Secondary From Bon Birsingha Barada Sundari High School",
                isTrue: false
            },
            {
                durationWork: "2018",
                work: "Matriculation",
                peragraph: "I Completed My Matriculation From Bon Birsingha Barada Sundari High School",
                isTrue: false
            }
        ]
    },
    skills: [
        {
            name: "JavaScript",
            icon: <SiJavascript />
        },
        {
            name: "TypeScript",
            icon: <SiTypescript />
        },
        {
            name: "React",
            icon: <FaReact />
        },
        {
            name: "Redux",
            icon: <SiRedux />
        },
        {
            name: "HTML",
            icon: <FaHtml5 />
        },
        {
            name: "CSS",
            icon: <FaCss3Alt />
        },
        {
            name: "jQuery",
            icon: <DiJqueryLogo />
        },
        {
            name: "Bootstrap",
            icon: <FaBootstrap />
        },
        {
            name: "Tailwind",
            icon: <RiTailwindCssFill />
        },
        {
            name: "C language",
            icon: <i className="fa-solid fa-c"></i>
        },
        {
            name: "DSA",
            icon: <FaDatabase />
        },
        {
            name: "Figma",
            icon: <FaFigma />
        },
        {
            name: "Git",
            icon: <FaGitAlt />
        },
        {
            name: "GitHub",
            icon: <FaGithub />
        },
    ],
    projects: [
        {
            name: "YouTube Clone",
            link: "https://tarapada-projects.netlify.app/project/youtube/home/",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "Flex Box"],
            video: YouTubeClone
        },
        {
            name: "Instagram Clone",
            link: "https://tarapada-projects.netlify.app/project/instagram/home/",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management","Flex Box"],
            video: instagramClone
        },
        {
            name: "Batting Game",
            link: "https://batting.netlify.app/",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management","Flex Box"],
            image: BattingGame
        },
        {
            name: "Netflix Clone",
            link: "https://tarapada-projects.netlify.app/project/netflix/",
            skills: ["HTML", "CSS","Flex Box"],
            video: NetflixClone
        },
        {
            name: "Computer Coaching Website",
            link: "https://computerwebside.netlify.app/",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "Flex Box", "Figma"],
            video: ComputerCenter
        },
        {
            name: "Ecommerce Website",
            link: "https://tarapada-projects.netlify.app/project/ecommercewebsite/",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "Figma", "Flex Box"],
            video: eCommerceWebsite
        },
        {
            name: "Online Exam",
            link: "https://tarapada-projects.netlify.app/project/online%20exam/index.html",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "Flex Box", "Figma"],
            image: examonline
        },
        {
            name: "Travel Websites",
            link: "https://tarapada-projects.netlify.app/project/travel/",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "Figma", "Flex Box"],
            video: travel_website
        },
        {
            name: "File Downloader",
            link: "https://tarapada-projects.netlify.app/project/file%20downloader%20new/",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "Figma", "Flex Box"],
            image: fileDownloder
        },
        {
            name: "Portfolio",
            link: "https://tarapada-projects.netlify.app/project/portfolio%2001/index.html",
            skills: ["Figma", "JavaScript", "HTML", "CSS", "Flex Box"],
            video: portfolio
        },
        {
            name: "First Portfolio",
            link: "https://tarapada-projects.netlify.app/project/personal%20webside/index.html",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "Figma", "Flex Box", "jQuery"],
            video: firstPortfolio
        },
        {
            name: "Second Portfolio",
            link: "https://tarapada-projects.netlify.app/project/portfolio/",
            skills: ["Figma", "JavaScript", "HTML", "CSS", "Dom Management", "Flex Box", "API"],
            video: secondPortfolio
        },
        {
            name: "Blogging Website",
            link: "https://tarapada-projects.netlify.app/project/bloging%20webside/index.html",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "Bootstrap", "Flex Box", "Grid"],
            video: iCoder
        },
        {
            name: "Shopping Website",
            link: "https://tarapada-projects.netlify.app/project/shopping_webside/",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "Bootstrap",  "Flex Box", "Grid"],
            video: shopping
        },
        {
            name: "Calculator",
            link: "https://tarapada-projects.netlify.app/project/calculator/",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "Figma", "Flex Box"],
            image: calcluter
        },
        {
            name: "Currency Converter",
            link: "https://tarapada-projects.netlify.app/project/currencyconverter/",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "API", "Figma", "Flex Box"],
            image: curancyChange
        },
        {
            name: "Stone Paper Scissors Game",
            link: "https://tarapada-projects.netlify.app/project/stone%20paper%20scissors/",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "Flex Box"],
            image: stonepapersesar
        },
        {
            name: "Tic Tac Toe Game",
            link: "https://tarapada-projects.netlify.app/project/tictactoe/",
            skills: ["JavaScript", "HTML", "CSS", "Dom Management", "Flex Box"],
            image: tictacto
        },
    ],
    certificates: [
        {
            name: "React certificate",
            image: ReactCertificate,
            link: "https://www.udemy.com/certificate/UC-a659684c-d9ec-43f9-b844-dc79bbf27405/"
        },
        {
            name: "DSA certificate",
            image: DSACertificate,
            link: "https://www.udemy.com/certificate/UC-70d1d8e4-8f65-404c-ab95-93157924841e/"
        }
    ],
    profile: {
        home: {
            image: MyImage,
            name: "Tarapada Garai",
            job: "Front end Devolaper"
        },
        contacts: [
            {
                href: "mailto:tarapadagarai898@gmail.com",
                icon: <BiLogoGmail />,
                name: "tarapadagarai898@gmail.com"
            },
            {
                href: "tel:6294522656",
                icon: <MdLocalPhone />,
                name: "6294522656"
            },
            {
                href: CV,
                icon: <IoMdDownload />,
                name: "Download CV",
                download: "Tarapada(CV)"
            },
        ],
        links: [
            {
                link: "https://github.com/codingWithRakesh",
                icon: <FaGithub />,
                title: "Github"
            },
            {
                link: "https://www.linkedin.com/in/tarapada-garai-1a9a5a257/",
                icon: <FaLinkedin />,
                title: "Linkedin"
            },
            {
                link: "https://www.instagram.com/tarapada_9679/",
                icon: <FaInstagram />,
                title: "Instagram"
            },
            {
                link: "https://www.facebook.com/tarapada.garai.35",
                icon: <FaFacebook />,
                title: "Facebook"
            },
            {
                link: "https://www.threads.net/@tarapada_9679",
                icon: <FaSquareThreads />,
                title: "Threads"
            },
            {
                link: "https://x.com/RakeshGarai100",
                icon: <FaXTwitter />,
                title: "X"
            }
        ]
    },
}