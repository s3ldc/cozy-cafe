import { motion } from "framer-motion";
import menuCoffee from "@/assets/menu-coffee.jpg";
import menuToast from "@/assets/menu-toast.jpg";
import menuPancakes from "@/assets/menu-pancakes.jpg";
import menuMatcha from "@/assets/menu-matcha.jpg";
import menuBrownie from "@/assets/menu-brownie.jpg";
import menuCroissant from "@/assets/menu-croissant.jpg";

const menuItems = [
  {
    image: menuCoffee,
    name: "Signature Latte",
    description: "Silky smooth espresso with steamed milk and beautiful latte art.",
    price: "$4.50",
    tag: "Best Seller",
  },
  {
    image: menuToast,
    name: "Avocado Toast",
    description: "Fresh avocado on sourdough with poached egg and cherry tomatoes.",
    price: "$9.00",
    tag: null,
  },
  {
    image: menuPancakes,
    name: "Fluffy Pancakes",
    description: "Stack of three with maple syrup, fresh berries, and whipped cream.",
    price: "$8.50",
    tag: "Popular",
  },
  {
    image: menuMatcha,
    name: "Iced Matcha Latte",
    description: "Premium Japanese matcha with oat milk served over ice.",
    price: "$5.50",
    tag: null,
  },
  {
    image: menuBrownie,
    name: "Warm Brownie",
    description: "Rich chocolate brownie with vanilla ice cream and chocolate sauce.",
    price: "$6.00",
    tag: "Sweet Treat",
  },
  {
    image: menuCroissant,
    name: "Butter Croissant",
    description: "Flaky, golden French croissant with jam on the side.",
    price: "$3.50",
    tag: null,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Taste the Highlights
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From expertly crafted coffee to comfort food favorites — here's a peek at what's brewing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-border/50">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-lg font-semibold text-card-foreground">
                      {item.name}
                    </h3>
                    <span className="font-display text-lg font-bold text-accent shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more? Visit us or send a message!
          </p>
          <a
            href="https://wa.me/1234567890?text=Hi!%20Can%20I%20get%20your%20full%20menu?"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 font-semibold underline underline-offset-4 transition-colors"
          >
            Request full menu on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
