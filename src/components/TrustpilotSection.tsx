import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, ExternalLink, ArrowRight } from "lucide-react";
import facundoImg from 'figma:asset/38d76c6bc30f199182bd876ffed5926ffa3186fb.png';

export function TrustpilotSection() {
  const handleReviewClick = () => {
    window.open('https://es.trustpilot.com/evaluate/novolabs.xyz', '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#2b2b2b] rounded-3xl p-8 lg:p-12">
          {/* Gradient Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4FF78]/10 to-transparent rounded-full blur-3xl opacity-50" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left order-1">


              {/* Heading */}
              <h2 className="text-3xl lg:text-4xl mb-4 lg:mb-4">
                <span className="text-white">¿Todavía no dejaste</span>
                <br />
                <span className="text-[#D4FF78]">tu review?</span>
              </h2>

              {/* Trustpilot Visual - Mobile Only */}
              <div className="flex-shrink-0 lg:hidden order-2 mb-6">
                <div className="relative">
                  {/* Main Trustpilot Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-md mx-auto">
                    {/* Header with user info and date */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <ImageWithFallback 
                          src={facundoImg}
                          alt="Facundo Rosa Breik"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-black font-semibold">Facundo Rosa Breik</h4>
                          <p className="text-gray-500 text-sm">AR • 1 review</p>
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm">Sep 1, 2025</span>
                    </div>
                    
                    {/* 5 stars */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
                      ))}
                    </div>
                    
                    {/* Review title */}
                    <h3 className="text-black font-semibold text-lg mb-3">Gamechanger.</h3>
                    
                    {/* Review content */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Novo fue un antes y un después en nuestra startup: nos cambió la 
                      manera de pensar, trabajar, y como encarar cualquier desafío. Es una 
                      experiencia que le recomiendo a founders en cualquier estadio!
                    </p>
                    
                    {/* Bottom verification */}
                    <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#D4FF78] to-[#b8e055] rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 text-xs">Review verificada • Trustpilot</span>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    ¡Tu review aquí!
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#c9c9c9] text-lg mb-8 max-w-md mx-auto lg:mx-0 order-3">
                Cada review nos ayuda a atraer
                <span className="text-white"> más personas talentosas</span> como vos.
              </p>

              {/* CTA Button */}
              <Button 
                onClick={handleReviewClick}
                className="group bg-gradient-to-r from-[#D4FF78] to-[#b8e055] hover:from-[#b8e055] hover:to-[#D4FF78] text-black px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(212,255,120,0.3)] order-4"
              >
                <span className="mr-2">Dejar mi review</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Sub text */}
              <p className="text-white/60 text-sm mt-4 order-5">
                Solo toma 2 minutos
              </p>

              {/* Trustpilot Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#1f1f1f] px-3 sm:px-4 py-2 rounded-lg border border-[#333] text-sm sm:text-base mt-4 order-6">
                <span className="text-white font-medium">4.8</span>
                <div className="flex gap-0.5 sm:gap-1">
                  <span className="text-[#00b67a]">★</span>
                  <span className="text-[#00b67a]">★</span>
                  <span className="text-[#00b67a]">★</span>
                  <span className="text-[#00b67a]">★</span>
                  <span className="bg-gradient-to-r from-[#00b67a] from-50% to-white to-50% bg-clip-text text-transparent">★</span>
                </div>
                <span className="text-white text-xs sm:text-sm font-medium">Trustpilot</span>
              </div>
            </div>

            {/* Right Content - Desktop Only */}
            <div className="flex-shrink-0 hidden lg:block">
              <div className="relative">
                {/* Main Trustpilot Card */}
                <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-md mx-auto">
                  {/* Header with user info and date */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <ImageWithFallback 
                        src={facundoImg}
                        alt="Facundo Rosa Breik"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-black font-semibold">Facundo Rosa Breik</h4>
                        <p className="text-gray-500 text-sm">AR • 1 review</p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-sm">Sep 1, 2025</span>
                  </div>
                  
                  {/* 5 stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
                    ))}
                  </div>
                  
                  {/* Review title */}
                  <h3 className="text-black font-semibold text-lg mb-3">Gamechanger.</h3>
                  
                  {/* Review content */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Novo fue un antes y un después en nuestra startup: nos cambió la 
                    manera de pensar, trabajar, y como encarar cualquier desafío. Es una 
                    experiencia que le recomiendo a founders en cualquier estadio!
                  </p>
                  
                  {/* Bottom verification */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#D4FF78] to-[#b8e055] rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-600 text-xs">Review verificada • Trustpilot</span>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  ¡Tu review aquí!
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4FF78]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}