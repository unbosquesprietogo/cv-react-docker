import adobeilsicon from "../../assets/icons/adobeilsicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import phpicon from "../../assets/icons/phpicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import mysqlicon from "../../assets/icons/mysqlicon.svg";
import sqlservericon from "../../assets/icons/sqlservericon.svg";
import cobolicon from "../../assets/icons/cobolicon.svg";
import postgresqlicon from "../../assets/icons/postgresqlicon.svg";
import intellijicon from "../../assets/icons/intellijicon.svg";
import jspicon from "../../assets/icons/jspicon.svg";
import amadeusicon from "../../assets/icons/amadeusicon.svg";
import shellicon from "../../assets/icons/shellicon.svg";
import unixicon from "../../assets/icons/unixicon.svg";
import callcentericon from "../../assets/icons/callcentericon.svg";
import svnicon from "../../assets/icons/svnicon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import oracleicon from "../../assets/icons/oracleicon.svg";
import oracleapexicon from "../../assets/icons/oracleapexicon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg";
import comunicacionicon from "../../assets/icons/comunicacionicon.svg";
import instorMockup from "../../assets/img/instor_mockup.webp";
import instorMockup2 from "../../assets/img/instor_mockup2.webp";
import indra from "../../assets/img/indra.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import springbooticon from "../../assets/icons/springbooticon.svg";
import scotiabank from "../../assets/img/scotiabank.webp";
import javaicon from "../../assets/icons/javaicon.svg";
import visualscicon from "../../assets/icons/visualscicon.svg";
import eclipseicon from "../../assets/icons/eclipseicon.svg";
import giticon from "../../assets/icons/giticon.svg";
import githubicon from "../../assets/icons/githubicon.svg";
import bitbucketicon from "../../assets/icons/bitbucketicon.svg";
import microserviciosicon from "../../assets/icons/microserviciosicon.svg";
import azureicon from "../../assets/icons/azureicon.svg";
import ntt from "../../assets/img/ntt.webp";
import cfc from "../../assets/img/cfc.webp";
import sena from "../../assets/img/sena.webp";
import unbosque from "../../assets/img/unbosque.webp";
import colombo from "../../assets/img/colombo.webp";
import gmmmc from "../../assets/img/gmmmc.webp";
import { GoHome, GoPerson, GoMail, GoStack, GoProject,GoBook } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail,FiDownload } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    es: "Hola, Soy Santiago",
    en: "Hi, I'm Santiago",
  },
  subtitle: "Junior Software Engineer",
  description: {
    es: "Soy Santiago Prieto, Estudiante de sexto semestre de Ingeniería de Sistemas en la Universidad El Bosque, tengo experiencia de un año como Desarrollador de Software en el area de medios de pago, amante de la tecnologia y la innovación...!",
    en: "I'm Santiago Prieto, a sixth semester student of Systems Engineering at El Bosque University, I have one year of experience as a Software Developer in the area of payment methods, a lover of technology and innovation...!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        es: "Contactame",
        en: "Contact me",
      },
      icon: FiMail,
      link: "",
      color: "main-btn",
    },
    {
      name: "Experience",
      label: {
        es: "Mis Proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      link: "https://github.com/unbosquesprietogo",
      color: "secondary-btn",
    },
    {
      name: "Curriculum Vitae",
      label: {
        es: "Descargar CV",
        en: "Download CV",
      },
      icon: FiDownload,
      link: "downloadCV",
      color: "main-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const experienceData = [
  {
    title: "Sitel: Octubre 2021- Febrero 2022:",
    title_EN: "Sitel: October 2021- February 2022:",
    job:"Agente Call-Center",
    job_EN:"Call-Center Agent",
    description:
      "Agente de Call-Center en Atención al Cliente para la campaña de Iberia, aerolínea de reconocimiento mundial, donde desempeñé habilidades como manejo y comuncicacion con un cliente, atención al usuario y comunicación asertiva. Aprendí a utilizar la aplicacion de Amadeus, herramienta muy utilizada en el sector del turismo y la aviación.",
    description_EN:
      "Call-Center Agent in Customer Service for the Iberia campaign, a world-renowned airline, where I performed skills such as talking to customers, customer service, and assertive communication. I learned to use the Amadeus tool, a tool which is widely used in the tourism and aviation sector.",
    technologies: [
      { name: "Amadeus", icon: amadeusicon },
      { name: "Servicio Al Cliente", icon: callcentericon },
      { name: "Comunicacion Asertiva", icon: comunicacionicon },

    ],
    image: instorMockup,
    image2: instorMockup2,
    deploymenturl: "https://foundever.com/es/",
    githuburl: "https://grupo.iberia.es/about_us",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Indra: Agosto 2022 - Julio 2023",
    title_EN: "Indra: August 2022 - July 2023",
    job:"Desarrollador de Software Jr",
    job_EN:"Junior Sofware Developer",
    description:
      "Como desarrollador de software Jr en Minsait Indra, formé parte de un emocionante proyecto de medios de pago con el Banco Scotiabank Colpatria. Mi enfoque principal se encontraba en el desarrollo del front-end utilizando JSP y Java , así como también en el desarrollo del back-end mediante servicios Cobol. Además, tenia la responsabilidad de trabajar con procesos shell de Unix y manejo de Bases de datos en Oracle SQL/PLSQL.",
    description_EN:
      "As a Jr software developer at Minsait Indra, I was part of an exciting payment methods project with Banco Scotiabank Colpatria. My main focus was on front-end development using JSP and Java, as well as back-end development using Cobol services. Additionally, he had the responsibility of working with Unix shell processes and database management in Oracle SQL / PLSQL.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "JSP", icon: jspicon },
      { name: "COBOL", icon: cobolicon },
      { name: "Java", icon: javaicon },
      { name: "Unix", icon: unixicon },
      { name: "Shell", icon: shellicon },
      { name: "Oracle", icon: oracleicon},
      { name: "SVN", icon: svnicon },
    ],
    image: indra,
    image2: scotiabank,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      experiencecolor: "#FFD5BD",
    },
  },
  {
    title: "NTT Data: Octubre de 2023 - Actualmente",
    title_EN: "NTT Data: October de 2023 - Now",
    job:"Junior Software Engineer",
    job_EN:"Junior Software Engineer",
    description:
      "Ingeniero de Software Junior en NTT Data, una de las mejores empresas a nivel mundial en servicios TI para el proyecto de App - Web de Crédito Fácil Codensa (CFC) en el area del back-end desarrollando microservicios con el framework de SpringBoot. Experiencia en Bases de datos como SQL Server y Oracle SQL.  Manejo de Git y Bitbucket como herramientas de control de versiones y repositorios. Tengo la responsabilidad de construir y desplegar aplicaciones en Azure y manejo de aplicaciones de Azure (como Azure SQL o Redis Cache) para el ambiente de desarrollo u pruebas.",
    description_EN:
      "Junior Software Engineer at NTT Data, one of the best companies in the world in IT services. for the Codensa Easy Credit App - Web (CFC) project in the back-end area developing microservices with the SpringBoot framework. Experience in Databases such as SQL Server and Oracle SQL. Management of Git and Bitbucket as version control and repositories tools. I have the responsibility of building and deploying applications in Azure and managing Azure applications (such as Azure SQL or Redis Cache) for the development or testing environment.",
    technologies: [
      { name: "SpringBoot", icon: springbooticon },
      { name: "Java", icon: javaicon },
      { name: "Micro-Servicios", icon: microserviciosicon },
      { name: "Azure", icon: azureicon },
      { name: "JWT & OAuht2", icon: jwticon },
      { name: "Oracle", icon: oracleicon},
      { name: "SQL Server", icon: sqlservericon },
      { name: "Git", icon: giticon},
      { name: "Bitbucket", icon: bitbucketicon },

    ],
    image: ntt,
    image2: cfc,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    es: "Mas proyectos en GitHub",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },

    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe Ilustrator",
        hash: "#Adobe Ilustrator",
        icon: adobeilsicon,
        color: "#FEAA2B",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataIDE = [
  {
    
    skillsTitle: "IDE'S",
    skills: [
      {
        title: "Visual Studio Code",
        hash: "#VSC",
        icon: visualscicon,
        color: "#2DA2F1",
      },
      { title: "IntelliJ", 
      hash: "#IntelliJ", 
      icon: intellijicon, 
      color: "#107CF2" 
    },
    { title: "Eclipse", 
      hash: "#Eclipse", 
      icon: eclipseicon, 
      color: "#F4AC57" 
    },
    ],
  },
] as const;

