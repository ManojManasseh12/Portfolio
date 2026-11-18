import { aboutContent, personalInfo } from '../data/portfolioData';

// Optional: drop your photo at src/assets/about/avatar.(png|jpg|jpeg|webp)
const avatars = import.meta.glob('../assets/about/avatar.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const avatar = Object.values(avatars)[0];
const formals = import.meta.glob('../assets/about/avatar-formal.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const avatarFormal = Object.values(formals)[0];

const initials = personalInfo.name.split(' ').map((w) => w[0]).join('');

const About = () => {
  return (
    <section id="about" className="pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                {avatar ? (
                  <div className="relative w-full h-full group">
                    <img
                      src={avatar}
                      alt={`${personalInfo.name} — ${personalInfo.title}`}
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ${avatarFormal ? 'group-hover:opacity-0 group-hover:scale-105' : ''}`}
                    />
                    {avatarFormal && (
                      <img
                        src={avatarFormal}
                        alt={`${personalInfo.name} — formal portrait`}
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-0 scale-110 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100 bg-slate-100"
                      />
                    )}
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black">
                    <span className="text-7xl font-black text-[#52dec5] tracking-tighter">{initials}</span>
                    <span className="mt-3 text-xs font-bold text-white/60 uppercase tracking-widest">{personalInfo.title}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Tech icons row */}
          <div className="flex flex-wrap items-center gap-8 md:gap-10 mt-8">
            {aboutContent.techIcons.map((tech, i) => (
              <div
                key={tech.name}
                data-aos="zoom-in"
                data-aos-delay={300 + i * 150}
                className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl flex flex-col items-center gap-2"
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}.svg`}
                  alt={tech.name}
                  className="w-14 h-14 md:w-16 md:h-16 drop-shadow-lg"
                />
                <span className="text-xs font-bold text-white/70 uppercase tracking-wider">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Highlights Section */}
          {aboutContent.highlights && (
            <div data-aos="fade-up" data-aos-delay="700" className="mt-12 bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4">Key Highlights</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {aboutContent.highlights.map((highlight, index) => (
                  <p key={index} className="text-sm font-semibold text-white/80 leading-relaxed">
                    {highlight}
                  </p>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0b1220]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-red-300 opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-red-300 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
