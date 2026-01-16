import { motion } from "framer-motion";
import { Satellite, Cloud, Shield, Zap, Globe, Lock } from "lucide-react";
import systemDiagram from "@/assets/system-diagram.jpg";

const Solution = () => {
  const features = [
    {
      icon: Satellite,
      title: "Starlink Integration",
      description: "Always-on satellite connectivity ensuring your operations stay visible from anywhere.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based Storage",
      description: "Secure cloud backup ensures every second of footage is preserved and accessible.",
    },
    {
      icon: Shield,
      title: "AI-Driven Surveillance",
      description: "Smart detection and automated alerts powered by advanced machine learning.",
    },
    {
      icon: Zap,
      title: "SD-WAN Technology",
      description: "Advanced networking ensures optimal bandwidth and failover protection.",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Monitor your entire fleet from anywhere in the world with real-time dashboards.",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with international maritime standards.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="solution">
      <div className="absolute inset-0 star-field opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow mb-6">
              <Satellite className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">The Solution</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Introducing<br />
              <span className="gradient-text glow-text">Galactic BlackBox™</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              A remote vessel surveillance system via Starlink and Advanced SD-WAN Integration 
              that ensures your operations have a digital presence that never sleeps.
            </p>
            <p className="text-muted-foreground">
              With deep expertise in Starlink, SD-WAN, and AI-driven surveillance, 
              Galactic provides resilient, field-proven systems that perform in the harshest conditions.
            </p>
          </motion.div>

          {/* System Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-4 glow-primary">
              <img
                src={systemDiagram}
                alt="Galactic BlackBox System Architecture"
                className="w-full h-auto rounded-xl"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse_glow" />
              <span className="text-sm font-medium">Live Connection</span>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:border-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
