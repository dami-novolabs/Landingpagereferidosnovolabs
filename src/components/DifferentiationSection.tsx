import { Card, CardContent } from "./ui/card";

export function DifferentiationSection() {
  return (
    <section id="diferenciacion" className="py-18 px-5" style={{ background: 'var(--nl-bg)' }}>
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl lg:text-4xl text-white mb-8">¿Por qué Novo y no "otro curso"?</h2>
        
        <Card className="bg-[#141414] border-[#262626] text-white">
          <CardContent className="p-6">
            <ul className="space-y-4 pl-6">
              <li className="text-white list-disc ml-2">
                <strong>Cupos limitados (20 proyectos)</strong> → foco y seguimiento real.
              </li>
              <li className="text-white list-disc ml-2">
                <strong>Mentores operadores</strong> (no "gurús"): emprenden hoy.
              </li>
              <li className="text-white list-disc ml-2">
                <strong>IA propia</strong> para ejecutar más rápido cada semana.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}