import { DiJqueryLogo } from "react-icons/di";
import { FaBootstrap, FaCss3Alt, FaDatabase, FaFacebook, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaInstagram, FaLinkedin, FaReact, FaYoutube } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiRedux, SiTypescript, SiUdemy } from "react-icons/si";
import ReactCertificate from '../assets/certificate/React.jpg'
import DSACertificate from '../assets/certificate/DSA.jpg'
import client1 from '../assets/images/clients/client1.png'
import client2 from '../assets/images/clients/client2.png'
import MyImage from '../assets/images/TARAPADA.jpg'
import CV from '../assets/CV/Tarapada Garai (CV).pdf'
import workExperience from '../assets/certificate/work_experience.pdf'
import workExperienceIMG from '../assets/certificate/work_experience_image.jpg'

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
import hackathonVideo from '../assets/videos/hackathon.mp4'

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
                big: "15+",
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
                work: "Frontend Developer",
                peragraph: "I was working first in a Birsingha RGCSA company. It was in a computer coaching center. That's where I was working as a front end developer. Where I was working with a team. At that place we were making total 2 big websites which means we were working on 2 projects. I used technology like HTML, CSS, JavaScript, jQuery, Flex Box, Figma to make its website, the back end of its website was PHP, SQL, MySQL.",
                link: "https://computerwebside.netlify.app/",
                name: "link",
                isTrue: true
            },
            {
                durationWork: "Sep,2022 - Jun,2024",
                work: "Teaching",
                peragraph: "I have 1 year 10 months of experience in Birsingha RGCSA company. It is a computer coaching center where I taught Ms Paint, Bangla Word, Word Pad, Note Pad, MS Office(Word, Excel, PowerPoint), HTML & CSS, C language, Internate there",
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
            title: "skills",
            iconOut: true
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
            title: "skills",
            iconOut: true
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
            title: "skills",
            iconOut: true
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
            title: "skills",
            iconOut: true
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
            title: "skills",
            iconOut: true
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
            title: "skills",
            iconOut: true
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
            title: "skills",
            iconOut: true
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
            title: "skills",
            iconOut: true
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
            title: "skills",
            iconOut: true
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
            title: "skills",
            iconOut: true
        },
        {
            name: "DSA",
            icon: <FaDatabase />,
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
            title: "skills",
            iconOut: true
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
            title: "skills",
            iconOut: true
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
            title: "skills",
            iconOut: true
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
            title: "skills",
            iconOut: true
        },
    ],
    projects: [
        {
            name: "YouTube Clone",
            link: "https://tarapada-projects.netlify.app/project/youtube/home/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "GitHub", "Git"],
            video: YouTubeClone,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/youtube",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [75, 15, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "October 2023 - November 2023"
        },
        {
            name: "Instagram Clone",
            link: "https://tarapada-projects.netlify.app/project/instagram/home/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "GitHub", "Git"],
            video: instagramClone,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/instagram",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [65, 20, 15],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "September 2023 - October 2023"
        },
        {
            name: "Hackathon Project",
            link: "https://bw-hackathon-undefined.netlify.app/",
            skills: ["React", "HTML", "CSS", "React Router Dom", "API", "Flexbox", "Figma", "GitHub", "Git"],
            video: hackathonVideo,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/-BWU-Hackathon-Project-",
            labels: ['HTML', 'CSS', 'React'],
            data: [2, 20, 78],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "6 September 2024 - 8 September 2024"
        },
        {
            name: "Batting Game",
            link: "https://batting.netlify.app/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "GitHub", "Git"],
            image: BattingGame,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/Batting-Game",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [20, 30, 50],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "3 August 2024 - 5 August 2024"
        },
        {
            name: "Netflix Clone",
            link: "https://tarapada-projects.netlify.app/project/netflix/",
            skills: ["HTML", "CSS", "Flexbox", "GitHub", "Git"],
            video: NetflixClone,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/netflix",
            labels: ['HTML', 'CSS'],
            data: [40, 60],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            Timeframe : "November 2023 - November 2023"
        },
        {
            name: "Computer Coaching Website",
            link: "https://computerwebside.netlify.app/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "Figma", "GitHub", "Git"],
            video: ComputerCenter,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/computer-coaching-website",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [35, 20, 45],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "August 2023 - September 2023"
        },
        {
            name: "Ecommerce Website",
            link: "https://tarapada-projects.netlify.app/project/ecommercewebsite/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Figma", "Flexbox", "GitHub", "Git"],
            video: eCommerceWebsite,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/EcommerceWebsite",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [45, 45, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "November 2023 - December 2023"
        },
        {
            name: "Online Exam",
            link: "https://tarapada-projects.netlify.app/project/online%20exam/index.html",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "Figma", "GitHub", "Git"],
            image: examonline,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/online-exam",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [10, 30, 60],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "November 2023 - December 2023"
        },
        {
            name: "Travel Websites",
            link: "https://tarapada-projects.netlify.app/project/travel/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Figma", "Flexbox", "GitHub", "Git"],
            video: travel_website,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/Travel-Websites",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [45, 45, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "May 2024 - June 2024"
        },
        {
            name: "File Downloader",
            link: "https://tarapada-projects.netlify.app/project/file%20downloader%20new/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Figma", "Flexbox", "GitHub", "Git"],
            image: fileDownloder,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/File-Downloader",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [20, 35, 45],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "23 June 2024 - 28 June 2024"
        },
        {
            name: "Portfolio",
            link: "https://tarapada-projects.netlify.app/project/portfolio%2001/index.html",
            skills: ["Figma", "HTML", "CSS", "Flexbox", "GitHub", "Git"],
            video: portfolio,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/Portfolio",
            labels: ['HTML', 'CSS'],
            data: [65, 35],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            Timeframe : "February 2024 - March 2024"
        },
        {
            name: "First Portfolio",
            link: "https://tarapada-projects.netlify.app/project/personal%20webside/index.html",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Figma", "Flexbox", "jQuery", "GitHub", "Git"],
            video: firstPortfolio,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/First-First-Portfolio",
            labels: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
            data: [30, 30, 20, 20],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            Timeframe : "June 2023 - July 2023"
        },
        {
            name: "Second Portfolio",
            link: "https://tarapada-projects.netlify.app/project/portfolio/",
            skills: ["Figma", "JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "API", "GitHub", "Git"],
            video: secondPortfolio,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/First-Portfolio",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [30, 30, 40],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "December 2023 - January 2024"
        },
        {
            name: "Blogging Website",
            link: "https://tarapada-projects.netlify.app/project/bloging%20webside/index.html",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Bootstrap", "Flexbox", "Grid", "GitHub", "Git"],
            video: iCoder,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/first-Bootstrap-webside",
            labels: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            data: [13, 12, 6, 69],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            Timeframe : "October 2023 - November 2023"
        },
        {
            name: "Shopping Website",
            link: "https://tarapada-projects.netlify.app/project/shopping_webside/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Bootstrap", "Flexbox", "Grid", "GitHub", "Git"],
            video: shopping,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/shopping_Webside",
            labels: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            data: [23, 12, 35, 30],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            Timeframe : "November 2023 - December 2023"
        },
        {
            name: "Calculator",
            link: "https://tarapada-projects.netlify.app/project/calculator/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Figma", "Flexbox", "GitHub", "Git"],
            image: calcluter,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/Calculator",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [20, 30, 50],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "18 December 2023 - 22 December 2023"
        },
        {
            name: "Currency Converter",
            link: "https://tarapada-projects.netlify.app/project/currencyconverter/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "API", "Figma", "Flexbox", "GitHub", "Git"],
            image: curancyChange,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/CurrencyConverter",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [20, 10, 70],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "14 December 2023 - 16 December 2023"
        },
        {
            name: "Stone Paper Scissors Game",
            link: "https://tarapada-projects.netlify.app/project/stone%20paper%20scissors/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "GitHub", "Git"],
            image: stonepapersesar,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/Stone-Paper-Scissors",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [17, 10, 73],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "6 December 2023 - 9 December 2023"
        },
        {
            name: "Tic Tac Toe Game",
            link: "https://tarapada-projects.netlify.app/project/tictactoe/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "GitHub", "Git"],
            image: tictacto,
            title: "projects",
            gitHub: "https://github.com/codingWithRakesh/TicTacToe",
            labels: ['HTML', 'CSS', 'JavaScript'],
            data: [15, 10, 75],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            Timeframe : "2 December 2023 - 5 December 2023"
        },
    ],
    certificates: [
        {
            name: "React certificate",
            title: "React",
            image: ReactCertificate,
            link: "https://www.udemy.com/certificate/UC-a659684c-d9ec-43f9-b844-dc79bbf27405/"
        },
        {
            name: "DSA certificate",
            title: "DSA",
            image: DSACertificate,
            link: "https://www.udemy.com/certificate/UC-70d1d8e4-8f65-404c-ab95-93157924841e/"
        },
        {
            name: "Teaching Experience certificate",
            image: workExperienceIMG,
            link: workExperience
        }
    ],
    profile: {
        home: {
            image: MyImage,
            name: "Tarapada Garai",
            job: "Frontend Developer"
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