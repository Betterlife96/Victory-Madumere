import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Layout, GitMerge, CheckSquare, Zap, Network, Server, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Frontend Development': <Code className="w-4 h-4 text-blue-400" />,
    'UX/UI Engineering': <Layout className="w-4 h-4 text-indigo-400" />,
    'Frontend Architecture': <GitMerge className="w-4 h-4 text-cyan-400" />,
    'Testing & Quality': <CheckSquare className="w-4 h-4 text-emerald-400" />,
    'Performance & Accessibility': <Zap className="w-4 h-4 text-amber-400" />,
    'APIs & Integration': <Network className="w-4 h-4 text-violet-400" />,
    'Backend & Tools': <Server className="w-4 h-4 text-rose-400" />,
  };

  const allCategories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const displayedCategories =
    activeFilter === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeFilter);

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-slate-900/80 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
            04. Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Engineering skill stack & toolset.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A comprehensive matrix of modern frontend engineering practices, design system workflows, testing methodologies, and architectural tools.
          </p>
        </div>

        {/* Interactive Segmented Filter (Allowed per Section 1.A for functional filter controls) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0d1017] border border-slate-800 rounded-xl mb-10 max-w-4xl">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="p-6 rounded-xl bg-[#0d1017]/80 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/60">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                      {categoryIcons[catGroup.category] || <Sparkles className="w-4 h-4 text-blue-400" />}
                    </span>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {catGroup.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 tabular-nums">
                    {catGroup.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {catGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800/80 text-slate-200 hover:border-blue-500/50 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-900 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Production Tested</span>
                <span className="text-slate-400">Validated on CV</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
