const ruBtn = document.getElementById("ruBtn");
const enBtn = document.getElementById("enBtn");

const translations = {
  en: {
    navAbout: "About",
    navIncluded: "Included",
    navContacts: "Contacts",

    heroText: "Feel the Mediterranean vibe",

    cardCities: "5 cities",
    cardCasino: "Legal casino",
    cardBeach: "Best beaches",
    cardPhotos: "Gigabytes of photos",

    aboutTitle: "ABOUT THE TOUR",
    aboutText1:
      "We’ve planned a simple and convenient 7-day itinerary for your trip to North Cyprus. You will visit the best cities and beaches.",
    aboutText2:
      "No need to worry about routes or schedules — everything is already organized. You just relax and enjoy the journey.",

    kyreniaDays: "3 Days",
    kyreniaTitle: "Kyrenia",
    kyreniaSub: "(Girne)",

    famagustaDays: "1 Day",
    famagustaTitle: "Famagusta",
    famagustaSub: "(Gazimagusa)",

    nicosiaDays: "1 Day",
    nicosiaTitle: "Nicosia",
    nicosiaSub: "(Lefkosa)",

    iskeleDays: "1 Day",
    iskeleTitle: "Iskele",
    iskeleSub: "(Trikomo)",

    karpazDays: "1 Day",
    karpazTitle: "Karpaz",
    karpazSub: "(Golden Beach)",

    includedTitle: "WHAT'S INCLUDED",

    incGuides: "Guides",
    incGuidesText: "Professional local guides who know everything about Cyprus.",

    incCasino: "Casino Night",
    incCasinoText: "Legal casino experience and nightlife in North Cyprus.",

    incTransfers: "Transfers",
    incTransfersText: "Airport transfers and city transportation included.",

    incHotels: "Hotels",
    incHotelsText: "Comfortable hotels with breakfast included.",

    incSupport: "24/7 Support",
    incSupportText: "We stay in touch during the whole tour and help anytime.",

    contactTitle: "Want to join us, but still have questions?",
    contactSubtitle: "Leave a request",

    namePlaceholder: "Your name",
    phonePlaceholder: "Phone number",
    commentPlaceholder: "Comment",
    sendBtn: "Send"
  },

  ru: {
    navAbout: "О туре",
    navIncluded: "Что включено",
    navContacts: "Контакты",

    heroText: "Почувствуй атмосферу Средиземного моря",

    cardCities: "5 городов",
    cardCasino: "Легальное казино",
    cardBeach: "Лучшие пляжи",
    cardPhotos: "Инстаграм моменты",

    aboutTitle: "О ТУРЕ",
    aboutText1:
      "Мы подготовили удобный 7-дневный маршрут по Северному Кипру. Вы посетите лучшие города и пляжи.",
    aboutText2:
      "Не нужно думать о маршрутах и расписании — всё уже организовано. Вам остаётся только наслаждаться путешествием.",

    kyreniaDays: "3 дня",
    kyreniaTitle: "Кирения",
    kyreniaSub: "(Гирне)",

    famagustaDays: "1 день",
    famagustaTitle: "Фамагуста",
    famagustaSub: "(Газимагуста)",

    nicosiaDays: "1 день",
    nicosiaTitle: "Никосия",
    nicosiaSub: "(Лефкоша)",

    iskeleDays: "1 день",
    iskeleTitle: "Искеле",
    iskeleSub: "(Трикомо)",

    karpazDays: "1 день",
    karpazTitle: "Карпаз",
    karpazSub: "(Золотой пляж)",

    includedTitle: "ЧТО ВКЛЮЧЕНО",

    incGuides: "Гиды",
    incGuidesText: "Профессиональные местные гиды, которые знают всё о Северном Кипре.",

    incCasino: "Казино",
    incCasinoText: "Легальное казино и ночная жизнь Северного Кипра.",

    incTransfers: "Трансфер",
    incTransfersText: "Трансфер из аэропорта и перемещение по городам включены.",

    incHotels: "Отели",
    incHotelsText: "Комфортные отели с завтраком включены в стоимость.",

    incSupport: "Поддержка 24/7",
    incSupportText: "Мы всегда на связи и помогаем на протяжении всего тура.",

    contactTitle: "Хочешь поехать, но остались вопросы?",
    contactSubtitle: "Оставь заявку",

    namePlaceholder: "Ваше имя",
    phonePlaceholder: "Номер телефона",
    commentPlaceholder: "Комментарий",
    sendBtn: "Отправить"
  }
};

