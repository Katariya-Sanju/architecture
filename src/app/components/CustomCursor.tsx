import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const enter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setExpanded(true);
      }
    };

    const leave = () => setExpanded(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] hidden lg:block"
      style={{
        width: expanded ? "32px" : "16px",
        height: expanded ? "32px" : "16px",
        border: "1px solid #C9A84C",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        transition: "width 0.25s ease, height 0.25s ease, background 0.25s ease",
        background: expanded ? "rgba(201,168,76,0.15)" : "transparent",
        mixBlendMode: "normal",
      }}
    />
  );
}
