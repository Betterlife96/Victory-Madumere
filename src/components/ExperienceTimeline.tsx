import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  // All open by default or allow toggling
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0, 1, 2, 3]);

  const toggleExpand = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-slate-900/80 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
            02. Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Professional engineering journey across high-growth platforms.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Proven track record delivering production web software, scaling user bases, and upholding high code quality standards.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-slate-800/80 ml-3 sm:ml-6 space-y-10">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedIndices.includes(index);
            const isCurrent = index === 0;

            return (
              <div key={`${exp.company}-${exp.role}`} className="relative pl-6 sm:pl-10 group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-[18px] h-[18px] rounded-full border-2 transition-colors ${
                    isCurrent
                      ? 'border-blue-500 bg-[#090a0f]'
                      : 'border-slate-700 bg-[#090a0f] group-hover:border-slate-500'
                  }`}
                >
                  {isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 m-auto mt-[3px]" />}
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-[#0d1017]/90 border border-slate-800/90 hover:border-slate-700 transition-all duration-200">
                  {/* Header info */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span className="text-slate-600">·</span>
                        <span className="text-base font-semibold text-blue-400">{exp.company}</span>
                        {isCurrent && (
                          <span className="text-[11px] font-mono text-emerald-400 font-medium ml-1">
                            (Current Position)
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.location}</span>
                        </span>
                        <span className="text-slate-600">/</span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpand(index)}
                      className="self-start lg:self-center flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
                      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${exp.company}`}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Responsibilities'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Expandable Key Contributions */}
                  {isExpanded && (
                    <div className="space-y-3 pt-3 border-t border-slate-800/80 animate-in fade-in duration-150">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Key Responsibilities & Outcomes:
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies row */}
                  <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-500 mr-1">Stack:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-slate-300 font-mono py-0.5 px-2 rounded bg-slate-900/90 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
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
