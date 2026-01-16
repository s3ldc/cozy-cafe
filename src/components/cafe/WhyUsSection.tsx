import { motion } from "framer-motion";
import { Coffee, Wifi, Armchair, Wallet } from "lucide-react";

const benefits = [
  {
    icon: Coffee,
    title: "Freshly Roasted",
    description: "Beans sourced from local roasters, brewed to perfection every single cup.",
  },
  {
    icon: Armchair,
    title: "Cozy Ambience",
    description: "Plush seating, warm lighting, and the perfect playlist for work or relaxation.",
  },
  {
    icon: Wifi,
    title: "Free High-Speed Wi-Fi",
    description: "Stream, work, or scroll — our internet keeps up with your pace.",
  },
  {
    icon: Wallet,
    title: "Friendly Prices",
    description: "Quality coffee and food that doesn't break the bank. Seriously.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Why People Love This Café
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            More than just coffee — it's a feeling. Here's what keeps our regulars coming back.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-300 h-full border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
