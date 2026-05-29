import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+7 996 640-33-73";
const PHONE_HREF = "tel:+79966403373";
const TRUCK_IMG = "https://cdn.poehali.dev/projects/9a874782-8dd8-40c9-8c4b-fe8afe6c07cd/files/bffb8002-36b6-4ad7-a256-3dbecd08040a.jpg";

const services = [
  {
    icon: "Droplets",
    title: "Откачка септиков",
    desc: "Выкачиваем содержимое септика любого объёма. Быстрый выезд в течение 2–4 часов. Работаем с любыми типами септиков — пластик, кирпич, бетонные кольца.",
    details: ["Объём от 1 до 50 м³", "Любой тип септика", "Вывоз на лицензированный полигон", "Акт выполненных работ"],
  },
  {
    icon: "Container",
    title: "Откачка выгребных ям",
    desc: "Быстрая откачка выгребных ям на дачах, в частных домах и СНТ. Работаем в труднодоступных местах — длина шланга до 40 метров.",
    details: ["Длина шланга до 40 м", "Работа в любое время суток", "Выезд по Тюмени и области", "Вывоз на сертифицированный полигон"],
  },
  {
    icon: "Waves",
    title: "Откачка канализации",
    desc: "Откачиваем жидкие бытовые отходы из канализационных отстойников и накопительных ёмкостей. Работаем с частными домами, многоквартирными домами и предприятиями.",
    details: ["Накопительные ёмкости", "Отстойники и приямки", "Работаем с юрлицами", "Договор и документы"],
  },
  {
    icon: "Trash2",
    title: "Откачка подвалов и луж",
    desc: "Экстренная откачка затопленных подвалов, погребов, котлованов. Также откачиваем крупные лужи на территории предприятий и дачных участков.",
    details: ["Экстренный выезд 24/7", "Грязная вода, ил, взвесь", "Мощность насоса до 10 000 л/час", "Минимальный заказ 2 часа"],
  },
  {
    icon: "Gauge",
    title: "Откачка колодцев",
    desc: "Откачиваем дренажные и сточные колодцы, ливневые накопители. Полная выкачка скопившейся жидкости, ила и взвесей. Работаем с колодцами любых типов.",
    details: ["Дренажные и сточные колодцы", "Ливневые накопители", "Откачка ила и взвесей", "Выезд по области"],
  },
  {
    icon: "Truck",
    title: "Наша техника",
    desc: "Работаем на специализированных вакуумных машинах с объёмом бочки 10–11 м³ и мощными вакуумными насосами. Заключаем договоры, предоставляем все необходимые документы.",
    details: ["Объём бочки 10–11 м³", "Мощные вакуумные насосы", "Заключаем договоры", "Все разрешения и лицензии"],
  },
];

const prices = [
  { service: "Откачка септика до 5 м³", price: "1 500 ₽", note: "выезд включён" },
  { service: "Откачка септика 5–10 м³", price: "2 700 ₽", note: "за рейс" },
  { service: "Откачка выгребной ямы до 5 м³", price: "1 500 ₽", note: "выезд включён" },
  { service: "Откачка подвала / лужи", price: "2 800 ₽/час", note: "минимум 2 часа" },
  { service: "Дополнительный м³", price: "300 ₽/м³", note: "сверх нормы" },
  { service: "Ночной выезд (22:00–06:00)", price: "+50%", note: "к стоимости рейса" },
];

const reviews = [
  {
    name: "Александр К.",
    rating: 5,
    text: "Вызвал в субботу вечером — приехали через 3 часа. Откачали всё чисто, без запаха. Цена точно по прайсу, без лишних накруток. Рекомендую!",
    date: "15 мая 2025",
  },
  {
    name: "Светлана М.",
    rating: 5,
    text: "Затопило подвал после дождей. Позвонила утром — к обеду уже всё откачали. Ребята профессиональные, работали аккуратно. Спасибо огромное!",
    date: "3 апреля 2025",
  },
  {
    name: "Игорь В.",
    rating: 5,
    text: "Второй раз пользуюсь услугами. Стабильное качество — приезжают вовремя, делают аккуратно. Дача в 40 км от города — доехали без проблем.",
    date: "20 марта 2025",
  },
  {
    name: "Татьяна Р.",
    rating: 4,
    text: "Хорошая работа. Единственное — пришлось немного подождать (был занят другой объект), но предупредили сразу. В целом довольна.",
    date: "11 февраля 2025",
  },
];

