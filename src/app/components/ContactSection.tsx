import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(245,240,232,0.2)",
    color: "#F5F0E8",
    padding: "14px 0",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    fontWeight: 300,
    letterSpacing: "0.02em",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const offices = [
    { city: "Dubai", address: "Level 38, Burj Gate, DIFC, Dubai, UAE" },
    { city: "New York", address: "550 Madison Avenue, 17F, NY 10022" },
    { city: "Tokyo", address: "Roppongi Hills Mori Tower, 28F, Minato" },
  ];

  return (
    <section
      id="contact"
      style={{
        background: "#0A0A0A",
        padding: "120px 0 0",
        borderTop: "1px solid #222222",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        {/* Giant headline */}
        <div className="mb-20 text-center">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(32px, 5vw, 80px)",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              color: "#F5F0E8",
              margin: "0 auto",
              maxWidth: "900px",
            }}
          >
            LET'S BUILD SOMETHING EXTRAORDINARY
          </h2>
        </div>

        {/* Two columns */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "80px", paddingBottom: "80px" }}
        >
          {/* Left — offices */}
          <div>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "#C9A84C",
                marginBottom: "40px",
              }}
            >
              OUR OFFICES
            </p>

            <div className="flex flex-col gap-10">
              {offices.map(o => (
                <div key={o.city}>
                  <p
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "13px",
                      letterSpacing: "0.2em",
                      color: "#F5F0E8",
                      marginBottom: "6px",
                    }}
                  >
                    {o.city}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "13px",
                      color: "#F5F0E8",
                      opacity: 0.45,
                      lineHeight: 1.6,
                    }}
                  >
                    {o.address}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "48px", borderTop: "1px solid #222", paddingTop: "32px" }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "#F5F0E8",
                  opacity: 0.5,
                  marginBottom: "8px",
                }}
              >
                studio@arcvault.com
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "#F5F0E8",
                  opacity: 0.5,
                }}
              >
                +1 212 000 0000
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: "300px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "36px",
                    color: "#F5F0E8",
                    marginBottom: "12px",
                  }}
                >
                  Inquiry received.
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "14px",
                    color: "#F5F0E8",
                    opacity: 0.5,
                  }}
                >
                  We'll respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  style={inputStyle}
                  placeholder="NAME"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                  onFocus={e => (e.currentTarget.style.borderBottomColor = "#C9A84C")}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(245,240,232,0.2)")}
                />
                <input
                  style={inputStyle}
                  type="email"
                  placeholder="EMAIL"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                  onFocus={e => (e.currentTarget.style.borderBottomColor = "#C9A84C")}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(245,240,232,0.2)")}
                />
                {/* using <select> instead of kit component: no kit installed */}
                <select
                  style={{
                    ...inputStyle,
                    appearance: "none",
                    cursor: "pointer",
                  }}
                  value={form.projectType}
                  onChange={e => setForm(f => ({ ...f, projectType: e.target.value }))}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = "#C9A84C")}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(245,240,232,0.2)")}
                >
                  <option value="" style={{ background: "#1C1C1C" }}>PROJECT TYPE</option>
                  <option value="residential" style={{ background: "#1C1C1C" }}>Residential</option>
                  <option value="commercial" style={{ background: "#1C1C1C" }}>Commercial</option>
                  <option value="cultural" style={{ background: "#1C1C1C" }}>Cultural</option>
                  <option value="masterplan" style={{ background: "#1C1C1C" }}>Masterplan</option>
                  <option value="interior" style={{ background: "#1C1C1C" }}>Interior</option>
                </select>
                <textarea
                  style={{
                    ...inputStyle,
                    resize: "none",
                    minHeight: "100px",
                  }}
                  placeholder="MESSAGE"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = "#C9A84C")}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(245,240,232,0.2)")}
                />
                <button
                  type="submit"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "14px",
                    letterSpacing: "0.25em",
                    background: "#C9A84C",
                    color: "#0A0A0A",
                    border: "none",
                    padding: "18px",
                    cursor: "pointer",
                    width: "100%",
                    marginTop: "8px",
                    transition: "background 0.3s ease",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#e0bc60")}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "#C9A84C")}
                >
                  SEND INQUIRY
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid #C9A84C",
            padding: "32px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "13px",
              letterSpacing: "0.2em",
              color: "#F5F0E8",
              opacity: 0.4,
            }}
          >
            ARCVAULT © 2026
          </span>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            {[
              {
                label: "Instagram",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                label: "Behance",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M2 12c0 0 2-6 7-6s5 6 5 6-0 6-5 6S2 12 2 12z" /><path d="M14 8h6M14 12h6M14 16h4" />
                  </svg>
                ),
              },
            ].map(s => (
              <a
                key={s.label}
                href="#"
                style={{
                  color: "#F5F0E8",
                  opacity: 0.4,
                  textDecoration: "none",
                  transition: "opacity 0.3s ease, color 0.3s ease",
                }}
                aria-label={s.label}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.4";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F5F0E8";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
