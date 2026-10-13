import React from 'react';
import { ArrowUp, FileText, Settings, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
  onOpenUploadGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal, onOpenUploadGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#06070a] py-12 text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Location */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-bold text-white tracking-tight text-sm">
              Victory Madumere
            </span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span>Senior Frontend Developer</span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <span className="text-slate-500 font-mono">Berlin, Germany</span>
          </div>

          {/* Quick utility links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <a
              href="/Victory_Madumere_CV.pdf"
              download="Victory_Madumere_CV.pdf"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Download CV (PDF)</span>
            </a>
            <span className="text-slate-700">·</span>
            <button
              onClick={onOpenUploadGuide}
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Settings className="w-3.5 h-3.5 text-slate-500" />
              <span>Customization Guide</span>
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Victory Madumere. Built with React 19, TypeScript & Tailwind CSS.
          </div>
          <div>
            Performance, Accessibility (WCAG 2.1 AA) & Scalability.
          </div>
        </div>
      </div>
    </footer>
  );
};
