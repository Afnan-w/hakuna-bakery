import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Heart, Star, Sparkles, Leaf, Cake, Palette } from 'lucide-react'
import { CherrySvg, StrawberrySvg, CakeSliceSvg, ButtercreamFlowerSvg } from '../components/decorative/FloatingElements'

const values = [
  { icon: Cake, title: 'Korean Bento Cakes', desc: 'Adorable mini cakes perfect for gifting and intimate celebrations.', color: 'text-strawberry', bg: 'bg-strawberry/10' },
  { icon: Star, title: 'Lambeth Piping', desc: 'Vintage royal-inspired buttercream piping that turns cakes into edible art.', color: 'text-cocoa', bg: 'bg-butter' },
  { icon: Heart, title: '100% Eggless Available', desc: 'Every flavor offered in pure eggless preparation, because everyone deserves great cake.', color: 'text-strawberry', bg: 'bg-rose/20' },
  { icon: Sparkles, title: 'Custom Celebration Cakes', desc: 'From birthdays to weddings, each cake designed to match your vision.', color: 'text-pistachio', bg: 'bg-pistachio/10' },
  { icon: Leaf, title: 'Artisan Ingredients', desc: 'Belgian chocolate, vanilla bean, pistachio rose, and premium flavors.', color: 'text-pistachio', bg: 'bg-pistachio-light' },
  { icon: Palette, title: 'Handcrafted Daily', desc: 'Every cake is baked fresh to order, never sitting on a shelf.', color: 'text-cocoa', bg: 'bg-vanilla' },
]

const flavors = [
  { name: 'Belgian Chocolate', color: 'bg-[#3D2314]' },
  { name: 'Vanilla Bean', color: 'bg-[#F5E6C8]' },
  { name: 'Pistachio Rose', color: 'bg-[#A8C4A2]' },
  { name: 'Red Velvet', color: 'bg-[#C0392B]' },
  { name: 'Salted Caramel', color: 'bg-[#D4A574]' },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-cream"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-body font-semibold text-cocoa/50 hover:text-chocolate transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
        <div className="absolute top-10 left-8 opacity-15">
          <CherrySvg className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
        <div className="absolute bottom-10 right-8 opacity-15">
          <ButtercreamFlowerSvg className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10" ref={ref}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <StrawberrySvg className="w-10 h-10 mx-auto mb-4 opacity-60" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-chocolate"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-cocoa/60 text-sm sm:text-base mt-4 max-w-lg mx-auto leading-relaxed"
          >
            Handcrafted with love in Dhaka, Bangladesh. From Korean Bento cakes to grand
            celebration towers, every creation tells a sweet story.
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-vanilla/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-2 sm:p-2.5 arch-shape border-[1.5px] border-chocolate/80 bg-white shadow-[0_20px_50px_rgba(61,35,20,0.08)] max-w-sm mx-auto">
                <div className="p-1 sm:p-1.5 arch-shape border border-butter bg-ivory">
                  <div className="arch-shape overflow-hidden aspect-[4/5] bg-butter-light">
                    <img
                      src="/hakuna-bakery.webp"
                      alt="Hakuna Potata Bakery"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-[10px] sm:text-xs font-body font-bold tracking-[0.3em] uppercase text-strawberry">
                Since Day One
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-chocolate mt-2 mb-5">
                Handcrafted with Love
              </h2>
              <div className="space-y-4 text-cocoa/70 text-sm leading-relaxed">
                <p>
                  Hakuna Potata was born from a simple belief: every celebration deserves a cake
                  that's as unique and special as the moment itself. Based in Bashundhara, Dhaka,
                  we've been turning flour, sugar, and butter into edible art.
                </p>
                <p>
                  From delicate Korean Bento cakes adorned with tiny buttercream flowers to grand
                  multi-tier towers with intricate Lambeth piping, we pour love into every layer.
                  Our flavors range from rich Belgian chocolate to delicate pistachio rose,
                  with every option available in 100% eggless preparation.
                </p>
                <p>
                  We don't do cookie-cutter cakes. Every order is a collaboration between you and
                  our bakers, ensuring your vision comes to life in delicious detail.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] sm:text-xs font-body font-bold tracking-[0.3em] uppercase text-cocoa/40">
              What We Stand For
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-chocolate mt-2">
              Our Values
            </h2>
            <div className="w-12 h-[2px] bg-strawberry mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-ivory rounded-2xl p-6 border border-butter/60 shadow-[0_2px_12px_rgba(61,35,20,0.03)] hover:shadow-[0_6px_24px_rgba(61,35,20,0.07)] transition-shadow duration-300"
              >
                <div className={`inline-flex w-11 h-11 rounded-xl ${v.bg} items-center justify-center mb-4`}>
                  <v.icon size={20} className={v.color} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-base text-chocolate mb-2">{v.title}</h3>
                <p className="text-cocoa/60 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavor Showcase */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-vanilla/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] sm:text-xs font-body font-bold tracking-[0.3em] uppercase text-cocoa/40">
              Taste the Difference
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-chocolate mt-2">
              Our Signature Flavors
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {flavors.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 bg-ivory px-5 py-3.5 rounded-2xl border border-butter/60 shadow-sm"
              >
                <div className={`w-6 h-6 rounded-full ${f.color} shadow-sm`} />
                <span className="font-body font-bold text-sm text-chocolate">{f.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <CakeSliceSvg className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-chocolate mb-4">
            Ready to Create Your Dream Cake?
          </h2>
          <p className="text-cocoa/60 text-sm mb-8 max-w-md mx-auto">
            Let's bring your vision to life. Start designing your custom cake today.
          </p>
          <Link
            to="/order"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-chocolate text-white rounded-full text-sm font-body font-bold tracking-wide hover:bg-deep-cocoa active:scale-[0.97] transition-all duration-300 shadow-lg"
          >
            Start Your Order
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </section>
    </motion.div>
  )
}
