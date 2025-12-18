import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star } from "lucide-react";

const achievements = [
  {
    year: "2023",
    title: "Guru Matematika Terbaik",
    organization: "SMAN 1 Cisaga",
    description: "Penghargaan atas dedikasi dan inovasi dalam pembelajaran matematika.",
    icon: Trophy,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    year: "2022",
    title: "Inovator Pembelajaran Digital",
    organization: "Dinas Pendidikan Kab. Ciamis",
    description: "Pengembangan platform pembelajaran interaktif berbasis teknologi.",
    icon: Medal,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    year: "2021",
    title: "Sertifikasi Kurikulum Merdeka",
    organization: "Kemendikbud RI",
    description: "Certified implementer of Kurikulum Merdeka for mathematics education.",
    icon: Award,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    year: "2020",
    title: "Best Teacher Award",
    organization: "MGMP Matematika Ciamis",
    description: "Penghargaan untuk kontribusi dalam pengembangan komunitas guru matematika.",
    icon: Star,
    gradient: "from-emerald-500 to-teal-600"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
            Pencapaian
          </span>
          <h2 className="section-title text-foreground mb-4">
            Achievements & Awards
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-accent md:-translate-x-1/2" />

            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year + achievement.title}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50" />
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="glass rounded-2xl p-6 card-hover card-glow">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                        <achievement.icon className="text-white" size={24} />
                      </div>
                      <span className="text-3xl font-bold text-gradient">{achievement.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-3">
                      {achievement.organization}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
