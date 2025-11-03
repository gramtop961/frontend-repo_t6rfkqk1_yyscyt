import { Mail, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactFooter() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-teal-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <ContactCard />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </section>
  );
}

function ContactCard() {
  return (
    <div className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Let’s collaborate</h3>
      <p className="mt-2 text-slate-700 text-sm">
        For research collaborations, speaking engagements, or program partnerships, feel free to reach out.
      </p>
      <div className="mt-5 space-y-3">
        <a href="mailto:contact@example.com" className="flex items-center gap-2 text-teal-700 hover:underline">
          <Mail className="h-5 w-5" /> contact@example.com
        </a>
        <a href="#" className="flex items-center gap-2 text-teal-700 hover:underline">
          <Linkedin className="h-5 w-5" /> LinkedIn
        </a>
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:contact@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-600">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm text-slate-600">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm text-slate-600">Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
      </div>
      <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-teal-700">
        <Send className="h-4 w-4" /> Send Message
      </button>
    </form>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-600">© {year} Dr. Fatuma Ayan Aden. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#home" className="text-slate-600 hover:text-teal-700">Home</a>
          <a href="#publications" className="text-slate-600 hover:text-teal-700">Publications</a>
          <a href="#projects" className="text-slate-600 hover:text-teal-700">Projects</a>
        </div>
      </div>
    </footer>
  );
}
