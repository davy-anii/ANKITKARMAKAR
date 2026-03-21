import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import TargetCursor from "@/components/ui/TargetCursor";
import DotGrid from "@/components/ui/DotGrid";
import LoadingScreen from "@/components/ui/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Karmakar | Portfolio",
  description: "Modern, premium developer portfolio for Ankit Karmakar. App & IoT Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-gray-200 overflow-x-hidden selection:bg-[var(--color-neon-blue)]/30 selection:text-white`}
      >
        <LoadingScreen />
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1 }}>
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#271E37"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <AnimatedBackground />
        <CursorGlow />
        <TargetCursor spinDuration={2} hideDefaultCursor parallaxOn hoverDuration={0.2} />
        {children}
      </body>
    </html>
  );
}
