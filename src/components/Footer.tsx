import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/mitadesiyanti_official", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mita.desiyanti@sman1cisaga.sch.id", label: "Email" }
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero dark:gradient-hero-dark" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gradient mb-3">Mita Desiyanti</h3>
            <p className="text-primary-foreground/70">S.Pd - Guru Matematika SMAN 1 Cisaga</p>
            <p className="text-primary-foreground/50 text-sm mt-2">Inspiring students through innovative mathematics education.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-primary-foreground mb-4">Connect With Me</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 glass-dark rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <h5 className="text-sm font-medium text-primary-foreground mb-2">Subscribe for Math Tips</h5>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-full glass-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-primary-foreground/40 text-primary-foreground"
              />
              <button className="px-5 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Mita Desiyanti. Made with 
            <Heart size={14} className="text-accent fill-accent" /> 
            by <a href="https://sfyn.dev" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">sfyn.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
