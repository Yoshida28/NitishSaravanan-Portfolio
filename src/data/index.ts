import { Project, Certification, Skill, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Flutter', category: 'mobile' },
  { name: 'Supabase', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'React', category: 'frontend' },
  { name: 'SQL', category: 'backend' },
  { name: 'AutoCAD', category: 'design' },
  { name: 'PCB Designing', category: 'design' },
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
];

export const certifications: Certification[] = [
  {
    id: 'cert1',
    title: 'Data Analysis with Python',
    issuer: 'freeCodeCamp',
    date: 'Mar 2025',
    credentialId: 'yoshida_14_-dawp',
  },
  {
    id: 'cert2',
    title: 'Python and Flask Demonstrations Practice Course',
    issuer: 'Udemy',
    date: 'Mar 2025',
  },
  {
    id: 'cert3',
    title: 'Entrepreneurship',
    issuer: 'Udemy',
    date: 'Feb 2025',
  },
  {
    id: 'cert4',
    title: 'Legacy JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'Dec 2022',
    credentialId: 'yoshida_14_-ljaads',
  },
  {
    id: 'cert5',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Dec 2022',
    credentialId: 'yoshida_14_-rwd',
  },
  {
    id: 'cert6',
    title: 'Scientific Computing with Python',
    issuer: 'freeCodeCamp',
    date: 'Dec 2022',
    credentialId: 'yoshida_14_-scwp',
  },
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'BLE Attendance System',
    description: 'Smart classroom attendance management system using Bluetooth geofencing and biometric verification.',
    technologies: ['Bluetooth LE', 'Flutter', 'Firebase'],
    featured: true,
  },
  {
    id: 'proj2',
    title: 'Medical Analyser',
    description: 'AI-powered medical report and record management tool.',
    technologies: ['Python', 'TensorFlow', 'React'],
    featured: true,
  },
  {
    id: 'proj3',
    title: 'Grade Report Generator',
    description: 'Automated student grade report generator with graphical analysis.',
    technologies: ['Python', 'Matplotlib', 'Flask'],
  },
  {
    id: 'proj4',
    title: 'AI Study Assistant',
    description: 'AI-based academic assistant providing instant answers, notes, and concept explanations.',
    technologies: ['TypeScript', 'Next.js', 'OpenAI API'],
    featured: true,
  },
  {
    id: 'proj5',
    title: 'Budget Tracker',
    description: 'Personal finance and expense management app with analytics.',
    technologies: ['React', 'Firebase', 'Chart.js'],
  },
  {
    id: 'proj6',
    title: 'Crypto Analyser',
    description: 'AI-powered crypto market analysis platform with multi-model predictions.',
    technologies: ['TypeScript', 'React', 'Python', 'TensorFlow'],
  },
  {
    id: 'proj7',
    title: 'SRM Support System',
    description: 'A support hub platform for SRMIST students.',
    technologies: ['Next.js', 'TypeScript', 'Supabase'],
    link: '#',
  },
  {
    id: 'proj8',
    title: 'Thuraga Motors',
    description: 'Official website for an EV brand with scroll animations and product showcase.',
    technologies: ['React', 'GSAP', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 'proj9',
    title: 'Sekkot Engineering',
    description: 'Corporate website for an engineering export firm.',
    technologies: ['Next.js', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 'proj10',
    title: 'Survey App',
    description: 'Mobile-first app for surveys and data collection.',
    technologies: ['Flutter', 'Firebase'],
  },
  {
    id: 'proj11',
    title: 'Fitness Website',
    description: 'Responsive web platform for workout plans, blogs, and fitness tips.',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
];

export const aboutMe = {
  description: "I'm a passionate developer with a knack for building innovative, scalable, and user-centric digital experiences. With a strong foundation in cross-platform development, web technologies, and hardware integration, I enjoy turning ambitious ideas into polished products. From BLE-based attendance systems to AI-powered crypto analyzers and enterprise-grade support platforms, I've built diverse solutions that solve real-world problems. Currently, I serve as the Technical Co-Lead at IEEE-GRSS and Technical Associate at Thuraga Motors, contributing to product development and tech strategies. I'm driven by curiosity, coffee, and a love for elegant, efficient code.",
  roles: [
    'Technical Co-Lead at IEEE-GRSS',
    'Technical Associate at Thuraga Motors'
  ],
  name: 'Nitish Saravanan',
  title: 'Full Stack Developer',
  location: 'Chennai, India',
  email: 'nitishsaravanan63@gmail.com',
  phone: '+91 9342782845',
  socials: {
    github: 'https://github.com/Yoshida28',
    linkedin: 'https://www.linkedin.com/in/nitish-saravanan-64a877305/',
    twitter: 'https://twitter.com'
  }
};
