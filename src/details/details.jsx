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
import HackathonImg from '../assets/certificate/Hackathon.jpg'
import HackathonPdf from '../assets/certificate/Hackathon_pdf.pdf'

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

import Notepad from '../assets/images/noteapp.png'
import do_you_love_me from '../assets/images/do_you_love_me.png'
import game_2048 from '../assets/images/G2048.png';
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
                link: "Computer Coaching Website",
                name: "Visit Project",
                isTrue: true
            },
            {
                durationWork: "Sep,2022 - Jun,2024",
                work: "Teaching",
                peragraph: "I have 1 year 10 months of experience in Birsingha RGCSA company. It is a computer coaching center where I taught Ms Paint, Bangla Word, Word Pad, Note Pad, MS Office(Word, Excel, PowerPoint), HTML & CSS, C language, Internate there",
                link: "Teaching Experience Certificate",
                name: "View Experience Certificate",
                isTrue: true
            },
            {
                durationWork: "Feb,2023 - Running",
                work: "freelancing",
                peragraph: "Besides I did freelancing which I am still doing.  I did a lot of freelancing work, mostly in our village.  I have worked in cafes, coaching centers where I have used HTML, CSS, JavaScript, jQuery, React, Tailwind",
                link: "Online Exam",
                name: "Visit Project",
                isTrue: true
            }
        ],
        hackathon: [
            {
                durationWork: "28 Sep, 2024",
                work: "Dev Innov8+ Hackathon",
                peragraph: "A hackathon was held in our college and I secured 4th place in the entire college",
                link: "Dev Innov8+ Hackathon Certificate",
                name: "View Certificate",
                isTrue: true
            },
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
            checkName: "skills",
            iconOut: true,
            isCertified: true
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
    ],
    projects: [
        {
            name: "Notepad Webapp",
            link: "https://notewebappproject.netlify.app/",
            skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap", "React Router Dom", "Flexbox", "Grid", "GitHub", "Git", "Figma"],
            image: Notepad,
            checkName: "projects",
            gitHub: "https://github.com/codingWithRakesh/Note-Web-app",
            labels: ['HTML', 'CSS', 'TypeScript', 'Bootstrap'],
            data: [1, 2, 77, 20],
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
            Timeframe: "26 October 2024 - 27 October 2024",
            isGood: false
        },
        {
            name: "2048 Game",
            link: "https://2048gameproject.netlify.app/",
            skills: ["TypeScript", "JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "GitHub", "Git"],
            image: game_2048,
            checkName: "projects",
            gitHub: "https://github.com/codingWithRakesh/game2048",
            labels: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
            data: [7, 18, 35, 40],
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
            Timeframe: "11 October 2024 - 12 October 2024",
            isGood: false
        },
        {
            name: "Dev Innov8+ Hackathon Project",
            link: "https://bw-hackathon-undefined.netlify.app/",
            skills: ["React", "HTML", "CSS", "React Router Dom", "API", "Flexbox", "Figma", "GitHub", "Git"],
            video: hackathonVideo,
            checkName: "projects",
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
            Timeframe: "6 September 2024 - 8 September 2024",
            isGood: true,
            checkCertificket: "DevInnov8Hackathon"
        },
        {
            name: "Funny Project",
            link: "https://do-you-love-me-project.netlify.app/",
            skills: ["TypeScript", "JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "GitHub", "Git"],
            image: do_you_love_me,
            checkName: "projects",
            gitHub: "https://github.com/codingWithRakesh/do_you_love_me",
            labels: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
            data: [25, 2, 35, 37],
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
            Timeframe: "13 October 2024 - 14 October 2024",
            isGood: false,
        },
        {
            name: "Batting Game",
            link: "https://batting.netlify.app/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "GitHub", "Git"],
            image: BattingGame,
            checkName: "projects",
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
            Timeframe: "3 August 2024 - 5 August 2024",
            isGood: false
        },
        {
            name: "YouTube Clone",
            link: "https://tarapada-projects.netlify.app/project/youtube/home/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "GitHub", "Git"],
            video: YouTubeClone,
            checkName: "projects",
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
            Timeframe: "October 2023 - November 2023",
            isGood: false
        },
        {
            name: "Instagram Clone",
            link: "https://tarapada-projects.netlify.app/project/instagram/home/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "GitHub", "Git"],
            video: instagramClone,
            checkName: "projects",
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
            Timeframe: "September 2023 - October 2023",
            isGood: false
        },
        {
            name: "Netflix Clone",
            link: "https://tarapada-projects.netlify.app/project/netflix/",
            skills: ["HTML", "CSS", "Flexbox", "GitHub", "Git"],
            video: NetflixClone,
            checkName: "projects",
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
            Timeframe: "November 2023 - November 2023",
            isGood: false
        },
        {
            name: "Computer Coaching Website",
            link: "https://computerwebside.netlify.app/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "Figma", "GitHub", "Git"],
            video: ComputerCenter,
            checkName: "projects",
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
            Timeframe: "August 2023 - September 2023",
            isGood: false
        },
        {
            name: "Ecommerce Website",
            link: "https://tarapada-projects.netlify.app/project/ecommercewebsite/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Figma", "Flexbox", "GitHub", "Git"],
            video: eCommerceWebsite,
            checkName: "projects",
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
            Timeframe: "November 2023 - December 2023",
            isGood: false
        },
        {
            name: "Online Exam",
            link: "https://tarapada-projects.netlify.app/project/online%20exam/index.html",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "Figma", "GitHub", "Git"],
            image: examonline,
            checkName: "projects",
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
            Timeframe: "November 2023 - December 2023",
            isGood: false
        },
        {
            name: "Travel Websites",
            link: "https://tarapada-projects.netlify.app/project/travel/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Figma", "Flexbox", "GitHub", "Git"],
            video: travel_website,
            checkName: "projects",
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
            Timeframe: "May 2024 - June 2024",
            isGood: false
        },
        {
            name: "File Downloader",
            link: "https://tarapada-projects.netlify.app/project/file%20downloader%20new/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Figma", "Flexbox", "GitHub", "Git"],
            image: fileDownloder,
            checkName: "projects",
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
            Timeframe: "23 June 2024 - 28 June 2024",
            isGood: false
        },
        {
            name: "Portfolio",
            link: "https://tarapada-projects.netlify.app/project/portfolio%2001/index.html",
            skills: ["Figma", "HTML", "CSS", "Flexbox", "GitHub", "Git"],
            video: portfolio,
            checkName: "projects",
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
            Timeframe: "February 2024 - March 2024",
            isGood: false
        },
        {
            name: "First Portfolio",
            link: "https://tarapada-projects.netlify.app/project/personal%20webside/index.html",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Figma", "Flexbox", "jQuery", "GitHub", "Git"],
            video: firstPortfolio,
            checkName: "projects",
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
            Timeframe: "June 2023 - July 2023",
            isGood: false
        },
        {
            name: "Second Portfolio",
            link: "https://tarapada-projects.netlify.app/project/portfolio/",
            skills: ["Figma", "JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "API", "GitHub", "Git"],
            video: secondPortfolio,
            checkName: "projects",
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
            Timeframe: "December 2023 - January 2024",
            isGood: false
        },
        {
            name: "Blogging Website",
            link: "https://tarapada-projects.netlify.app/project/bloging%20webside/index.html",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Bootstrap", "Flexbox", "Grid", "GitHub", "Git"],
            video: iCoder,
            checkName: "projects",
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
            Timeframe: "October 2023 - November 2023",
            isGood: false
        },
        {
            name: "Shopping Website",
            link: "https://tarapada-projects.netlify.app/project/shopping_webside/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Bootstrap", "Flexbox", "Grid", "GitHub", "Git"],
            video: shopping,
            checkName: "projects",
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
            Timeframe: "November 2023 - December 2023",
            isGood: false
        },
        {
            name: "Calculator",
            link: "https://tarapada-projects.netlify.app/project/calculator/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Figma", "Flexbox", "GitHub", "Git"],
            image: calcluter,
            checkName: "projects",
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
            Timeframe: "18 December 2023 - 22 December 2023",
            isGood: false
        },
        {
            name: "Currency Converter",
            link: "https://tarapada-projects.netlify.app/project/currencyconverter/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "API", "Figma", "Flexbox", "GitHub", "Git"],
            image: curancyChange,
            checkName: "projects",
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
            Timeframe: "14 December 2023 - 16 December 2023",
            isGood: false
        },
        {
            name: "Stone Paper Scissors Game",
            link: "https://tarapada-projects.netlify.app/project/stone%20paper%20scissors/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "GitHub", "Git"],
            image: stonepapersesar,
            checkName: "projects",
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
            Timeframe: "6 December 2023 - 9 December 2023",
            isGood: false
        },
        {
            name: "Tic Tac Toe Game",
            link: "https://tarapada-projects.netlify.app/project/tictactoe/",
            skills: ["JavaScript", "HTML", "CSS", "DOM Management", "Flexbox", "GitHub", "Git"],
            image: tictacto,
            checkName: "projects",
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
            Timeframe: "2 December 2023 - 5 December 2023",
            isGood: false
        },
    ],
    certificates: [
        {
            name: "Dev Innov8+ Hackathon Certificate",
            image: HackathonImg,
            link: HackathonPdf,
            checkProject: "DevInnov8Hackathon",
            checkName: "certificates",
            gotDate: "I received the Certificate on September 28th, 2024.",
            summary: "On the occasion of Engineering Day, our college Brainware University conducted a college-wide hackathon. There were 3 problem statements where we were supposed to choose one or more problem statements. We took all 3 statements as a challenge and completed them in a span of 2 days. The competition included students from 1st, 2nd, 3rd, and 4th years, including BCA, MCA, and BTech courses, and we were from the BCA first year. Despite all that, we have secured 4th rank in the competition."
        },
        {
            name: "React Certificate",
            title: "React",
            image: ReactCertificate,
            link: "https://www.udemy.com/certificate/UC-a659684c-d9ec-43f9-b844-dc79bbf27405/",
            checkName: "certificates",
            gotDate: "I received the Certificate on March 25th, 2024.",
            summary: ""
        },
        {
            name: "DSA Certificate",
            title: "DSA",
            image: DSACertificate,
            gotDate: "I received the Certificate on June 20th, 2024.",
            link: "https://www.udemy.com/certificate/UC-70d1d8e4-8f65-404c-ab95-93157924841e/",
            checkName: "certificates",
            summary: ""
        },
        {
            name: "Teaching Experience Certificate",
            image: workExperienceIMG,
            link: workExperience,
            checkName: "certificates",
            gotDate: "I received the Certificate on July 5th, 2024.",
            summary: "I have 1 year 10 months of experience in Birsingha RGCSA company. It is a computer coaching center where I taught Ms Paint, Bangla Word, Word Pad, Note Pad, MS Office(Word, Excel, PowerPoint), HTML & CSS, C language, Internate there"
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