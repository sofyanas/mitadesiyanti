import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, Lightbulb, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  { label: "Certified Math Educator", gradient: "from-amber-500 to-orange-600" },
  { label: "Digital Learning Specialist", gradient: "from-blue-500 to-indigo-600" },
  { label: "Kurikulum Merdeka Certified", gradient: "from-purple-500 to-pink-600" },
  { label: "Google Certified Educator", gradient: "from-emerald-500 to-teal-600" }
];

const skills = [
  "Problem-Solving",
  "Critical Thinking",
  "Digital Literacy",
  "Kurikulum Merdeka",
  "Interactive Teaching",
  "Student Mentoring",
  "Educational Technology",
  "Assessment Design"
];

const QualificationsSection = () => {
  return (
    <section id="qualifications" className="py-24 relative overflow-hidden">
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
            Credentials
          </span>
          <h2 className="section-title text-foreground mb-4">
            Kualifikasi & Sertifikasi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="text-primary-foreground" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Pendidikan</h3>
                  <p className="text-muted-foreground">Background akademis</p>
                </div>
              </div>
              
              <div className="mb-10 pl-4 border-l-2 border-accent/30">
                <h4 className="text-xl font-semibold text-foreground">S.Pd - Pendidikan Matematika</h4>
                <p className="text-muted-foreground">Universitas Pendidikan Indonesia</p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <BadgeCheck className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Sertifikasi</h3>
                  <p className="text-muted-foreground">Professional credentials</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Badge className={`bg-gradient-to-r ${cert.gradient} text-white px-4 py-2 text-sm font-medium border-0 shadow-md`}>
                      {cert.label}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Lightbulb className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Keahlian</h3>
                  <p className="text-muted-foreground">Core competencies</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="px-4 py-2 text-sm font-medium border-accent/30 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 rounded-full"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 border-t border-border/30">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-accent" size={24} />
                  <h4 className="text-lg font-bold text-foreground">Mata Pelajaran</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Matematika Wajib", "Matematika Peminatan", "Kalkulus", "Statistika", "Geometri", "Aljabar Linear"].map((subject) => (
                    <span key={subject} className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-muted-foreground">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
