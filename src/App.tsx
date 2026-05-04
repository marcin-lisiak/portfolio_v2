import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { EtherealShadow } from './components/ui/etheral-shadow';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent selection:text-white font-sans overflow-x-hidden">

      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <EtherealShadow
          color="rgba(255, 51, 51, 0.8)"
          animation={{ scale: 50, speed: 50 }}
          noise={{ opacity: 0.2, scale: 1.0 }}
          sizing="fill"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-background/20"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* About Section */}
        <section id="about" className="py-32 container mx-auto px-6">
          <div className="max-w-5xl border-8 border-black p-12 bg-white brutalist-shadow">
            <p className="inline-block bg-accent text-white px-4 py-1 font-mono text-sm mb-6 uppercase border-2 border-black">
               // O mnie
            </p>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none uppercase">
              Łączę <span className="text-primary">kod</span> i <span className="text-accent italic">biznes</span>.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-xl font-bold leading-tight uppercase">
              <p className="border-l-8 border-primary pl-6">
                Jestem Marcinem — frontend developerem i project managerem. Specjalizuję się w budowaniu interfejsów w React i TypeScript, wykorzystując najnowsze narzędzia AI do optymalizacji pracy.
              </p>
              <p className="border-l-8 border-accent pl-6">
                Moje doświadczenie w marketingu i e-commerce pozwala mi patrzeć na projekty nie tylko przez pryzmat kodu, ale przede wszystkim potrzeb użytkownika i celów biznesowych.
              </p>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="py-32 container mx-auto px-6 text-center">
          <div className="bg-secondary border-8 border-black p-20 brutalist-shadow relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] pointer-events-none"></div>

            <p className="inline-block bg-black text-white px-4 py-1 font-mono text-sm mb-8 uppercase tracking-widest">
              // Get In Touch
            </p>
            <h2 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none uppercase">
              Zróbmy coś <span className="text-accent italic">wielkiego</span>.
            </h2>
            <p className="text-black text-2xl font-black max-w-3xl mx-auto mb-12 uppercase leading-none">
              Szukasz developera, który rozumie biznes, lub managera, który zna technologię? Napisz do mnie.
            </p>
            <a href="mailto:marcin@lisiak.pl" className="inline-block px-16 py-6 bg-primary text-white border-4 border-black font-black text-3xl uppercase tracking-wider hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Wyślij Email
            </a>
          </div>
        </section>
      </div>

      <footer className="relative z-10 py-16 border-t-8 border-black bg-black text-white font-mono text-sm uppercase">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-bold">© 2025 Marcin Lisiak. NO REASON FOR ROUNDED CORNERS.</p>
          <div className="flex gap-12 font-black">
            <a href="#" className="hover:text-secondary transition-colors underline decoration-4 underline-offset-8">GitHub</a>
            <a href="#" className="hover:text-accent transition-colors underline decoration-4 underline-offset-8">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
