import { useEffect, useRef, useState } from "react";

interface MousePos { x: number; y: number }

export function HeroSection() {
  const [mouse, setMouse] = useState<MousePos>({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgX = mouse.x * -12;
  const bgY = mouse.y * -12;
  const midX = mouse.x * -28;
  const midY = mouse.y * -28;
  const fgX = mouse.x * 18;
  const fgY = mouse.y * 18;

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", background: "#0A0A0A" }}
    >
      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.05,
        }}
      />

      {/* Background layer — grid floor / city silhouette */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${bgX}px, ${bgY}px) scale(1.08)`,
          transition: "transform 0.1s ease-out",
          willChange: "transform",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1590979391495-012d736a73a3?w=1800&h=1100&fit=crop&auto=format"
          alt="City skyline"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.18) grayscale(0.6)" }}
        />
        {/* Grid lines overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Mid layer — main architectural render */}
      <div
        className="absolute inset-0 flex items-center justify-end"
        style={{
          transform: `translate(${midX}px, ${midY}px)`,
          transition: "transform 0.08s ease-out",
          willChange: "transform",
        }}
      >
        <div
          className="relative"
          style={{ width: "58%", height: "100%", right: "-4%" }}
        >
          <img
            src="https://images.unsplash.com/photo-1486983493968-6550b6afbe96?w=1200&h=1400&fit=crop&auto=format"
            alt="Architectural building"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.45) contrast(1.2) grayscale(0.2)",
              maskImage: "linear-gradient(to left, rgba(0,0,0,0.9) 40%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.9) 40%, transparent 100%)",
            }}
          />
          {/* Gold wireframe overlay */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 600 900"
            preserveAspectRatio="xMidYMid slice"
            style={{ opacity: 0.18 }}
          >
            <g stroke="#C9A84C" strokeWidth="0.5" fill="none">
              <line x1="100" y1="0" x2="300" y2="900" />
              <line x1="200" y1="0" x2="500" y2="900" />
              <line x1="400" y1="0" x2="100" y2="900" />
              <line x1="0" y1="200" x2="600" y2="300" />
              <line x1="0" y1="500" x2="600" y2="600" />
              <polygon points="300,50 550,250 500,700 50,700 50,250" />
              <polygon points="300,150 480,300 440,600 160,600 120,300" />
            </g>
          </svg>
        </div>
      </div>

      {/* Foreground layer — floating geometric fragments */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${fgX}px, ${fgY}px)`,
          transition: "transform 0.05s ease-out",
          willChange: "transform",
        }}
      >
        <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="#C9A84C">
            <polygon points="1100,120 1160,200 1060,220" strokeWidth="0.8" opacity="0.5" />
            <polygon points="1250,350 1310,290 1340,380" strokeWidth="0.6" opacity="0.35" />
            <line x1="980" y1="80" x2="1050" y2="160" strokeWidth="0.5" opacity="0.4" />
            <line x1="1200" y1="500" x2="1300" y2="520" strokeWidth="0.5" opacity="0.3" />
            <rect x="1020" y="600" width="40" height="40" strokeWidth="0.6" opacity="0.25" transform="rotate(15 1040 620)" />
            <circle cx="850" cy="150" r="3" fill="#C9A84C" opacity="0.6" />
            <circle cx="1180" cy="440" r="2" fill="#C9A84C" opacity="0.5" />
            <circle cx="1320" cy="200" r="1.5" fill="#C9A84C" opacity="0.4" />
            <line x1="60" y1="300" x2="80" y2="380" strokeWidth="0.4" opacity="0.25" />
            <polygon points="40,500 80,470 90,530" strokeWidth="0.5" opacity="0.2" />
          </g>
        </svg>
      </div>

      {/* Gradient fade left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #0A0A0A 30%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0A0A0A 8%, transparent 40%)",
        }}
      />

      {/* Navigation */}
      <nav
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6"
        style={{
          background: scrolled
            ? "rgba(10,10,10,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "background 0.4s ease, backdrop-filter 0.4s ease",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "28px",
            letterSpacing: "0.15em",
            color: "#F5F0E8",
          }}
        >
          ARCVAULT
        </span>
        <div className="hidden md:flex items-center gap-10">
          {["Projects", "Studio", "Journal", "Contact"].map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                letterSpacing: "0.08em",
                color: "#F5F0E8",
                textDecoration: "none",
                opacity: 0.85,
              }}
            >
              {i === 0 && (
                <span
                  className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                  style={{ background: "#C9A84C" }}
                />
              )}
              {link}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: "#C9A84C" }}
              />
            </a>
          ))}
        </div>
      </nav>

      {/* Vertical text — left edge */}
      <div
        className="absolute left-8 bottom-1/3 z-20 hidden lg:block"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          letterSpacing: "0.25em",
          color: "#C9A84C",
          opacity: 0.7,
        }}
      >
        SCROLL TO EXPLORE ↓
      </div>

      {/* Main hero content */}
      <div
        className="absolute inset-0 z-30 flex flex-col justify-center px-10 md:px-20"
        style={{ paddingTop: "80px" }}
      >
        <div className="max-w-2xl">
          {/* Tiny label */}
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#C9A84C",
              marginBottom: "32px",
              opacity: 0.9,
            }}
          >
            ESTABLISHED 2004 · DUBAI · NYC · TOKYO
          </p>

          {/* Main heading */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(56px, 8vw, 120px)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              color: "#F5F0E8",
              margin: 0,
            }}
          >
            WE BUILD
            <br />
            THE FUTURE'S
            <br />
            <span style={{ color: "#C9A84C" }}>GEOMETRY.</span>
          </h1>

          {/* Horizontal rule */}
          <div
            style={{
              width: "60%",
              height: "1px",
              background: "linear-gradient(to right, #C9A84C, transparent)",
              margin: "28px 0",
              opacity: 0.6,
            }}
          />

          {/* Subtext */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              letterSpacing: "0.04em",
              color: "#F5F0E8",
              opacity: 0.65,
              marginBottom: "40px",
            }}
          >
            Award-winning architecture for icons of tomorrow
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-6 flex-wrap">
            {/* using <button> instead of kit component: no kit installed */}
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "14px",
                letterSpacing: "0.2em",
                background: "#C9A84C",
                color: "#0A0A0A",
                border: "none",
                padding: "14px 32px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#e0bc60"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#C9A84C"; }}
            >
              EXPLORE PROJECTS
            </button>
            <button
              onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "14px",
                letterSpacing: "0.2em",
                background: "transparent",
                color: "#F5F0E8",
                border: "1px solid rgba(245,240,232,0.3)",
                padding: "14px 32px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A84C";
                (e.currentTarget as HTMLButtonElement).style.color = "#C9A84C";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(245,240,232,0.3)";
                (e.currentTarget as HTMLButtonElement).style.color = "#F5F0E8";
              }}
            >
              OUR PROCESS →
            </button>
          </div>
        </div>
      </div>

      {/* Rotating golden stamp */}
      <div
        className="absolute bottom-16 right-16 z-30 hidden lg:block"
        style={{ animation: "spin 20s linear infinite" }}
      >
        <svg viewBox="0 0 120 120" width="90" height="90">
          <defs>
            <path id="circle" d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
          </defs>
          <text
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "10.5px",
              letterSpacing: "0.18em",
              fill: "#C9A84C",
              opacity: 0.7,
            }}
          >
            <textPath href="#circle">ARCHITECTURE · EXCELLENCE · PRECISION ·</textPath>
          </text>
          <circle cx="60" cy="60" r="4" fill="#C9A84C" opacity="0.6" />
        </svg>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
