import { personalInfo, socialLinks } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0b1220] text-white overflow-hidden border-t border-white/10 font-sans">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-red-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-10 relative z-10">
        
        {/* Top: CTA Banner */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for full-time roles
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              Let's build something <span className="text-[#52dec5]">great</span> together.
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-5 py-2.5 rounded-full bg-[#52dec5] text-[#0b1220] font-bold text-sm hover:bg-red-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
            >
              Get In Touch
            </a>
            {personalInfo.resumeUrl && (
              <a 
                href={personalInfo.resumeUrl}
                download
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-white font-bold text-sm hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Resume ↓
              </a>
            )}
          </div>
        </div>

        {/* Middle: Compact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-white/10">
          
          {/* Brand & Location */}
          <div>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="inline-block text-2xl font-black tracking-tight text-white mb-3 group">
              {personalInfo.name}<span className="text-red-500 group-hover:scale-125 inline-block transition-transform">.</span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-medium mb-4">
              Software Developer based in Chennai, building React.js applications and REST API integrations.
            </p>
            <span className="text-xs font-mono text-white/40 tracking-wider">
              ▸ Chennai, Tamil Nadu, India
            </span>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">
              Direct Contact
            </h4>
            <a 
              href={`mailto:${personalInfo.emails.primary}`}
              className="text-sm sm:text-base font-bold text-white hover:text-[#52dec5] transition-colors underline underline-offset-4 decoration-white/15 hover:decoration-[#52dec5] break-all block mb-4"
            >
              {personalInfo.emails.primary}
            </a>
            {personalInfo.phone && (
              <p className="text-sm text-white/50 font-medium">{personalInfo.phone}</p>
            )}
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/25 text-white/70 hover:text-white text-xs font-bold transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/25 text-white/70 hover:text-white text-xs font-bold transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 text-xs text-white/40 font-medium">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <p className="text-white/30 text-[11px]">
            Built with <span className="text-[#52dec5]/70">React</span> & <span className="text-white/50">Tailwind CSS</span>
          </p>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/50 hover:text-white font-semibold transition-all duration-200 group cursor-pointer"
          >
            <span>Back to top</span>
            <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#52dec5] group-hover:border-[#52dec5] group-hover:text-[#0b1220] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 text-[10px]">
              ↑
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
