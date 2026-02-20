import { ImageWithFallback } from "./figma/ImageWithFallback";
import novolabsLogo from 'figma:asset/52020c0a501af2e202886d2601d951fdf3071574.png';

export function Footer() {
  return (
    <footer style={{ background: 'var(--nl-bg)' }}>
      <div 
        className="max-w-[1200px] mx-auto px-5 py-8 sm:py-12 text-[#666] border-t border-[#262626]"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center">
          <div className="flex items-center order-1 sm:order-1">
            <ImageWithFallback 
              src={novolabsLogo} 
              alt="Novolabs" 
              className="h-6 sm:h-8 object-contain" 
            />
          </div>
          
          <div className="text-xs sm:text-sm order-3 sm:order-2 text-center">
            © 2025 Novolabs. Todos los derechos reservados.
          </div>
          
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm order-2 sm:order-3">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Soporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
}