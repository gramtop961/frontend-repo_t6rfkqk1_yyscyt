import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-30 transition-colors ${scrolled ? 'bg-white/80 backdrop-blur shadow-sm' : 'bg-white/40 backdrop-blur'} border-b border-white/20`}>
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900 text-lg">
          <span className="text-teal-600">Dr.</span> Fatuma Ayan Aden
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-slate-700 hover:text-teal-700 transition-colors text-sm"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-teal-600 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <button aria-label="Toggle Menu" className="md:hidden p-2 rounded-md border border-slate-200 bg-white/70" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-700 hover:text-teal-700">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
