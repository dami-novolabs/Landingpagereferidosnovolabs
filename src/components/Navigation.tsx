import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import novolabsLogo from 'figma:asset/52020c0a501af2e202886d2601d951fdf3071574.png';

export function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1f1f1f]" style={{ background: 'rgba(17,17,17,.8)', backdropFilter: 'blur(8px)' }}>
      <div className="max-w-[1120px] mx-auto px-5 flex items-center justify-between h-16">
        <div className="flex items-center">
          <ImageWithFallback 
            src={novolabsLogo} 
            alt="Novolabs" 
            className="h-8 object-contain" 
          />
        </div>
        


        <div className="flex items-center gap-3">

        </div>
      </div>
    </nav>
  );
}