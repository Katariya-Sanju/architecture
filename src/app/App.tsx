import { useEffect, useRef, useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { StudioSection } from "./components/StudioSection";
import { ProcessSection } from "./components/ProcessSection";
import { ContactSection } from "./components/ContactSection";
import { CustomCursor } from "./components/CustomCursor";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function RevealSection({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div style={{ background: "#0A0A0A", cursor: "none", scrollBehavior: "smooth" }}>
      <CustomCursor />

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #0A0A0A;
          font-family: 'DM Sans', sans-serif;
          cursor: none;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #C9A84C; border-radius: 0; }
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9998;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.035;
        }
        input::placeholder, textarea::placeholder { color: rgba(245,240,232,0.3); }
        select option { background: #1C1C1C; color: #F5F0E8; }
        h1, h2, h3, h4, h5, h6 { margin: 0; }
        @media (max-width: 768px) {
          body { cursor: auto; }
        }
        @media (max-width: 900px) {
          section { padding: 80px 0 !important; }
        }
      `}</style>

      <HeroSection />

      <RevealSection>
        <ProjectsSection />
      </RevealSection>

      <RevealSection>
        <StudioSection />
      </RevealSection>

      <RevealSection>
        <ProcessSection />
      </RevealSection>

      <RevealSection>
        <ContactSection />
      </RevealSection>
    </div>
  );
}
