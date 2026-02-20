import { DollarSign, Crown, Users } from "lucide-react";

export function ReferralBenefitsSection() {
  return (
    <section className="py-16 px-5" style={{ background: 'var(--nl-bg)' }}>
      <div className="max-w-[1120px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-8 sm:mb-12 text-[24px]">¿Qué gana la persona que invitas al Programa?</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#D4FF78]/30 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 shadow-lg shadow-[#D4FF78]/10 hover:shadow-[#D4FF78]/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl sm:text-4xl">💰</div>
            </div>
            <h3 className="text-xl sm:text-2xl text-white mb-2 sm:mb-3">$500 USD de descuento</h3>
            <p className="text-[#c9c9c9] text-sm sm:text-base">Por venir recomendado por vos.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#D4FF78]/30 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 shadow-lg shadow-[#D4FF78]/10 hover:shadow-[#D4FF78]/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl sm:text-4xl">👑</div>
            </div>
            <h3 className="text-xl sm:text-2xl text-white mb-2 sm:mb-3">Prioridad en admisión</h3>
            <p className="text-[#c9c9c9] text-sm sm:text-base">Al momento de elegir a los 20 equipos.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#D4FF78]/30 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 shadow-lg shadow-[#D4FF78]/10 hover:shadow-[#D4FF78]/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl sm:text-4xl">🎯</div>
            </div>
            <h3 className="text-xl sm:text-2xl text-white mb-2 sm:mb-3">Mentoría personalizada</h3>
            <p className="text-[#c9c9c9] text-sm sm:text-base">Una sesión 1:1 extra en el Programa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}