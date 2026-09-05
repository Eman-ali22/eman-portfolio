import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface ContactProps {
  profile: PortfolioProfile;
  darkMode?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Direct Connection Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest">
              Let's Connect
            </div>

            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Have a project or opportunity in mind?
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I am always interested in discussing greenfield architectures, technical leadership, consulting, or full-time opportunities.
            </p>

            {/* Frosted Glass Contact Details Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl space-y-5">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Direct Email
                </div>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-base sm:text-lg font-semibold text-white hover:text-blue-400 transition-colors truncate"
                  >
                    {profile.email}
                  </a>
                  <button
                    id="copy-email-btn"
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {profile.phone && (
                <div className="space-y-1 pt-4 border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Direct Phone / WhatsApp
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-base sm:text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {profile.phone}
                    </a>
                    <a
                      href={`tel:${profile.phone}`}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-all"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              )}

              <div className="space-y-1 pt-4 border-t border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Address & Location
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-200">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div>{profile.address || profile.location}</div>
                    <div className="text-xs text-gray-400">{profile.location}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-1 pt-4 border-t border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Response SLA
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Typically responds within 24 hours</span>
                </div>
              </div>

              {profile.socials && profile.socials.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Profiles & Research
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profile.socials.map((s) => (
                      <a
                        key={s.platform}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-gray-300 hover:text-white transition-all flex items-center gap-1.5"
                      >
                        <span>{s.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Frosted Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
              {formSubmitted ? (
                <div
                  id="contact-form-success"
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-gray-400 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name || 'there'}. I have received your message and will review it promptly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Send a Direct Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      id="contact-subject-input"
                      type="text"
                      placeholder="Project Exploration / Senior Architecture Role"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Message Details <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="contact-message-input"
                      required
                      rows={4}
                      placeholder="Tell me about your project timeline, requirements, or team structure..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-y"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
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
