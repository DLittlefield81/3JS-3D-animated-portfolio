import {
    // Proficiencies
    fullstack,
    mobileFirst,
    AccessabilityFocus,
    mentorship,
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
    nextjs,
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
    airbnb,
    // Projects
    drjasonloken,
    rwto,
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
    reactportfolio,
    WeatherWorks,
    //Games
    axeQuest,
    cubejumper,
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
        title: "Fullstack Development",
        icon: fullstack,
    },
    {
        title: "Mobile First Approach",
        icon: mobileFirst,
    },
    {
        title: "Accessibility Focused",
        icon: AccessabilityFocus,
    },
    {
        title: "Mentorship",
        icon: mentorship,
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
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "redux",
        icon: redux,
    },
    {
        name: "mySQL",
        icon: sql,
    },
    {
        name: "sequelize",
        icon: sequelize,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "graphql",
        icon: graphql,
    },
    {
        name: "tailwind",
        icon: tailwind,
    },
    {
        name: "aws",
        icon: aws,
    },
    {
        name: "gcs",
        icon: gcs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "wordpress",
        icon: wordpress,
    },
    {
        name: "divi",
        icon: divi,
    },
];
//WORK EXPERIENCE
const experiences = [
    {
        title: "Freelance Developer",
        company_name: "Offworld",
        icon: offworld,
        iconBg: "#000000",
        date: "Mar 2020 - Present",
        points: [
            "Successfully designed and developed websites for small businesses, resulting in a 30% increase in website traffic and a 20% increase in customer engagement.",

            "Demonstrated strong collaboration and communication skills by working with clients to identify and gather website requirements using Agile methodology and industry best practices.",

            "Proactively identified and fixed website problems, including broken links, typographical errors, and formatting issues, resulting in a 25% increase in website usability and user satisfaction.",

            "Consistently demonstrated attention to detail and quality assurance, ensuring all websites were delivered on time and within budget.",
        ],
    },
    {
        title: "Short-Term Rental Host",
        company_name: "Airbnb",
        icon: airbnb,
        iconBg: "#c5f5f9",
        date: "2014 - 2015",
        points: [
            "Demonstrated customer focus and attention to detail, resulting in a 20 % decrease in support requests due to user - friendly documentation and maintaining a 95 % satisfaction rating from guests.",
            "Managed inventory with precision, resulting in a 10% reduction in inventory costs, 98% inventory accuracy, and a 20% increase in sales revenue through successful sales of in-suite products to guests.",
            "Proficient in working with home electronics and smart home technology, successfully installing and configuring over 50 devices for clients, developing an IoT training program for staff members resulting in a 30% reduction in support tickets, and implementing remote monitoring and troubleshooting systems that reduced service calls by 25%.",
            "Clear and concise communication skills, both written and verbal, resulting in a 90% improvement in staff understanding of company policies and procedures, consistently positive feedback from clients and customers, and a 25% reduction in email response times through implementing new email management processes.",
        ],
    },
    {
        title: "Transportation Communication Specialist",
        company_name: "VIA Rail Canada Inc.",
        icon: viarail,
        iconBg: "#2d3480",
        date: "Mar 2001 - Aug 2022",
        points: [
            "Demonstrated ability to handle complex situations and manage safety concerns as On-train Attendant and Communications Operator at VIA Rail Canada, serving over 500 passengers daily and ensuring compliance with company policies and federal regulations.",

            "Managed inventory, tracking lost luggage, and coordinated staff between several departments, showcasing critical thinking and decision - making skills.Reduced inventory errors by 20 % and recovered 95 % of lost luggage within 24 hours.",

            "Effectively managed projects and time by boarding passengers in a timely manner, managing station announcements, and producing reports for train on- time performance.Achieved an average of 98 % on - time departure rate and received positive feedback from passengers and supervisors for clear and accurate announcements.",

            "Developed strong interpersonal skills through experience in providing food and alcohol service, selling food and beverages, assisting persons with disabilities and elderly passengers, and verifying tickets and passenger needs.Increased sales revenue by 15 %, maintained a 100 % customer satisfaction rating and received recognition for excellence in service from VIA Rail Canada.",
        ],
    },
];
//TESTIMONIALS
const testimonials = [
    {
        testimonial:
            "Dennis is an excellent teammate. He has the ability to transfer a problem solving technique from one domain or technology to another. He writes well structured and navigable code and is always willing to help debug. He would be an asset on any team.",
        name: "Abdalla Jama",
        designation: "Classmate",
        company: "University of Toronto",
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
        name: "Dr Jason Loken",
        description:
            "Updated and improved the website by refreshing content, fixing broken links, and enhancing visual elements.",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
            {
                name: "PHP",
                color: "green-text-gradient",
            },
            {
                name: "Advanced Custom Fields",
                color: "pink-text-gradient",
            },
        ],
        image: drjasonloken,
        source_code_link: "https://drjasonloken.com/",
    },
    {
        name: "Retired Women Teachers of Ontario",
        description:
            "Updated and improved the website by refreshing content, fixing broken links, making changes to the PHP, and enhancing visual elements.",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
            {
                name: "PHP",
                color: "green-text-gradient",
            },
            {
                name: "Advanced Custom Fields",
                color: "pink-text-gradient",
            },
        ],
        image: rwto,
        source_code_link: "https://rwto.org/",
    },
    {
        name: "Taqueria La Union",
        description:
            "restaurant web application that enables users to view menus and place food orders online. This project aimed to provide a convenient and efficient solution for ordering needs, with an intuitive interface allowing users to easily browse menus and complete transactions securely. Leveraging my skills in web development and user experience design, I created a seamless online ordering experience for customers, while implementing robust back-end systems to support restaurant operations.",
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
        source_code_link: "https://taquerialaunion.mx",
    },
    {
        name: "Livelihood Kitchen",
        description:
            "web application that enables users to easily subscribe to a food delivery service. The platform is designed to make it easy for busy individuals to receive healthy and delicious meals based on their dietary needs and preferences. Leveraging my expertise in web development and user experience design, I created an intuitive and user-friendly platform with robust back-end systems to manage orders, inventory, and delivery logistics.",
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
        source_code_link: "https://livelihoodkitchen.com",
    },
    {
        name: "Tashan Events",
        description:
            "LGBTQ+ Bollywood events platform that allows users to book tickets for events and view Instagram feeds. The platform is designed to provide an all-in-one solution for users looking to discover, book, and engage with events in their area. Leveraging my skills in web development and user experience design, I created a user-friendly platform with seamless ticketing and social media integration.",
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
        source_code_link: "https://tashanevents.ca",
    },
    {
        name: "Pet Playdate",
        description:
            "Web application that enables users to schedule playdates for their pets. The platform is designed to provide a convenient solution for pet owners looking to socialize their pets. Leveraging my expertise in web development and user experience design, I created an intuitive and user-friendly platform that allows users to easily schedule playdates with other pet owners.",
        tags: [
            {
                name: "ExpressJS",
                color: "blue-text-gradient",
            },
            {
                name: "mySQL",
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
            "Web application that utilizes geolocation to find the nearest airport and serviced destinations, providing fare matrix information. The platform is designed to provide a convenient solution for users looking to find the best travel options based on their location. Leveraging my skills in web development and geolocation technology, I created an intuitive and user-friendly platform with a comprehensive fare matrix to help users make informed travel decisions.",
        tags: [
            {
                name: "HTML/CSS",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "AmadeusAPI",
                color: "pink-text-gradient",
            },
        ],
        image: flyteChecker,
        source_code_link: "https://dlittlefield81.github.io/FlytCheckr/",
    },
    {
        name: "React Portfolio",
        description:
            "First version of my portfolio using ReactJS and SwiperJS, along with MaterialUI. Included Tawk.TO Chat functionality and earlier projects",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "SwiperJS",
                color: "green-text-gradient",
            },
            {
                name: "MaterialUI",
                color: "pink-text-gradient",
            },
        ],
        image: reactportfolio,
        source_code_link: "https://github.com/DLittlefield81/reactportfolio",
    },
