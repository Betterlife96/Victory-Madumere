import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, MapPin, Copy, Check, Send, FileText, Github, Linkedin, ExternalLink } from 'lucide-react';

interface ContactProps {
  onOpenCvModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCvModal }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormError('Please fill out all fields before sending.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);

    // Also trigger mailto window
    const subject = encodeURIComponent(`Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Victory,\n\n${formState.message}\n\nBest,\n${formState.name} (${formState.email})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Direct Contact details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
              05. Get In Touch
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              Let's build something <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">exceptional</span>.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
              I'm open to opportunities where I can help build thoughtful, scalable digital products and deliver exceptional frontend experiences.
            </p>

            {/* Direct Information Cards */}
            <div className="space-y-3 pt-4">
              <div className="p-4 rounded-xl bg-[#0d1017] border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-900/40 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1017] border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Location & Mobility</div>
                  <div className="text-sm font-semibold text-white">
                    {PERSONAL_INFO.location} · Available for DACH & Remote
                  </div>
                </div>
              </div>
            </div>

            {/* Social links & CV Download */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    alert('GitHub Profile URL can be added in src/data/portfolioData.ts or by contacting Victory at ' + PERSONAL_INFO.email)
                  }
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="GitHub Profile (Configure URL)"
                >
                  <Github className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    alert('LinkedIn Profile URL can be added in src/data/portfolioData.ts or by contacting Victory at ' + PERSONAL_INFO.email)
                  }
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="LinkedIn Profile (Configure URL)"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Dispatcher */}
          <div className="lg:col-span-6 w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1017] border border-slate-800/90 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">Send a Direct Note</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to open an immediate correspondence thread.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-slate-950 border border-emerald-900/40 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="text-base font-bold text-white">Opening Email Client...</div>
                  <p className="text-xs text-slate-400">
                    If your email client didn't open automatically, feel free to send directly to{' '}
                    <span className="text-blue-400 font-mono">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="py-1.5 px-3 text-xs font-mono rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Weber (Recruiter / Tech Lead)"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-blue-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-blue-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Project or Role Scope
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your team, tech stack, and what role you're looking to fill..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-blue-500 font-sans"
                    />
                  </div>

                  {formError && (
                    <div className="text-xs text-rose-400 font-mono">
                      {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Victory</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
