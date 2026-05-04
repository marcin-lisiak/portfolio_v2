import React from 'react';
import { MoveRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="hero-content text-left">
          <div className="inline-block bg-white text-black px-6 py-2 border-4 border-black font-mono font-black uppercase tracking-widest mb-8 brutalist-shadow">
            Dostępny do współpracy
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8 uppercase">
            Marcin<br />
            <span className="text-accent italic">Lisiak</span>
          </h1>
          
          <div className="bg-secondary p-4 border-4 border-black mb-8 brutalist-shadow inline-block">
            <p className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
              Frontend Developer & Project Manager
            </p>
          </div>
          
          <p className="text-xl text-foreground font-medium max-w-xl leading-snug mb-10 border-l-8 border-primary pl-6">
            Tworzę nowoczesne interfejsy z React & TypeScript, sprawnie operuję narzędziami AI 
            i łączę programowanie z marketingiem oraz e-commerce.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a href="#projects" className="px-10 py-5 bg-primary text-white border-4 border-black font-black text-xl uppercase tracking-wider flex items-center gap-4 transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Projekty
              <MoveRight className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/marcin-lisiak-570691199/" target="_blank" rel="noopener" className="px-10 py-5 bg-white text-black border-4 border-black font-black text-xl uppercase tracking-wider transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
            <div className="w-80 h-80 bg-accent border-8 border-black flex items-center justify-center brutalist-shadow rotate-3 hover:rotate-0 transition-transform z-10 relative">
              <span className="text-[12rem] leading-none font-black text-white mix-blend-difference">ML</span>
            </div>
            <div className="absolute -bottom-12 -right-12 bg-secondary border-8 border-black p-6 brutalist-shadow -rotate-6 z-20 hover:rotate-0 transition-transform">
              <span className="text-4xl font-black text-black">AI-FIRST</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
