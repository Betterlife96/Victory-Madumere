import React from 'react';
import { X, Printer, Download, CheckCircle2, FileText, MapPin, Mail, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, ACHIEVEMENTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenUploadGuide?: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onOpenUploadGuide }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Attempt download of the static PDF file
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.cvPath;
    link.download = 'Victory_Madumere_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0d1017] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/80 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span id="cv-modal-title" className="text-sm font-bold text-white">
              Curriculum Vitae — Victory Madumere
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:text-white rounded-lg transition-colors"
              title="Print CV or save as PDF via system dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <a
              href="/Victory_Madumere_CV.pdf"
              download="Victory_Madumere_CV.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              title="Download file directly"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Direct PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 transition-colors ml-1"
              aria-label="Close CV modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Informational banner on PDF file location */}
        <div className="px-6 py-2.5 bg-blue-950/30 border-b border-blue-900/30 text-xs text-blue-300 flex items-center justify-between">
          <div className="flex items-center gap-1.5 truncate">
            <span className="font-semibold">Official PDF:</span>
            <span>Ready for immediate download at <code className="font-mono text-white">/Victory_Madumere_CV.pdf</code></span>
          </div>
          <a
            href="/Victory_Madumere_CV.pdf"
            download="Victory_Madumere_CV.pdf"
            className="underline text-blue-400 hover:text-blue-200 shrink-0 ml-2 font-medium"
          >
            Download PDF Now
          </a>
        </div>

        {/* Modal Printable CV Sheet */}
        <div className="p-8 sm:p-10 space-y-8 overflow-y-auto bg-slate-950 text-slate-200 font-sans print:p-0 print:bg-white print:text-black">
          {/* Header Block */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="text-base font-semibold text-blue-400 print:text-blue-700 mt-0.5">
                  {PERSONAL_INFO.title}
                </div>
                <div className="text-xs font-mono text-slate-400 print:text-gray-600 mt-1">
                  {PERSONAL_INFO.subtitle}
                </div>
              </div>
              <div className="text-xs font-mono text-slate-300 print:text-black space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 print:text-gray-800 mb-2 font-bold">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              Frontend-focused Software Engineer with 5+ years of experience developing scalable web applications, e-commerce platforms, and digital products using React, TypeScript, JavaScript, and Next.js. Strong background in frontend architecture, UX/UI engineering, reusable component systems, API integration, and performance optimization. Experienced in building responsive, accessible interfaces and supporting complex e-commerce workflows. Combines full-stack engineering expertise with a product-focused approach to delivering intuitive, maintainable, and high-performance digital experiences.
            </p>
          </div>

          {/* Key Achievements */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 print:text-gray-800 mb-3 font-bold">
              Selected Performance Metrics
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.label} className="p-3 rounded-lg bg-slate-900 border border-slate-800 print:border-gray-300 print:bg-gray-50">
                  <div className="text-xl font-bold font-mono text-white print:text-black">{a.metric}</div>
                  <div className="text-[11px] text-slate-400 print:text-gray-600 mt-0.5">{a.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 print:text-gray-800 mb-4 font-bold">
              Work Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={`${exp.company}-${exp.role}`} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="font-bold text-white print:text-black text-sm sm:text-base">
                        {exp.role}
                      </span>
                      <span className="text-slate-500 print:text-gray-600 mx-1.5">|</span>
                      <span className="font-semibold text-blue-400 print:text-blue-700 text-sm">
                        {exp.company}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-slate-400 print:text-gray-600">
                      {exp.location} · {exp.period}
                    </div>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 print:text-gray-800 pl-4 list-disc">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 print:text-gray-800 mb-2 font-bold">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="font-bold text-white print:text-black">
                  {PERSONAL_INFO.education.degree}
                </span>
                <span className="text-slate-500 print:text-gray-600 mx-1.5">·</span>
                <span className="text-slate-300 print:text-gray-800">
                  {PERSONAL_INFO.education.institution}, {PERSONAL_INFO.education.location}
                </span>
              </div>
              <div className="font-mono text-slate-400 print:text-gray-600 text-xs">
                {PERSONAL_INFO.education.period}
              </div>
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 print:text-gray-800 mb-3 font-bold">
              Technical Skill Matrix
            </h2>
            <div className="space-y-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="font-semibold text-slate-300 print:text-black sm:w-48 shrink-0">
                    {cat.category}:
                  </span>
                  <span className="text-slate-400 print:text-gray-700">
                    {cat.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
