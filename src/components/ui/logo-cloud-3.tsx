import React from "react";
import { cn } from "@/lib/utils";

import sgLogo from "@/images/logos/SG Logo 1 colored.png";
import convexSolLogo from "@/images/logos/Group 1000013899 2.png";
import rpmLogo from "@/images/logos/Layer 1 2.png";
import tapappLogo from "@/images/logos/LOGO.png";
import qmiLogo from "@/images/logos/Logo-QMI-Silver-2 1.png";

export interface LogoItem {
  name: string;
  image?: string;
  Icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export interface LogoCloudProps {
  title?: string;
  items?: LogoItem[];
  className?: string;
  duration?: number;
}

export const DEFAULT_CLIENTS: LogoItem[] = [
  {
    name: "SentientGeeks",
    image: sgLogo,
    className: "h-7 md:h-8 max-w-[150px]",
  },
  {
    name: "ConvexSol",
    image: convexSolLogo,
    className:
      "h-5 md:h-6 max-w-[150px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)] dark:drop-shadow-none",
  },
  {
    name: "RPM DXB",
    image: rpmLogo,
    className: "h-7 md:h-8 max-w-[160px]",
  },
  {
    name: "TapApp",
    image: tapappLogo,
    className: "h-7 md:h-8 max-w-[140px]",
  },
  {
    name: "QMI",
    image: qmiLogo,
    className: "h-8 md:h-9 max-w-[90px]",
  },
];

export function LogoCloudBlock({
  title,
  items = DEFAULT_CLIENTS,
  className,
  duration = 26,
}: LogoCloudProps) {
  // Multiply items to guarantee seamless looping across wide screens
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div className={cn("w-full", className)}>
      <style>{`
        @keyframes logo-cloud-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .logo-cloud-track {
          animation: logo-cloud-marquee ${duration}s linear infinite;
        }
        .logo-cloud-mask:hover .logo-cloud-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-cloud-track {
            animation: none;
          }
        }
      `}</style>

      {title && (
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{title}</p>
      )}

      <div className="logo-cloud-mask relative mt-6 w-full overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="logo-cloud-track flex w-max items-center py-2 sm:py-3 will-change-transform">
          {displayItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group/item flex shrink-0 items-center px-3 sm:px-5 cursor-pointer"
              aria-hidden={index >= items.length ? "true" : undefined}
            >
              <div className="flex h-12 sm:h-14 min-w-[110px] sm:min-w-[130px] max-w-[160px] sm:max-w-[200px] items-center justify-center rounded-xl border border-line bg-surface/70 px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-xs backdrop-blur-xs transition-all duration-300 group-hover/item:border-vermillion/40 group-hover/item:bg-surface group-hover/item:scale-105 group-hover/item:shadow-sm">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`${item.name} logo`}
                    className={cn(
                      "w-auto object-contain transition-all duration-300",
                      item.className,
                    )}
                  />
                ) : (
                  <span className="font-serif text-xl sm:text-2xl italic leading-snug tracking-tight whitespace-nowrap text-ink transition-colors duration-200 group-hover/item:text-vermillion md:text-[28px]">
                    {item.name}
                  </span>
                )}
              </div>
              <span
                className="ml-3 sm:ml-5 font-serif text-sm text-line select-none"
                aria-hidden="true"
              >
                ·
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoCloudBlock;
