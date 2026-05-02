import { motion } from 'motion/react';

export default function IdentityModel() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-zinc-900 rounded-3xl border border-zinc-800" id="identity-model-container">
      <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center" id="identity-circles-wrapper">
        {/* Outcome Layer */}
        <motion.div 
          className="absolute w-full h-full rounded-full border-2 border-zinc-700 bg-zinc-800/20 flex items-start justify-center pt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          id="layer-outcomes"
        >
          <span className="text-zinc-500 font-bold tracking-widest text-xs uppercase">1. Outcomes</span>
        </motion.div>

        {/* Process Layer */}
        <motion.div 
          className="absolute w-2/3 h-2/3 rounded-full border-2 border-zinc-600 bg-zinc-700/30 flex items-start justify-center pt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          id="layer-processes"
        >
          <span className="text-zinc-400 font-bold tracking-widest text-xs uppercase">2. Processes</span>
        </motion.div>

        {/* Identity Layer */}
        <motion.div 
          className="absolute w-1/3 h-1/3 rounded-full bg-emerald-500 flex items-center justify-center text-center shadow-2xl shadow-emerald-500/20"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          id="layer-identity"
        >
          <span className="text-zinc-900 font-black tracking-tight text-sm uppercase px-4 leading-tight">3. Identity</span>
        </motion.div>
      </div>

      <div className="mt-12 text-center max-w-md" id="identity-model-text">
        <h4 className="text-xl font-bold text-white mb-2">Outcome vs. Identity</h4>
        <p className="text-zinc-400 leading-relaxed">
          Most people focus on <span className="text-white italic">what</span> they want to achieve (Outcomes). 
          The best way to change is to focus on <span className="text-emerald-400 italic">who</span> you want to become (Identity).
        </p>
      </div>
    </div>
  );
}
