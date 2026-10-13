import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, CheckCircle2, Cpu, Eye, ArrowUpRight, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';
import { ProjectDemoWidget } from './ProjectDemoWidget';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenUploadGuide?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenUploadGuide }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0d1017] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/70 shrink-0">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400">
              Detailed Case Study & Architecture
            </span>
            <h2 id="case-study-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Visual Showcase Banner */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              referrerPolicy="no-referrer"
              className="w-full h-64 sm:h-80 object-cover object-top"
            />
            {/* Conceptual preview indicator */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto flex flex-wrap items-center gap-2 p-2 px-3 rounded-lg bg-slate-950/90 backdrop-blur-md border border-slate-800 text-[11px] text-slate-300 font-mono">
              <span className="text-blue-400 font-semibold">Visual Preview:</span>
              <span>Conceptual UI Architecture</span>
              {onOpenUploadGuide && (
                <button
                  onClick={onOpenUploadGuide}
                  className="text-blue-400 underline hover:text-blue-300 ml-1"
                >
                  (How to replace with screenshot)
                </button>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[11px] font-mono text-slate-400">{m.label}</div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white tabular-nums mt-0.5">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* 1. Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Interactive Live Sandbox */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Interactive Component Demonstration</span>
            </div>
            <ProjectDemoWidget type={project.demoType} />
          </div>

          {/* 2. The Challenge */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              The Engineering Challenge
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              {project.challenge}
            </p>
          </div>

          {/* 3. My Technical Contributions */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Victory's Personal Contributions
            </h3>
            <ul className="space-y-2.5">
              {project.contribution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Technical Approach & UX/UI Approach in 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                <Cpu className="w-4 h-4" />
                <span>Technical Approach</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.technicalApproach.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                <Eye className="w-4 h-4" />
                <span>UX/UI Considerations</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.uxuiApproach.map((u, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 5. Verified Measurable Results */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Verified Outcomes & Business Impact
            </h3>
            <div className="space-y-2">
              {project.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-xs sm:text-sm text-emerald-200 flex items-center gap-2.5"
                >
                  <span className="font-bold text-emerald-400 font-mono">0{idx + 1}.</span>
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Capabilities */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Feature Matrix & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.keyCapabilities.map((cap) => (
                <div key={cap} className="p-2.5 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800/80 bg-slate-950/70 shrink-0">
          <div className="text-xs text-slate-400 font-mono">
            Stack: {project.technologies.join(' · ')}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
