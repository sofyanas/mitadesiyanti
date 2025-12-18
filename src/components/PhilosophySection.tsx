import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      {/* Floating Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-20 left-20 text-9xl font-bold text-foreground">∞</div>
        <div className="absolute bottom-20 right-20 text-9xl font-bold text-foreground">√</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] font-bold text-foreground">π</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
            Philosophy
          </span>
          <h2 className="section-title text-foreground mb-4">
            Filosofi Mengajar Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-3xl p-10 md:p-14 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="absolute top-8 left-8 text-accent/20" size={64} />
            
            <div className="space-y-6 text-foreground leading-relaxed relative z-10">
              <p className="text-xl font-light">
                <span className="font-semibold text-gradient">Matematika bukan tentang angka—ia adalah tentang pola, logika, dan cara berpikir.</span> Saya percaya setiap siswa memiliki potensi untuk memahami dan mencintai matematika.
              </p>

              <p className="text-lg text-muted-foreground">
                Dalam setiap pembelajaran, saya menghubungkan konsep matematika dengan situasi kehidupan nyata. Mengapa kita belajar persamaan kuadrat? Karena ia membantu kita memahami lintasan bola yang dilempar, profit bisnis, hingga desain arsitektur.
              </p>

              <p className="text-lg text-muted-foreground">
                Teknologi adalah alat, bukan pengganti guru. Saya mengintegrasikan platform digital, visualisasi interaktif, dan gamifikasi untuk membuat pembelajaran lebih engaging.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <Sparkles className="text-accent" size={24} />
                <p className="text-xl font-medium text-gradient">
                  "Jangan takut membuat kesalahan. Dalam matematika, setiap kesalahan adalah langkah menuju pemahaman yang lebih dalam."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