const faqs = [
  {
    q: "Как быстро вы приедете?",
    a: "Стандартное время выезда — 2–4 часа. В экстренных случаях (затопленный подвал, переполненный септик) стараемся приехать в течение 1–2 часов. Работаем 7 дней в неделю, без выходных и праздников.",
  },
  {
    q: "Как вы вывозите отходы?",
    a: "Все отходы вывозятся на лицензированные полигоны для приёма жидких бытовых отходов. У нас есть договор с полигоном и все необходимые разрешения. Мы не сливаем отходы в поле или канавы.",
  },
  {
    q: "Можно ли вызвать ночью?",
    a: "Да, мы работаем круглосуточно. Ночной выезд (с 22:00 до 06:00) оплачивается с коэффициентом +50% к стандартному тарифу.",
  },
  {
    q: "Откачиваете ли вы за городом?",
    a: "Да, выезжаем по Тюмени и Тюменской области. Стоимость выезда за город рассчитывается индивидуально — позвоните, уточним цену для вашего адреса.",
  },
  {
    q: "Нужно ли мне что-то подготовить?",
    a: "Обеспечьте свободный подъезд для машины (длина 8 метров, ширина 2.5 метра). Если крышка септика или люк засыпаны, раскопайте их заранее — это ускорит работу.",
  },
  {
    q: "Выдаёте ли документы для организаций?",
    a: "Да, работаем с юридическими лицами и ИП. Предоставляем договор, акт выполненных работ и накладную. Принимаем оплату на расчётный счёт.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: i <= count ? "#FFD600" : "#3A3A3A", fontSize: 16 }}>★</span>
      ))}
    </div>
  );
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: "#0D0D0D", color: "#fff", minHeight: "100vh", fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* HEADER */}
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

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 60 }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={TRUCK_IMG} alt="Ассенизаторская машина" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.40 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0D0D0D 35%, rgba(13,13,13,0.65) 65%, rgba(13,13,13,0.15) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0D0D0D 0%, transparent 55%)" }} />
        </div>

        <div style={{ position: "absolute", top: 0, bottom: 0, right: "33%", width: 2, backgroundColor: "#FFD600", opacity: 0.35 }} />

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

      {/* SERVICES */}
      <section id="services" style={{ padding: "72px 0", backgroundColor: "#141414" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
              <div style={{ height: 2, width: 40, backgroundColor: "#FFD600" }} />
              <span style={{ color: "#FFD600", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em" }}>Что мы делаем</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,6vw,3rem)", textTransform: "uppercase", margin: 0 }}>
              Наши <span style={{ color: "#FFD600" }}>услуги</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: 16 }}>
            {services.map((s, i) => (
              <div key={i} style={{
                backgroundColor: "#1C1C1C", border: "1px solid #2E2E2E", padding: "22px 20px",
                transition: "border-color 0.3s"
              }}
                onMouseOver={e => (e.currentTarget.style.borderColor = "rgba(255,214,0,0.4)")}
                onMouseOut={e => (e.currentTarget.style.borderColor = "#2E2E2E")}>
                <div style={{ width: 44, height: 44, backgroundColor: "rgba(255,214,0,0.08)", border: "1px solid rgba(255,214,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Icon name={s.icon} size={20} style={{ color: "#FFD600" }} />
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 17, textTransform: "uppercase", margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                  {s.details.map((d, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#ccc" }}>
                      <div style={{ width: 5, height: 5, backgroundColor: "#FFD600", flexShrink: 0 }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" style={{ padding: "72px 0", backgroundColor: "#0D0D0D" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
              <div style={{ height: 2, width: 40, backgroundColor: "#FFD600" }} />
              <span style={{ color: "#FFD600", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em" }}>Прозрачные тарифы</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,6vw,3rem)", textTransform: "uppercase", margin: "0 0 10px" }}>
              Цены на <span style={{ color: "#FFD600" }}>услуги</span>
            </h2>
            <p style={{ color: "#666", fontSize: 15, fontWeight: 300 }}>Точная цена рассчитывается при звонке — зависит от объёма и адреса</p>
          </div>

          <div style={{ border: "1px solid #2E2E2E" }}>
            {prices.map((p, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "18px 20px", borderBottom: i < prices.length - 1 ? "1px solid #2E2E2E" : "none",
                transition: "background 0.2s", gap: 12
              }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = "#1C1C1C")}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = "transparent")}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 500, fontSize: "clamp(14px,3vw,15px)" }}>{p.service}</div>
                  <div style={{ color: "#555", fontSize: 13, marginTop: 2 }}>{p.note}</div>
                </div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(17px,4vw,20px)", color: "#FFD600", flexShrink: 0, whiteSpace: "nowrap" }}>{p.price}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, backgroundColor: "#1C1C1C", border: "1px solid rgba(255,214,0,0.2)", padding: "20px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
            <div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 18, textTransform: "uppercase" }}>Не знаете точную цену?</div>
              <div style={{ color: "#666", fontSize: 14, marginTop: 3 }}>Позвоните — рассчитаем за 1 минуту</div>
            </div>
            <a href={PHONE_HREF} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "#FFD600", color: "#0D0D0D",
              fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 15,
              padding: "12px 22px", textDecoration: "none", whiteSpace: "nowrap"
            }}>
              <Icon name="Phone" size={17} style={{ color: "#0D0D0D" }} />
              УЗНАТЬ ЦЕНУ
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ padding: "72px 0", backgroundColor: "#141414" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
              <div style={{ height: 2, width: 40, backgroundColor: "#FFD600" }} />
              <span style={{ color: "#FFD600", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em" }}>Мнения клиентов</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 14 }}>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,6vw,3rem)", textTransform: "uppercase", margin: 0 }}>
                Отзывы <span style={{ color: "#FFD600" }}>клиентов</span>
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(i => <span key={i} style={{ color: "#FFD600", fontSize: 18 }}>★</span>)}</div>
                <span style={{ color: "#ccc", fontSize: 14 }}>4.9 из 5</span>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: 16 }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ backgroundColor: "#1C1C1C", border: "1px solid #2E2E2E", padding: "20px 18px", transition: "border-color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.borderColor = "rgba(255,214,0,0.3)")}
                onMouseOut={e => (e.currentTarget.style.borderColor = "#2E2E2E")}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 38, height: 38, backgroundColor: "rgba(255,214,0,0.12)", border: "1px solid rgba(255,214,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "#FFD600", fontSize: 16, flexShrink: 0 }}>
                      {r.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</div>
                      <div style={{ color: "#555", fontSize: 12, marginTop: 1 }}>{r.date}</div>
                    </div>
                  </div>
                  <StarRating count={r.rating} />
                </div>
                <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>«{r.text}»</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "72px 0", backgroundColor: "#0D0D0D" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
              <div style={{ height: 2, width: 40, backgroundColor: "#FFD600" }} />
              <span style={{ color: "#FFD600", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em" }}>FAQ</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,6vw,3rem)", textTransform: "uppercase", margin: 0 }}>
              Частые <span style={{ color: "#FFD600" }}>вопросы</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ border: "1px solid #2E2E2E", overflow: "hidden" }}>
                <button
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "none", border: "none", color: "#fff", cursor: "pointer", textAlign: "left", transition: "background 0.2s" }}
                  onMouseOver={e => (e.currentTarget.style.backgroundColor = "#1C1C1C")}
                  onMouseOut={e => (e.currentTarget.style.backgroundColor = "transparent")}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span style={{ fontWeight: 500, fontSize: "clamp(14px,3vw,15px)", paddingRight: 14, lineHeight: 1.4 }}>{f.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={19} style={{ color: "#FFD600", flexShrink: 0 }} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 18px", borderTop: "1px solid #2E2E2E" }}>
                    <p style={{ color: "#888", lineHeight: 1.7, fontSize: 14, margin: "14px 0 0" }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" style={{ padding: "72px 0", backgroundColor: "#141414" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
              <div style={{ height: 2, width: 40, backgroundColor: "#FFD600" }} />
              <span style={{ color: "#FFD600", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em" }}>Свяжитесь с нами</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,6vw,3rem)", textTransform: "uppercase", margin: 0 }}>
              Контакты
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                { icon: "Phone", title: "Телефон", value: PHONE, sub: "Звонок бесплатный", href: PHONE_HREF },
                { icon: "MessageCircle", title: "Написать в МАКС", value: PHONE, sub: "Напишите — ответим быстро", href: "#" },
                { icon: "MapPin", title: "Зона работы", value: "Тюмень и область", sub: "Выезжаем в любой район" },
                { icon: "Clock", title: "Режим работы", value: "Круглосуточно, 7 дней", sub: "Без перерывов и выходных" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 44, height: 44, backgroundColor: "rgba(255,214,0,0.08)", border: "1px solid rgba(255,214,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={c.icon} size={20} style={{ color: "#FFD600" }} />
                  </div>
                  <div>
                    <div style={{ color: "#555", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.13em", marginBottom: 4 }}>{c.title}</div>
                    {c.href ? (
                      <a href={c.href} style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(17px,4vw,20px)", color: "#fff", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseOver={e => (e.currentTarget.style.color = "#FFD600")}
                        onMouseOut={e => (e.currentTarget.style.color = "#fff")}>{c.value}</a>
                    ) : (
                      <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(17px,4vw,20px)" }}>{c.value}</div>
                    )}
                    <div style={{ color: "#555", fontSize: 13, marginTop: 2 }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "#1C1C1C", border: "1px solid #2E2E2E", padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(22px,5vw,28px)", textTransform: "uppercase", marginBottom: 14, lineHeight: 1.2 }}>
                  Нужна откачка <span style={{ color: "#FFD600" }}>прямо сейчас?</span>
                </h3>
                <p style={{ color: "#666", lineHeight: 1.7, fontSize: 15, marginBottom: 28 }}>
                  Позвоните или напишите — приедем в течение 2–4 часов. Цену скажем сразу, без скрытых доплат.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href={PHONE_HREF} style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  backgroundColor: "#FFD600", color: "#0D0D0D",
                  fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(16px,4vw,18px)",
                  padding: "15px", textDecoration: "none"
                }}>
                  <Icon name="Phone" size={20} style={{ color: "#0D0D0D" }} />
                  ПОЗВОНИТЬ
                </a>
                <a href="#" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  backgroundColor: "transparent", border: "2px solid #3A3A3A", color: "#fff",
                  fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "clamp(16px,4vw,18px)",
                  padding: "15px", textDecoration: "none", transition: "border-color 0.2s, color 0.2s"
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "#FFD600"; e.currentTarget.style.color = "#FFD600"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "#3A3A3A"; e.currentTarget.style.color = "#fff"; }}>
                  <Icon name="MessageCircle" size={20} />
                  НАПИСАТЬ В МАКС
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid #1C1C1C", padding: "28px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ width: 22, height: 22, backgroundColor: "#FFD600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="Truck" size={13} style={{ color: "#0D0D0D" }} />
              </div>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em" }}>
                АССЕНИЗАТОР <span style={{ color: "#FFD600" }}>ТЮМЕНЬ</span>
              </span>
            </div>
            <div style={{ color: "#333", fontSize: 12, textAlign: "center" }}>
              © 2026 Ассенизатор Тюмень · Откачка септиков и выгребных ям
            </div>
            <a href={PHONE_HREF} style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 14, color: "#FFD600", textDecoration: "none" }}>
              {PHONE}
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTON (mobile) */}
      <div style={{ position: "fixed", bottom: 20, right: 14, zIndex: 50 }} className="md:hidden">
        <a href={PHONE_HREF} style={{
          display: "flex", alignItems: "center", gap: 8,
          backgroundColor: "#FFD600", color: "#0D0D0D",
          fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 15,
          padding: "12px 18px", textDecoration: "none",
          boxShadow: "0 4px 20px rgba(255,214,0,0.35)"
        }}>
          <Icon name="Phone" size={17} style={{ color: "#0D0D0D" }} />
          ПОЗВОНИТЬ
        </a>
      </div>

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
