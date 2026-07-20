// Edit this file to update all your personal info, projects, skills, etc.
// Every component pulls its content from here.

export const profile = {
  name: 'Suraj Prakash',
  lastName: 'Singh',
  title: 'Full Stack Developer | MERN Stack',
  tagline:
    'I build responsive, secure, and user-friendly web applications using React.js, Node.js, Express.js, MongoDB, and modern JavaScript. As a passionate Full Stack Developer, I enjoy creating scalable and efficient solutions with clean, maintainable code while continuously learning new technologies and best practices.',
  email: 'prakashsinghsuraj69@gmail.com',
  phone: '9355430343',
  location: 'New Delhi, India',
  github: 'https://github.com/suraxj',
  linkedin: 'https://www.linkedin.com/in/surajsingh49/',
  resume: '/assets/resume.pdf',
  profileImage: '/assets/profile.jpg',
  aboutImage: '/assets/about.jpeg',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificate', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const infoCards = [
  { label: 'Name', value: 'Suraj Prakash Singh' },
  { label: 'Email', value: 'prakashsinghsuraj69@gmail.com' },
  { label: 'Role', value: 'Full Stack Developer' },
  { label: 'Location', value: 'New Delhi, India' },
  { label: 'Experience', value: 'Fresher' },
  { label: 'Availability', value: 'Open to opportunities' },
];

export const skillCategories = [
  {
    title: 'Frontend',
    text: 'HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Responsive Design',
  },
  {
    title: 'Backend',
    text: 'Node.js, Express.js, REST APIs, JWT Authentication, Middleware',
  },
  {
    title: 'Database',
    text: 'MongoDB, Mongoose, SQL, CRUD Operations, Data Modeling',
  },
  {
    title: 'Tools',
    text: 'Git, GitHub, VS Code, Postman, Vercel, Netlify, Render',
  },
];

export const tools = [
  { icon: 'fab fa-html5', color: 'text-orange-500', label: 'HTML' },
  { icon: 'fab fa-css3-alt', color: 'text-blue-500', label: 'CSS' },
  { icon: 'fab fa-js', color: 'text-yellow-400', label: 'JavaScript' },
  { icon: 'fab fa-react', color: 'text-blue-400', label: 'React' },
  { icon: 'fab fa-node-js', color: 'text-green-500', label: 'Node' },
  { icon: 'fas fa-server', color: 'text-slate-600', label: 'Express' },
  { icon: 'fas fa-database', color: 'text-green-600', label: 'MongoDB' },
  { icon: 'fas fa-database', color: 'text-sky-600', label: 'SQL' },
  { icon: 'fab fa-git-alt', color: 'text-orange-600', label: 'Git' },
  { icon: 'fab fa-github', color: 'text-slate-800', label: 'GitHub' },
];

export const projects = [
  {
    title: 'Learning Management System',
    image:
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1170&auto=format&fit=crop',
    description:
      'A complete MERN-based LMS where users can browse courses/books, manage learning resources, authenticate securely, and admins can manage content and users.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    demo: 'https://learning-management-system-frontend-alpha.vercel.app/',
    code: 'https://github.com/suraxj/Learning-management-system',
  },
  {
    title: 'Weather App',
    image:
      'https://images.unsplash.com/photo-1574780986957-74f4ee225b87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdlYXRoZXIlMjBmb3JlY2FzdHxlbnwwfHwwfHx8MA%3D%3D',
    description:
      'A weather forecast app that provides real-time weather information and predictions for various locations.',
    tech: ['React.js', 'Tailwind CSS', 'TypeScript', 'Open-Meteo APIs'],

    demo: 'https://weather-app-three-pi-66.vercel.app/',
    code: 'https://github.com/suraxj/Weather-App',
  },
  {
    title: 'Notes Management App',
    image:
      'https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?q=80&w=1170&auto=format&fit=crop',
    description:
      'A notes application with create, edit, delete, search, tags, pin, archive, and trash features, designed for managing personal notes efficiently.',
    tech: ['React.js', 'Tailwind CSS', 'LocalStorage'],
    demo: 'https://notes-app-46687e.netlify.app/',
    code: 'https://github.com/suraxj/Notes--App',
  },
];

export const certifications = [
  {
    title: 'GUVI Full Stack Development',
    text: 'Full Stack Development program completion certificate.',
    link: 'https://www.zenclass.in/certificateDownload/UnBMnfcDIoHD6Kz3',
  },
];