// INSERT BLOCK HERE
    {
        name: "WeatherWorks",
        description:
            "WeatherWorks is your ticket to getting your day off to a good start! Enter your city and we'll tell you your current forecast as well as the next 5. We'll even tell you if you should put on sunscreen with our new UV index with color advisor!",
        tags: [
            {
                name: "HTML/CSS",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "OpenWeatherAPI",
                color: "pink-text-gradient",
            },
        ],
        image: WeatherWorks,
        source_code_link: "https://github.com/DLittlefield81/WeatherWorks",
    },

    {
        name: "Horiseon",
        description:
            "Refactor an existing site to make it more accessible using semantic HTML elements. ",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
        ],
        image: horiseon,
        source_code_link: "https://github.com/DLittlefield81/horiseon-web",
    },
    {
        name: "Interrobang Auction House",
        description: "Fullstack application for an auction house utilizing React, MongoDB, SwiperJS, Cloudinary and Material UI, ",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Material UI",
                color: "pink-text-gradient",
            },
        ],
        image: interrobang,
        source_code_link: "https://github.com/DLittlefield81/Interrobang-Auction-House",
    },
    {
        name: "JATE - Just another text editor",
        description:
            "Text editor developing PWA fundementals",
        tags: [
            {
                name: "PWA",
                color: "blue-text-gradient",
            },
            {
                name: "Webpack",
                color: "green-text-gradient",
            },
        ],
        image: jate,
        source_code_link: "https://github.com/DLittlefield81/TextEditor",
    },
    {
        name: "Smart Planner",
        description: "Smart planner utilizes local storage to save events for your day",
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
        image: smartplanner,
        source_code_link: "https://github.com/DLittlefield81/SmartPlanner",
    },
    {
        name: "Team Profile Generator",
        description:
            "This node app will request staff information using inquirer and out put an HTML page displaying all the members of a set team.",
        tags: [
            {
                name: "HTML/CSS",
                color: "blue-text-gradient",
            },
            {
                name: "NodeJS",
                color: "green-text-gradient",
            },
            {
                name: "JEST",
                color: "pink-text-gradient",
            },
        ],
        image: TeamProfileGenerator,
        source_code_link: "https://github.com/DLittlefield81/TeamProfileGenerator",
    },
    {
        name: "Tech Blog",
        description:
            "CRUD application which allows users to create accounts, and add edit delete posts they have created. ",
        tags: [
            {
                name: "HTML/CSS",
                color: "blue-text-gradient",
            },
            {
                name: "ExpressJS",
                color: "green-text-gradient",
            },
            {
                name: "mySQL",
                color: "pink-text-gradient",
            },
        ],
        image: techblog,
        source_code_link: "https://github.com/DLittlefield81/TechBlog",
    },
    {
        name: "Campos Lab | SickKids Hospital",
        description:
            "The Campos Lab website is a platform that showcases the research and findings of the SickKids Campos Lab, a team of scientists focused on epigenetics. The website provides an extensive collection of information and resources related to epigenetics, including research papers, presentations, and data analysis tools.",
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
        source_code_link: "https://lab.research.sickkids.ca/campos/",
    },
    {
        name: "Adventure Essentials",
        description:
            "WooCommerce website that employs the use of dropshipping and email campaigns. The website is designed to enable businesses to sell products without holding inventory, as well as automate email marketing campaigns to increase sales and customer engagement. ",
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

// Games
const games = [
       {
        name: "Axe Quest: Conquer the Castle",
        description:
            "Embark on a thrilling adventure in Axe Quest, the ultimate multi-room platformer! Prepare to immerse yourself in a world of epic challenges, utilizing collision blocks and detection, while showcasing your prowess with an axe. As a masterfully designed game, entirely written in JavaScript and featuring modularized code, Axe Quest offers an unforgettable gaming experience.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "Canvas",
                color: "green-text-gradient",
            },
        ],
        image: axeQuest,
        source_code_link: "https://tempestgames.offworldportal.ca/platform-game-js/",
    },
    {
        name: "Cube Jumper",
        description:
            "In this thrilling ThreeJS game, you control a nimble green cube as it navigates through a chaotic environment filled with menacing red cubes. Your objective is to skillfully evade the relentless pursuit of the red cubes, testing your agility and reflexes to the limit. Can you guide the green cube to safety?",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "ThreeJS",
                color: "green-text-gradient",
            },
        ],
        image: cubejumper,
        source_code_link: "https://tempestgames.offworldportal.ca/3d-game/",
    },
    {
        name: "WordWise",
        description:
            "Get ready for an exhilarating challenge with WordWise Trivia Game! Put your Javascript knowledge to the ultimate test as you tackle multiple-choice questions against the ticking countdown timer, adding a thrilling sense of urgency. Stay sharp and avoid the pitfalls of wrong answers, as every second counts in this adrenaline-pumping quest for trivia mastery!",
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
        source_code_link: "https://dlittlefield81.github.io/WordWise/",
    },
]


export { services, technologies, experiences, testimonials, projects, games };