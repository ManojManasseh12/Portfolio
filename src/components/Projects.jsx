import { projects, socialLinks } from '../data/portfolioData';

// Optional: drop a 16:9 thumbnail at src/assets/projects/<project-id>.(png|jpg|webp)
const thumbnails = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const thumbsById = Object.fromEntries(
  Object.entries(thumbnails).map(([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, ''), url])
);
const thumbFor = (id) => thumbsById[id];

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectCard = ({ project, aosDelay }) => {
  const thumbnail = thumbFor(project.id);
  const hasActions = Boolean(
    project.links?.github ||
    project.links?.demo ||
    project.links?.frontendDemo ||
    project.links?.backendApi
  );
  return (
    <div 
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`relative rounded-2xl p-[1px] group overflow-hidden transition-all duration-500 ${
        project.isFlagship 
          ? 'bg-gradient-to-br from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500 hover:via-red-400/30 hover:to-red-500/60' 
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div className={`rounded-2xl p-6 md:p-8 h-full backdrop-blur-md transition-all duration-500 ${
        project.isFlagship 
          ? 'bg-[#0d1521]/95 group-hover:bg-[#0d1521]/90' 
          : 'bg-[#101a2b]/90 group-hover:bg-[#101a2b]/80'
      }`}>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">

        {/* Small thumbnail — right side on desktop, on top on mobile */}
        {thumbnail && (
          <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-lg shrink-0 w-full md:w-56 lg:w-72 md:order-2">
            <img
              src={thumbnail}
              alt={`${project.title} — project thumbnail`}
              loading="lazy"
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
      {/* Badge */}
      {project.badge && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mb-4">
          {project.badge}
        </span>
      )}

      {/* Number + Title */}
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-5xl font-black text-white/10 font-serif italic">{project.number}</span>
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{project.title}</h3>
      </div>

      {/* Description */}
      <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-medium">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className={`flex flex-wrap gap-2 ${hasActions ? 'mb-8' : ''}`}>
        {project.techTags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300 transition-all duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Private / client-owned note */}
      {project.note && (
        <div className="flex items-start gap-2 mt-5 text-white/35">
          <svg className="w-3.5 h-3.5 mt-[3px] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-[12px] leading-relaxed max-w-xl">{project.note}</span>
        </div>
      )}

      {/* Action Buttons */}
      {hasActions && (
      <div className="flex flex-wrap items-center gap-3">
        {/* GitHub */}
        {project.links?.github && (
          <a 
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 group/btn"
          >
            <GitHubIcon />
            GitHub
          </a>
        )}

        {/* Live Demo (single) */}
        {project.links?.demo && (
          <a 
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 bg-[#52dec5] text-[#0b1220] hover:bg-red-400 hover:shadow-[0_0_20px_rgba(82,222,197,0.2)]"
          >
            <ExternalLinkIcon />
            Live Demo
          </a>
        )}

        {/* Frontend Demo (Karigar) */}
        {project.links?.frontendDemo && (
          <a 
            href={project.links.frontendDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#52dec5] text-[#0b1220] text-sm font-semibold hover:bg-red-400 hover:shadow-[0_0_20px_rgba(82,222,197,0.2)] transition-all duration-300"
          >
            <ExternalLinkIcon />
            Frontend Demo
          </a>
        )}

        {/* Backend API (Karigar) */}
        {project.links?.backendApi && (
          <a 
            href={project.links.backendApi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300"
          >
            <ExternalLinkIcon />
            Backend API
          </a>
        )}
      </div>
      )}
        </div>
      </div>
    </div>
  </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b1220] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-8 shadow-sm bg-white/5 backdrop-blur-sm">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Work that speaks <br className="hidden md:block" />for itself
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A selection of work spanning React.js frontends, ERP workflows, Java and machine learning.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              aosDelay={String((index + 1) * 100)}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group"
          >
            <GitHubIcon />
            Explore All My Repositories
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
