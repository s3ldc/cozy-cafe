import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Visit Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Find Your Way Here
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We're right in the heart of the neighborhood. Pop in anytime!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-background rounded-2xl p-6 shadow-soft border border-border/50 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Address
                </h3>
                <p className="text-muted-foreground">
                  123 Maple Street, Suite 4<br />
                  Downtown District<br />
                  City, State 12345
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-background rounded-2xl p-6 shadow-soft border border-border/50 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Opening Hours
                </h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday – Friday: <span className="text-foreground font-medium">7:00 AM – 9:00 PM</span></p>
                  <p>Saturday: <span className="text-foreground font-medium">8:00 AM – 10:00 PM</span></p>
                  <p>Sunday: <span className="text-foreground font-medium">8:00 AM – 8:00 PM</span></p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-background rounded-2xl p-6 shadow-soft border border-border/50 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Contact
                </h3>
                <p className="text-muted-foreground">
                  <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                  <br />
                  <a href="mailto:hello@thecozybean.cafe" className="hover:text-accent transition-colors">
                    hello@thecozybean.cafe
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155609888567!2d-73.99065368459418!3d40.74881797932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635187394515!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Café location map"
              className="grayscale-[30%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
