import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ContentSections from "@/components/sections/ContentSections";

export default function Index() {
  return (
    <div style={{ backgroundColor: "#0D0D0D", color: "#fff", minHeight: "100vh", fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <Header />
      <HeroSection />
      <ContentSections />

      <style>{`
        @keyframes pulse-btn {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,214,0,0.5); }
          50% { box-shadow: 0 0 0 14px rgba(255,214,0,0); }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .md\\:hidden { display: flex !important; }
          .hidden.md\\:flex { display: none !important; }
        }
        @media (min-width: 769px) {
          .md\\:hidden { display: none !important; }
          .hidden.md\\:flex { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
