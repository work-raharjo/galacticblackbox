import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 star-field opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center border-glow">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              It's Time to Take Back<br />
              <span className="gradient-text glow-text">Control</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Your operations deserve a system that provides real-time eyes, 
              verified data, and complete situational awareness.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button variant="hero" size="xl">
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Schedule Demo
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Email</span>
                <a 
                  href="mailto:sales@gip.co.id" 
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  sales@gip.co.id
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Phone</span>
                <a 
                  href="tel:+6281554443241" 
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  +62 815-5444-3241
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Location</span>
                <span className="text-sm font-medium text-center">
                  Bandung, West Java, Indonesia
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
