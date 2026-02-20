import { Button } from "./ui/button";

export function FinalCTASection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-5" style={{ background: 'var(--nl-bg)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div 
          className="text-center p-6 sm:p-8 lg:p-12 rounded-2xl"
          style={{ 
            background: 'linear-gradient(180deg,#141414, #0f0f0f)', 
            border: '1px solid #242424'
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
            ¿Ya sabés a quién le puede servir?
          </h2>
          <p className="text-lg sm:text-xl text-[#c9c9c9] mb-8 sm:mb-10 max-w-2xl mx-auto">
            Seguro se te vino alguien a la mente mientras leías. Dale, ayudalo a dar el paso.
          </p>
          
          <Button 
            onClick={() => window.open('https://tally.so/r/mREoMv', '_blank')}
            className="bg-gradient-to-r from-[#FF3A20] to-[#E5301A] text-white hover:from-[#FF3A20] hover:to-[#FF5540] hover:shadow-lg hover:shadow-[#FF3A20]/25 hover:-translate-y-0.5 transition-all duration-300 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl w-full sm:w-auto border border-[#FF3A20]/20 backdrop-blur-sm"
          >
            👉 Quiero referir
          </Button>
        </div>
      </div>
    </section>
  );
}