/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen, TrendingUp, User, Repeat, Zap, Award, ChevronDown } from 'lucide-react';
import CompoundingChart from './components/CompoundingChart';
import HabitLoop from './components/HabitLoop';
import IdentityModel from './components/IdentityModel';
import HabitBuilder from './components/HabitBuilder';

export default function App() {
  const sections = [
    {
      id: 'hook',
      icon: TrendingUp,
      title: "Imagine Two People",
      content: (
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl font-bold leading-tight">
            Both want to get fit. Both join the same gym. Both start on the same day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            <div className="p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl">
              <h3 className="text-emerald-400 font-black text-xl mb-4">Person A</h3>
              <p className="text-zinc-400 italic mb-2 tracking-tight uppercase font-bold text-sm">Action:</p>
              <p className="text-white text-lg">Improves by 1% every single day.</p>
              <div className="mt-6 text-4xl font-black text-emerald-400">37x Better</div>
              <p className="text-zinc-500 text-sm">After one year</p>
            </div>
            <div className="p-8 bg-rose-500/10 border border-rose-500/20 rounded-3xl">
              <h3 className="text-rose-400 font-black text-xl mb-4">Person B</h3>
              <p className="text-zinc-400 italic mb-2 tracking-tight uppercase font-bold text-sm">Action:</p>
              <p className="text-white text-lg">Declines by 1% every single day.</p>
              <div className="mt-6 text-4xl font-black text-rose-400">~0.03 (Near Zero)</div>
              <p className="text-zinc-500 text-sm">After one year</p>
            </div>
          </div>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
            Same starting point. Completely different outcomes. The only difference? Their daily habits.
          </p>
        </div>
      )
    },
    {
      id: 'concept-1',
      icon: Zap,
      title: "1. The Power of 1%",
      content: (
        <div className="space-y-8">
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
            James Clear calls this the <span className="text-white">aggregation of marginal gains</span>. 
            The lesson is that small changes are the only way meaningful transformation actually happens.
          </p>
          <CompoundingChart />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "The Obvious", detail: "Training, nutrition, bikes." },
              { label: "The Hidden", detail: "Massage gels, hand-washing techniques." },
              { label: "The Details", detail: "Bringing their own pillows to hotels." }
            ].map(item => (
              <div key={item.label} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                <h4 className="text-emerald-400 font-bold mb-2">{item.label}</h4>
                <p className="text-zinc-500 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'concept-2',
      icon: User,
      title: "2. Identity Based Habits",
      content: (
        <div className="space-y-8">
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Real sustainable change happens from the <span className="text-white">inside out</span>. 
            Every time you make a choice you are casting a vote for the type of person you want to become.
          </p>
          <IdentityModel />
          <div className="bg-zinc-900 overflow-hidden rounded-3xl border border-zinc-800">
            <div className="p-8 border-b border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-2 italic">Goal vs Identity</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-950 rounded-xl">
                  <span className="text-zinc-600 font-bold text-xs uppercase block mb-1">Outcome Based</span>
                  <p className="text-zinc-300">"The goal is to read a book."</p>
                </div>
                <div className="p-4 bg-emerald-500/10 rounded-xl">
                  <span className="text-emerald-500/50 font-bold text-xs uppercase block mb-1">Identity Based</span>
                  <p className="text-emerald-400 font-bold underline">"The goal is to become a reader."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'concept-3',
      icon: Repeat,
      title: "3. The Habit Loop",
      content: (
        <div className="space-y-8">
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Every single habit you have follows the exact same four step pattern. 
            Understanding this loop means every habit can be broken down and rebuilt.
          </p>
          <HabitLoop />
        </div>
      )
    },
    {
      id: 'concept-4',
      icon: Award,
      title: "4. The Four Laws Tool",
      content: (
        <div className="space-y-8">
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Make it Obvious. Make it Attractive. Make it Easy. Make it Satisfying. 
            Use the tool below to architect your next system.
          </p>
          <HabitBuilder />
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* Header / Hero */}
      <header className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black -z-10" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black uppercase tracking-widest mb-8">
            <BookOpen size={14} /> James Clear's Masterpiece
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 uppercase italic">
            Atomic<br />Habits
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-medium tracking-tight mb-12">
            How Tiny Changes Create Remarkable Results. A Visual Summary of the Bestselling Book.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('hook')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center gap-4 focus:outline-none"
          >
            <span className="text-zinc-600 font-bold uppercase tracking-widest text-xs group-hover:text-emerald-500 transition-colors">Begin Exploration</span>
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-800 group-hover:border-emerald-500 transition-colors text-zinc-600 group-hover:text-emerald-500">
              <ChevronDown className="animate-bounce" />
            </div>
          </motion.button>
        </motion.div>
      </header>

      {/* Content Sections */}
      <main className="max-w-6xl mx-auto px-6 py-24 space-y-32 md:space-y-64">
        {sections.map((section, idx) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500">
                <section.icon size={24} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">{section.title}</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {section.content}
            </motion.div>
          </section>
        ))}

        {/* Closing Takeaway */}
        <section className="py-24 border-t border-zinc-900 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 italic">The Big Takeaway</h2>
            <blockquote className="text-3xl md:text-5xl font-bold leading-tight mb-12">
              "You do not rise to the level of your goals. You <span className="text-emerald-400 italic underline underline-offset-8">fall to the level of your systems</span>."
            </blockquote>
            <p className="text-zinc-500 text-lg leading-relaxed mb-12">
              You are the product of your habits. And habits can be changed. 
              You are always one small habit away from starting to become the person you want to be.
            </p>
            <div className="h-px w-32 bg-emerald-500/20 mx-auto mb-12" />
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-white/5 py-24 px-6 text-center">
        <p className="text-zinc-600 font-bold uppercase tracking-widest text-xs mb-4">Summary of Atomic Habits by James Clear</p>
        <p className="text-zinc-500 text-sm max-w-lg mx-auto leading-relaxed">
          The goal is not to read a book. The goal is to become a reader. 
          Start your transformation today with 1% improvements.
        </p>
      </footer>
    </div>
  );
}