export const skillsDataRepositories = [
  {
    skillsTitle: "Repositories",
    skills: [
      { title: "Git",
        hash: "#Git",
        icon: giticon,
        color: "#EE513B" },
      {
        title: "GitHub",
        hash: "#GitHub",
        icon: githubicon,
        color: "#3E75C3",
      },
      { title: "Bitbucket",
        hash: "#Bitbucket",
        icon: bitbucketicon,
        color: "#1B76F1" },
    ],
  },
] as const;

export const skillsDataBD = [
  {
    skillsTitle: "Databases",
    skills: [
    { title: "Oracle PL-SQL/SQL", 
      hash: "#Oracle PL-SQL/SQL", 
      icon: oracleicon, 
      color: "#EA2128" 
    },
    { title: "PostgreSQL", 
      hash: "#PostgreSQL", 
      icon: postgresqlicon, 
      color: "#336791" 
    },
    { title: "MySQL", 
      hash: "#MySQL", 
      icon: mysqlicon, 
      color: "#01628A" 
    },
    ],
  },
] as const;

export const skillsDataBackend = [
  {
    skillsTitle: "Back-End",
    skills: [
      { title: "Java",
        hash: "#Java",
        icon: javaicon, 
        color: "#F24E1E" },
      {
        title: "SpringBoot",
        hash: "#SpringBoot",
        icon: springbooticon,
        color: "#34A853",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#35668F",
      },
      {
        title: "php",
        hash: "#php",
        icon: phpicon,
        color: "#6181B6",
        
      },
      { title: "COBOL", 
        hash: "#COBOL", 
        icon: cobolicon, 
        color: "#005CA5" 
      },
      { title: "Oracle Apex", 
        hash: "#Oracle Apex", 
        icon: oracleapexicon, 
        color: "#EE7B6E" 
      },
    
    ],
  },
] as const;


