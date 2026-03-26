import { GoogleGenAI } from "@google/genai";
import logoImage from './images/lgo1st-removebg-preview.png';

const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
export const ai = geminiApiKey && geminiApiKey.trim() ? new GoogleGenAI({ apiKey: geminiApiKey }) : null;

export const LOGO_URL = logoImage;

export const courses = [
  {
    id: "c-cpp",
    name: "C & C++ Programming",
    description: "Master the fundamentals of programming with C and C++. Perfect for building a strong foundation.",
    details: "This course covers everything from basic syntax to advanced memory management. You will learn about pointers, structures, file handling, and Object-Oriented Programming (OOP) principles in C++. By the end, you'll be able to build complex console applications.",
    duration: "3 Months",
    fees: "₹2,500",
    icon: "Code2"
  },
  {
    id: "python",
    name: "Python Development",
    description: "Learn Python from scratch to advanced levels. Covers automation, data science basics, and web development.",
    details: "Python is the most versatile language today. This course includes Python basics, data structures, decorators, generators, and modules like NumPy and Pandas for data science. We also cover web scraping and building APIs with Flask.",
    duration: "3 Months",
    fees: "₹3,500",
    icon: "Terminal"
  },
  {
    id: "java",
    name: "Java Full Stack",
    description: "Comprehensive Java training including Core Java, Advanced Java, and Spring Boot framework.",
    details: "Become a professional Java developer. This course covers Core Java, JDBC, Servlets, JSP, and the Spring Boot framework. You'll learn how to build enterprise-grade applications with a focus on microservices architecture.",
    duration: "4 Months",
    fees: "₹5,000",
    icon: "Coffee"
  },
  {
    id: "react-next",
    name: "React.js & Next.js",
    description: "Modern frontend development with React and Next.js. Build high-performance web applications.",
    details: "Master modern frontend development. Learn React hooks, context API, state management with Redux, and server-side rendering with Next.js. We'll build real-world projects like an e-commerce dashboard and a social media clone.",
    duration: "2 Months",
    fees: "₹4,500",
    icon: "Layers"
  },
  {
    id: "php-laravel",
    name: "PHP & Laravel",
    description: "Backend development with PHP and the powerful Laravel framework for robust web apps.",
    details: "Laravel is the PHP framework for web artisans. This course covers PHP basics, MVC architecture, Eloquent ORM, migrations, and building secure authentication systems. You'll build a complete CMS from scratch.",
    duration: "3 Months",
    fees: "₹4,000",
    icon: "Database"
  },
  {
    id: "golang",
    name: "Go Lang",
    description: "Learn Google's Go language for high-performance backend systems and cloud-native apps.",
    details: "Go is designed for concurrency and scalability. Learn about goroutines, channels, interfaces, and building high-performance microservices. This course is ideal for developers looking to move into cloud-native development.",
    duration: "2 Months",
    fees: "₹5,000",
    icon: "Cpu"
  },
  {
    id: "web-design",
    name: "Crash Course (Web Designing)",
    description: "Quickly learn HTML, CSS, Bootstrap, and Tailwind CSS to design beautiful websites.",
    details: "A fast-paced course for creative minds. Master HTML5, CSS3, Flexbox, Grid, and utility-first CSS with Tailwind. You'll learn responsive design principles and how to convert Figma designs into pixel-perfect websites.",
    duration: "1 Month",
    fees: "₹2,000",
    icon: "Palette"
  },
  {
    id: "databases",
    name: "MySQL & MongoDB",
    description: "Master both SQL and NoSQL databases. Learn data modeling and complex querying.",
    details: "Data is the heart of every app. Learn relational database design with MySQL and document-based storage with MongoDB. We cover indexing, aggregation pipelines, and database optimization techniques.",
    duration: "1.5 Months",
    fees: "₹2,500",
    icon: "HardDrive"
  }
];

export const stats = [
  { label: "Students Trained", value: "5,000+", icon: "Users" },
  { label: "Courses Offered", value: "15+", icon: "BookOpen" },
  { label: "Success Rate", value: "98%", icon: "TrendingUp" },
  { label: "Years Experience", value: "10+", icon: "Award" }
];

export const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Software Engineer at TCS",
    content: "Ravi Sir's teaching style is unique. He makes complex C++ concepts so easy to understand. I owe my first job to Student IT Hub!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Rahul Verma",
    role: "Full Stack Developer",
    content: "The React.js course was a game-changer for me. The hands-on projects helped me build a portfolio that recruiters loved.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Priya Patel",
    role: "Python Developer",
    content: "I started as a complete beginner. Now I'm automating tasks at work using Python. Highly recommend Student IT Hub!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    title: "Modern Web Development",
    category: "Programming"
  },
  {
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
    title: "Clean Code Architecture",
    category: "Code"
  },
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
    title: "Full Stack Projects",
    category: "Project"
  },
  {
    url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=2031",
    title: "Advanced Algorithms",
    category: "Programming"
  },
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
    title: "Cyber Security Lab",
    category: "Technology"
  },
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020",
    title: "Future of Tech",
    category: "Innovation"
  }
];

export const faqs = [
  {
    question: "What is the teaching mode for the courses?",
    answer: "All our classes are conducted online through interactive virtual platforms. We provide live sessions where students can interact directly with Ravi Sir."
  },
  {
    question: "Do you provide recorded sessions if I miss a class?",
    answer: "Yes, all live sessions are recorded and made available to students in their dashboard for future reference and revision."
  },
  {
    question: "Are there any prerequisites for joining the courses?",
    answer: "Most of our foundation courses like C, C++, and Python don't require any prior programming knowledge. For advanced courses like React.js or Laravel, basic knowledge of HTML/CSS or PHP is recommended."
  },
  {
    question: "Do you offer placement assistance?",
    answer: "We provide industry-level training and work on real-time projects that help you build a strong portfolio. We also offer guidance on resume building and interview preparation."
  },
  {
    question: "How can I clear my doubts?",
    answer: "We have dedicated doubt-clearing sessions every week. Additionally, students can ask questions during live classes or use our community support group."
  },
  {
    question: "Is there a certificate provided after course completion?",
    answer: "Yes, upon successful completion of the course and projects, we provide a certificate from Student IT Hub signed by Ravi Sir."
  }
];
