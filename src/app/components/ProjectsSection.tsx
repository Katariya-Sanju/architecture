import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "The Meridian Tower",
    location: "Dubai",
    category: "COMMERCIAL",
    img: "https://images.unsplash.com/photo-1554793000-245d3a3c2a51?w=900&h=1200&fit=crop&auto=format",
    span: "row-span-2",
  },
  {
    id: 2,
    name: "Voss Cultural Center",
    location: "Oslo",
    category: "CULTURAL",
    img: "https://images.unsplash.com/photo-1645641439640-87b0b4c51ba3?w=900&h=600&fit=crop&auto=format",
    span: "",
  },
  {
    id: 3,
    name: "Nakamura Residence",
    location: "Tokyo",
    category: "RESIDENTIAL",
    img: "https://images.unsplash.com/photo-1554075098-1f70689a3f51?w=900&h=600&fit=crop&auto=format",
    span: "",
  },
  {
    id: 4,
    name: "Apex Headquarters",
    location: "New York",
    category: "COMMERCIAL",
    img: "https://images.unsplash.com/photo-1682933571179-0cbb97eeb719?w=1400&h=700&fit=crop&auto=format",
    span: "col-span-2",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{
        minHeight: project.span === "row-span-2" ? "560px" : "260px",
        border: hovered ? "1px solid #C9A84C" : "1px solid #222222",
        transition: "border-color 0.3s ease",
        gridRow: project.span === "row-span-2" ? "span 2" : undefined,
        gridColumn: project.span === "col-span-2" ? "span 2" : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={project.img}
        alt={project.name}
        className="w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.6s ease",
        }}
      />

      {/* Dark overlay on hover */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)",
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Top-right arrow */}
      <div
        className="absolute top-4 right-4"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translate(0,0)" : "translate(4px,-4px)",
          transition: "all 0.3s ease",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 16L16 4M16 4H8M16 4V12" stroke="#C9A84C" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Bottom info */}
      <div
        className="absolute bottom-0 left-0 right-0 p-6"
        style={{
          transform: hovered ? "translateY(0)" : "translateY(12px)",
          opacity: hovered ? 1 : 0.75,
          transition: "all 0.3s ease",
        }}
      >
        <p
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.3em",
            color: "#C9A84C",
            marginBottom: "6px",
          }}
        >
          {project.category}
        </p>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "22px",
            letterSpacing: "0.02em",
            color: "#F5F0E8",
            margin: 0,
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            color: "#F5F0E8",
            opacity: 0.5,
            marginTop: "4px",
          }}
        >
          — {project.location}
        </p>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        background: "#0A0A0A",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        {/* Section header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "#C9A84C",
                marginBottom: "12px",
              }}
            >
              SELECTED WORKS
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
              Projects That Define Cities
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "2px",
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* View all link */}
        <div className="flex justify-end mt-10">
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
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            VIEW ALL PROJECTS →
          </a>
        </div>
      </div>
    </section>
  );
}
