'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, UserIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white min-h-[600px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/Arzen-co-hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.9)',
          }}
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <h2 className="text-sm md:text-base font-medium text-gray-200 uppercase tracking-widest mb-4">
                  Välkommen till
                </h2>
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                Bilalli Blendz
              </motion.h1>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100 drop-shadow font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.4,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              Där Hantverket, Stilen & Upplevelsen möts
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <Link 
                href="/book" 
                className="inline-flex items-center bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
              >
                Boka tid
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4">
            {/* Large Featured Item */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl relative overflow-hidden group h-[400px]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ 
                  backgroundImage: 'url(/images/grid/quality.jpg)',
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  objectFit: 'cover'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/25 to-black/10 z-10 transition-opacity duration-300 group-hover:from-black/50 group-hover:to-black/30"></div>
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-8px]">Skräddarsydd herrklippning</h3>
                <p className="text-xl text-gray-200 transform transition-transform duration-300 group-hover:translate-y-[-8px]">Vi skapar en tidlös eller trendmedveten frisyr, anpassad efter din ansiktsform och livsstil – med noggrannhet i varje snitt.</p>
              </div>
            </motion.div>

            {/* Three Smaller Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Medium Item 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl relative overflow-hidden group h-[250px]"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: 'url(/images/grid/expertise.png)',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/25 to-black/10 z-10 transition-opacity duration-300 group-hover:from-black/50 group-hover:to-black/30"></div>
                <div className="relative z-20 h-full flex flex-col justify-between p-6">
                  <h3 className="text-xl font-semibold text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">Professionell barnklippning</h3>
                  <p className="text-gray-200 transform transition-transform duration-300 group-hover:translate-y-[-4px]">Tryggt, smidigt och med omtanke – vi gör klippningen till en positiv stund även för de yngsta.</p>
                </div>
              </motion.div>

              {/* Medium Item 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl relative overflow-hidden group h-[250px]"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: 'url(/images/grid/satisfaction.jpg)',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/25 to-black/10 z-10 transition-opacity duration-300 group-hover:from-black/50 group-hover:to-black/30"></div>
                <div className="relative z-20 h-full flex flex-col justify-between p-6">
                  <h3 className="text-xl font-semibold text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">Exklusiv skäggtrimning</h3>
                  <p className="text-gray-200 transform transition-transform duration-300 group-hover:translate-y-[-4px]">Framhäv din karaktär med en skäggformning som balanserar stil och struktur. Vi arbetar med precision för ett välvårdat helhetsintryck.</p>
                </div>
              </motion.div>

              {/* Medium Item 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-2xl relative overflow-hidden group h-[250px]"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: 'url(/images/grid/innovation.jpg)',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/25 to-black/10 z-10 transition-opacity duration-300 group-hover:from-black/50 group-hover:to-black/30"></div>
                <div className="relative z-20 h-full flex flex-col justify-between p-6">
                  <h3 className="text-xl font-semibold text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">Innovation</h3>
                  <p className="text-gray-200 transform transition-transform duration-300 group-hover:translate-y-[-4px]">Modern teknik och kreativa lösningar</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-black mb-4"
            >
              Så här fungerar det
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-700"
            >
              Enkla steg för att boka din tid hos Bilalli Blendz
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Välj datum</h3>
              <p className="text-gray-600">Välj ditt föredragna datum från vår kalender</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Välj tid</h3>
              <p className="text-gray-600">Välj en ledig tid som passar dig</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                <UserIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Ange dina uppgifter</h3>
              <p className="text-gray-600">Fyll i ditt namn och kontaktinformation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                <EnvelopeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Få bekräftelse</h3>
              <p className="text-gray-600">Ta emot en bekräftelse via mail med dina bokningsdetaljer</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">Redo att boka tid hos Bilalli Blendz?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Boka din tid nu och låt oss ta hand om resten. Vi ser fram emot att välkomna dig!
            </p>
            <Link 
              href="/book" 
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              Boka tid nu
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
