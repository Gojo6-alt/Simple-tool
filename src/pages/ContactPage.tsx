import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { TopAdSlot, BottomAdSlot } from '../components/ads';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Suggest a Tool');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
      <SEOHead
        title="Contact & Feedback – IndiaToolbox"
        description="Have a tool suggestion, report a calculation discrepancy, or have questions? Contact the IndiaToolbox team."
        canonicalPath="/contact"
      />

      <TopAdSlot />

      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono block mb-1">
          Support & Inquiries
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Contact & Feedback
        </h1>
        <p className="text-sm text-neutral-300 mt-1">
          Have an idea for a new tool? Or spotted a formula discrepancy? Let us know.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 bg-[#0E101A] border border-purple-500/30 rounded-2xl text-center space-y-4 shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)]">
          <div className="w-12 h-12 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Message Received</h2>
          <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
            Thank you, {name}! Your message regarding &ldquo;{subject}&rdquo; has been noted. We review user feedback to prioritize new tools.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setMessage('');
            }}
            className="mt-2 px-5 py-2.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all cursor-pointer shadow-[0_0_15px_-3px_rgba(168,85,247,0.5)]"
          >
            Send Another Note
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-[#0E101A]/90 p-6 sm:p-8 rounded-2xl border border-white/[0.1] space-y-4 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rohan Sharma"
                className="w-full px-3.5 py-2.5 bg-[#121422] border border-white/[0.12] rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rohan@example.com"
                className="w-full px-3.5 py-2.5 bg-[#121422] border border-white/[0.12] rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              Subject
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#121422] border border-white/[0.12] rounded-xl text-sm text-white focus:outline-none focus:border-purple-500"
            >
              <option value="Suggest a Tool" className="bg-[#121422] text-white">Suggest a New Tool</option>
              <option value="Report a Bug" className="bg-[#121422] text-white">Report a Bug / Calculation Discrepancy</option>
              <option value="General Feedback" className="bg-[#121422] text-white">General Feedback</option>
              <option value="Partnership / Sponsorship" className="bg-[#121422] text-white">Partnership / Direct Sponsorship</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what tool you'd like added, or describe any issue you encountered..."
              className="w-full px-3.5 py-2.5 bg-[#121422] border border-white/[0.12] rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 font-mono"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_-3px_rgba(168,85,247,0.5)]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Message</span>
          </button>
        </form>
      )}

      <BottomAdSlot />
    </div>
  );
};
