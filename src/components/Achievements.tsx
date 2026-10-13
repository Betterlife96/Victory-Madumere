import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Users, Zap, MessageSquareQuote, Gauge } from 'lucide-react';

export const Achievements: React.FC = () => {
  const icons = [
    <Users className="w-5 h-5 text-blue-400" key="users" />,
    <Zap className="w-5 h-5 text-indigo-400" key="zap" />,
    <MessageSquareQuote className="w-5 h-5 text-cyan-400" key="reviews" />,
    <Gauge className="w-5 h-5 text-emerald-400" key="gauge" />,
  ];

  return (
    <section className="py-12 border-b border-slate-900/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={item.label}
              className="p-6 rounded-xl bg-[#0d1017]/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    {icons[index]}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Verified Outcome
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums mb-2 group-hover:text-blue-400 transition-colors">
                  {item.metric}
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-2">
                  {item.label}
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-3 border-t border-slate-800/60">
                {item.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
