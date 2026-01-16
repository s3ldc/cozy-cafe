import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cozy café interior with warm lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-2 bg-cream/20 backdrop-blur-sm rounded-full text-cream text-sm font-medium mb-6"
          >
            ☕ Your Neighborhood Coffee Haven
          </motion.span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
            Where Great Coffee
            <br />
            <span className="text-latte">Meets Comfort</span>
          </h1>

          <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Escape the rush. Grab your favorite brew, sink into a cozy corner, and 
            let the world slow down — one sip at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#menu">View Our Menu</a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/1234567890?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20café."
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp Us
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute -bottom-36 left-1/2 -translate-x-1/2"
        >
          <a
            href="#why-us"
            className="flex flex-col items-center text-cream/70 hover:text-cream transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
