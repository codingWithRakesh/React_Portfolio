import ReactCertificate from '../assets/certificate/React.jpg'
import DSACertificate from '../assets/certificate/DSA.jpg'
import workExperience from '../assets/certificate/work_experience.pdf'
import workExperienceIMG from '../assets/certificate/work_experience_image.jpg'
import HackathonImg from '../assets/certificate/Hackathon.jpg'
import HackathonPdf from '../assets/certificate/Hackathon_pdf.pdf'
import HackathonSimplePdf from '../assets/certificate/hackathonSimple.pdf'
import HackathonSimpleImg from '../assets/certificate/hackathonSimple.jpg'
import ExpressMongoDBImg from '../assets/certificate/express-mongoDB.jpg'
import InnovoConImg from "../assets/certificate/InnovoCon.jpg"
import InnovoConPdf from "../assets/certificate/InnovoCon.pdf"
import InternalHackathonImg from "../assets/certificate/Internal Hackathon.jpg"
import InternalHackathonPdf from "../assets/certificate/Internal Hackathon.pdf"
import BinaryBattlegroundImg from "../assets/certificate/Binary Battleground.jpg"
import BinaryBattlegroundPdf from "../assets/certificate/Binary Battleground.pdf"

export const certificates = [
    {
        name: "Binary Battleground Hackathon Participation Certificate",
        image: BinaryBattlegroundImg,
        link: BinaryBattlegroundPdf,
        checkName: "certificates",
        gotDate: "I received the Certificate on February 26th, 2025.",
        summary: ""
    },
    {
        name: "Internal Hackathon Participation Certificate",
        image: InternalHackathonImg,
        link: InternalHackathonPdf,
        checkName: "certificates",
        gotDate: "I received the Certificate on September 4th, 2024.",
        summary: ""
    },
    {
        name: "InnovoCon Hackathon Participation Certificate",
        image: InnovoConImg,
        link: InnovoConPdf,
        checkProject: "InnovoConHackathon",
        checkName: "certificates",
        gotDate: "I received the Certificate on February 28th, 2025.",
        summary: ""
    },
    {
        name: "NodeJs Masterclass Certificate",
        title: ["Express js","Node js","MongoDB"],
        image: ExpressMongoDBImg,
        link: "https://www.udemy.com/certificate/UC-1d44cb71-af45-44a0-b0e5-e570ffd414e9/",
        checkName: "certificates",
        gotDate: "I received the Certificate on November 24th, 2024.",
        summary: ""
    },
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
        name: "Dev Innov8+ Hackathon Participation Certificate",
        image: HackathonSimpleImg,
        link: HackathonSimplePdf,
        checkProject: "DevInnov8Hackathon",
        checkName: "certificates",
        gotDate: "I received the Certificate on September 28th, 2024.",
        summary: "On the occasion of Engineering Day, our college Brainware University conducted a college-wide hackathon. There were 3 problem statements where we were supposed to choose one or more problem statements. We took all 3 statements as a challenge and completed them in a span of 2 days. The competition included students from 1st, 2nd, 3rd, and 4th years, including BCA, MCA, and BTech courses, and we were from the BCA first year. Despite all that, we have secured 4th rank in the competition."
    },
    {
        name: "React Certificate",
        title: ["React"],
        image: ReactCertificate,
        link: "https://www.udemy.com/certificate/UC-a659684c-d9ec-43f9-b844-dc79bbf27405/",
        checkName: "certificates",
        gotDate: "I received the Certificate on March 25th, 2024.",
        summary: ""
    },
    {
        name: "DSA Certificate",
        title: ["DSA"],
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
]