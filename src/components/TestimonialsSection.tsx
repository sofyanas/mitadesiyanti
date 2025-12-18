import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Rizky Pratama",
    class: "XII IPA 1",
    text: "Ibu Mita membuat matematika jadi fun dan mudah dipahami! Dulu saya takut sama kalkulus, sekarang malah jadi mata pelajaran favorit.",
    rating: 5
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    class: "XI IPA 2",
    text: "Cara mengajar Bu Mita sangat interaktif. Beliau selalu menghubungkan materi dengan kehidupan sehari-hari, jadi lebih mudah diingat.",
    rating: 5
  },
  {
    id: 3,
    name: "Ahmad Fauzan",
    class: "XII IPA 3",
    text: "Berkat bimbingan Bu Mita, nilai UN Matematika saya naik drastis! Beliau sabar banget menjelaskan sampai kita benar-benar paham.",
    rating: 5
  },
  {
    id: 4,
    name: "Dewi Lestari",
    class: "XI IPA 1",
    text: "Quiz interaktif dan video pembelajaran dari Bu Mita sangat membantu. Belajar matematika jadi nggak membosankan lagi!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
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
            Testimonial
          </span>
          <h2 className="section-title text-foreground mb-4">
            Kata Siswa Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                
                <Quote className="text-accent/20 mb-8" size={64} />
                
                <p className="text-xl md:text-2xl text-foreground mb-10 leading-relaxed font-light">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].class}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-accent fill-accent" size={22} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full w-12 h-12 border-border/50 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              >
                <ChevronLeft size={20} />
              </Button>

              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-accent w-10"
                        : "bg-muted hover:bg-muted-foreground w-2"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full w-12 h-12 border-border/50 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
