import Image from "next/image";

interface MascotProps {
  alt: string;
  className?: string;
  priority?: boolean;
  variant: "hero-wave" | "security-shield" | "working-laptop" | "mail-send" | "pricing-peek" | "celebrate" | "mail-sorting";
}

export function Mascot({ alt, className = "", priority = false, variant }: MascotProps) {
  const imagePath = `/mascot/${variant}.webp`;
  
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={imagePath}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain"
        priority={priority}
      />
    </div>
  );
}
