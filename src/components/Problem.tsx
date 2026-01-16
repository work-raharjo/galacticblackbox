import { motion } from "framer-motion";
import { AlertTriangle, WifiOff, Eye, HardDrive } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: WifiOff,
      title: "Connection Drops",
      description: "When the link drops or the ship leaves signal range, traditional systems go dark.",
    },
    {
      icon: HardDrive,
      title: "Local Storage Fails",
      description: "Most surveillance systems record locally — until the power cuts or hardware fails.",
    },
    {
      icon: Eye,
      title: "Visibility Gap",
      description: "You can't manage what you can't see. Accountability disappears when systems fail.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="absolute inset-0 star-field opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 bg-destructive/10 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm text-destructive">The Visibility Gap</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Happens When the<br />
            <span className="text-muted-foreground">Connection Drops?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every ship, industrial site, and remote operation carries a critical mission. 
            But in the field, you face real challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 lg:p-8 group hover:border-destructive/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
