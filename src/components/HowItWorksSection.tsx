import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-18 px-5" style={{ background: 'var(--nl-bg)' }}>
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-8 sm:mb-12 text-center">Cómo funciona el programa de referidos</h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <Card className="bg-[#141414] border-[#262626] text-white">
            <CardHeader>
              <CardTitle className="text-xl">1) Rellenas el form</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#c9c9c9] leading-relaxed">
                Contándonos a quien/es queres referir y por qué.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#141414] border-[#262626] text-white">
            <CardHeader>
              <CardTitle className="text-xl">2) Los contactamos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#c9c9c9] leading-relaxed">
                Con whatsapp de tu parte para invitarlo a una entrevista.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#141414] border-[#262626] text-white">
            <CardHeader>
              <CardTitle className="text-xl">3) Te enviamos tu premio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#c9c9c9] leading-relaxed">
                Si tu referido/a queda seleccionado, te vamos a contactar.
              </p>
            </CardContent>
          </Card>
        </div>
        

      </div>
    </section>
  );
}