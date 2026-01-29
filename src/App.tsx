import { useEffect, useState, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  ChevronRight,
  Send,
  Code2,
  Layers,
  Globe,
  X,
  Menu,
  Database,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Hardik_Sharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('CV downloaded successfully!');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0d1a0d]/90 backdrop-blur-xl border-b border-[#2a3a2a]/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-white font-['Space_Grotesk'] hover:text-[#9aba9a] transition-colors"
          >
            HS
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-[#a8b8a8] hover:text-white transition-colors text-sm">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-[#a8b8a8] hover:text-white transition-colors text-sm">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-[#a8b8a8] hover:text-white transition-colors text-sm">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-[#a8b8a8] hover:text-white transition-colors text-sm">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-[#a8b8a8] hover:text-white transition-colors text-sm">Contact</button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={handleDownloadCV}
              variant="ghost"
              className="text-[#a8b8a8] hover:text-white hover:bg-[#2a3a2a]/50"
            >
              <Download className="w-4 h-4 mr-2" />
              CV
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#9aba9a] hover:bg-[#8aaa8a] text-[#0d1a0d] rounded-full px-6 font-medium"
            >
              Get in touch
            </Button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1a0d]/95 backdrop-blur-xl border-b border-[#2a3a2a]/50">
          <div className="px-6 py-6 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-[#a8b8a8] hover:text-white py-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[#a8b8a8] hover:text-white py-2">About</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-[#a8b8a8] hover:text-white py-2">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-[#a8b8a8] hover:text-white py-2">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#a8b8a8] hover:text-white py-2">Contact</button>
            <Button 
              onClick={handleDownloadCV}
              className="w-full bg-[#9aba9a] hover:bg-[#8aaa8a] text-[#0d1a0d] rounded-full mt-4"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section with 3D Blobs - NO LOGO, Creative Element Instead
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0d1a0d]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a1a] via-[#0d1a0d] to-[#0d1a0d]" />
      
      {/* Floating 3D Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="/blob-1.png" alt="" className="absolute -top-20 -left-40 w-[600px] h-[600px] opacity-60 animate-blob-float-slow" style={{ animationDelay: '0s' }} />
        <img src="/blob-2.png" alt="" className="absolute top-20 -right-20 w-[400px] h-[400px] opacity-50 animate-blob-float" style={{ animationDelay: '2s' }} />
        <img src="/blob-3.png" alt="" className="absolute bottom-40 left-20 w-[250px] h-[250px] opacity-40 animate-blob-float-slow" style={{ animationDelay: '4s' }} />
        <img src="/blob-2.png" alt="" className="absolute -bottom-40 right-40 w-[500px] h-[500px] opacity-50 animate-blob-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center">
          {/* CREATIVE 3D ELEMENT - Floating Code Block */}
          <div className={`mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative inline-block">
              <div className="bg-[#1a2a1a]/80 backdrop-blur-sm border border-[#3a4a3a] rounded-2xl p-6 animate-platform-float shadow-2xl shadow-[#9aba9a]/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                </div>
                <code className="text-[#9aba9a] text-sm font-mono">
                  <span className="text-[#c586c0]">const</span>{' '}
                  <span className="text-[#9cdcfe]">developer</span>{' '}
                  <span className="text-white">=</span>{' '}
                  <span className="text-[#ce9178]">{'{'}</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-[#9cdcfe]">name</span>:{' '}
                  <span className="text-[#ce9178]">"Hardik Sharma"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-[#9cdcfe]">role</span>:{' '}
                  <span className="text-[#ce9178]">"Full Stack Developer"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-[#9cdcfe]">passion</span>:{' '}
                  <span className="text-[#ce9178]">"Building amazing things"</span>
                  <br />
                  <span className="text-[#ce9178]">{'}'}</span>
                </code>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[#9aba9a]/20 blur-3xl -z-10 rounded-full" />
            </div>
          </div>

          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Hi I am <span className="text-gradient">Hardik</span>,
            <br />
            <span className="text-[#9aba9a]">Full Stack Developer...</span>
          </h1>

          <p className={`text-lg text-[#a8b8a8] max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            I craft digital experiences that blend creativity with technical excellence. 
            Specializing in modern web technologies and scalable architectures.
          </p>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button onClick={() => scrollToSection('projects')} className="bg-[#9aba9a] hover:bg-[#8aaa8a] text-[#0d1a0d] rounded-full px-8 py-6 text-lg font-medium">
              View my work
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#6a8a6a] text-sm mb-6 uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'].map((tech, index) => (
                <span key={index} className="text-[#8a9a8a] text-sm font-medium">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#3a4a3a] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#9aba9a] rounded-full" />
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden bg-[#0d1a0d]">
      <img src="/blob-3.png" alt="" className="absolute left-10 bottom-20 w-[350px] opacity-30 animate-blob-float-slow" />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-12">
            <img src="/layers.png" alt="Layers" className={`w-64 h-64 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Who Am I / <span className="text-[#9aba9a]">Pushing Boundaries</span>
          </h2>
          
          <p className="text-lg text-[#a8b8a8] max-w-3xl mx-auto leading-relaxed mb-12">
            I am a Computer Science student at Lovely Professional University with a passion for full-stack development. 
            I specialize in building scalable web applications using the MERN stack and modern frameworks like Next.js.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { value: '600+', label: 'DSA Problems' },
              { value: '3', label: 'Major Projects' },
              { value: 'Top 8%', label: 'LeetCode' },
            ].map((stat, index) => (
              <div key={index} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${(index + 2) * 150}ms` }}>
                <div className="platform-surface p-8 card-3d">
                  <p className="text-4xl font-bold text-[#9aba9a] mb-2">{stat.value}</p>
                  <p className="text-[#8a9a8a]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section with Stairs
function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: Code2, name: 'React', category: 'Frontend' },
    { icon: Layers, name: 'Next.js', category: 'Frontend' },
    { icon: Server, name: 'Node.js', category: 'Backend' },
    { icon: Database, name: 'MongoDB', category: 'Database' },
    { icon: Cloud, name: 'AWS', category: 'DevOps' },
    { icon: GitBranch, name: 'Git', category: 'Tools' },
    { icon: Terminal, name: 'TypeScript', category: 'Language' },
    { icon: Cpu, name: 'Redis', category: 'Database' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative overflow-hidden bg-[#0d1a0d]">
      <img src="/blob-2.png" alt="" className="absolute -left-20 top-1/2 -translate-y-1/2 w-[400px] opacity-30 animate-blob-float-slow" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-['Space_Grotesk']">
            My <span className="text-[#9aba9a]">Skills</span>
          </h2>
          <p className="text-[#a8b8a8] mt-4">Technologies I work with</p>
        </div>

        <div className="relative">
          {/* Stairs Image */}
          <div className={`flex justify-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <img src="/stairs.png" alt="Skills Stairs" className="w-full max-w-3xl" />
          </div>

          {/* Skills Grid - Placed like on stairs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="platform-surface p-6 card-3d text-center group">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#9aba9a]/20 to-[#6a8a6a]/20 flex items-center justify-center border border-[#9aba9a]/30 group-hover:border-[#9aba9a]/60 transition-colors">
                    <skill.icon className="w-7 h-7 text-[#9aba9a]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
                  <p className="text-[#6a8a6a] text-sm">{skill.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects Section with All 4 Projects
function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Sentinel',
      subtitle: 'Uptime & SSL Monitoring SaaS',
      description: 'A serverless, event-driven monitoring engine for tracking website uptime and SSL certificate expiry. Features real-time analytics, intelligent notifications, and Stripe subscription integration with 99.9% reliability.',
      image: '/project-sentinel.png',
      tech: ['Next.js', 'AWS Lambda', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/hardiksharmaa/sentinel',
      live: '#',
      featured: true
    },
    {
      title: 'CodeX',
      subtitle: 'Gamified Coding Platform',
      description: 'A full-stack gamified SaaS platform for learning to code with an in-browser IDE, progress tracking, and subscription-based access control.',
      image: '/project-codex.png',
      tech: ['Next.js', 'PostgreSQL', 'CodeSandbox', 'Clerk'],
      github: 'https://github.com/hardiksharmaa/codeX',
      live: '#',
      featured: false
    },
    {
      title: 'Quick.ai',
      subtitle: 'AI Content Generation SaaS',
      description: 'A full-stack PERN application for AI-driven content creation, integrating Google Gemini and Clipdrop APIs for article writing and image generation.',
      image: '/project-quickai.png',
      tech: ['React', 'Express', 'PostgreSQL', 'Clerk'],
      github: 'https://github.com/hardiksharmaa/QuickAI',
      live: '#',
      featured: false
    },
    {
      title: 'Antojitos',
      subtitle: 'Food Delivery App',
      description: 'A full-stack food delivery platform with restaurant listings, menu management, cart functionality, and order tracking. Features user authentication and real-time order updates.',
      image: '/project-realestate.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: 'https://food-del-frontend-seay.onrender.com',
      featured: false
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden bg-[#0d1a0d]">
      <img src="/blob-1.png" alt="" className="absolute -right-40 top-0 w-[500px] opacity-30 animate-blob-float" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-['Space_Grotesk']">
            My <span className="text-[#9aba9a]">Projects</span>
          </h2>
          <p className="text-[#a8b8a8] mt-4">Things I have built</p>
        </div>

        {/* Featured Project - Sentinel */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="platform-surface p-8 card-3d">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-xl">
                <img src={projects[0].image} alt={projects[0].title} className="w-full h-64 object-cover" />
              </div>
              <div>
                <Badge className="bg-[#9aba9a]/10 text-[#9aba9a] border-[#9aba9a]/30 mb-4">Featured Project</Badge>
                <h3 className="text-3xl font-bold text-white mb-2">{projects[0].title}</h3>
                <p className="text-[#9aba9a] mb-4">{projects[0].subtitle}</p>
                <p className="text-[#a8b8a8] mb-6">{projects[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-[#1a2a1a] text-[#8a9a8a] border-[#2a3a2a]">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button className="bg-[#9aba9a] hover:bg-[#8aaa8a] text-[#0d1a0d] rounded-full" onClick={() => window.open(projects[0].github, '_blank')}>
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" className="border-[#3a4a3a] text-white hover:bg-[#2a3a2a] rounded-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <div key={index} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${(index + 1) * 150}ms` }}>
              <div className="platform-surface p-4 card-3d group cursor-pointer h-full flex flex-col">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-[#9aba9a] text-sm mb-2">{project.subtitle}</p>
                <p className="text-[#8a9a8a] text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <Badge key={i} className="bg-[#9aba9a]/10 text-[#9aba9a] text-xs">{t}</Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-[#9aba9a] hover:bg-[#8aaa8a] text-[#0d1a0d] rounded-full" onClick={() => window.open(project.github, '_blank')}>
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-[#3a4a3a] text-white hover:bg-[#2a3a2a] rounded-full" onClick={() => window.open(project.live, '_blank')}>
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative overflow-hidden bg-[#0d1a0d]">
      <img src="/blob-1.png" alt="" className="absolute -left-40 bottom-0 w-[600px] opacity-30 animate-blob-float-slow" />
      <img src="/blob-3.png" alt="" className="absolute -right-20 top-20 w-[400px] opacity-30 animate-blob-float" />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-12">
            <img src="/platform.png" alt="Platform" className={`w-48 h-48 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-['Space_Grotesk']">
            Let us <span className="text-[#9aba9a]">Make It Happen</span>
          </h2>
          <p className="text-lg text-[#a8b8a8]">Ready to bring your ideas to life?</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-800 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="platform-surface p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9aba9a]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#9aba9a]" />
                  </div>
                  <div>
                    <p className="text-[#8a9a8a] text-sm">Email</p>
                    <p className="text-white">hs489819@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9aba9a]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#9aba9a]" />
                  </div>
                  <div>
                    <p className="text-[#8a9a8a] text-sm">Phone</p>
                    <p className="text-white">+91-7889480969</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9aba9a]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#9aba9a]" />
                  </div>
                  <div>
                    <p className="text-[#8a9a8a] text-sm">Location</p>
                    <p className="text-white">Phagwara, Punjab, India</p>
                  </div>
                </div>
              </div>

              <Separator className="bg-[#2a3a2a] mb-6" />

              <div className="flex gap-4">
                {[
                  { icon: Github, url: 'https://github.com/hardiksharmaa' },
                  { icon: Linkedin, url: 'https://linkedin.com' },
                  { icon: Globe, url: 'https://leetcode.com' },
                  { icon: Instagram, url: 'https://instagram.com' },
                ].map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#1a2a1a] flex items-center justify-center hover:bg-[#2a3a2a] transition-colors group">
                    <social.icon className="w-5 h-5 text-[#8a9a8a] group-hover:text-[#9aba9a] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form onSubmit={handleSubmit} className="platform-surface p-8">
              <div className="space-y-6">
                <div>
                  <label className="text-[#8a9a8a] text-sm mb-2 block">Your Name</label>
                  <Input type="text" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-[#1a2a1a] border-[#2a3a2a] text-white placeholder:text-[#5a6a5a] focus:border-[#9aba9a] focus:ring-[#9aba9a]/20 rounded-xl" />
                </div>
                
                <div>
                  <label className="text-[#8a9a8a] text-sm mb-2 block">Your Email</label>
                  <Input type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-[#1a2a1a] border-[#2a3a2a] text-white placeholder:text-[#5a6a5a] focus:border-[#9aba9a] focus:ring-[#9aba9a]/20 rounded-xl" />
                </div>
                
                <div>
                  <label className="text-[#8a9a8a] text-sm mb-2 block">Your Message</label>
                  <Textarea placeholder="Tell me about your project..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="bg-[#1a2a1a] border-[#2a3a2a] text-white placeholder:text-[#5a6a5a] focus:border-[#9aba9a] focus:ring-[#9aba9a]/20 rounded-xl resize-none" />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#9aba9a] hover:bg-[#8aaa8a] text-[#0d1a0d] rounded-full py-6 font-medium">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-[#0d1a0d]/30 border-t-[#0d1a0d] rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0d1a0d] border-t border-[#2a3a2a]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-1">Hardik Sharma</h3>
            <p className="text-[#8a9a8a]">Full Stack Developer</p>
          </div>
          
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-[#8a9a8a] hover:text-white transition-colors text-sm">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-[#8a9a8a] hover:text-white transition-colors text-sm">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-[#8a9a8a] hover:text-white transition-colors text-sm">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-[#8a9a8a] hover:text-white transition-colors text-sm">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-[#8a9a8a] hover:text-white transition-colors text-sm">Contact</button>
          </div>
        </div>
        
        <Separator className="bg-[#2a3a2a] my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#6a8a6a] text-sm">
          <p>© 2025 Hardik Sharma. All rights reserved.</p>
          <p>Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-[#0d1a0d]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
