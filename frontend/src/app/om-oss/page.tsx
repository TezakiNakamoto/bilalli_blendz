'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import GlitchText from '@/components/GlitchText';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] w-full overflow-hidden"
      >
        <Image
          src="/images/Arzen-co-hero.png"
          alt="Arzen & Co. Office"
          fill
          className="object-cover transform scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <GlitchText 
            text="Om Bilalli Blendz"
            className="text-5xl md:text-6xl font-bold text-white text-center px-4"
          />
        </div>
      </motion.div>

      {/* CEO Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* CEO Image */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/ceo.jpg.jpg"
              alt="CEO of Bilalli Blendz"
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* CEO Message */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900"
            >
              Om Bilalli Blendz
            </motion.h2>
            <div className="prose prose-lg">
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                Bilalli Blendz är mer än en barbershop – det är en plats där stil, tradition och precision möts.
              </motion.p>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                Vi grundades med en tydlig vision: att erbjuda män en skräddarsydd groomingupplevelse där varje detalj räknas. 
                Hos oss handlar det inte bara om en klippning eller en skäggtrimning – det handlar om helhetsintrycket, 
                känslan och förtroendet du bär med dig ut från salongen.
              </motion.p>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                I vår exklusiva miljö kombinerar vi klassiskt barberarhantverk med moderna tekniker och produkter av högsta kvalitet. 
                Varje kund bemöts med omsorg, lyhördhet och ett öga för detaljer. Vårt mål är att varje besök ska kännas personligt, 
                avslappnat – och stilfullt.
              </motion.p>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                Vi vänder oss till dig som inte kompromissar med din stil, som uppskattar god service och vill känna dig väl omhändertagen. 
                Vare sig du söker en tidlös frisyr, en trendig look eller ett perfekt trimmat skägg, ser vi till att du lämnar oss med 
                självförtroendet på topp.
              </motion.p>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed font-medium text-lg"
              >
                Välkommen till Bilalli Blendz – där stil är ett hantverk.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 