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
    credentialId: 'Yoshida_14_',
    link: 'https://www.freecodecamp.org/certification/Yoshida_14_/data-analysis-with-python-v7'
  },
  {
    id: 'cert2',
    title: 'Python and Flask Demonstrations Practice Course',
    issuer: 'Udemy',
    date: 'Mar 2025',
    credentialId: 'UC-58f15859-70af-4150-9670-1abb62de1924',
    link: 'https://www.udemy.com/certificate/UC-58f15859-70af-4150-9670-1abb62de1924/'
  },
  {
    id: 'cert3',
    title: 'Entrepreneurship',
    issuer: 'Udemy',
    date: 'Feb 2025',
    credentialId: 'UC-750094b8-77f5-4be1-b042-8ed0dd1d4e07',
    link: 'https://www.udemy.com/certificate/UC-750094b8-77f5-4be1-b042-8ed0dd1d4e07/'
  },
  {
    id: 'cert4',
    title: 'Legacy JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'Dec 2022',
    credentialId: 'Yoshida_14_',
    link: 'https://www.freecodecamp.org/certification/Yoshida_14_/javascript-algorithms-and-data-structures'
  },
  {
    id: 'cert5',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Dec 2022',
    credentialId: 'Yoshida_14_',
    link: 'https://www.freecodecamp.org/certification/Yoshida_14_/responsive-web-design'
  },
  {
    id: 'cert6',
    title: 'Scientific Computing with Python',
    issuer: 'freeCodeCamp',
    date: 'Dec 2022',
    credentialId: 'Yoshida_14_',
    link: 'https://www.freecodecamp.org/certification/Yoshida_14_/scientific-computing-with-python-v7'
  },
  {
    id: 'cert7',
    title: 'HackTrax Participation',
    issuer: 'HackTrax',
    date: 'Mar 2024',
    link: 'https://media.discordapp.net/attachments/1345363641993793569/1370322664178061413/Nitish_Saravanan1.png?ex=681f13ee&is=681dc26e&hm=af66794b420faf08e35b61b47515e13d35a944d321123b040d066d2f6774fcca&=&format=webp&quality=lossless&width=899&height=635'
  },
  {
    id: 'cert8',
    title: 'HackRush Participation',
    issuer: 'HackRush',
    date: 'Mar 2024',
    link: 'https://media.discordapp.net/attachments/1345363641993793569/1370322982240784444/1729686582765.png?ex=681f143a&is=681dc2ba&hm=1842116c0aaa91bfd288f7fbc6c28a8483491d43d4602790f52786d7ae550bd0&=&format=webp&quality=lossless&width=899&height=635'
  },
  {
    id: 'cert9',
    title: 'Cyber Jagrukta Divas',
    issuer: 'Cyber Security',
    date: 'Feb 2024',
    link: 'https://media.discordapp.net/attachments/1345363641993793569/1370323496701267978/1738942459666.png?ex=681f14b4&is=681dc334&hm=77f33f225cc882da6b7c322b1ed7ae931313e9c6a6c00401468b3d055716196b&=&format=webp&quality=lossless&width=899&height=635'
  },
  {
    id: 'cert10',
    title: 'Executive Member',
    issuer: 'Global Tamil Awards',
    date: 'Jan 2024'
  }
];

export const projects: Project[] = [
  {
    id: 'proj12',
    title: 'AwardX',
    description: 'A comprehensive award management software designed to provide premium features at an affordable price, challenging expensive and lower-quality alternatives.',
    technologies: ['React', 'Node.js', 'Express', 'Supabase', 'Twilio', 'Resend', 'Google Auth'],
    link: 'https://awardx.one',
    featured: true,
  },
  {
    id: 'proj13',
    title: 'Franchify',
    description: 'A brokerage-free platform connecting franchisors and franchisees, streamlining business opportunities with a modern tech stack.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'Twilio', 'Resend', 'Google Auth'],
    link: 'https://franchify.one',
    featured: true,
  },
  {
    id: 'proj14',
    title: 'Paperplane',
    description: 'An automated printing solution with integrated payment gateways and a custom Java library to eliminate long queues and streamline the printing process.',
    technologies: ['React', 'Node.js', 'Express', 'Supabase', 'Flutter', 'Twilio', 'Resend', 'Google Auth'],
    featured: true,
  },
  {
    id: 'proj15',
    title: 'Global Tamil Awards',
    description: 'A prestigious forum providing international validation for the Tamil community, built with a modern, feature-rich tech stack.',
    technologies: ['React', 'Supabase', 'Twilio', 'Resend'],
    link: 'https://globaltamilawards.com',
    featured: true,
  },
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
