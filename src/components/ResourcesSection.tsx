import { motion } from "framer-motion";
import { FileQuestion, Video, FileText, BookOpen, Download, ExternalLink, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: Gamepad2,
    title: "Permainan Edukasi",
    description: "Game matematika interaktif hasil digitalisasi pembelajaran untuk belajar sambil bermain.",
    link: "https://mitamatematika.vercel.app/",
    gradient: "from-rose-500 to-red-600",
    isExternal: true
  },
  {
    icon: FileQuestion,
    title: "Interactive Quizzes",
    description: "Kumpulan kuis interaktif untuk menguji pemahaman materi matematika dengan feedback instan.",
    link: "#",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: Video,
    title: "Lesson Videos",
    description: "Video pembelajaran lengkap dengan penjelasan step-by-step dan contoh soal terapan.",
    link: "#",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: FileText,
    title: "Problem Sets",
    description: "Bank soal latihan terstruktur dari tingkat dasar hingga olimpiade matematika.",
    link: "#",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: BookOpen,
    title: "Exam Preparation",
    description: "Panduan lengkap persiapan ujian dengan tips, trik, dan strategi menjawab soal.",
    link: "#",
    gradient: "from-emerald-500 to-teal-600"
  }
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
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
            Resources
          </span>
          <h2 className="section-title text-foreground mb-4">
            Teaching Resources
          </h2>
          <p className="section-subtitle">
            Akses berbagai materi pembelajaran yang telah saya kembangkan untuk mendukung proses belajar Anda.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass rounded-2xl p-6 h-full card-hover relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 bg-gradient-to-br ${resource.gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <resource.icon className="text-white" size={26} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {resource.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex gap-2 mt-auto">
                  {resource.isExternal ? (
                    <Button 
                      asChild
                      size="sm"
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 rounded-full"
                    >
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Mainkan
                      </a>
                    </Button>
                  ) : (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300 rounded-full"
                      >
                        <Download size={16} className="mr-2" />
                        Download
                      </Button>
                      <Button variant="ghost" size="icon" className="shrink-0 rounded-full hover:bg-accent/10">
                        <ExternalLink size={16} />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
