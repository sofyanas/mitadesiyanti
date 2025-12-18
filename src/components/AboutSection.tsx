import { motion } from "framer-motion";
import { Clock, GraduationCap, Award, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    title: "10+ Tahun",
    subtitle: "Mengajar",
    description: "Pengalaman mengajar matematika"
  },
  {
    icon: GraduationCap,
    title: "500+",
    subtitle: "Siswa",
    description: "Lulus dengan nilai memuaskan"
  },
  {
    icon: Award,
    title: "Certified",
    subtitle: "Educator",
    description: "Sertifikasi guru profesional"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
            Tentang Saya
          </span>
          <h2 className="section-title text-foreground mb-4">
            Passion dalam Mengajar
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-accent/20 animate-pulse" />
              <div className="absolute -inset-8 rounded-full border border-accent/10" />
              
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-accent via-accent/80 to-primary p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Mita Desiyanti" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-2 -right-2 glass px-6 py-3 rounded-full shadow-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-accent" size={20} />
                  <span className="font-semibold text-foreground text-sm">SMAN 1 Cisaga</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
              Membuat Matematika Menjadi 
              <span className="text-gradient"> Menyenangkan</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Saya percaya bahwa matematika adalah bahasa universal yang dapat membuka 
              pintu menuju pemahaman dunia di sekitar kita. Dengan pendekatan yang 
              interaktif dan kontekstual, saya berusaha membuat setiap konsep matematika 
              menjadi relevan dan menarik bagi siswa.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Filosofi mengajar saya berpusat pada pembelajaran berbasis masalah, 
              di mana siswa tidak hanya menghafal rumus, tetapi memahami aplikasinya dalam kehidupan nyata.
            </p>
            
            <a 
              href="#qualifications" 
              className="inline-flex items-center gap-2 text-accent font-semibold group"
            >
              Lihat Kualifikasi Saya
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="group glass rounded-2xl p-8 text-center card-hover card-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <item.icon className="text-accent-foreground" size={28} />
              </div>
              <div className="text-4xl font-bold text-foreground mb-1">{item.title}</div>
              <div className="text-lg font-semibold text-accent mb-2">{item.subtitle}</div>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
