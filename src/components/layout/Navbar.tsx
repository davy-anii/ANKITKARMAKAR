"use client";

import PillNav from "@/components/ui/PillNav";

export default function Navbar() {
  const logo = (
    <div className="text-2xl font-black tracking-tighter text-white">
      Ankit<span className="text-[var(--color-neon-blue)]">.</span>
    </div>
  );

  return (
    <PillNav
      logo={logo}
      logoAlt="Ankit Logo"
      items={[
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" }
      ]}
      activeHref="#hero"
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="rgba(5, 5, 20, 0.65)"
      pillColor="var(--color-neon-blue)"
      hoveredPillTextColor="#000000"
      pillTextColor="#d1d5db"
      theme="dark"
      initialLoadAnimation={true}
    />
  );
}
