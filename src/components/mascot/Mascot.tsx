import Image from "next/image";

interface MascotProps {
  alt: string;
  className?: string;
  priority?: boolean;
  variant: "hero-wave" | "security-shield" | "working-laptop" | "mail-send" | "pricing-peek" | "celebrate" | "faq-thinking";
}

export function Mascot({ alt, className = "", priority = false, variant }: MascotProps) {
  const imagePath = `/mascot/${variant}.webp`;
  
  return (
    <div className={`relative ${className}`}>
      <Image
        src={imagePath}
        alt={alt}
        fill
        className="object-contain"
        priority={priority}
      />
    </div>
  );
}
