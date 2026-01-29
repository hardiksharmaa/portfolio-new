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
  X,
  Menu,
  Database,
  Server,
  Cloud,
  GitBranch, 
  Terminal, 
  Cpu,
  Container,
  Wind,
  Workflow,
  Box,
  Heart
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
            <span className="text-[#9aba9a]">Full Stack Developer</span>
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
              {['React', 'Next.js', 'Node.js', 'Docker', 'AWS', 'PostgreSQL'].map((tech, index) => (
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
    <section id="about" ref={sectionRef} className="py-15 relative overflow-hidden bg-[#0d1a0d]">
      {/* Immersive LeetCode Background - High Visibility */}
      <div className={`absolute inset-0 z-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-200 scale-100' : 'opacity-200 scale-105'}`}>
        <img 
          src="/leetcode-profile.png" 
          alt="" 
          className="w-full h-full object-cover grayscale brightness-[0.6] contrast-125 scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a0d] via-transparent to-[#0d1a0d] opacity-90" />
        <div className="absolute inset-0 bg-[#0d1a0d]/20" /> {/* Softer tint */}
      </div>

      <img src="/blob-3.png" alt="" className="absolute left-10 bottom-20 w-[350px] opacity-30 animate-blob-float-slow z-10" />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-20">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <img src="/layers.png" alt="Layers" className={`w-64 h-64 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`} />
              <div className="absolute -inset-4 bg-[#9aba9a]/20 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-['Space_Grotesk'] backdrop-blur-[3px]">
            Who Am I / <span className="text-[#9aba9a] relative">
            Pushing Boundaries
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#9aba9a]/40 rounded-full" />
          </span>

          </h2>
          
          <p className="text-lg text-[#d6e2d6] max-w-3xl mx-auto leading-relaxed 
          bg-[#0d1a0d]/40 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">

            I am a Computer Science student at Lovely Professional University with a passion for full-stack development. 
            I specialize in building scalable web applications using the MERN stack and modern frameworks like Next.js.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { value: '600+', label: 'DSA Problems', detail: 'Consistent Problem Solver' },
              { value: '4', label: 'Major Projects', detail: 'Real-world Solutions' },
              { value: 'Top 8%', label: 'LeetCode', detail: 'Global Ranking' },
            ].map((stat, index) => (
              <div key={index} className={`transition-all duration-700 ${isVisible ? 'opacity-50 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${(index + 2) * 150}ms` }}>
                <div className="platform-surface p-8 card-3d group relative overflow-hidden cursor-default">
                  {/* Hover Detail Overlay */}
                  <div className="absolute inset-0 bg-[#9aba9a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <p className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                    <p className="text-white font-semibold mb-1">{stat.label}</p>
                    <p className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {stat.detail}
                    </p>
                  </div>

                  {/* Decorative corner glow */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#9aba9a]/10 blur-2xl rounded-full group-hover:bg-[#9aba9a]/20 transition-all duration-500" />
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: Code2, name: 'React', category: 'Frontend', level: '95%' },
    { icon: Layers, name: 'Next.js', category: 'Frontend', level: '90%' },
    { icon: Wind, name: 'Tailwind', category: 'Frontend', level: '95%' },
    { icon: Workflow, name: 'Redux', category: 'Frontend', level: '85%' },
    { icon: Server, name: 'Node.js', category: 'Backend', level: '88%' },
    { icon: Database, name: 'PostgreSQL', category: 'Database', level: '82%' },
    { icon: Box, name: 'MongoDB', category: 'Database', level: '90%' },
    { icon: Cpu, name: 'Redis', category: 'Database', level: '75%' },
    { icon: Container, name: 'Docker', category: 'DevOps', level: '80%' },
    { icon: Cloud, name: 'AWS', category: 'DevOps', level: '70%' },
    { icon: GitBranch, name: 'Git', category: 'Tools', level: '92%' },
    { icon: Terminal, name: 'TypeScript', category: 'Language', level: '88%' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative overflow-hidden bg-[#0d1a0d]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-grid-sage opacity-50" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0d1a0d] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0d1a0d] to-transparent z-10" />
      
      <img src="/blob-2.png" alt="" className="absolute -left-20 top-1/4 w-[500px] opacity-20 blur-3xl animate-blob-float-slow" />
      <img src="/blob-3.png" alt="" className="absolute -right-20 bottom-1/4 w-[400px] opacity-20 blur-3xl animate-blob-float" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-5">
          <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <Badge className="bg-[#9aba9a]/10 text-[#9aba9a] border-[#9aba9a]/20 mb-4 px-4 py-1">Technical Expertise</Badge>
            <h2 className="text-5xl sm:text-6xl font-bold text-white font-['Space_Grotesk'] leading-tight">
              Mastering the <br />
              <span className="text-gradient">Digital Craft</span>
            </h2>
          </div>
          <div className={`max-w-md transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="text-[#a8b8a8] text-lg leading-relaxed">
              From architecting robust backends to crafting pixel-perfect frontends, I use a modern stack to build high-performance applications.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Background Decorative Text */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden opacity-[0.05]">
            <div className="text-[30rem] font-black text-white whitespace-nowrap animate-scroll-text flex gap-20 items-center h-full">
              <span>FRONTEND   BACKEND   DATABASE   DEVOPS   TOOLS</span>
              <span>FRONTEND   BACKEND   DATABASE   DEVOPS   TOOLS</span>
              <span>FRONTEND   BACKEND   DATABASE   DEVOPS   TOOLS</span>
            </div>
          </div>

          <div className="overflow-x-auto pb-10 pt-0 no-scrollbar relative z-10">
            <div className="flex gap-12 px-10 items-end min-w-max h-[520px]">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 transition-all duration-1000 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 60}ms`,
                    transform: isVisible ? `translateY(-${index * 32}px)` : 'translateY(120px)'
                  }}
                >
                  <div className="relative group">
                    {/* Sage Glow behind skill */}
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#9aba9a]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Stair Step / Platform */}
                    <div className="w-48 h-14 platform-surface flex items-center justify-center relative card-3d cursor-pointer group">
                      {/* Depth effect for the stair */}
                      <div className="absolute top-full left-0 right-0 h-8 bg-[#1a2a1a] border-x border-b border-[#2a3a2a] -z-10 group-hover:h-10 transition-all duration-300" />
                      
                      {/* Skill Content on top of the step */}
                      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-44 flex flex-col items-center group-hover:-translate-y-4 transition-transform duration-300">
                        {/* Level Indicator (New) */}
                        <div className="mb-4 w-full px-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="flex justify-between text-[10px] text-[#9aba9a] mb-1 font-mono uppercase tracking-widest">
                            <span>Proficiency</span>
                            <span>{skill.level}</span>
                          </div>
                          <div className="h-0.5 w-full bg-[#1a2a1a] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#9aba9a] transition-all duration-1000 delay-300" 
                              style={{ width: isVisible ? skill.level : '0%' }} 
                            />
                          </div>
                        </div>

                        {/* Logo Container */}
                        <div className="w-20 h-20 rounded-2xl bg-[#0d1a0d]/95 backdrop-blur-md border border-[#9aba9a]/20 flex items-center justify-center mb-4 shadow-2xl shadow-black/50 group-hover:border-[#9aba9a]/50 group-hover:shadow-[#9aba9a]/10 transition-all duration-500 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#9aba9a]/10 to-transparent" />
                          <skill.icon className="w-10 h-10 text-[#9aba9a] relative z-10 group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        {/* Text Content */}
                        <div className="text-center">
                          <h3 className="text-white font-bold text-lg leading-none mb-2 tracking-tight">{skill.name}</h3>
                          <Badge className="bg-[#9aba9a]/5 text-[#9aba9a]/80 border-[#9aba9a]/20 text-[10px] px-2 py-0 h-4 uppercase tracking-widest font-medium">
                            {skill.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Scroll Navigation Hint */}
          <div className={`flex flex-col items-center mt-10 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="platform-surface px-6 py-2 border border-[#9aba9a]/10 flex items-center gap-3">
              <span className="text-[#a9b9a9] text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
              <div className="w-24 h-px bg-[#2a3a2a] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9aba9a] to-transparent w-12 animate-scroll-indicator" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects Section with Immersive Design
function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      number: '01',
      title: 'Sentinel',
      subtitle: 'Cloud Native Monitoring',
      description: 'Engineered a highly available uptime monitoring SaaS. Leveraged serverless architecture to achieve millisecond latency in global health checks. Integrated real-time alerting via Webhooks and Discord.',
      image: '/project-sentinel.png',
      tech: ['Next.js', 'AWS Lambda', 'SQS', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/hardiksharmaa/sentinel',
      live: 'https://sentinel.deez.pro',
      color: '#4f46e5'
    },
    {
      number: '02',
      title: 'CodeX',
      subtitle: 'The Future of Learning',
      description: 'A gamified ecosystem for developers. Integrated a robust in-browser execution engine for 10+ languages. Features a reward-based progress system and community challenges.',
      image: '/project-codex.png',
      tech: ['Next.js', 'PostgreSQL', 'CodeSandbox', 'Clerk'],
      github: 'https://github.com/hardiksharmaa/codeX',
      live: 'https://codex.deez.pro',
      color: '#eab308'
    },
    {
      number: '03',
      title: 'Quick.ai',
      subtitle: 'AI-Powered Creativity',
      description: 'Built a multi-modal AI platform for automated content generation. Orchestrated multiple AI models (Gemini, Stable Diffusion) into a seamless user workflow with persistent state management.',
      image: '/project-quickai.png',
      tech: ['React', 'Express', 'PostgreSQL', 'Clerk', 'AI'],
      github: 'https://github.com/hardiksharmaa/QuickAI',
      live: 'https://quickai.deez.pro',
      color: '#8b5cf6'
    },
    {
      number: '04',
      title: 'Antojitos',
      subtitle: 'Seamless Food Logistics',
      description: 'Developed a comprehensive end-to-end food delivery solution. Focused on real-time cart synchronization and optimized delivery routing. Features a specialized dashboard for restaurant partners.',
      image: '/project-antojitos.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/hardiksharmaa/food-del',
      live: 'https://antojitos.deez.pro',
      color: '#f43f5e'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-15 relative overflow-hidden bg-[#0d1a0d]">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden select-none opacity-[0.07] z-0">
        <div className="text-[35vw] font-black text-white leading-none tracking-tighter absolute top-10 left-1/2 -translate-x-1/2">
          WORK
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col items-center text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <Badge className="bg-[#9aba9a]/10 text-[#9aba9a] border-[#9aba9a]/20 mb-4 px-4 py-1">Portfolio</Badge>
          <h2 className="text-5xl sm:text-7xl font-bold text-white font-['Space_Grotesk'] tracking-tight mb-6">
            Featured <span className="text-gradient">Creations</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#9aba9a] to-transparent rounded-full" />
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative grid lg:grid-cols-12 gap-12 items-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Side */}
              <div className={`lg:col-span-7 relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                {/* Project Number Background */}
                <div className="absolute -top-16 -left-10 text-9xl font-black text-white/[0.03] select-none group-hover:text-[#9aba9a]/[0.20] transition-colors duration-700">
                  {project.number}
                </div>
                
                <div className="relative z-10 overflow-hidden rounded-2xl platform-surface p-2 transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0d]/80 via-transparent to-transparent opacity-60" />
                  </div>
                  
                  {/* Glowing Edge on Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 40px ${project.color}33` }}
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#9aba9a]/5 blur-3xl rounded-full -z-10 animate-pulse" />
              </div>

              {/* Content Side */}
              <div className={`lg:col-span-5 flex flex-col ${index % 2 === 0 ? 'lg:order-2 lg:items-start' : 'lg:order-1 lg:items-end text-right'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-mono text-[#9aba9a] tracking-widest">{project.number}</span>
                  <div className="w-10 h-px bg-[#2a3a2a]" />
                  <span className="text-sm font-medium text-[#6a8a6a] uppercase tracking-widest">{project.subtitle}</span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6 group-hover:text-[#9aba9a] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-lg text-[#a8b8a8] leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className={`flex flex-wrap gap-2 mb-10 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {project.tech.map((tech, i) => (
                    <Badge 
                      key={i} 
                      className="bg-[#1a2a1a] text-[#8a9a8a] border-[#2a3a2a] group-hover:border-[#9aba9a]/30 transition-colors py-1 px-3"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    className="bg-[#9aba9a] hover:bg-[#8aaa8a] text-[#0d1a0d] rounded-full px-8 h-12 font-bold group/btn"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Source
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-[#3a4a3a] text-white hover:bg-[#2a3a2a] rounded-full px-8 h-12"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit
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

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } catch (error) {
    toast.error("Failed to send message. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" ref={sectionRef} className="py-32 relative overflow-hidden bg-[#0d1a0d]">
      <img src="/blob-1.png" alt="" className="absolute -left-40 bottom-0 w-[600px] opacity-30 animate-blob-float-slow" />
      <img src="/blob-3.png" alt="" className="absolute -right-20 top-20 w-[400px] opacity-30 animate-blob-float" />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center  relative">
            {/* Floating Heart above rock */}
            <Heart className="absolute w-10 h-10 text-[#9aba9a]/80 
            drop-shadow-[0_0_12px_rgba(154,186,154,0.35)] 
            animate-float-slow" />


            {/* Rock / Platform */}
            <img
              src="/platform.png"
              alt="Platform"
              className={`w-48 h-48 transition-all duration-1000 
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            />
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
                  { icon: Linkedin, url: 'https://www.linkedin.com/in/hardiksh121' },
                  { icon: Code2, url: 'https://leetcode.com/u/hardik_sharma12' },
                  { icon: Instagram, url: 'https://www.instagram.com/whyhardikk' },
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
                  <Input type="text" placeholder="Hardik" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-[#1a2a1a] border-[#2a3a2a] text-white placeholder:text-[#5a6a5a] focus:border-[#9aba9a] focus:ring-[#9aba9a]/20 rounded-xl" />
                </div>
                
                <div>
                  <label className="text-[#8a9a8a] text-sm mb-2 block">Your Email</label>
                  <Input type="email" placeholder="hardik@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-[#1a2a1a] border-[#2a3a2a] text-white placeholder:text-[#5a6a5a] focus:border-[#9aba9a] focus:ring-[#9aba9a]/20 rounded-xl" />
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
          <p className="flex items-center gap-2 text-[#6a8a6a]">
            Built with Heart
            <Heart className="w-4 h-4" />
          </p>
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
