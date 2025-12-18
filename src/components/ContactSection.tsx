import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mita.desiyanti@sman1cisaga.sch.id",
    href: "mailto:mita.desiyanti@sman1cisaga.sch.id",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@mitadesiyanti_official",
    href: "https://instagram.com/mitadesiyanti_official",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: "SMAN 1 Cisaga, Kab. Ciamis, Jawa Barat",
    href: "https://maps.google.com/?q=SMAN+1+Cisaga",
    gradient: "from-blue-500 to-indigo-600"
  }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi. Saya akan segera merespons pesan Anda."
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
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
            Contact
          </span>
          <h2 className="section-title text-foreground mb-4">
            Hubungi Saya
          </h2>
          <p className="section-subtitle">
            Punya pertanyaan atau ingin berdiskusi tentang pembelajaran matematika? Jangan ragu untuk menghubungi saya.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nama
                  </label>
                  <Input
                    placeholder="Nama lengkap"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="rounded-xl bg-background/50 border-border/50 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="rounded-xl bg-background/50 border-border/50 focus:border-accent"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input
                  placeholder="Topik pesan"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="rounded-xl bg-background/50 border-border/50 focus:border-accent"
                />
              </div>

              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Pesan
                </label>
                <Textarea
                  placeholder="Tulis pesan Anda..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="rounded-xl bg-background/50 border-border/50 focus:border-accent resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-accent to-primary text-accent-foreground hover:opacity-90 font-semibold py-6 rounded-full group"
              >
                Kirim Pesan
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-secondary/30 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      <info.icon className="text-white" size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-accent transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="glass rounded-3xl p-2 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8!2d108.5!3d-7.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTgnMDAuMCJTIDEwOMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: "1.25rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SMAN 1 Cisaga Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
