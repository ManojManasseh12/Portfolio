import { aboutContent, personalInfo } from '../data/portfolioData';

// Optional: drop your photo at src/assets/about/avatar.(png|jpg|jpeg|webp)
const avatars = import.meta.glob('../assets/about/avatar.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const avatar = Object.values(avatars)[0];
const formals = import.meta.glob('../assets/about/avatar-formal.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const avatarFormal = Object.values(formals)[0];

const initials = personalInfo.name.split(' ').map((w) => w[0]).join('');

const quickFacts = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    label: personalInfo.location,
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.42A12 12 0 0118 21H6a12 12 0 01-.16-10.42L12 14z" />
    ),
    label: "B.Tech CSE · 85% (2020–2024)",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    label: "Open to opportunities",
    highlight: true,
  },
];

const About = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-[#0b1220] pt-24 pb-32 px-6 md:px-12 font-sans">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-[#52dec5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-[300px_1fr] lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start relative z-20">

        {/* Left Side: ID Badge + quick facts */}
        <div data-aos="drop-bounce" className="flex flex-col items-center w-full md:sticky md:top-28">

          <div className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[270px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
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

          {/* Quick facts */}
          <div className="w-full max-w-[270px] mt-8 rounded-2xl border border-white/10 bg-white/[0.03] divide-y divide-white/[0.06]">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-center gap-3 px-4 py-3">
                <span className={`shrink-0 ${fact.highlight ? 'text-[#52dec5]' : 'text-white/40'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {fact.icon}
                  </svg>
                </span>
                <span className={`text-[12.5px] font-medium leading-snug ${fact.highlight ? 'text-[#52dec5]' : 'text-white/65'}`}>
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="150" className="text-white">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52dec5] animate-pulse" />
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
            {aboutContent.heading}
          </h2>

          <p
            className="text-[15px] md:text-base font-normal text-white/65 leading-[1.85] max-w-2xl"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Tech stack */}
          <div className="mt-12">
            <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
              Stack I Build With
            </p>
            <div className="grid grid-cols-5 gap-2 md:gap-3">
              {aboutContent.techIcons.map((tech, i) => (
                <div
                  key={tech.name}
                  data-aos="zoom-in"
                  data-aos-delay={150 + i * 60}
                  className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-2 py-3.5 transition-colors duration-300 hover:border-[#52dec5]/40 hover:bg-[#52dec5]/[0.07]"
                >
                  <img
                    src={tech.icon.startsWith('http')
                      ? tech.icon
                      : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}.svg`}
                    alt={tech.name}
                    loading="lazy"
                    className="w-7 h-7 md:w-8 md:h-8 object-contain"
                  />
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-white/45 uppercase tracking-[0.06em] md:tracking-wider text-center leading-tight group-hover:text-white/80 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          {aboutContent.highlights && (
            <div className="mt-12">
              <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
                Key Highlights
              </p>
              <div className="grid sm:grid-cols-2 gap-x-10">
                {aboutContent.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 60}
                    className="flex h-full items-start gap-3 py-3 border-b border-white/[0.06]"
                  >
                    <svg className="w-3.5 h-3.5 mt-1 shrink-0 text-[#52dec5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[13.5px] font-medium text-white/65 leading-relaxed">
                      {highlight.replace(/^▸\s*/, '')}
                    </span>
                  </div>
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
