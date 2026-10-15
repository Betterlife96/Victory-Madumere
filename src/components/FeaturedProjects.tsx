import React from 'react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, Sparkles, Layers, CheckCircle2, Sliders, ExternalLink } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenUploadGuide: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject, onOpenUploadGuide }) => {
  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-slate-900/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
              03. Selected Works & Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Production engineering case studies.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              In-depth technical breakdowns highlighting frontend architecture, state pipelines, component reuse, and measured outcomes.
            </p>
          </div>

          <button
            onClick={onOpenUploadGuide}
            className="self-start md:self-auto text-xs font-mono text-slate-400 hover:text-blue-400 underline transition-colors"
          >
            How to upload real screenshots →
          </button>
        </div>

        {/* 3 Projects Showcase */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="rounded-2xl border border-slate-800/90 bg-[#0d1017]/90 overflow-hidden hover:border-slate-700 transition-all duration-300 group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch`}>
                  {/* Media / Visual Container */}
                  <div
                    className={`lg:col-span-6 relative overflow-hidden bg-slate-950 flex flex-col justify-between ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} Interface Mockup`}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('analytics_dashboard_preview')) {
                            target.src = '/projects/analytics_dashboard_preview.jpg';
                          }
                        }}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Conceptual visual indicator tag */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-slate-950/85 backdrop-blur-md p-2 px-3 rounded-lg border border-slate-800">
                      <span>Conceptual UI Architecture Preview</span>
                      <span className="text-blue-400">Interactive Demo Available</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div
                    className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      {/* Unboxed Metadata (Zero-Pill discipline) */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                        <span className="text-blue-400 font-semibold">Case Study 0{index + 1}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.technologies.slice(0, 3).join(' / ')}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 mb-4">
                        {project.tagline}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        {project.overview}
                      </p>

                      {/* Measurable outcomes pill-less summary */}
                      <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-800/80 mb-6">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="text-lg font-bold font-mono text-white tabular-nums">
                              {m.value}
                            </div>
                            <div className="text-[11px] text-slate-400 truncate">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
                      >
                        <span>View Full Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span>Launch Live Sandbox</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
