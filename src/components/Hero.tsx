import React, { useState } from 'react';
import { ArrowDown, FileText, Mail, Layers, Palette, Activity, CheckCircle2, Sliders, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'tokens' | 'state' | 'a11y'>('architecture');
  const [sampleStateCounter, setSampleStateCounter] = useState(148);
  const [themeAccent, setThemeAccent] = useState<'electric-blue' | 'indigo' | 'emerald'>('electric-blue');

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-900/60">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Identity & Availability */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400 mb-4 tracking-wide uppercase">
              <span className="text-white font-semibold">Victory Madumere</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-400">Senior Frontend Developer</span>
              <span aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* Specialties unboxed text */}
            <div className="text-xs font-mono text-slate-400 mb-6 flex flex-wrap items-center gap-2">
              <span>React</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>TypeScript</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Next.js</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>UX/UI Engineering</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-emerald-400">{PERSONAL_INFO.availability}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] [text-wrap:balance]">
              Building digital experiences that <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200 bg-clip-text text-transparent">feel as good</span> as they perform.
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.leadBio}
            </p>

            {/* Three Calls to Action */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              {/* CTA 1: Explore My Work */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 whitespace-nowrap"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* CTA 2: Download CV */}
              <a
                href="/Victory_Madumere_CV.pdf"
                download="Victory_Madumere_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg transition-all duration-200 whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Download CV</span>
              </a>

              {/* CTA 3: Get In Touch */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-900/50 border border-transparent hover:border-slate-800 rounded-lg transition-all duration-200 whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Frontend Architecture Canvas */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-slate-800 bg-[#0d1017]/90 shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-sm">
              {/* Top window chrome */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-950/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-slate-700" />
                  <span className="w-3 h-3 rounded-full bg-slate-700" />
                  <span className="ml-2 text-xs font-mono text-slate-400">frontend-architecture.spec.tsx</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-mono text-slate-500">React 19 · TS Strict</span>
                </div>
              </div>

              {/* Inspector Navigation Tabs */}
              <div className="grid grid-cols-4 p-1.5 bg-slate-950/40 border-b border-slate-800/60 gap-1 text-xs">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md font-medium transition-colors ${
                    activeTab === 'architecture'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  <span className="truncate">Tree</span>
                </button>
                <button
                  onClick={() => setActiveTab('tokens')}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md font-medium transition-colors ${
                    activeTab === 'tokens'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="truncate">Tokens</span>
                </button>
                <button
                  onClick={() => setActiveTab('state')}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md font-medium transition-colors ${
                    activeTab === 'state'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="truncate">Pipeline</span>
                </button>
                <button
                  onClick={() => setActiveTab('a11y')}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md font-medium transition-colors ${
                    activeTab === 'a11y'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="truncate">WCAG AA</span>
                </button>
              </div>

              {/* Inspector Content Panes */}
              <div className="p-5 min-h-[310px] flex flex-col justify-between">
                {activeTab === 'architecture' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800/80">
                      <span>Component Tree Hierarchy</span>
                      <span className="text-blue-400 text-[11px]">Clean Separation of Concerns</span>
                    </div>

                    <div className="space-y-1.5 text-slate-300">
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-3.5 h-3.5 text-blue-400" />
                          <span className="text-white font-semibold">&lt;TelemetryWorkspace /&gt;</span>
                        </div>
                        <span className="text-[11px] text-slate-400">Context Provider</span>
                      </div>

                      <div className="ml-4 p-2 rounded bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">├──</span>
                          <span className="text-indigo-300 font-medium">&lt;StreamAdapter /&gt;</span>
                        </div>
                        <span className="text-[11px] text-emerald-400">WebSocket Hook (0.8ms)</span>
                      </div>

                      <div className="ml-8 p-2 rounded bg-slate-900/40 border border-slate-800/60 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">└──</span>
                          <span className="text-blue-300 font-medium">&lt;InteractiveChart /&gt;</span>
                        </div>
                        <span className="text-[11px] text-slate-400">Memoized Canvas</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-blue-950/20 border border-blue-900/30 text-blue-300 text-[11px]">
                      Tip: Victory structures components with strict prop boundary contracts and immutable rendering.
                    </div>
                  </div>
                )}

                {activeTab === 'tokens' && (
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800/80">
                      <span>Design System Token Sync</span>
                      <span className="text-indigo-400 font-mono text-[11px]">Figma Variables ↔ Code</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setThemeAccent('electric-blue')}
                        className={`p-2 rounded-lg border text-left transition-all ${
                          themeAccent === 'electric-blue'
                            ? 'border-blue-500 bg-blue-950/30'
                            : 'border-slate-800 bg-slate-900/60'
                        }`}
                      >
                        <div className="w-5 h-5 rounded bg-blue-500 mb-1.5" />
                        <div className="font-medium text-white text-[11px]">Electric Blue</div>
                        <div className="font-mono text-[10px] text-slate-400">#3B82F6</div>
                      </button>

                      <button
                        onClick={() => setThemeAccent('indigo')}
                        className={`p-2 rounded-lg border text-left transition-all ${
                          themeAccent === 'indigo'
                            ? 'border-indigo-500 bg-indigo-950/30'
                            : 'border-slate-800 bg-slate-900/60'
                        }`}
                      >
                        <div className="w-5 h-5 rounded bg-indigo-500 mb-1.5" />
                        <div className="font-medium text-white text-[11px]">Deep Iris</div>
                        <div className="font-mono text-[10px] text-slate-400">#6366F1</div>
                      </button>

                      <button
                        onClick={() => setThemeAccent('emerald')}
                        className={`p-2 rounded-lg border text-left transition-all ${
                          themeAccent === 'emerald'
                            ? 'border-emerald-500 bg-emerald-950/30'
                            : 'border-slate-800 bg-slate-900/60'
                        }`}
                      >
                        <div className="w-5 h-5 rounded bg-emerald-500 mb-1.5" />
                        <div className="font-medium text-white text-[11px]">Emerald Mint</div>
                        <div className="font-mono text-[10px] text-slate-400">#10B981</div>
                      </button>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between text-slate-300">
                      <div>
                        <span className="font-mono text-slate-400">typography.scale:</span> 1.25 (Major Third)
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">Fluid clamp()</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Contrast ratio vs #090A0F:</span>
                      <span className="text-emerald-400 font-semibold">12.4:1 (Passes AAA)</span>
                    </div>
                  </div>
                )}

                {activeTab === 'state' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800/80">
                      <span>Live State Dispatcher</span>
                      <span className="text-cyan-400 text-[11px]">WebSocket Stream Ingestion</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-slate-400 text-[11px]">
                        <span>payload.throughput</span>
                        <span className="text-white font-bold tabular-nums">{sampleStateCounter} req/s</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-cyan-500 h-full transition-all duration-300"
                          style={{ width: `${(sampleStateCounter / 220) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSampleStateCounter((prev) => Math.max(50, prev - 15))}
                        className="flex-1 py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-center transition-colors text-xs font-semibold"
                      >
                        - Throttle Stream
                      </button>
                      <button
                        onClick={() => setSampleStateCounter((prev) => Math.min(220, prev + 15))}
                        className="flex-1 py-1.5 px-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-center transition-colors text-xs font-semibold"
                      >
                        + Simulate Burst
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-500">
                      Zero frame drops under continuous high-frequency stream dispatch.
                    </div>
                  </div>
                )}

                {activeTab === 'a11y' && (
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800/80">
                      <span>WCAG 2.1 AA Compliance Audit</span>
                      <span className="text-emerald-400 font-mono text-[11px]">100% Passed</span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2 rounded bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-300">Color Contrast Standards</span>
                        <span className="text-emerald-400 font-semibold text-[11px]">AA / AAA Valid</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-300">Keyboard Focus Trapping</span>
                        <span className="text-emerald-400 font-semibold text-[11px]">Visible Rings</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-300">ARIA Landmarks & Semantics</span>
                        <span className="text-emerald-400 font-semibold text-[11px]">Strict</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-300">prefers-reduced-motion</span>
                        <span className="text-emerald-400 font-semibold text-[11px]">Respected</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer status summary */}
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Production Architecture Tested</span>
                  </span>
                  <span className="font-mono text-slate-500">Berlin · Ready for Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
