import React from "react";
import { cn } from "@/lib/utils";

export interface LogoItem {
  name: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

export interface LogoCloudProps {
  title?: string;
  items?: LogoItem[];
  className?: string;
  duration?: number;
}

// Custom modern SVG icons tailored for the portfolio clients
export const SentientGeeksIcon: React.FC<{ className?: string }> = ({ className = "size-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

export const ConvexSolIcon: React.FC<{ className?: string }> = ({ className = "size-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <line x1="12" y1="22" x2="12" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
  </svg>
);

export const RpmDxbIcon: React.FC<{ className?: string }> = ({ className = "size-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m14 10-4 4" />
    <path d="M12 6v2" />
    <path d="M6 12h2" />
    <path d="M16 12h2" />
  </svg>
);

export const TapAppIcon: React.FC<{ className?: string }> = ({ className = "size-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="14" height="20" x="5" y="2" rx="3" />
    <path d="M12 18h.01" />
    <circle cx="12" cy="9" r="2" />
    <path d="M12 3v2" />
  </svg>
);

export const DEFAULT_CLIENTS: LogoItem[] = [
  { name: "SentientGeeks", Icon: SentientGeeksIcon },
  { name: "ConvexSol", Icon: ConvexSolIcon },
  { name: "RPM DXB", Icon: RpmDxbIcon },
  { name: "TapApp", Icon: TapAppIcon },
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

      <div className="logo-cloud-mask relative mt-6 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="logo-cloud-track flex w-max items-center py-2">
          {displayItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group/item flex shrink-0 items-center gap-3 px-8 text-muted transition-colors duration-200 hover:text-ink cursor-pointer"
              aria-hidden={index >= items.length ? "true" : undefined}
            >
              {item.Icon && (
                <span className="flex size-7 items-center justify-center rounded-md border border-line bg-surface/70 text-ink shadow-xs transition-all duration-200 group-hover/item:border-vermillion/40 group-hover/item:text-vermillion group-hover/item:scale-110">
                  <item.Icon className="size-4" />
                </span>
              )}
              <span className="font-serif text-2xl italic leading-snug tracking-tight whitespace-nowrap text-ink transition-colors duration-200 group-hover/item:text-vermillion md:text-[28px]">
                {item.name}
              </span>
              <span className="ml-4 font-serif text-sm text-line select-none" aria-hidden="true">
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
