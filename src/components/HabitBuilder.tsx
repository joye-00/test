import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, Sparkles, Zap, Trophy, Trash2 } from 'lucide-react';

type HabitMode = 'build' | 'break';

export default function HabitBuilder() {
  const [mode, setMode] = useState<HabitMode>('build');
  const [habit, setHabit] = useState('');

  const buildLaws = [
    { id: 1, law: 'Make it Obvious', description: 'Design your environment to trigger the habit.', icon: Search },
    { id: 2, law: 'Make it Attractive', description: 'Pair it with something you enjoy.', icon: Sparkles },
    { id: 3, law: 'Make it Easy', description: 'Start with the 2-minute rule.', icon: Zap },
    { id: 4, law: 'Make it Satisfying', description: 'Give yourself an immediate reward.', icon: Trophy },
  ];

  const breakLaws = [
    { id: 1, law: 'Make it Invisible', description: 'Remove the cues from your environment.', icon: Search }, // Inverting Icons/Titles
    { id: 2, law: 'Make it Unattractive', description: 'Highlight the benefits of avoiding it.', icon: Sparkles },
    { id: 3, law: 'Make it Difficult', description: 'Add friction between you and the action.', icon: Zap },
    { id: 4, law: 'Make it Unsatisfying', description: 'Create a cost or accountability.', icon: Trophy },
  ];

  const currentLaws = mode === 'build' ? buildLaws : breakLaws;

  return (
    <div className="w-full bg-zinc-900/50 rounded-3xl border border-white/5 p-6 md:p-10" id="habit-builder-main">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10" id="habit-builder-header">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">Habit Architect</h2>
          <p className="text-zinc-500">Apply the 4 Laws of Behavior Change to any habit.</p>
        </div>
        
        <div className="flex bg-zinc-950 p-1 rounded-xl border border-white/5" id="mode-selector">
          <button 
            onClick={() => setMode('build')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${mode === 'build' ? 'bg-emerald-500 text-zinc-900' : 'text-zinc-500 hover:text-white'}`}
            id="mode-build-btn"
          >
            <Plus size={18} /> <span className="font-bold">Build</span>
          </button>
          <button 
            onClick={() => setMode('break')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${mode === 'break' ? 'bg-rose-500 text-white' : 'text-zinc-500 hover:text-white'}`}
            id="mode-break-btn"
          >
            <Minus size={18} /> <span className="font-bold">Break</span>
          </button>
        </div>
      </div>

      <div className="mb-10" id="habit-input-group">
        <label className="block text-xs font-black text-zinc-500 uppercase tracking-widest mb-3">
          {mode === 'build' ? 'Which habit do you want to start?' : 'Which habit do you want to stop?'}
        </label>
        <input 
          type="text"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          placeholder={mode === 'build' ? "e.g. Read 10 pages, Exercise daily..." : "e.g. Scrolling phone in bed, Smoking..."}
          className="w-full bg-transparent border-b-2 border-zinc-800 focus:border-emerald-500 pb-2 text-2xl font-bold text-white outline-none transition-all placeholder:text-zinc-700"
          id="habit-name-input"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="laws-grid">
        <AnimatePresence mode="wait">
          {currentLaws.map((law, idx) => (
            <motion.div 
              key={`${mode}-${law.id}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-950/50 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
              id={`law-card-${law.id}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl ${mode === 'build' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                  <law.icon size={24} />
                </div>
                <h4 className="font-black text-white text-lg tracking-tight leading-none italic uppercase">
                  Law {law.id}: {law.law}
                </h4>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                {law.description}
              </p>
              
              <div className="relative group">
                <textarea 
                  placeholder={mode === 'build' ? "How will you do this?" : "How will you prevent this?"}
                  className="w-full bg-zinc-950 p-3 rounded-lg border border-zinc-800 text-sm text-zinc-300 min-h-[80px] focus:border-zinc-600 outline-none transition-all"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-10 pt-10 border-t border-zinc-800 flex justify-end" id="habit-builder-footer">
        <button 
          onClick={() => { setHabit(''); }}
          className="flex items-center gap-2 text-zinc-600 hover:text-rose-400 font-bold transition-colors"
          id="clear-btn"
        >
          <Trash2 size={18} /> Clear
        </button>
      </div>
    </div>
  );
}
