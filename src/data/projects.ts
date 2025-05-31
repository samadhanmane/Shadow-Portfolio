import BookMyHall1 from '../assets/BookMyHall1.png';
import BookMyHall2 from '../assets/BookMyHall2.png';
import BookMyHall3 from '../assets/BookMyHall3.png';
import BookMyHall4 from '../assets/BookMyHall4.png';
import BookMyHall5 from '../assets/BookMyHall5.png';
import Skillify1 from '../assets/skillify1.png';
import Skillify2 from '../assets/skillify2.png';
import Skillify3 from '../assets/skillify3.png';
import Skillify4 from '../assets/skillify4.png';
import Skillify5 from '../assets/skillify5.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
  images?: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    features: string[];
  };
  collaborators: {
    name: string;
    role: string;
  }[];
  challenges: string[];
  solutions: string[];
  impact?: {
    business: string[];
    technical: string[];
  };
  references?: {
    title: string;
    author: string;
    url: string;
  }[];
  documents?: {
    title: string;
    type: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'bookmyhall',
    title: 'BookMyHall',
    description: 'A comprehensive hall booking system with real-time availability, user and admin panels, and secure online payments.',
    longDescription: 'BookMyHall is a full-featured web application for booking event halls. It offers real-time availability, user authentication, booking management, and a powerful admin panel for hall owners. Built with the MERN stack and modern web technologies, it streamlines the process of finding and reserving venues for any occasion.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/SamadhanMane/BookMyHall',
    live: 'https://book-my-hall.vercel.app',
    image: BookMyHall1,
    images: [
      BookMyHall1,
      BookMyHall2,
      BookMyHall3,
      BookMyHall4,
      BookMyHall5,
    ],
    techStack: {
      frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB','cloudinary'],
      features: ['User Panel', 'Admin Panel', 'Real-time Booking', 'Email Notification']
    },
    collaborators: [
      { name: 'Samadhan Mane', role: 'Full Stack Developer' },
      { name: 'Chaitanya Retawade', role: 'Frontend Developer' },
      { name: 'Krishna Gadhave', role: 'UI/UX Designer' },
      { name: 'Vivek Borade', role: 'Frontend Developer' },
    ],
    challenges: [
      'Implementing real-time hall availability updates',
      'Designing a secure and intuitive admin panel',
      'Implementing an email notification system'
    ],
    solutions: [
      'Used WebSockets for real-time updates',
      'Built a role-based authentication and dashboard',
      'Integrated email services for notifications'
    ],
    impact: {
      business: [
        'Reduced manual booking errors and double-bookings',
        'Enabled digital management for traditional businesses'
      ],
      technical: [
        'Demonstrated scalable MERN stack architecture',
        'Implemented robust user and admin authentication',
        'Achieved high performance and reliability'
      ]
    }
  },
  {
    id: 'skillify',
    title: 'Skillify',
    description: 'Credential management platform with secure document handling and user authentication.',
    longDescription: 'Skillify is a modern web application that allows users to upload,manage, and share their certificates and skills securely. Built using Node.js, it integrates Firebase Authentication for secure logins and MongoDB Atlas for reliable document storage. The intuitive interface ensures a seamless user experience across all devices.',
    technologies: ['Node.js', 'TypeScript', 'TailwindCSS', 'MongoDB Atlas', 'Express.js'],
    github: 'https://github.com/samadhanmane/Skillify',
    live: 'https://skillify-phi.vercel.app',
    image: Skillify3,
    images: [
      Skillify2,
      Skillify3,
      Skillify1,
      Skillify4,
      Skillify5,
    ],
    techStack: {
      frontend: ['Node.js', 'TypeScript', 'TailwindCSS'],
      backend: ['Express.js', 'Node.js'],
      database: ['MongoDB Atlas','cloudinary'],
      features: ['Credential Management', 'Secure Authentication', 'Responsive Design']
    },
    collaborators: [
      { name: 'Samadhan Mane', role: 'Full Stack Developer' },
      { name: 'Sakshi Bhingarkar', role: 'AI/ML Developer' },
      { name: 'Vaishnavi Thorave', role: 'UI/UX Designer' },
      { name: 'Chaitanya Retawade', role: 'Frontend Developer' },
    ],
    challenges: [
      'Implementing secure and scalable user authentication',
      'Ensuring safe upload and management of credentials'
    ],
    solutions: [
      'Integrated Authentication for secure login and user management',
      'Used MongoDB Atlas with Mongoose for reliable and structured data storage'
    ],
    
    
  },
  
]; 