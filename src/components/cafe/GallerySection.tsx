import { motion } from "framer-motion";
import galleryCozy from "@/assets/gallery-cozy.jpg";
import galleryBarista from "@/assets/gallery-barista.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";

const galleryItems = [
  {
    image: galleryCozy,
    caption: "Our cozy reading corner",
    description: "Perfect for getting lost in a good book",
  },
  {
    image: galleryBarista,
    caption: "Craft coffee, made with care",
    description: "Our baristas take pride in every cup",
  },
  {
    image: galleryOutdoor,
    caption: "Evening vibes on the patio",
    description: "String lights, fresh air, and good company",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Space
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Feel the Atmosphere
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Snapshots of the moments that make The Cozy Bean special.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.caption}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-display text-xl font-semibold text-cream mb-1">
                    {item.caption}
                  </h3>
                  <p className="text-cream/80 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
