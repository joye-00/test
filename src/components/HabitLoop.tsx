import { motion } from 'motion/react';
import { ArrowRight, RefreshCw, Zap, Heart, CheckCircle2 } from 'lucide-react';

const steps = [
  { id: 'cue', name: '1. Cue', icon: Zap, description: 'The trigger that starts the behavior.', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { id: 'craving', name: '2. Craving', icon: Heart, description: 'The motivational force behind every habit.', color: 'text-pink-400', bg: 'bg-pink-400/10' },
  { id: 'response', name: '3. Response', icon: RefreshCw, description: 'The actual habit or action you take.', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { id: 'reward', name: '4. Reward', icon: CheckCircle2, description: 'The end goal that satisfies your craving.', color: 'text-green-400', bg: 'bg-green-400/10' },
];

export default function HabitLoop() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8" id="habit-loop-grid">
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`p-6 rounded-2xl border border-white/5 ${step.bg} relative flex flex-col items-center text-center`}
          id={`habit-step-${step.id}`}
        >
          <div className={`p-4 rounded-full mb-4 ${step.color} bg-white/5`}>
            <step.icon size={32} />
          </div>
          <h3 className={`font-bold text-xl mb-2 ${step.color}`}>{step.name}</h3>
          <p className="text-gray-400 text-sm">{step.description}</p>
          
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-gray-700">
              <ArrowRight size={24} />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
