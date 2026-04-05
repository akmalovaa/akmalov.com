import React from 'react';
import Link from '@docusaurus/Link';

export default function HomeHero() {
  return (
    <header className="relative overflow-hidden py-28 md:py-36">
      {/* Glow effects */}
      <div className="absolute top-[-200px] left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.07] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-150px] right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/[0.05] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <p className="text-cyan-400 font-medium text-sm tracking-widest uppercase mb-6">
          Личный блог | заметки
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
            Записи по
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            DevOps, Linux, Python  &amp; AI
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Полезные материалы, часто используемые команды, инструкции и готовые решения из практики
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/blog"
            className="group px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all duration-300 no-underline hover:no-underline hover:text-black shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
          >
            Читать блог
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/docs/intro"
            className="px-8 py-3.5 border border-white/15 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 rounded-xl font-semibold transition-all duration-300 no-underline hover:no-underline hover:bg-cyan-500/[0.05]"
          >
            База знаний
          </Link>
        </div>
      </div>
    </header>
  );
}
