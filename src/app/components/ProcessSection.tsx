import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery & Brief",
    desc: "Deep client immersion — understanding vision, site, programme, and the cultural context that will shape the work.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Concept & Schematic Design",
    desc: "Bold conceptual frameworks translated into spatial narratives — tested through model, sketch, and material.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Design Development",
    desc: "Every detail resolved — structure, envelope, interior logic, material palette, and regulatory compliance.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="18" height="18" rx="0" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Construction Documentation",
    desc: "Precision drawing sets and specifications enabling flawless execution by the finest contractors.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Site Supervision & Delivery",
    desc: "On-site presence throughout construction — protecting design intent from first pour to final handover.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

const callouts = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.4">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z" /><path d="M12 6v6l4 2" />
        <path d="M7 17.5A7 7 0 0117 7" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Sustainable Design First",
    desc: "Every project is conceived with environmental responsibility at its core — passive strategies before active systems.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.4">
        <path d="M12 15l-3-3a22 22 0 0121-4" /><path d="M9 11L6 8a22 22 0 004-21" /><path d="M8 22l4-4 4 4" /><path d="M20 4l-8 8" />
      </svg>
    ),
    title: "Award-Winning Interiors",
    desc: "Interior architecture seamlessly integrated with structure — a total environment, not an afterthought.",
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      style={{
        background: "#0A0A0A",
        padding: "120px 0",
        borderTop: "1px solid #222222",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        {/* Header */}
        <div className="mb-20">
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#C9A84C",
              marginBottom: "12px",
            }}
          >
            HOW WE WORK
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(36px, 4vw, 64px)",
              letterSpacing: "0.01em",
              color: "#F5F0E8",
              margin: 0,
            }}
          >
            From Vision to Monument
          </h2>
        </div>

        {/* Steps — horizontal timeline */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: "0", position: "relative" }}
        >
          {/* Connector line */}
          <div
            className="absolute hidden lg:block"
            style={{
              top: "36px",
              left: "10%",
              right: "10%",
              height: "1px",
              background: "linear-gradient(to right, #222 0%, #C9A84C 40%, #222 100%)",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative cursor-pointer"
              style={{ padding: "0 16px", zIndex: 1 }}
              onMouseEnter={() => setActiveStep(i)}
            >
              {/* Step number (large, faint) */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "80px",
                  lineHeight: 1,
                  color: activeStep === i ? "#C9A84C" : "#F5F0E8",
                  opacity: activeStep === i ? 0.15 : 0.05,
                  position: "absolute",
                  top: 0,
                  left: "8px",
                  transition: "all 0.3s ease",
                  userSelect: "none",
                }}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  marginTop: "8px",
                  marginBottom: "20px",
                  color: activeStep === i ? "#C9A84C" : "#F5F0E8",
                  opacity: activeStep === i ? 1 : 0.4,
                  transition: "all 0.3s ease",
                }}
              >
                {step.icon}
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  borderTop: activeStep === i ? "1px solid #C9A84C" : "1px solid #333",
                  paddingTop: "16px",
                  transition: "border-color 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "13px",
                    color: activeStep === i ? "#F5F0E8" : "#F5F0E8",
                    opacity: activeStep === i ? 1 : 0.6,
                    marginBottom: "8px",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "12px",
                    lineHeight: 1.7,
                    color: "#F5F0E8",
                    opacity: activeStep === i ? 0.55 : 0.3,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout boxes */}
        <div
          className="grid mt-20"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "2px" }}
        >
          {callouts.map(c => (
            <div
              key={c.title}
              style={{
                background: "#1C1C1C",
                border: "1px solid #222222",
                padding: "40px",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "#C9A84C")}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "#222222")}
            >
              <div style={{ marginBottom: "16px" }}>{c.icon}</div>
              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#F5F0E8",
                  marginBottom: "10px",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  lineHeight: 1.75,
                  color: "#F5F0E8",
                  opacity: 0.5,
                }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
