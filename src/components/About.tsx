import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Sparkles, Compass, ShieldCheck, Cpu, LayoutGrid, Check } from 'lucide-react';

export const About: React.FC = () => {
  const [selectedFocus, setSelectedFocus] = useState<number>(0);

  const focusPillars = [
    {
      title: 'UX/UI Engineering & Design Systems',
      subtitle: 'Bridging Figma specifications and production code',
      description:
        'Translating complex design tokens, component hierarchies, and interactive states into strict, reusable React component libraries that designers and engineers trust.',
      highlights: ['Design token harmonization', 'Pixel-accurate Figma handoff', 'Consistent interaction ergonomics'],
    },
    {
      title: 'Frontend Architecture & Scalability',
      subtitle: 'Resilient state trees and clean code boundaries',
      description:
        'Structuring modular codebases that scale across engineering squads. Establishing predictable state patterns, clean custom hooks, and strict TypeScript types.',
      highlights: ['Context & state decoupling', 'Strict TypeScript interfaces', 'Maintainable component composition'],
    },
    {
      title: 'Web Performance & Accessibility',
      subtitle: 'Sub-second rendering and WCAG 2.1 compliance',
      description:
        'Zero-jank 60 FPS interactions, dynamic bundle splitting, intelligent asset preloading, and accessible markup that works seamlessly for every user.',
      highlights: ['25% page load reductions', 'Full keyboard navigation', 'Screen reader semantics'],
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-slate-900/80 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
            01. Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Engineering digital products where technical rigor meets intuitive design.
          </h2>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Story & Experience Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed">
            <p className="text-base sm:text-lg text-slate-200">
              I am a Frontend-focused Senior Software Engineer with 5+ years of experience building scalable, responsive, and high-performance web applications across Berlin and London.
            </p>
            <p className="text-sm sm:text-base text-slate-300">
              My engineering approach centers on eliminating friction. I've engineered customer-facing interfaces for e-commerce platforms processing thousands of daily transactions, architected low-latency dashboards for real-time WebSocket telemetry, and built feedback platforms that analyzed over 50,000 customer reviews.
            </p>
            <p className="text-sm sm:text-base text-slate-300">
              Rather than treating frontend as mere surface styling, I treat it as an essential product layer: one that connects complex backend services with clear, accessible, and fast human interactions. I bridge frontend engineering, design systems, and business outcomes without compromise.
            </p>

            {/* Quick stats checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0d1017] border border-slate-800">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>React, TypeScript & Next.js Core</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0d1017] border border-slate-800">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Design System & Figma-to-Code</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0d1017] border border-slate-800">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>WCAG 2.1 AA Accessibility</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0d1017] border border-slate-800">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>E-Commerce & Telemetry Platforms</span>
              </div>
            </div>

            {/* Education Box */}
            <div className="mt-8 p-5 rounded-xl bg-[#0d1017] border border-slate-800/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-800/40 text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Formal Education</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {PERSONAL_INFO.education.degree}
                  </div>
                  <div className="text-xs text-slate-400">
                    {PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.location}
                  </div>
                </div>
              </div>
              <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                {PERSONAL_INFO.education.period}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
              Engineering Disciplines
            </div>

            {focusPillars.map((pillar, idx) => {
              const isSelected = selectedFocus === idx;
              return (
                <div
                  key={pillar.title}
                  onClick={() => setSelectedFocus(idx)}
                  className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900/90 border-blue-500/70 shadow-lg shadow-blue-950/30'
                      : 'bg-[#0d1017]/60 border-slate-800/70 hover:border-slate-700 hover:bg-[#0d1017]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                      {idx === 0 && <LayoutGrid className="w-4 h-4 text-blue-400" />}
                      {idx === 1 && <Cpu className="w-4 h-4 text-indigo-400" />}
                      {idx === 2 && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                      <span>{pillar.title}</span>
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">{pillar.subtitle}</p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-800/60 font-mono">
                    {pillar.highlights.map((h, i) => (
                      <span key={h} className="flex items-center gap-1.5">
                        <span className="text-blue-400">✓</span>
                        <span>{h}</span>
                        {i < pillar.highlights.length - 1 && <span className="text-slate-600">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
