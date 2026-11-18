import { internshipsList } from '../data/portfolioData';

const InternshipCard = ({ intern, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="group relative h-full flex flex-col justify-between rounded-3xl p-[1px] transition-all duration-500 bg-gradient-to-b from-white/15 via-white/5 to-transparent hover:from-red-500/60 hover:via-red-500/20 hover:to-transparent hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(82,222,197,0.14)]"
  >
    <div className="relative h-full flex flex-col justify-between rounded-3xl p-7 md:p-8 bg-[#0d1521]/95 backdrop-blur-xl transition-all duration-500 group-hover:bg-[#121c2e]">
      
      {/* Header Info */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
          <span className="font-mono text-xs font-bold text-white/50 tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#52dec5] animate-pulse" />
            {intern.duration}
          </span>
          <span className={`text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border transition-colors ${
            intern.type === 'Experience' 
              ? 'bg-red-500/20 text-red-300 border-red-500/40 shadow-[0_0_15px_rgba(82,222,197,0.12)]' 
              : 'bg-white/10 text-white/80 border-white/15'
          }`}>
            {intern.type || 'Internship'}
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-white text-2xl font-black mb-2 tracking-tight group-hover:text-red-400 transition-colors">
          {intern.role}
        </h3>
        <p className="text-white/60 text-xs font-bold tracking-wider mb-6 uppercase">
          {intern.organization}
        </p>

        {/* Bullet Points */}
        <div className="space-y-3 mb-8">
          {intern.skills.map((skill, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
              <span className="text-[#52dec5] font-black mt-0.5 text-xs shrink-0 select-none">▸</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Footer */}
      <div className="pt-5 border-t border-white/10 mt-auto">
        <h4 className="text-white/40 text-[11px] font-bold uppercase tracking-wider mb-3">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t) => (
            <span 
              key={t}
              className="px-3 py-1 text-xs font-mono font-bold text-white/70 bg-white/5 rounded-full border border-white/10 group-hover:border-red-500/30 group-hover:text-white group-hover:bg-red-500/10 transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
);

const Internships = () => {
  return (
    <section id="experience" className="bg-[#0b1220] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Background ambient red glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Career Milestones
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-white/50 text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed">
            Hands-on engineering roles across frontend web development, embedded firmware, and network infrastructure.
          </p>
        </div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={intern.organization} intern={intern} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Internships;
