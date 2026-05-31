const stats = [
  { value: "127+", label: "PROJECTS" },
  { value: "19", label: "YEARS" },
  { value: "12", label: "COUNTRIES" },
];

export function StudioSection() {
  return (
    <section
      id="studio"
      style={{
        background: "#111111",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Diagonal line texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(201,168,76,0.03) 0px,
            rgba(201,168,76,0.03) 1px,
            transparent 1px,
            transparent 40px
          )`,
          opacity: 0.6,
        }}
      />

      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
        >
          {/* Left — image with offset gold frame */}
          <div className="relative hidden md:block" style={{ paddingTop: "40px", paddingRight: "40px" }}>
            <img
              src="https://images.unsplash.com/photo-1508291341127-8c0df71a1af4?w=700&h=900&fit=crop&auto=format"
              alt="Architectural interior with dramatic shadows"
              className="w-full"
              style={{
                filter: "grayscale(1) contrast(1.1) brightness(0.85)",
                display: "block",
                aspectRatio: "3/4",
                objectFit: "cover",
              }}
            />
            {/* Offset gold border */}
            <div
              className="absolute"
              style={{
                top: 0,
                right: 0,
                width: "calc(100% - 20px)",
                height: "calc(100% - 20px)",
                border: "1px solid #C9A84C",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Right — content */}
          <div>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "#C9A84C",
                marginBottom: "20px",
              }}
            >
              THE STUDIO
            </p>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(36px, 4vw, 60px)",
                lineHeight: 1.05,
                letterSpacing: "0.01em",
                color: "#F5F0E8",
                marginBottom: "32px",
              }}
            >
              Architecture as
              <br />
              Cultural Memory
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#F5F0E8",
                opacity: 0.65,
                marginBottom: "48px",
                maxWidth: "460px",
              }}
            >
              We believe every building is a statement of its era — a monument that outlasts its brief. At ARCVAULT,
              we approach every commission as an opportunity to inscribe meaning into the landscape of human civilisation.
              Our work spans continents, but our obsession remains singular: precision in service of poetry.
            </p>

            {/* Stats */}
            <div className="flex gap-12 mb-12">
              {stats.map(stat => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 300,
                      fontSize: "52px",
                      lineHeight: 1,
                      color: "#F5F0E8",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.25em",
                      color: "#C9A84C",
                      marginTop: "6px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "13px",
                letterSpacing: "0.25em",
                color: "#C9A84C",
                textDecoration: "none",
                borderBottom: "1px solid #C9A84C",
                paddingBottom: "2px",
                display: "inline-block",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              MEET THE TEAM →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
