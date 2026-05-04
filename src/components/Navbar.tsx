import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O mnie', href: '#about' },
    { name: 'Skille', href: '#skills' },
    { name: 'Projekty', href: '#projects' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 border-b-4 border-black ${isScrolled ? 'bg-white py-2' : 'bg-white py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-3xl font-black tracking-tighter text-black uppercase border-4 border-black px-4 py-1 bg-secondary brutalist-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
          Marcin.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-black uppercase tracking-tight text-black hover:bg-accent hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-6 py-2 bg-primary text-white border-2 border-black font-black uppercase text-sm brutalist-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
            Kontakt
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 border-4 border-black bg-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[99] flex flex-col items-center justify-center gap-8 md:hidden border-8 border-black">
          <button
            className="absolute top-10 right-10 text-4xl font-black"
            onClick={() => setIsMenuOpen(false)}
          >
            X
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-black uppercase text-black hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="px-10 py-4 bg-primary text-white border-4 border-black text-2xl font-black uppercase"
          >
            Kontakt
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
