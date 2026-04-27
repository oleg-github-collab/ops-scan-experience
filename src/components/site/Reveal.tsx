import { useEffect, useRef, type HTMLAttributes, type ElementType } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  delay?: number;
  variant?: "up" | "fade" | "scale" | "mask";
  once?: boolean;
};

/**
 * Premium scroll reveal. Uses IntersectionObserver + CSS transitions.
 * Stagger via `delay` (ms). Prefers-reduced-motion friendly.
 */
export function Reveal({
  as,
  delay = 0,
  variant = "up",
  once = true,
  className = "",
  style,
  children,
  ...rest
}: Props) {
  const Comp = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-revealed");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-revealed");
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            (entry.target as HTMLElement).classList.remove("is-revealed");
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Comp
      ref={ref as never}
      className={`reveal reveal-${variant} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
