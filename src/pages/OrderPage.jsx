import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeft, Check, CloudUpload,
  MessageCircle, Phone, X
} from 'lucide-react'
import { sizes, flavors, fillings, accentColors, deliveryZones, timeSlots } from '../data/sizes'

function generateOrderId() {
  return 'HKP-' + Math.random().toString(36).substring(2, 8).toUpperCase()
}

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

export default function OrderPage() {
  const [phase, setPhase] = useState(1)
  const [selectedSize, setSelectedSize] = useState('8inch')
  const [flavor, setFlavor] = useState('chocolate')
  const [filling, setFilling] = useState('swiss-buttercream')
  const [accentColor, setAccentColor] = useState('ivory')
  const [eggless, setEggless] = useState(false)
  const [inscription, setInscription] = useState('')
  const [refImage, setRefImage] = useState(null)
  const [refNotes, setRefNotes] = useState('')
  const [deliveryZone, setDeliveryZone] = useState('inside_dhaka')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('02:00 PM - 04:00 PM')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [instructions, setInstructions] = useState('')
  const [order, setOrder] = useState(null)
  const fileInputRef = useRef(null)

  const sizeData = sizes.find((s) => s.id === selectedSize) || sizes[2]
  const egglessCost = eggless ? 250 : 0
  const deliveryCost = deliveryZones.find((z) => z.id === deliveryZone)?.fee || 0
  const total = sizeData.basePrice + egglessCost + deliveryCost

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setRefImage(ev.target.result)
    reader.readAsDataURL(file)
  }

  const handleSubmit = () => {
    if (!date) return
    setOrder({
      orderId: generateOrderId(),
      sizeName: sizeData.name,
      diameterSpec: sizeData.diameterSpec,
      servings: sizeData.servings,
      spongeFlavor: flavors.find((f) => f.id === flavor)?.name,
      filling: fillings.find((f) => f.id === filling)?.name,
      isEggless: eggless,
      inscription,
      accentColor: accentColors.find((c) => c.id === accentColor)?.name,
      referenceImage: refImage,
      referenceNotes: refNotes,
      deliveryZoneText: deliveryZones.find((z) => z.id === deliveryZone)?.name,
      deliveryCost,
      date,
      time,
      name,
      phone,
      email,
      address,
      instructions,
      totalPrice: total,
      imageSrc: sizeData.imageSrc,
    })
  }

  if (order) {
    return (
      <motion.div {...pageTransition} className="min-h-screen bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-10">
          <div className="mb-6 flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-xs sm:text-sm font-body font-semibold text-cocoa/50 hover:text-chocolate transition-colors">
              <ArrowLeft size={14} />
              Back to Bakery Home
            </Link>
            <span className="text-[11px] font-mono uppercase tracking-widest text-cocoa/30">
              Hakuna Potata Custom Studio
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-ivory rounded-3xl p-6 sm:p-10 border border-butter/60 shadow-xl max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-pistachio/10 text-pistachio flex items-center justify-center mx-auto mb-5">
              <Check size={32} />
            </div>
            <div className="text-center mb-8">
              <span className="text-[11px] font-body font-bold tracking-[0.25em] uppercase text-pistachio">
                Order Logged Successfully
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-chocolate mt-1">
                Thank You, {order.name}!
              </h2>
              <p className="text-cocoa/50 text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
                Your custom cake inquiry <span className="font-mono font-bold text-chocolate">#{order.orderId}</span> has been prepared. Click below to confirm directly with our bakers on WhatsApp!
              </p>
            </div>

            <div className="bg-vanilla rounded-2xl p-5 border border-butter/40 text-xs sm:text-sm space-y-3 mb-6">
              {[
                ['Cake Size', `${order.sizeName} (${order.diameterSpec})`],
                ['Portions', order.servings],
                ['Sponge', order.spongeFlavor],
                ['Filling', order.filling],
                ['Dietary', order.isEggless ? '100% Pure Eggless (+\u09F3250)' : 'Standard Sponge'],
                ['Inscription', `"${order.inscription}"`],
                ['Color', order.accentColor],
                ['Delivery', order.deliveryZoneText],
                ['Delivery Fee', `\u09F3${order.deliveryCost}`],
                ['Schedule', `${order.date} at ${order.time}`],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-1 border-b border-butter/40 items-center">
                  <span className="text-cocoa/50">{label}</span>
                  <span className="font-bold text-chocolate">{value}</span>
                </div>
              ))}
              <div className="flex justify-between pt-2 text-base font-bold text-chocolate">
                <span>Estimated Total</span>
                <span className="font-mono text-lg">{'\u09F3'}{order.totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/8801339656675?text=${encodeURIComponent(
                  `Hi Hakuna Potata! I'd like to confirm my order.\n\nOrder: #${order.orderId}\nSize: ${order.sizeName} (${order.diameterSpec})\nFlavor: ${order.spongeFlavor}\nFilling: ${order.filling}\nEggless: ${order.isEggless ? 'Yes' : 'No'}\nInscription: "${order.inscription}"\nDate: ${order.date} at ${order.time}\nTotal: \u09F3${order.totalPrice.toLocaleString()}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-body font-bold text-sm py-3 rounded-xl hover:bg-[#20BD5C] active:scale-[0.97] transition-all"
              >
                <MessageCircle size={16} />
                Confirm on WhatsApp
              </a>
              <a
                href="tel:+8801339656675"
                className="flex-1 flex items-center justify-center gap-2 w-full bg-chocolate text-white font-body font-bold text-sm py-3 rounded-xl hover:bg-deep-cocoa active:scale-[0.97] transition-all"
              >
                <Phone size={16} />
                Call to Confirm
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div {...pageTransition} className="min-h-screen bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-10">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-xs sm:text-sm font-body font-semibold text-cocoa/50 hover:text-chocolate transition-colors">
            <ArrowLeft size={14} />
            Back to Bakery Home
          </Link>
          <span className="text-[11px] font-mono uppercase tracking-widest text-cocoa/30">
            Hakuna Potata Custom Studio
          </span>
        </div>

        {/* Phase Indicator */}
        <div className="flex items-center justify-center gap-0 mb-8 sm:mb-12 max-w-xs mx-auto">
          {[
            { p: 1, label: 'Size' },
            { p: 2, label: 'Customize' },
          ].map((step, idx) => (
            <div key={step.p} className="flex items-center flex-1">
              <button
                onClick={() => step.p < phase && setPhase(step.p)}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all cursor-pointer shrink-0 ${
                  phase >= step.p
                    ? 'bg-chocolate text-white'
                    : 'bg-butter text-cocoa/40'
                } ${step.p < phase ? 'hover:scale-110' : ''}`}
              >
                {phase > step.p ? <Check size={14} /> : step.p}
              </button>
              <span className={`text-xs font-body font-bold tracking-wider uppercase ml-2 ${
                phase >= step.p ? 'text-chocolate' : 'text-cocoa/30'
              }`}>
                {step.label}
              </span>
              {idx === 0 && (
                <div className={`flex-1 h-[2px] mx-3 rounded-full transition-colors duration-300 ${phase > 1 ? 'bg-chocolate' : 'bg-butter'}`} />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {phase === 1 ? (
            <motion.div
              key="phase1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-display font-bold text-xl sm:text-2xl text-chocolate text-center mb-8">
                Choose Your Cake Size
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
                {sizes.map((s) => (
                  <motion.button
                    key={s.id}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedSize(s.id)}
                    className={`relative bg-ivory rounded-2xl p-5 sm:p-6 border-2 text-left transition-all duration-300 cursor-pointer ${
                      selectedSize === s.id
                        ? 'border-chocolate shadow-lg'
                        : 'border-butter/60 hover:border-cocoa/20'
                    }`}
                  >
                    {s.popular && (
                      <span className="absolute -top-2.5 right-4 bg-strawberry text-white text-[9px] font-body font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                        {s.tag}
                      </span>
                    )}
                    <h3 className="font-display font-bold text-lg text-chocolate">{s.name}</h3>
                    <p className="text-cocoa/50 text-xs mt-1">{s.servings}</p>
                    <div className="mt-4 flex items-end justify-between">
                      <span className="font-mono font-bold text-xl text-chocolate">
                        {'\u09F3'}{s.basePrice.toLocaleString()}
                      </span>
                      {!s.popular && (
                        <span className="text-[10px] font-body font-bold tracking-wider uppercase text-cocoa/30">
                          {s.tag}
                        </span>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => setPhase(2)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-chocolate text-white rounded-full text-sm font-body font-bold tracking-wide hover:bg-deep-cocoa active:scale-[0.97] transition-all duration-300 shadow-lg"
                >
                  Continue to Customize
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="phase2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Sponge Flavor */}
                <FormSection title="Sponge Flavor">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {flavors.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFlavor(f.id)}
                        className={`p-3 rounded-xl border-2 text-xs font-body font-bold text-center transition-all cursor-pointer ${
                          flavor === f.id
                            ? 'border-chocolate bg-vanilla shadow-sm'
                            : 'border-butter/60 hover:border-cocoa/20 bg-ivory'
                        }`}
                      >
                        {f.name}
                      </button>
                    ))}
                  </div>
                </FormSection>

                {/* Filling */}
                <FormSection title="Filling / Cream">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {fillings.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFilling(f.id)}
                        className={`p-3 rounded-xl border-2 text-xs font-body font-bold text-center transition-all cursor-pointer ${
                          filling === f.id
                            ? 'border-chocolate bg-vanilla shadow-sm'
                            : 'border-butter/60 hover:border-cocoa/20 bg-ivory'
                        }`}
                      >
                        {f.name}
                      </button>
                    ))}
                  </div>
                </FormSection>

                {/* Dietary */}
                <FormSection title="Dietary Preparation">
                  <div className="flex gap-3">
                    <button
                      onClick={() => setEggless(false)}
                      className={`flex-1 p-3 rounded-xl border-2 text-xs font-body font-bold text-center transition-all cursor-pointer ${
                        !eggless ? 'border-chocolate bg-vanilla shadow-sm' : 'border-butter/60 hover:border-cocoa/20 bg-ivory'
                      }`}
                    >
                      Standard Sponge
                    </button>
                    <button
                      onClick={() => setEggless(true)}
                      className={`flex-1 p-3 rounded-xl border-2 text-xs font-body font-bold text-center transition-all cursor-pointer ${
                        eggless ? 'border-chocolate bg-vanilla shadow-sm' : 'border-butter/60 hover:border-cocoa/20 bg-ivory'
                      }`}
                    >
                      100% Pure Eggless (+{'\u09F3'}250)
                    </button>
                  </div>
                </FormSection>

                {/* Inscription */}
                <FormSection title="Message on Cake">
                  <input
                    type="text"
                    maxLength={40}
                    value={inscription}
                    onChange={(e) => setInscription(e.target.value)}
                    placeholder="Happy Birthday..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-butter/60 bg-ivory text-sm font-body text-chocolate placeholder-cocoa/30 focus:border-chocolate focus:outline-none transition-colors"
                  />
                  <span className="text-[10px] font-mono text-cocoa/30 mt-1 block text-right">
                    {inscription.length}/40
                  </span>
                </FormSection>

                {/* Accent Color */}
                <FormSection title="Accent Color">
                  <div className="flex gap-3 flex-wrap">
                    {accentColors.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setAccentColor(c.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-xs font-body font-bold transition-all cursor-pointer ${
                          accentColor === c.id
                            ? 'border-chocolate shadow-sm'
                            : 'border-butter/60 hover:border-cocoa/20'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border ${c.bg}`} />
                        {c.name}
                      </button>
                    ))}
                  </div>
                </FormSection>

                {/* Reference Photo */}
                <FormSection title="Reference Photo (Optional)">
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-butter rounded-xl p-6 text-center cursor-pointer hover:border-cocoa/30 transition-colors bg-ivory"
                  >
                    {refImage ? (
                      <div className="relative inline-block">
                        <img src={refImage} alt="Reference" className="w-24 h-24 object-cover rounded-xl border border-butter" />
                        <button
                          onClick={(e) => { e.stopPropagation(); setRefImage(null) }}
                          className="absolute -top-2 -right-2 w-5 h-5 bg-chocolate text-white rounded-full flex items-center justify-center text-[10px] cursor-pointer"
                        >
                          <X size={10} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <CloudUpload size={24} className="text-cocoa/30" />
                        <span className="text-xs font-body text-cocoa/40">Click to upload reference image</span>
                      </div>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <textarea
                    value={refNotes}
                    onChange={(e) => setRefNotes(e.target.value)}
                    placeholder="Design notes (optional)..."
                    rows={2}
                    className="w-full mt-3 px-4 py-3 rounded-xl border-2 border-butter/60 bg-ivory text-sm font-body text-chocolate placeholder-cocoa/30 focus:border-chocolate focus:outline-none transition-colors resize-none"
                  />
                </FormSection>

                {/* Delivery Zone */}
                <FormSection title="Delivery Zone">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {deliveryZones.map((z) => (
                      <button
                        key={z.id}
                        onClick={() => setDeliveryZone(z.id)}
                        className={`p-3 rounded-xl border-2 text-xs font-body font-bold text-center transition-all cursor-pointer ${
                          deliveryZone === z.id
                            ? 'border-chocolate bg-vanilla shadow-sm'
                            : 'border-butter/60 hover:border-cocoa/20 bg-ivory'
                        }`}
                      >
                        {z.name}
                        <span className="block text-[10px] font-mono text-cocoa/40 mt-1">
                          {z.fee === 0 ? 'FREE' : `\u09F3${z.fee}`}
                        </span>
                      </button>
                    ))}
                  </div>
                </FormSection>

                {/* Date & Time */}
                <FormSection title="Delivery Date & Time">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border-2 border-butter/60 bg-ivory text-sm font-body text-chocolate focus:border-chocolate focus:outline-none transition-colors"
                    />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-butter/60 bg-ivory text-sm font-body text-chocolate focus:border-chocolate focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts}>{ts}</option>
                      ))}
                    </select>
                  </div>
                </FormSection>

                {/* Customer Info */}
                <FormSection title="Your Details">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name *" className="w-full px-4 py-3 rounded-xl border-2 border-butter/60 bg-ivory text-sm font-body text-chocolate placeholder-cocoa/30 focus:border-chocolate focus:outline-none transition-colors" />
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number *" className="w-full px-4 py-3 rounded-xl border-2 border-butter/60 bg-ivory text-sm font-body text-chocolate placeholder-cocoa/30 focus:border-chocolate focus:outline-none transition-colors" />
                  </div>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email (for invoice)" className="w-full mt-4 px-4 py-3 rounded-xl border-2 border-butter/60 bg-ivory text-sm font-body text-chocolate placeholder-cocoa/30 focus:border-chocolate focus:outline-none transition-colors" />
                  <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery Address" rows={2} className="w-full mt-4 px-4 py-3 rounded-xl border-2 border-butter/60 bg-ivory text-sm font-body text-chocolate placeholder-cocoa/30 focus:border-chocolate focus:outline-none transition-colors resize-none" />
                  <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Special instructions..." rows={2} className="w-full mt-4 px-4 py-3 rounded-xl border-2 border-butter/60 bg-ivory text-sm font-body text-chocolate placeholder-cocoa/30 focus:border-chocolate focus:outline-none transition-colors resize-none" />
                </FormSection>

                <div className="flex items-center gap-4 pt-4">
                  <button
                    onClick={() => setPhase(1)}
                    className="px-6 py-3 border-2 border-butter rounded-full text-sm font-body font-bold text-cocoa/60 hover:border-cocoa/30 transition-all cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!name || !phone || !date}
                    className="flex-1 px-8 py-3.5 bg-chocolate text-white rounded-full text-sm font-body font-bold tracking-wide hover:bg-deep-cocoa active:scale-[0.97] transition-all duration-300 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {!date && name && phone ? 'Select a Delivery Date' : `Place Order — ${'\u09F3'}${total.toLocaleString()}`}
                  </button>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-ivory rounded-2xl p-6 border border-butter/60 shadow-sm">
                  <h3 className="font-display font-bold text-sm text-chocolate mb-4">Order Summary</h3>
                  <div className="space-y-2.5 text-xs">
                    <SummaryRow label="Cake Size" value={`${sizeData.name} (${sizeData.diameterSpec})`} />
                    <SummaryRow label="Servings" value={sizeData.servings} />
                    <SummaryRow label="Flavor" value={flavors.find((f) => f.id === flavor)?.name} />
                    <SummaryRow label="Filling" value={fillings.find((f) => f.id === filling)?.name} />
                    <SummaryRow label="Dietary" value={eggless ? 'Eggless' : 'Standard'} />
                    {inscription && <SummaryRow label="Inscription" value={`"${inscription}"`} italic />}
                    <SummaryRow label="Color" value={accentColors.find((c) => c.id === accentColor)?.name} />
                    <SummaryRow label="Delivery" value={deliveryZones.find((z) => z.id === deliveryZone)?.name} />

                    <div className="border-t border-butter pt-2.5 mt-2.5 space-y-1.5">
                      <SummaryRow label="Cake Base" value={`\u09F3${sizeData.basePrice.toLocaleString()}`} />
                      {eggless && <SummaryRow label="Eggless" value={`\u09F3250`} />}
                      <SummaryRow label="Delivery" value={deliveryCost === 0 ? 'FREE' : `\u09F3${deliveryCost}`} />
                    </div>

                    <div className="border-t border-butter pt-2.5 mt-2.5">
                      <div className="flex justify-between items-center">
                        <span className="font-body font-bold text-chocolate">Total</span>
                        <span className="font-mono font-bold text-lg text-chocolate">{'\u09F3'}{total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

function FormSection({ title, children }) {
  return (
    <div>
      <h3 className="font-display font-bold text-sm text-chocolate mb-3">{title}</h3>
      {children}
    </div>
  )
}

function SummaryRow({ label, value, italic }) {
  return (
    <div className="flex justify-between items-center py-0.5">
      <span className="text-cocoa/50">{label}</span>
      <span className={`font-bold text-chocolate text-right ${italic ? 'italic' : ''}`}>{value}</span>
    </div>
  )
}
