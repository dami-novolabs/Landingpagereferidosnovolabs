import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="py-18 px-5" style={{ background: 'var(--nl-bg)' }}>
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-8 sm:mb-12">Preguntas frecuentes</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem 
            value="item-1" 
            className="bg-[#141414] border border-[#262626] rounded-xl px-4 sm:px-5 py-2"
          >
            <AccordionTrigger className="text-white font-bold hover:no-underline text-sm sm:text-base">
              ¿Qué pasa si mi referido no se inscribe al final?
            </AccordionTrigger>
            <AccordionContent className="text-[#c9c9c9] leading-relaxed text-sm sm:text-base">
              No pasa nada. Novo no es para todo el mundo y puede que el / ella no este preparado. Si lo vemos muy frío lo vamos a invitar a la Masterclass para que se empiece a empapapar de Novo.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem 
            value="item-2" 
            className="bg-[#141414] border border-[#262626] rounded-xl px-4 sm:px-5 py-2"
          >
            <AccordionTrigger className="text-white font-bold hover:no-underline text-sm sm:text-base">
              ¿Cuántas personas puedo referir?
            </AccordionTrigger>
            <AccordionContent className="text-[#c9c9c9] leading-relaxed text-sm sm:text-base">
              No hay límite. Podés referir a todas las personas que creas que se beneficiarían del programa. 
              Cada referido exitoso es una recompensa independiente.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem 
            value="item-3" 
            className="bg-[#141414] border border-[#262626] rounded-xl px-4 sm:px-5 py-2"
          >
            <AccordionTrigger className="text-white font-bold hover:no-underline text-sm sm:text-base">
              ¿Cómo sé si mi referido se acreditó correctamente?
            </AccordionTrigger>
            <AccordionContent className="text-[#c9c9c9] leading-relaxed text-sm sm:text-base">
              Te vamos a contactar personalmente por cada persona que refieras que quede seleccionada en Novolabs. Por cada persona que refieras haremos entrega de la debida recompensa. Además, en el formulario le vamos a preguntar "¿Quién te refirió?" 
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem 
            value="item-4" 
            className="bg-[#141414] border border-[#262626] rounded-xl px-4 sm:px-5 py-2"
          >
            <AccordionTrigger className="text-white font-bold hover:no-underline text-sm sm:text-base">
              Si no quiero dinero... ¿Hay otro tipo de recompensa?
            </AccordionTrigger>
            <AccordionContent className="text-[#c9c9c9] leading-relaxed text-sm sm:text-base">
              Si no querés los $200 USD de recompensa, te ofrecemos 3 sesiones 1:1 personalizadas con el mentor de Novo que vos quieras. Así podes seguir avanzando en tu camino emprendedor.
            </AccordionContent>
          </AccordionItem>

           <AccordionItem 
            value="item-5" 
            className="bg-[#141414] border border-[#262626] rounded-xl px-4 sm:px-5 py-2"
          >
            <AccordionTrigger className="text-white font-bold hover:no-underline text-sm sm:text-base">
              ¿Cuando recibo la recompensa económica o las mentorías?
            </AccordionTrigger>
            <AccordionContent className="text-[#c9c9c9] leading-relaxed text-sm sm:text-base">
              Una vez que la persona referida paga el 100% del programa.Si realiza el pago en 1 cuota, se desbloquea automáticamente la recompensa. Si la persona paga en cuotas, al finalizar la última cuota podrás recibir los $200 o las 3 mentorías.
            </AccordionContent>
          </AccordionItem>

           <AccordionItem 
            value="item-6" 
            className="bg-[#141414] border border-[#262626] rounded-xl px-4 sm:px-5 py-2"
          >   
          <AccordionTrigger className="text-white font-bold hover:no-underline text-sm sm:text-base">
              ¿Cuando ocurre la Masterclass Exclusiva?
            </AccordionTrigger>
            <AccordionContent className="text-[#c9c9c9] leading-relaxed text-sm sm:text-base">
              Cuando haya al menos 10 personas que hayan referido a alguien. No tiene sentido traer un invitado tan tan importante para tan sólo 2 o 3 personas.
            </AccordionContent>
          </AccordionItem>

            <AccordionItem 
            value="item-6" 
            className="bg-[#141414] border border-[#262626] rounded-xl px-4 sm:px-5 py-2"
          >   
          <AccordionTrigger className="text-white font-bold hover:no-underline text-sm sm:text-base">
              ¿Cómo funcionan las recompensas trimestrales?
            </AccordionTrigger>
            <AccordionContent className="text-[#c9c9c9] leading-relaxed text-sm sm:text-base">
              Al finalizar cada quarter, las 3 personas que más referidos acumulen podrán optar entre diferentes premios exclusivos. Van a depender de quiénes sean los ganadores, para que sea cosas que sepamos que realmente te ayuden a seguir avanzando.
            </AccordionContent>
          </AccordionItem>
          
        </Accordion>
      </div>
    </section>
  );
}