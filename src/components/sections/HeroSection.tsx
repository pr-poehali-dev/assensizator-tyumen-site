import Icon from "@/components/ui/icon";
import { PHONE, PHONE_HREF, TRUCK_IMG } from "./constants";

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 60 }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={TRUCK_IMG} alt="Ассенизаторская машина" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.40 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0D0D0D 35%, rgba(13,13,13,0.65) 65%, rgba(13,13,13,0.15) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0D0D0D 0%, transparent 55%)" }} />
        </div>

        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "4rem 1rem", width: "100%" }}>
          <div style={{ maxWidth: 640 }}>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,214,0,0.3)", backgroundColor: "rgba(255,214,0,0.08)", padding: "7px 14px", marginBottom: 28 }}>
              <div style={{ width: 7, height: 7, backgroundColor: "#FFD600", borderRadius: "50%" }} />
              <span style={{ color: "#FFD600", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em" }}>Тюмень и область</span>
            </div>

            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem, 8vw, 4rem)", lineHeight: 1.0, textTransform: "uppercase", margin: "0 0 20px" }}>
              Откачка<br />
              <span style={{ color: "#FFD600" }}>септиков</span><br />
              и выгребных ям<br />
              <span style={{ fontSize: "clamp(1.2rem, 4vw, 2rem)", color: "#ccc", fontWeight: 400 }}>в вашем районе</span>
            </h1>

            <p style={{ color: "#ccc", fontSize: "clamp(15px, 3vw, 18px)", marginBottom: 6, fontWeight: 300, lineHeight: 1.6 }}>
              Откачка луж, колодцев, подвалов
            </p>
            <p style={{ color: "#777", fontSize: "clamp(13px, 2.5vw, 15px)", marginBottom: 36, fontWeight: 300 }}>
              Быстрый выезд · Честные цены · Работаем без выходных
            </p>

            {/* CTA */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <a href={PHONE_HREF} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                backgroundColor: "#FFD600", color: "#0D0D0D",
                fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(15px,4vw,18px)",
                padding: "14px 28px", textDecoration: "none", letterSpacing: "0.03em",
                animation: "pulse-btn 2s infinite"
              }}>
                <Icon name="Phone" size={20} style={{ color: "#0D0D0D" }} />
                ПОЗВОНИТЬ
              </a>
              <a href="#" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                backgroundColor: "transparent", border: "2px solid rgba(255,255,255,0.25)", color: "#fff",
                fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "clamp(15px,4vw,18px)",
                padding: "14px 28px", textDecoration: "none", letterSpacing: "0.03em",
                transition: "border-color 0.2s, color 0.2s"
              }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "#FFD600"; e.currentTarget.style.color = "#FFD600"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#fff"; }}>
                <Icon name="MessageCircle" size={20} />
                НАПИСАТЬ В МАКС
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "clamp(20px,6vw,40px)", borderTop: "1px solid #2E2E2E", paddingTop: 28, flexWrap: "wrap" }}>
              {[["24/7", "Без выходных"], ["2–4ч", "Время выезда"], ["10+", "Лет на рынке"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(22px,5vw,28px)", color: "#FFD600" }}>{num}</div>
                  <div style={{ color: "#666", fontSize: 13, marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YELLOW STRIP */}
      <section style={{ backgroundColor: "#FFD600", padding: "12px 0", overflowX: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "6px 24px" }}>
            {["✓ Лицензированный вывоз", "✓ Шланг до 40 метров", "✓ Договор и документы", "✓ Работаем с юрлицами", "✓ Без скрытых доплат"].map(item => (
              <span key={item} style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "clamp(12px,2.5vw,14px)", color: "#0D0D0D", letterSpacing: "0.04em" }}>{item}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}