import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PHONE, PHONE_HREF } from "./constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: "rgba(13,13,13,0.97)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid #2E2E2E"
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 30, height: 30, backgroundColor: "#FFD600", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="Truck" size={15} style={{ color: "#0D0D0D" }} />
            </div>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
              АССЕНИЗАТОР <span style={{ color: "#FFD600" }}>ТЮМЕНЬ</span>
            </span>
          </div>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 24, alignItems: "center" }} className="hidden md:flex">
            {[["#services","Услуги"],["#prices","Цены"],["#reviews","Отзывы"],["#faq","Вопросы"],["#contacts","Контакты"]].map(([href, label]) => (
              <a key={href} href={href} style={{ color: "#888", textDecoration: "none", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", transition: "color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#FFD600")}
                onMouseOut={e => (e.currentTarget.style.color = "#888")}>
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop right: phone + button */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="hidden md:flex">
            <a href={PHONE_HREF} style={{ color: "#FFD600", fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 16, textDecoration: "none", letterSpacing: "0.02em" }}>
              {PHONE}
            </a>
            <a href={PHONE_HREF} style={{
              backgroundColor: "#FFD600", color: "#0D0D0D",
              fontFamily: "'Oswald', sans-serif", fontWeight: 700,
              padding: "8px 20px", fontSize: 14, letterSpacing: "0.05em",
              textDecoration: "none"
            }}>
              ПОЗВОНИТЬ
            </a>
          </div>

          {/* Mobile: phone link + burger */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="flex md:hidden">
            <a href={PHONE_HREF} style={{ color: "#FFD600", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              {PHONE}
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4 }}>
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "#141414", borderTop: "1px solid #2E2E2E", padding: "16px 1rem 20px" }}>
          {[["#services","Услуги"],["#prices","Цены"],["#reviews","Отзывы"],["#faq","Вопросы"],["#contacts","Контакты"]].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", color: "#ccc", textDecoration: "none", padding: "12px 0", fontSize: 16, fontFamily: "'Oswald', sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid #222" }}>
              {label}
            </a>
          ))}
          <a href={PHONE_HREF} style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 16,
            backgroundColor: "#FFD600", color: "#0D0D0D",
            fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 16,
            padding: "14px", textDecoration: "none"
          }}>
            <Icon name="Phone" size={18} style={{ color: "#0D0D0D" }} />
            ПОЗВОНИТЬ
          </a>
        </div>
      )}
    </header>
  );
}
