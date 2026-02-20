import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Timer } from "./Timer";
import danielImg from "figma:asset/8d562374071a07ee5fc974155edddfdf5e601f27.png";
import martinImg from "figma:asset/2d37666adbec725e049d5a597c11d8a7aaa66968.png";
import emiliaImg from "figma:asset/82859a0f8cd9073a300c0b9b38f1626c437e2a29.png";
import nahuelImg from "figma:asset/b8ab338cd1519c9b231114b4a9d90676f9f1c78d.png";

export function LeaderboardSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-5" style={{ background: 'var(--nl-bg)' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[rgba(212,255,120,1)] mb-4">
            Competí por recompensas EXTRA cada 3 meses
          </h2>
          <p className="text-lg sm:text-xl text-[#c9c9c9] leading-relaxed max-w-2xl mx-auto">
            Si, además de las recompensas por referido, podes participar por premis mucho más grandes. (Te va a explotar la cabeza si ganas 🤭)
          </p>
        </div>

        {/* Leaderboard Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#262626] mb-8">
              <div className="space-y-4">
                <div className="flex items-center justify-end">
                  <span className="inline-flex items-center bg-[#1a1a1a]/90 text-[#D4FF78]/90 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-[#D4FF78]/20 backdrop-blur-sm hover:border-[#D4FF78]/30 transition-all duration-300 tracking-wide">
                     Raking de referidos
                  </span>
                </div>
                
                {/* Leaderboard */}
                <div className="space-y-3">
                  {/* First Place */}
                  <div className="bg-[#141414] backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="text-yellow-400 text-base sm:text-lg">🏆</div>
                      <span className="text-white text-base sm:text-lg font-bold">#1</span>
                    </div>
                    <ImageWithFallback 
                      src={danielImg}
                      alt="Daniel Robert"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover bg-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-sm sm:text-base truncate">Daniel Robert</div>
                      <div className="text-white/70 text-xs sm:text-[13px]">Alumni Edición #1</div>
                    </div>
                    <div className="text-green-400 text-xs sm:text-sm font-medium">5 referidos</div>
                  </div>

                  {/* Second Place */}
                  <div className="bg-[#141414] backdrop-blur-sm border border-white/15 rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="text-gray-300 text-base sm:text-lg">🥈</div>
                      <span className="text-white text-base sm:text-lg font-bold">#2</span>
                    </div>
                    <ImageWithFallback 
                      src={martinImg}
                      alt="Martin Lipovetzki"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover bg-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-sm sm:text-base truncate">Martin Lipovetzki</div>
                      <div className="text-white/70 text-xs sm:text-[13px]">Alumni Edición #2</div>
                    </div>
                    <div className="text-green-400 text-xs sm:text-sm font-medium">3 referidos</div>
                  </div>

                  {/* Third Place */}
                  <div className="bg-[#141414] backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="text-orange-400 text-base sm:text-lg">🥉</div>
                      <span className="text-white text-base sm:text-lg font-bold">#3</span>
                    </div>
                    <ImageWithFallback 
                      src={nahuelImg}
                      alt="Nahuel Turano"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-sm sm:text-base truncate">Nahuel Turano</div>
                      <div className="text-white/70 text-xs sm:text-[13px]">Alumni Edición #5</div>
                    </div>
                    <div className="text-green-400 text-xs sm:text-sm font-medium">2 referidos</div>
                  </div>

                  {/* Rankings 4-10 Section */}
                  <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 mt-4">
                    <div className="text-white font-medium mb-3 text-sm sm:text-base">Rankings 4-10</div>
                    <div className="flex items-center gap-2 sm:gap-3 p-2 bg-white/5 rounded-lg">
                      <span className="text-white/70 text-xs sm:text-sm">#4</span>
                      <ImageWithFallback 
                        src={emiliaImg}
                        alt="Emilia Vicini"
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-white/80 text-xs sm:text-sm truncate">Emilia Vicini</span>
                      </div>
                      <div className="text-green-400 text-xs">1 referido</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-start pt-4">
                  <span className="inline-flex items-center bg-[#1a1a1a]/90 text-[#FF3A20]/90 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-[#FF3A20]/20 backdrop-blur-sm hover:border-[#FF3A20]/30 transition-all duration-300 tracking-wide">
                    Suma puntos con cada referido
                  </span>
                </div>
                
                <div className="flex items-center justify-center pt-4">
                  <Timer />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                onClick={() => window.open('https://tally.so/r/mREoMv', '_blank')}
                className="bg-gradient-to-r from-[#FF3A20] to-[#E5301A] text-white hover:from-[#FF3A20] hover:to-[#FF5540] hover:shadow-lg hover:shadow-[#FF3A20]/25 hover:-translate-y-0.5 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl w-full sm:w-auto border border-[#FF3A20]/20 backdrop-blur-sm"
              >
                👉 Quiero referir
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}