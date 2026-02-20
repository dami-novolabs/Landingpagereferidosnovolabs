import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Timer } from "./Timer";
import danielImg from "figma:asset/8d562374071a07ee5fc974155edddfdf5e601f27.png";
import martinImg from "figma:asset/2d37666adbec725e049d5a597c11d8a7aaa66968.png";
import emiliaImg from "figma:asset/82859a0f8cd9073a300c0b9b38f1626c437e2a29.png";
import nahuelImg from "figma:asset/b8ab338cd1519c9b231114b4a9d90676f9f1c78d.png";
import novoboxImage from 'figma:asset/a92c0723c31f4cf7a26ef0104f67f731b10c67f8.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="flex items-center px-5"
      style={{ background: 'var(--nl-bg)', height: 'calc(100vh - 4rem)', marginTop: '4rem' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Content */}
          <div className="space-y-4">

            
            <div className="space-y-4">
              <div className="text-sm text-[#D4FF78]/80 font-medium tracking-wide mb-1">
                👋 Bienvenida/o al NovoPrograma de Referidos
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
                <span className="text-white">Ayudas a alguien a emprender y ganas </span>
                <span className="bg-gradient-to-r from-[#D4FF78] to-[#b5ff3f] bg-clip-text text-transparent text-[32px] md:text-[48px] whitespace-nowrap">
                  Recompensas Exclusivas
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[#c9c9c9] leading-relaxed">
                Tanto vos como la persona que refieras al Programa recibirán beneficios únicos.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                <Button 
                  onClick={() => scrollToSection('recompensas')}
                  className="bg-gradient-to-r from-[#FF3A20] to-[#E5301A] text-white hover:from-[#FF3A20] hover:to-[#FF5540] hover:shadow-lg hover:shadow-[#FF3A20]/25 hover:-translate-y-0.5 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl w-full sm:w-auto border border-[#FF3A20]/20 backdrop-blur-sm"
                >
                  👉 Quiero referir
                </Button>

              </div>
            </div>
          </div>

          {/* Right Column - NovoPack */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#D4FF78]/20 rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden group hover:border-[#D4FF78]/40 transition-all duration-500">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4FF78]/10 to-[#FF3A20]/10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl blur-sm"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-[#D4FF78] bg-clip-text text-transparent mb-2 tracking-tight">NovoPack de Referidos</h3>
                  </div>
                </div>

                {/* NovoBox Image */}
                <div className="mb-4">
                  <img 
                    src={novoboxImage}
                    alt="NovoBox - Programa de Referidos"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

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
              </div>
            </div>
          </div>
        </div>

        {/* Media Mentions */}

      </div>
    </section>
  );
}