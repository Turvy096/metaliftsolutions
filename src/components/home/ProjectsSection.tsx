import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  stats?: string[];
  link?: string;
  isUnderDevelopment?: boolean;
}

interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

const ProjectCard: React.FC<{
  project: Project;
  onProjectClick: (project: Project) => void;
}> = ({ project, onProjectClick }) => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (project.isUnderDevelopment) {
      e.preventDefault();
      e.stopPropagation();
      onProjectClick(project);
    }
  };

  return (
    <a
      href={project.link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] w-full cursor-pointer active:scale-[0.98] no-underline"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/60 via-transparent to-transparent opacity-60 transition-colors duration-300" />
        <div className="absolute inset-0 bg-orange-500/0 transition-colors duration-300 group-hover:bg-orange-500/10" />

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className={`bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2
                          transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100
                          transition-all duration-500 ease-out shadow-lg
                          ${project.isUnderDevelopment ? 'hover:bg-slate-600 hover:text-white' : 'hover:bg-orange-500 hover:text-white'}`}>
            {project.isUnderDevelopment ? 'Coming Soon' : 'Click to visit'}
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-orange-500">
            {project.title}
            {project.isUnderDevelopment && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                In Development
              </span>
            )}
          </h3>
          <svg
            className="w-5 h-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          {project.description}
        </p>
      </div>
    </a>
  );
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onProjectClick }) => {
  const handleProjectClick = (project: Project) => {
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  return (
    <section className="pt-1 pb-8 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-full mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            Recent Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-full">
            Explore our recent projects showcasing innovative digital solutions across various industries. From concept to deployment, we deliver excellence.
          </p>
        </div>
        <div className="mt-6 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;