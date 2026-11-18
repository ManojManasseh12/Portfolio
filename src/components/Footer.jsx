import { personalInfo, socialLinks } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#0b1220] text-white overflow-hidden border-t border-white/10 font-sans">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-white/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12 relative z-10">
        
        {/* Top Banner: Status & Action */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-16 border-b border-white/10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for full-time roles & projects
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to create something <span className="text-[#52dec5]">exceptional</span>?
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#52dec5] text-[#0b1220] font-bold text-sm hover:bg-red-400 hover:shadow-[0_0_25px_rgba(82,222,197,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
            >
              Start A Conversation
            </a>
            {personalInfo.resumeUrl && (
              <a 
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/20 text-white font-bold text-sm hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Download Resume ↓
              </a>
            )}
          </div>
        </div>

        {/* Middle Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 py-16 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#" className="inline-block text-3xl font-black tracking-tight text-white mb-4 group">
                {personalInfo.name}<span className="text-[#52dec5] group-hover:scale-125 inline-block transition-transform">.</span>
              </a>
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm mb-6 font-medium">
                Software Developer based in Chennai, building high-performance React.js applications and scalable REST API integrations for CRM/ERP systems.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-white/50 tracking-wider">
              <span>📍</span> Chennai, Tamil Nadu, India
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6 font-bold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm font-medium text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <span className="text-white/20 text-xs">/</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect & Socials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6 font-bold">
                Get In Touch
              </h4>
              <p className="text-xs text-white/50 mb-3 font-medium">
                Direct inbox inquiries:
              </p>
              <a 
                href={`mailto:${personalInfo.emails.primary}`}
                className="text-base sm:text-lg font-bold text-white hover:text-[#52dec5] transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-[#52dec5] break-all block mb-6"
              >
                {personalInfo.emails.primary}
              </a>
            </div>

            <div>
              <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
                Connect Online
              </p>
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white text-xs font-bold transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white text-xs font-bold transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Large Editorial Watermark / Signature */}
        <div className="w-full flex justify-center items-center py-12 md:py-16 select-none overflow-hidden pointer-events-none">
          <h2 className="text-[14vw] sm:text-[13vw] md:text-[12vw] leading-none font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/25 via-white/10 to-transparent text-center w-full whitespace-nowrap">
            {personalInfo.name}
          </h2>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-white/50 font-medium">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <p className="text-white/40 text-[11px]">
            Designed & Built with <span className="text-[#52dec5]">React</span> & <span className="text-white/70">Tailwind CSS</span>
          </p>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-all duration-200 group cursor-pointer"
          >
            <span>Back to top</span>
            <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#52dec5] group-hover:border-[#52dec5] group-hover:text-[#0b1220] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
