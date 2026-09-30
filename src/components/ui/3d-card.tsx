import { cn } from "@/lib/utils";
import React, { createContext, useState, useContext, useRef, useEffect } from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
      setCanHover(mq.matches);
      const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
    return undefined;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 18;
    const y = (e.clientY - top - height / 2) / 18;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => {
    if (!canHover) return;
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("w-full flex items-center justify-center", containerClassName)}
        style={{
          perspective: canHover ? "1000px" : undefined,
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn("w-full relative transition-transform duration-200 ease-out", className)}
          style={{
            transformStyle: canHover ? "preserve-3d" : "flat",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full [@media(hover:hover)]:[transform-style:preserve-3d] [&>*]:[@media(hover:hover)]:[transform-style:preserve-3d]",
        className,
      )}
    >
      {children}
    </div>
  );
};

const toPx = (val: number | string) => {
  if (typeof val === "number") return `${val}px`;
  if (val.endsWith("px") || val.endsWith("%") || val.endsWith("rem") || val.endsWith("em")) {
    return val;
  }
  return `${val}px`;
};

const toDeg = (val: number | string) => {
  if (typeof val === "number") return `${val}deg`;
  if (val.endsWith("deg") || val.endsWith("rad") || val.endsWith("turn")) {
    return val;
  }
  return `${val}deg`;
};

export function CardItem<T extends React.ElementType = "div">({
  as,
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: T;
  children?: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  | "as"
  | "children"
  | "className"
  | "translateX"
  | "translateY"
  | "translateZ"
  | "rotateX"
  | "rotateY"
  | "rotateZ"
>) {
  const Tag = as || "div";
  const ref = useRef<HTMLElement | null>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${toPx(translateX)}) translateY(${toPx(translateY)}) translateZ(${toPx(translateZ)}) rotateX(${toDeg(rotateX)}) rotateY(${toDeg(rotateY)}) rotateZ(${toDeg(rotateZ)})`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as React.Ref<any>}
      className={cn("transition-transform duration-200 ease-out", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
