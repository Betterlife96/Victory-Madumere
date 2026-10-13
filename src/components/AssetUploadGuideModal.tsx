import React from 'react';
import { X, Folder, FileUp, Globe, Terminal, CheckCircle2, Copy } from 'lucide-react';

interface AssetUploadGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssetUploadGuideModal: React.FC<AssetUploadGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0d1017] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950 shrink-0">
          <div className="flex items-center gap-2">
            <Folder className="w-4 h-4 text-blue-400" />
            <span id="guide-modal-title" className="text-sm font-bold text-white">
              Portfolio Customization & Deployment Handbook
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-xs sm:text-sm text-slate-300">
          {/* Step 1: Uploading PDF CV */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <FileUp className="w-4 h-4 text-blue-400" />
              <span>1. How to attach your official PDF CV</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Place your PDF resume file in the public folder at:
            </p>
            <div className="font-mono text-xs bg-slate-950 p-2.5 rounded border border-slate-800 text-blue-300 flex items-center justify-between">
              <span>/public/cv/Victory_Madumere_CV.pdf</span>
            </div>
            <p className="text-slate-400 text-xs">
              Once placed there, all "Download CV" buttons in the navigation, hero, and contact sections will automatically serve your direct PDF. The built-in "Print / Save PDF" modal already provides an immediate high-resolution digital printout.
            </p>
          </div>

          {/* Step 2: Replacing Project Screenshots */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Folder className="w-4 h-4 text-indigo-400" />
              <span>2. How to replace conceptual UI previews with real screenshots</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              To swap the current conceptual UI architecture mockups with your real production screenshots:
            </p>
            <ol className="list-decimal pl-4 space-y-1 text-xs text-slate-300">
              <li>Save your screenshots into <code className="font-mono text-white">/public/projects/</code> (e.g., <code className="font-mono text-white">analytics.png</code>, <code className="font-mono text-white">ecommerce.png</code>, <code className="font-mono text-white">sentiment.png</code>).</li>
              <li>Open <code className="font-mono text-white">src/data/portfolioData.ts</code>.</li>
              <li>Update the <code className="font-mono text-blue-300">image</code> property of each project in <code className="font-mono text-white">FEATURED_PROJECTS</code> to point to your new file path (e.g. <code className="font-mono text-blue-300">'/projects/analytics.png'</code>).</li>
            </ol>
          </div>

          {/* Step 3: Deployment Instructions */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>3. Deploying to Vercel, Netlify, or Custom Domain</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              This portfolio is configured as a high-performance standard Vite + React + TypeScript project with Tailwind CSS:
            </p>
            <div className="space-y-1.5 font-mono text-xs bg-slate-950 p-3 rounded border border-slate-800 text-slate-300">
              <div className="text-slate-500"># Test build locally</div>
              <div>npm run build</div>
              <div className="text-slate-500 mt-2"># Deploy with Vercel CLI (or push to GitHub & import into Vercel)</div>
              <div>npx vercel</div>
            </div>
            <p className="text-slate-400 text-xs">
              Vercel and Netlify will automatically detect Vite, run <code className="font-mono text-white">npm run build</code>, and serve the <code className="font-mono text-white">dist</code> directory with global HTTPS.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-950 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
