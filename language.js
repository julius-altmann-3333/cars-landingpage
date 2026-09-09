(() => {
  "use strict";

  const button = document.getElementById("cs-language-toggle");
  if (!button) return;

  const translations = {
    en: {
      "nav.home": "Home", "nav.gallery": "Gallery", "nav.specs": "Specs", "nav.video": "Video",
      "nav.similar": "Similar Cars", "nav.dealer": "Dealership", "nav.contact": "Contact",
      "hero.eyebrow": "AVAILABLE NOW · PREMIUM CONDITION",
      "hero.text": "Executive electric performance with all-wheel drive, premium comfort and a technology-first interior.",
      "hero.cta": "Request a Test Drive", "hero.gallery": "View Gallery", "hero.priceLabel": "ASKING PRICE",
      "hero.year": "Model year", "hero.mileage": "Mileage",
      "gallery.eyebrow": "EXTERIOR & INTERIOR", "gallery.title": "See it from every angle.",
      "stats.eyebrow": "ENGINEERED TO PERFORM", "stats.title": "Performance meets everyday luxury.",
      "stats.power": "Maximum power", "stats.accel": "0–100 km/h", "stats.range": "WLTP range", "stats.speed": "Top speed",
      "video.eyebrow": "WALKAROUND", "video.title": "Experience the car before you arrive.",
      "video.text": "Explore the exterior, cockpit, storage and charging experience in a short visual presentation.",
      "video.cta": "Book an Appointment",
      "similar.eyebrow": "MORE TO CONSIDER", "similar.title": "Similar vehicles.",
      "dealer.eyebrow": "VISIT OUR SHOWROOM", "dealer.title": "AutoHaus Dresden.",
      "dealer.text": "Come see the vehicle in person, take a guided test drive and speak with our sales team.",
      "dealer.directions": "Get Directions",
      "social.title": "Follow the showroom.",
      "social.text": "See fresh arrivals, delivery moments and behind-the-scenes content.",
      "contact.eyebrow": "LET'S TALK", "contact.title": "Ready for a closer look?",
      "contact.text": "Send an enquiry and our sales team will contact you about availability, financing and a test drive."
    },
    de: {
      "nav.home": "Start", "nav.gallery": "Galerie", "nav.specs": "Daten", "nav.video": "Video",
      "nav.similar": "Ähnliche Fahrzeuge", "nav.dealer": "Autohaus", "nav.contact": "Kontakt",
      "hero.eyebrow": "JETZT VERFÜGBAR · PREMIUMZUSTAND",
      "hero.text": "Elektrische Oberklasse-Performance mit Allradantrieb, erstklassigem Komfort und modernster Technologie.",
      "hero.cta": "Probefahrt anfragen", "hero.gallery": "Galerie ansehen", "hero.priceLabel": "KAUFPREIS",
      "hero.year": "Baujahr", "hero.mileage": "Kilometerstand",
      "gallery.eyebrow": "EXTERIEUR & INTERIEUR", "gallery.title": "Aus jedem Blickwinkel.",
      "stats.eyebrow": "FÜR PERFORMANCE ENTWICKELT", "stats.title": "Performance trifft Alltag und Luxus.",
      "stats.power": "Maximale Leistung", "stats.accel": "0–100 km/h", "stats.range": "WLTP-Reichweite", "stats.speed": "Höchstgeschwindigkeit",
      "video.eyebrow": "RUNDGANG", "video.title": "Erleben Sie das Fahrzeug schon vor Ihrem Besuch.",
      "video.text": "Entdecken Sie Exterieur, Cockpit, Stauraum und Ladeerlebnis in einer kurzen Präsentation.",
      "video.cta": "Termin vereinbaren",
      "similar.eyebrow": "ALTERNATIVEN", "similar.title": "Ähnliche Fahrzeuge.",
      "dealer.eyebrow": "BESUCHEN SIE UNS", "dealer.title": "AutoHaus Dresden.",
      "dealer.text": "Besichtigen Sie das Fahrzeug vor Ort, machen Sie eine Probefahrt und sprechen Sie mit unserem Verkaufsteam.",
      "dealer.directions": "Route planen",
      "social.title": "Folgen Sie unserem Autohaus.",
      "social.text": "Neue Fahrzeuge, Auslieferungen und Einblicke hinter die Kulissen.",
      "contact.eyebrow": "SPRECHEN WIR", "contact.title": "Bereit für einen genaueren Blick?",
      "contact.text": "Senden Sie uns eine Anfrage. Unser Verkaufsteam meldet sich zu Verfügbarkeit, Finanzierung und Probefahrt."
    }
  };

  let language = "en";

  function applyLanguage() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[language][key]) el.textContent = translations[language][key];
    });
    button.textContent = language === "en" ? "DE" : "EN";
    document.documentElement.lang = language;
  }

  button.addEventListener("click", () => {
    language = language === "en" ? "de" : "en";
    applyLanguage();
  });
})();
