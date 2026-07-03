import MyImage from '../assets/images/TARAPADA.png'
import {CV} from '../constands/constand.js'

import client1 from '../assets/images/clients/client1.png'
import client2 from '../assets/images/clients/client2.png'
import client3 from '../assets/images/clients/client3.jpg'
import client4 from '../assets/images/clients/client4.jpg'
import client5 from "../assets/images/clients/client5.jpeg"
import client6 from "../assets/images/clients/client6.jpeg";

export const about = {
    aboutBox: [
        {
            image: MyImage,
            CV: CV
        },
        {
            about: [
                <>I’m <b>Tarapada Garai</b>, a <b>backend-focused full-stack and microservices developer</b> with hands-on experience in building scalable and production-ready applications. Currently, I’m working as a <b>Backend Developer Intern</b> at <b>MealVersity Technologies Private Limited</b>, where I focus on designing efficient backend systems.</>,
                <>What sets me apart is my ability to <b>integrate AI features</b> into real-world projects. I’ve built:</>,
                <ul className='ulFix'>
                    <li>A microservices-based <b>RAG service</b>, where the core AI is powered by FastAPI and the full backend ecosystem (authentication, messaging, subscriptions) is built using Spring Boot and Docker.</li>
                    <li>An <b>Omegle Clone</b>, where I developed real-time user matching using Spring Boot and handled video calls and messaging with Node.js, Socket.io, and peer-to-peer connections in a microservices setup.</li>
                </ul>,
                <>I know how to use AI effectively in <b>full-stack</b> projects to improve user experience and productivity. I'm always excited to take on new challenges and collaborate on innovative ideas.</>
            ],
            hobbies: ["Coding", "Painting", "Photography", "Learning", "Cycling", "Video Game"],
            languages: ["English", "Hindi", "Bengali"]
        }
    ],
    expenses: [
        {
            clientImage: client4,
            durationWork: "Animesh Dey",
            work: "Founder of KRISHTI",
            peragraph: '“Tarapada truly exceeded my expectations. He listened carefully, understood my vision, and brought it to life flawlessly. His professionalism, patience, and talent made the entire process smooth and enjoyable. Highly recommended!”',
            link: "KRISHTI",
            name: "Visit Project",
            isTrue: true
        },
        {
            clientImage: client5,
            durationWork: "Animesh Maji",
            work: "Founder of GI BENGAL DOKRA",
            peragraph: '“Tarapada is very creative and professional. He quickly understood my business needs and delivered a website that looks modern, fast, and user-friendly. I am very satisfied with his work and would recommend him to anyone.”',
            link: "Uniquedokraworkshop",
            name: "Visit Project",
            isTrue: true
        },
        {
            clientImage: client1,
            durationWork: "Santanu Dutta",
            work: "Founder of Gumut RGCSA",
            peragraph: '“I can bet that it\'s too hard to find professional developers like Tarapada. He could peek inside my mind and made the site exactly as I wanted Much appreciated”',
            link: "Online Exam",
            name: "Visit Project",
            isTrue: true
        },
        {
            clientImage: client3,
            durationWork: "Alhaj Hafez Ansar Ali Shah",
            work: "Founder of Rupsona Iqra Madrasa Mission",
            peragraph: '“Tarapada was a wonderful developer to work with! He anticipated everything I need to consider for my website. He also went the extra mile and added details that I hadn\'t considered! He is helping my business grow, and I will definitely work with him again!”',
            link: "Rupsona Iqra Madrasa Mission",
            name: "Visit Project",
            isTrue: true
        },
        {
            clientImage: client2,
            durationWork: "Bhabasindu Garai",
            work: "Founder of Birsingha RGCSA",
            peragraph: '“I worked with Tarapada to make my website. I am speechless by looking at his work ethic and dedication. Working with him was the best decision I made.”',
            link: "Computer Coaching Website",
            name: "Visit Project",
            isTrue: true
        },
        {
            clientImage: client6,
            durationWork: "Gobinda Chowdhury",
            work: "Founder of Teer Results",
            peragraph: '“Tarapada did an excellent job building my website on short notice. He worked fast, understood my needs, and delivered great results. Highly recommended!”',
            link: "Real Bhutan",
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
        }
    ],
    hackathon: [
        {
            durationWork: "23 Aug, 2024",
            work: "Smart India Hackathon",
            peragraph: "A hackathon was held at our college, and our team secured 20th place among 100+ participating teams from across the college.",
            isTrue: false
        },
        {
            durationWork: "28 Sep, 2024",
            work: "Dev Innov8+ Hackathon",
            peragraph: "A hackathon was held in our college, and our team secured 4th place in the entire college arounding 30+ teams participated in the hackathon. ",
            link: "Dev Innov8+ Hackathon Certificate",
            name: "View Certificate",
            isTrue: true
        },
        {
            durationWork: "26 Feb, 2025",
            work: "Binary Battleground Hackathon",
            peragraph: "This was a problem-solving hackathon held at our college. The hackathon had three rounds, and I successfully qualified for the first two rounds.",
            link: "Binary Battleground Hackathon Participation Certificate",
            name: "View Certificate",
            isTrue: true
        },
        {
            durationWork: "28 Feb, 2025",
            work: "InnovoCon Hackathon",
            peragraph: "This was a hackathon held at JIS College of Engineering, and it was the first hackathon our team participated in outside our college.",
            link: "InnovoCon Hackathon Participation Certificate",
            name: "View Certificate",
            isTrue: true
        },
        {
            durationWork: "26 Apr, 2025",
            work: "Droid Fest Kolkata",
            peragraph: "Participated in DroidFest, a developer conference organized by Kotlin User Group Kolkata.",
            isTrue: false
        },
        {
            durationWork: "01 May, 2025",
            work: "TEXIBITION Hackathon",
            peragraph: "This was a hackathon held at our college, and our team also participated in this hackathon.",
            link: "TEXIBITION Hackathon Participation Certificate",
            name: "View Certificate",
            isTrue: true
        },
        {
            durationWork: "07 Sep, 2025",
            work: "MAKE-A-THON Hackathon",
            peragraph: "This was a hackathon held at IEM & UEM College of Engineering, and our team also participated in this hackathon.",
            link: "MAKE-A-THON Hackathon Participation Certificate",
            name: "View Certificate",
            isTrue: true
        },
        {
            durationWork: "11 Sep, 2025",
            work: "NEXATHON 1.0 Hackathon",
            peragraph: "This was a hackathon held at our college, and our team also participated in this hackathon.",
            link: "NEXATHON 1.0 Hackathon Participation Certificate",
            name: "View Certificate",
            isTrue: true
        },
        {
            durationWork: "18 Oct, 2025",
            work: "Algorand Build Station Hackathon",
            peragraph: "This was the only blockchain hackathon and it was held in hotel kolkata. Our team also participated in this hackathon.",
            isTrue: false
        },
        {
            durationWork: "18 Nov, 2025",
            work: "DevFest Durgapur",
            peragraph: "I participated in GDG Durgapur DevFest, a flagship developer conference organized by Google Developer Groups (GDG) Durgapur.",
            isTrue: false
        },
        {
            durationWork: "22 Feb, 2026",
            work: "Circuit Craft Hackathon 2026",
            peragraph: "This was a hackathon organized by our team and hosted at our college, where I led the planning, coordination, and execution of the event.",
            isTrue: false
        },
        {
            durationWork: "12 Mar, 2026",
            work: "TEXIBITION 2.0 Hackathon",
            peragraph: "This was a hackathon held at our college, and our team also participated in this hackathon.",
            link: "TEXIBITION 2.0 Hackathon Participation Certificate",
            name: "View Certificate",
            isTrue: true
        },
        {
            durationWork: "19 Mar, 2026",
            work: "Binary Battleground Hackathon",
            peragraph: "This was a hackathon organized by our team and hosted at our college, where I led the planning, coordination, and execution of the event.",
            isTrue: false
        },
        {
            durationWork: "21 Mar, 2026",
            work: "Binary V2 Hackathon",
            peragraph: "This was a hackathon held at Kalyani Government Engineering College, and our team also participated in this hackathon.",
            isTrue: false
        },
        {
            durationWork: "25 Mar, 2026",
            work: "Droid Fest Kolkata",
            peragraph: "Participated in DroidFest, a developer conference organized by Kotlin User Group Kolkata.",
            isTrue: false
        },
        {
            durationWork: "11 Apr, 2026",
            work: "HackStorm Hackathon",
            peragraph: "This was a hackathon held at B.P.Poddar Institute of Management and Technology, and our team secured 5th place in the entire college arounding 30+ teams participated in the hackathon. ",
            link: "HackStorm Hackathon Participation Certificate",
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
}