function setLanguage(lang) {
  const t = translations[lang];

  document.getElementById("navAbout").textContent = t.navAbout;
  document.getElementById("navIncluded").textContent = t.navIncluded;
  document.getElementById("navContacts").textContent = t.navContacts;

  document.getElementById("heroText").
  textContent = t.heroText;

  document.getElementById("cardCities").textContent = t.cardCities;
  document.getElementById("cardCasino").textContent = t.cardCasino;
  document.getElementById("cardBeach").textContent = t.cardBeach;
  document.getElementById("cardPhotos").textContent = t.cardPhotos;

  document.getElementById("aboutTitle").innerHTML =
    `<span></span> ${t.aboutTitle} <span></span>`;

  document.getElementById("aboutText1").textContent = t.aboutText1;
  document.getElementById("aboutText2").textContent = t.aboutText2;

  document.getElementById("kyreniaDays").textContent = t.kyreniaDays;
  document.getElementById("kyreniaTitle").textContent = t.kyreniaTitle;
  document.getElementById("kyreniaSub").textContent = t.kyreniaSub;

  document.getElementById("famagustaDays").textContent = t.famagustaDays;
  document.getElementById("famagustaTitle").textContent = t.famagustaTitle;
  document.getElementById("famagustaSub").textContent = t.famagustaSub;

  document.getElementById("nicosiaDays").textContent = t.nicosiaDays;
  document.getElementById("nicosiaTitle").textContent = t.nicosiaTitle;
  document.getElementById("nicosiaSub").textContent = t.nicosiaSub;

  document.getElementById("iskeleDays").textContent = t.iskeleDays;
  document.getElementById("iskeleTitle").textContent = t.iskeleTitle;
  document.getElementById("iskeleSub").textContent = t.iskeleSub;

  document.getElementById("karpazDays").textContent = t.karpazDays;
  document.getElementById("karpazTitle").textContent = t.karpazTitle;
  document.getElementById("karpazSub").textContent = t.karpazSub;

  document.getElementById("includedTitle").textContent = t.includedTitle;

  document.getElementById("incGuides").textContent = t.incGuides;
  document.getElementById("incGuidesText").textContent = t.incGuidesText;

  document.getElementById("incCasino").textContent = t.incCasino;
  document.getElementById("incCasinoText").textContent = t.incCasinoText;

  document.getElementById("incTransfers").textContent = t.incTransfers;
  document.getElementById("incTransfersText").textContent = t.incTransfersText;

  document.getElementById("incHotels").textContent = t.incHotels;
  document.getElementById("incHotelsText").textContent = t.incHotelsText;

  document.getElementById("incSupport").textContent = t.incSupport;
  document.getElementById("incSupportText").textContent = t.incSupportText;

  document.getElementById("contactTitle").textContent = t.contactTitle;
  document.getElementById("contactSubtitle").textContent = t.contactSubtitle;

  document.getElementById("nameInput").placeholder = t.namePlaceholder;
  document.getElementById("phoneInput").placeholder = t.phonePlaceholder;
  document.getElementById("commentInput").placeholder = t.commentPlaceholder;
  document.getElementById("sendBtn").textContent = t.sendBtn;

  if (lang === "ru") {
    ruBtn.classList.add("active");
    enBtn.classList.remove("active");
  } else {
    enBtn.classList.add("active");
    ruBtn.classList.remove("active");
  }

  localStorage.setItem("lang", lang);
}

ruBtn.addEventListener("click", () => setLanguage("ru"));
enBtn.addEventListener("click", () => setLanguage("en"));

const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);