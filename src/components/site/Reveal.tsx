import { useEffect, useRef, useState, type HTMLAttributes, type ElementType } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  delay?: number;
  variant?: "up" | "fade" | "scale" | "mask";
  once?: boolean;
};

/**
 * Premium scroll reveal. Progressive-enhancement safe:
 * content is always visible; we only enable the hidden-then-reveal
 * transition once JS mounts and IntersectionObserver is ready.
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
  const [armed, setArmed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setRevealed(true);
      return;
    }

    // Arm: switch element into the animated hidden state, then observe.
    setArmed(true);

    // Check initial visibility in the next frame after we've armed.
    const rafId = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh * 0.92 && rect.bottom > 0) {
        setRevealed(true);
        return;
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setRevealed(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(rafId);
      io.disconnect();
    };
  }, [once]);

  const cls = [
    armed ? `reveal reveal-${variant}` : "",
    armed && revealed ? "is-revealed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Comp
      ref={ref as never}
      className={cls}
      style={{ ...style, transitionDelay: armed ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
