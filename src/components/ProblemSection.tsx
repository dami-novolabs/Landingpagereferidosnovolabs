export function ProblemSection() {
  return (
    <section id="problema" className="py-20 px-5 relative overflow-hidden" style={{ background: 'var(--nl-bg)' }}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF78]/5 via-transparent to-[#FF3A20]/5"></div>
      
      <div className="max-w-[1120px] mx-auto relative z-10">
        {/* Premium header with badge */}
        <div className="text-center mb-12">

          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 font-bold bg-gradient-to-r from-white via-[#D4FF78] to-white bg-clip-text text-transparent">
            Seguro conoces a una persona que... 👇
          </h2>
          
  
        </div>

        {/* Premium cards for each persona */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#2b2b2b] rounded-2xl p-4 sm:p-6 hover:border-[#D4FF78]/30 transition-all duration-300 group">
            <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">🤹‍♂️</div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3">Siempre tiene ideas</h3>
            <p className="text-[#c9c9c9] text-sm leading-relaxed">
              Ese amigo que siempre anda con ideas de negocio pero no sabe cómo ejecutarlas ni validarlas correctamente.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#2b2b2b] rounded-2xl p-4 sm:p-6 hover:border-[#D4FF78]/30 transition-all duration-300 group">
            <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">🤬</div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3">Se canso de su trabajo</h3>
            <p className="text-[#c9c9c9] text-sm leading-relaxed">
              Tu compañero de trabajo que quiere independizarse pero le falta la estructura y mentoría adecuada.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#2b2b2b] rounded-2xl p-4 sm:p-6 hover:border-[#D4FF78]/30 transition-all duration-300 group">
            <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">🤕</div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3">Ya emprendió sin éxito</h3>
            <p className="text-[#c9c9c9] text-sm leading-relaxed">
              Conocidos que ya intentaron emprender pero sin una metodología clara ni el acompañamiento correcto.
            </p>
          </div>
        </div>

        {/* Call to action insight */}
        <div className="mt-12 text-center">

        </div>
      </div>
    </section>
  );
}