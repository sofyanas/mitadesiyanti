import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero dark:gradient-hero-dark">
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob w-96 h-96 bg-accent/20 top-20 -left-48" style={{ animationDelay: "0s" }} />
        <div className="blob w-80 h-80 bg-primary/20 bottom-20 -right-40" style={{ animationDelay: "-5s" }} />
        <div className="blob w-64 h-64 bg-purple-500/10 top-1/2 left-1/3" style={{ animationDelay: "-10s" }} />
      </div>

      {/* Floating Math Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["π", "∑", "∫", "∞", "√", "Δ"].map((symbol, index) => (
          <motion.div
            key={symbol}
            className="absolute text-primary-foreground/5 font-bold select-none"
            style={{
              fontSize: `${60 + index * 20}px`,
              top: `${10 + index * 15}%`,
              left: `${5 + index * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, index % 2 === 0 ? 10 : -10, 0],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8"
          >
            <Sparkles size={16} className="text-accent" />
            <span className="text-white/80 text-sm font-medium">
              Inovator Pembelajaran Digital
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Mita Desiyanti
            <span className="text-gradient">, S.Pd</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Guru Matematika di SMAN 1 Cisaga
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 py-7 text-lg pulse-glow transition-all duration-300 hover:scale-105 rounded-full"
            >
              <a href="https://mitamatematika.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Gamepad2 size={20} className="mr-2" />
                MitaMath EduGame
              </a>
            </Button>
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-slate-800 text-white hover:bg-slate-700 px-10 py-7 text-lg rounded-full backdrop-blur-sm font-semibold"
            >
              Explore My Work
            </Button>
            <Button
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-slate-800 text-white hover:bg-slate-700 px-10 py-7 text-lg rounded-full backdrop-blur-sm font-semibold"
            >
              Hubungi Saya
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
