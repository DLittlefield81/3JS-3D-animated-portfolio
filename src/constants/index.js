import {
    // Proficiencies
    mobile,
    backend,
    creator,
    web,
    // Languages
    aws,
    bootstrap,
    css,
    divi,
    docker,
    express,
    figma,
    gcs,
    git,
    graphql,
    handlebars,
    html,
    javascript,
    jquery,
    mongodb,
    mui,
    nodejs,
    php,
    reactjs,
    redux,
    sequelize,
    sql,
    tailwind,
    threejs,
    typescript,
    vscode,
    woocommerce,
    wordpress,
    // Employers
    offworld,
    viarail,
    // Projects
    taquerialaunion,
    livelihoodkitchen,
    tashan,
    adventureessential,
    camposlab,
    flyteChecker,
    horiseon,
    interrobang,
    jate,
    petplaydate,
    smartplanner,
    TeamProfileGenerator,
    techblog,
    wordwise,
} from "../assets";

//NAVBAR
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];
//SEVICES
const services = [
    {
        title: "WordPress Designer",
        icon: web,
    },
    {
        title: "Fullstack Developer",
        icon: mobile,
    },
    {
        title: "Drone Pilot",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];
//TECHNOLOGIES
const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express",
        icon: express,
    },
    {
        name: "mySQL", 
        icon: sql,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS", 
        icon: threejs,
    },
    {
        name: "docker",
        icon: docker,
    },
];
//WORK EXPERIENCE
const experiences = [
    {
        title: "Freelance Developer",
        company_name: "Offworld",
        icon: offworld,
        iconBg: "#000000",
        date: "Mar 2015 - Present",
        points: [
            "Designed and developed websites for small businesses using Agile methodology",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create and maintain high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Reviewed websites to successfully identify, diagnose, and fix website problems, including broken links, typographical errors, and formatting issues.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Transportation Communication Specialist",
        company_name: "VIA Rail Canada Inc.",
        icon: viarail,
        iconBg: "#2d3480",
        date: "Mar 2001 - Aug 2022",
        points: [
            "Exceeded on-time performance metrics to ensure smooth daily operations",
            "Elevated customer satisfaction by 50 % by implementing service protocols across staff ",
            "Increased timely departures by developing alternate plans and strong internal communication",
            "Developed strategy to avoid hazards for smooth onboarding and offboarding of passengers",
            "Negotiated with freight trucking companies to source a trailer to use in the Pride Parade ",
            "Organized protocols for the proper use of radio equipment for effective staff communication",
        ],
    },
];
//TESTIMONIALS
const testimonials = [
    {
        testimonial:
            "Dennis is dedicated and professional. Excellent quality work.",
        name: "Scott B",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        testimonial:
            "Dennis from your offworld web services created a branding video for my business. He created an amazing video that I am so proud to have. He is very knowledgeable, friendly, and his attention to detail is incredible. I will definitely work with him again in the future and I strongly recommend offworld web services.",
        name: "Bonnie P",
        designation: "Entrepenure",
        company: "Adventure Essentials",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        testimonial:
            "Offworld is a one stop shop for hosting and web development needs. Working with Dennis was easy, he is extremely knowledgeable, offers variety of solutions and options based on your needs/budget and delivers on time. He created and hosted my startup idea - tashanevents.ca and I couldn't be happier!! Definitely recommended.",
        name: "Sanyam K",
        designation: "Organizer",
        company: "Tashan Events",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
];
//PROJECTS
const projects = [
    {
        name: "Taqueria La Union",
        description:
            "Restaurant web application which enables users to view menus, and place food orders. Poviding a convenient and efficient solution for ordering needs.",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
            {
                name: "DiviTheme",
                color: "green-text-gradient",
            },
            {
                name: "VikRestaurants",
                color: "pink-text-gradient",
            },
        ],
        image: taquerialaunion,
        source_code_link: "https://github.com/DLittlefield81",
    },
    {
        name: "Livelihood Kitchen",
        description:
            "Web application that enables users to subscribe to a food delivery service. Delivery occurs only on specific days of the week.",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
            {
                name: "DiviTheme",
                color: "green-text-gradient",
            },
            {
                name: "WooCommerce",
                color: "pink-text-gradient",
            },
        ],
        image: livelihoodkitchen,
        source_code_link: "https://github.com/DLittlefield81",
    },
    {
        name: "Tashan Events",
        description:
            "A comprehensive events platform that allows users to book tickets for events, and view instagram feeds.",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
            {
                name: "DiviTheme",
                color: "green-text-gradient",
            },
            {
                name: "EventsCalendar",
                color: "pink-text-gradient",
            },
        ],
        image: tashan,
        source_code_link: "https://github.com/DLittlefield81",
    },
    {
        name: "Pet Playdate",
        description:
            "Web application that enables users to schedule playdates for their pets.",
        tags: [
            {
                name: "NodeJS",
                color: "blue-text-gradient",
            },
            {
                name: "ExpressJS",
                color: "green-text-gradient",
            },
            {
                name: "Handlebars",
                color: "pink-text-gradient",
            },
        ],
        image: petplaydate,
        source_code_link: "https://github.com/abdallajama201/pet-playdate",
    },
    {
        name: "FlytCheckr",
        description:
            "Web application which utilizes geolocation to find nearest airport, and serviced destinations, providing fare matrix",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "AmadeusAPI",
                color: "green-text-gradient",
            },
            {
                name: "AirlineLogos",
                color: "pink-text-gradient",
            },
        ],
        image: flyteChecker,
        source_code_link: "https://github.com/DLittlefield81/FlytCheckr",
    },
    {
        name: "WordWise",
        description:
            "Web application which utilizes geolocation to find nearest airport, and serviced destinations, providing fare matrix",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: wordwise,
        source_code_link: "https://github.com/DLittlefield81/WordWise",
    },
    {
        name: "Campos Lab | SickKids Hospital",
        description:
            "Website displaying information related to epigenetics to scientific community.",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
            {
                name: "Avada Theme",
                color: "green-text-gradient",
            },
            {
                name: "Custom Slideshows",
                color: "pink-text-gradient",
            },
        ],
        image: camposlab,
        source_code_link: "https://github.com/DLittlefield81/",
    },
    {
        name: "Adventure Essentials",
        description:
            "WooCommerce website utilizing dropshipping, and email campaigns. ",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
            {
                name: "DiviTheme",
                color: "green-text-gradient",
            },
            {
                name: "Dropshipping",
                color: "pink-text-gradient",
            },
        ],
        image: adventureessential,
        source_code_link: "https://github.com/DLittlefield81/",
    },
];

export { services, technologies, experiences, testimonials, projects };