export const navLinks = [
  { es: "Inicio", en: "Home", hash: "#home", icon: GoHome },
  { es: "Habilidades", en: "Skills", hash: "#skills", icon: GoStack },
  { es: "Experiencia", en: "Experience", hash: "#experience", icon: GoProject },
  { es: "Estudios", en: "Studies", hash: "#studies", icon: GoBook },
  { es: "Sobre mi", en: "About me", hash: "#about-me", icon: GoPerson },
  { es: "Contacto", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { es: "Imprimir", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { es: "Privacidad", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:sanpri2003@gmail.com",
  text: "sanpri2003@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/sanpri2003/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/unbosquesprietogo",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:sanpri2003@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    es: '"No es nada importante hacerlo bien la primera vez. Es de vital importancia hacerlo bien la última vez."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    es: '"La web es como un lienzo y el código es la pintura. Crea tu obra maestra."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Sobre mi",
  title_EN: "About me",
  description: "Algunos fragmentos de código sobre mí",
  description_EN: "A few code snippets about me",
  paragraphs_ES: [
    {
      title: "Hablando de Codigo...",
      description:
        "Habilidades técnicas y de software, conocimientos en programación JAVA orientada a objetos, desarrollo web Front-end (HTML, CSS, JavaScript) y Backend en JAVA EE y SpringBoot, manejo básico de servidores Unix, programación Shell Linux, conocimiento en Git y GitHub",
      icon: hardwareicon,
    },
    {
      title: "¿Quién soy yo?...",
      description:
        "Cualificado como una persona comunicativa, con liderazgo y habilidades de trabajar en equipo, capacidad para desarrollar nuevas alternativas con eficiencia, eficacia y valores éticos como honestidad, responsabilidad y cumplimiento.",
      icon: caricon,
    },
    {
      title: "Disponible para viajar...",
      description:
        "Mi flexibilidad y disposición para desplazarme a diferentes ubicaciones son una extensión natural de mi compromiso con el éxito de los proyectos y la colaboración efectiva. ",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Speaking of Code...",
      description:
        "Technical and software skills, knowledge of object-oriented JAVA programming, Front-end web development (HTML, CSS, JavaScript) and Backend in JAVA EE and SpringBoot, basic handling of Unix servers, Linux Shell programming, knowledge of Git and GitHub.",
      icon: hardwareicon,
    },
    {
      title: "Who I am?...",
      description:
        "Who am I?...Qualified as a communicative person, with leadership and teamwork skills, ability to develop new alternatives with efficiency, effectiveness and ethical values such as honesty, responsibility and compliance.",
      icon: caricon,
    },
    {
      title: "Available to travel...",
      description:
        "My flexibility and willingness to move to different locations are a natural extension of my commitment to project success and effective collaboration.",
      icon: travelicon,
    },
  ],
};

export const studies = {
  title: "Estudios",
  title_EN: "Studies",
  description: "Cada logro comienza con la decisión de intentarlo",
  description_EN: "Every achievement begins with the decision to try",
  paragraphs_ES: [
    {
      title: "GMMMC - 2015-2020",
      description:
        "Bachillerato, Educación Básica, Bogotá D.C.",
      icon: hardwareicon,
      image: gmmmc,
    },
    {
      title: "SENA - 2020",
      description:
        "Curso - Manejo de Herramientas Excel, Bogotá D.C.",
      icon: hardwareicon,
      image: sena,
    },
    {
      title: "Centro Colombo Americano - 2018-2020",
      description:
        "Curso de Ingles, Lenguaje (B1), Bogotá D.C.",
      icon: hardwareicon,
      image: colombo,
    },
    {
      title: "Universidad El Bosque 2021-Actualmente",
      description:
        "Ingeniería de Sistemas, Facultad de Ingeniería. ",
      icon: hardwareicon,
      image: unbosque,
    },
  ],
  paragraphs_EN: [
    {
      title: "GMMMC - 2015-2020",
      description:
        " High School, Basic education, Bogota D.C.",
        icon: hardwareicon,
        image: gmmmc,
    },
    {
      title: "SENA - 2020",
      description:
        "Course - Use of Excel Tools, Bogotá D.C.",
        icon: hardwareicon,
        image: sena,
    },
    {
      title: "Centro Colombo Americano - 2018-2020",
      description:
        "English Course, Language (B1), Bogota D.C.",
        icon: hardwareicon,
        image: colombo,
    },
    {
      title: "Universidad El Bosque 2021-Now",
      description:
        "Systems Engineering, Faculty of Engineering, Bogota D.C.",
        icon: hardwareicon,
        image: unbosque,
    },
  ],
};

export const contactData = {
  title: {
    es: "Contacto",
    en: "Contact",
  },
  description: {
    es: "Escríbeme un mensaje y me comunicaré contigo.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        es: "Tu nombre",
        en: "Your Name",
      },
      type: "text",
      validation: {
        es: "Por favor, pon tu nombre",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        es: "Tu E-Mail",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        es: "Por favor, pon tu email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        es: "Tu Asunto",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        es: "Por favor, pon tu asunto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      es: "Tu mensaje",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      es: "Por favor, pon tu mensaje",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      es: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      es: "Acepto que Santiago pueda utilizar mis datos personales (nombre y dirección de correo electrónico) para contactarme.",
      en: "I agree that Santiago may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      es: "Al enviar esta solicitud, usted reconoce que ha leído la Política de Privacidad",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingExperience: {
    es: "🦄 Al enviar esta solicitud, reconoce que ha leído la Política de privacidad. La demostración en vivo se abrirá en breve. Iniciando servidores...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    es: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    es: "🦄 Gracias por su correo electrónico. Me comunicaré contigo lo antes posible",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    es: "Por favor, pon tu nombre",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    es: "ES",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
