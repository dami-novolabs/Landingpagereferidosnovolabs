import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import novoboxImage from 'figma:asset/a92c0723c31f4cf7a26ef0104f67f731b10c67f8.png';

export function OfferSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="recompensas" className="relative py-24 px-5 overflow-hidden" style={{ background: 'var(--nl-bg)' }}>
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF78]/5 via-transparent to-[#FF3A20]/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4FF78]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF3A20]/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Tu recompensa por referir
          </h2>

        </motion.div>

        <div className="flex justify-center">
          {/* Premium Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <div className="relative bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#D4FF78]/20 rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden group hover:border-[#D4FF78]/40 transition-all duration-500">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4FF78]/10 to-[#FF3A20]/10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl blur-sm"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-[#D4FF78] bg-clip-text text-transparent mb-4 tracking-tight">NovoPack de Referidos</h3>
                  </div>
                </div>

                {/* Mobile Image - shows only on mobile, right after title */}
                <div className="block md:hidden mb-6">
                  <img 
                    src={novoboxImage}
                    alt="NovoBox - Programa de Referidos"
                    className="w-full h-48 object-cover rounded-xl opacity-80"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#1a1a1a] rounded-xl border border-[#262626]">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#D4FF78] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-[#111] font-bold text-xs sm:text-sm">$</span>
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm sm:text-base">$200 USD o 3 Mentorías 1:1</div>
                        <div className="text-[#c9c9c9] text-xs sm:text-sm">Por cada referido que ingresa</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#1a1a1a] rounded-xl border border-[#262626]">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#FF3A20] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs sm:text-sm">VIP</span>
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm sm:text-base">Masterclass Exclusivas</div>
                        <div className="text-[#c9c9c9] text-xs sm:text-sm">Con Emprendedores de lujo</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#1a1a1a] rounded-xl border border-[#262626]">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-[#D4FF78] to-[#FF3A20] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-[#111] font-bold text-xs sm:text-sm">🏆</span>
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm sm:text-base">Premios extra cada 3 meses</div>
                        <div className="text-[#c9c9c9] text-xs sm:text-sm">Cada referido suma puntos</div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Image - shows only on desktop, in right column */}
                  <div className="hidden md:flex flex-col justify-center">
                    <img 
                      src={novoboxImage}
                      alt="NovoBox - Programa de Referidos"
                      className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#1a1a1a]/50 rounded-xl">
                  <Button 
                    onClick={() => window.open('https://tally.so/r/mREoMv', '_blank')}
                    className="w-full bg-gradient-to-r from-[#FF3A20] to-[#E5301A] text-white hover:from-[#FF3A20] hover:to-[#FF5540] hover:shadow-xl hover:shadow-[#FF3A20]/30 hover:-translate-y-1 transition-all duration-300 py-4 text-base sm:text-lg font-bold rounded-xl border border-[#FF3A20]/20 backdrop-blur-sm relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <span className="relative z-10">👉 Quiero referir</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}