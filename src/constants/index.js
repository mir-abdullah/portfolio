/* eslint-disable no-unused-vars */
import {
 
    backend,
    creator,
    web,
    javascript,
 
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    next,
    
  } from "../assets";
  import p2 from '../assets/p2.png'
  import p3 from '../assets/p3.png'
  import p4 from '../assets/p4.png'


  
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
   
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
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
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      name: "git",
      icon: git,
    },
    {
      name:'Next JS',
      icon:next

    }
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company_name: "Texinity Technologies",
      icon: tesla,
      iconBg: "#383E56",
      date: "july 2024 - sep-2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with other members to create a product of the Company",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    // {
    //   title: "Freelancing",
    //   company_name: "",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "sep 2023 - present",
    //   points: [
    //     "Developed web application for clients.",
    //     "Worked on multiple projects at the same time.",
    //     "Maintained a high level of quality in the work.",

        
    //   ],
    // },
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AceInterviews",
      description:
        "Web-based platform that allows users to prepare for their interviews with AI generated Feedback and insights into user's answer",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "machine learning",
          color: "yellow-text-gradient",
        },


      ],
      image: p2,
      source_code_link: "https://github.com/mir-abdullah",
    },
    {
      name: "Mind Mapping",
      description:
        "Web application that enables users to create mind mapsA mind mapping web application enables users to visually organize ideas, concepts, and relationships in a structured, intuitive manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-konva",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: p3,
      source_code_link: "https://github.com/mir-abdullah",
    },
    {
      name: "Dental Website",
      description:
        "A  dental website provideing an easy-to-navigate platform where potential patients can learn about a dental practice, its services, and how to book an appointment.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: p4,
      source_code_link: "https://github.com/mir-abdullah",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };