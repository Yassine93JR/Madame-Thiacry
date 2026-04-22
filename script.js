const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.specialties": "Spécialités",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.kicker": "Produits laitiers artisanaux en Gambie",
    "hero.title": "Le goût authentique du thiacry et du lait caillé fait maison",
    "hero.text": "Le meilleur du thiacry et du lait caillé fait maison par des mains d’or de Mariama. À votre service !",
    "hero.call": "Appeler maintenant",
    "hero.discover": "Découvrir nos services",
    "about.title": "À propos de Mariama Thiacry",
    "about.p1": "Mariama Thiacry est une entreprise familiale dédiée aux produits laitiers traditionnels, préparés chaque jour avec soin.",
    "about.p2": "Notre passion : offrir des recettes authentiques, un goût naturel et une qualité artisanale qui rappelle les traditions gambiennes.",
    "about.point1": "Une fabrication 100% maison",
    "about.point2": "Des recettes traditionnelles transmises avec amour",
    "about.point3": "Un savoir-faire artisanal au service de vos événements",
    "specialties.title": "Nos spécialités",
    "specialties.intro": "Une sélection maison préparée avec soin, dans le respect des saveurs traditionnelles et de la qualité artisanale.",
    "specialties.milk.title": "Lait caillé traditionnel",
    "specialties.milk.text": "Une texture onctueuse et fraîche, préparée chaque jour dans notre atelier familial.",
    "specialties.thiacry.title": "Thiacry à la semoule",
    "specialties.thiacry.text": "Le goût authentique du thiacry, équilibré entre semoule fine et lait de qualité.",
    "specialties.cakes.title": "Douceurs maison",
    "specialties.cakes.text": "De petites gourmandises artisanales pour accompagner vos événements et réceptions.",
    "services.title": "Nos services",
    "services.intro": "Nous préparons des produits laitiers artisanaux pour tous vos moments importants, avec une approche simple, chaleureuse et personnalisée.",
    "services.weddings.title": "Mariages",
    "services.weddings.text": "Des préparations soignées pour rendre vos célébrations encore plus mémorables.",
    "services.baptisms.title": "Baptêmes",
    "services.baptisms.text": "Un service familial et authentique, adapté à vos traditions et à vos envies.",
    "services.events.title": "Événements",
    "services.events.text": "Pour vos rencontres, fêtes et rassemblements, avec une touche artisanale unique.",
    "services.custom.title": "Commandes personnalisées",
    "services.custom.text": "Des commandes adaptées à vos besoins, préparées avec attention et qualité.",
    "contact.title": "Contact",
    "contact.companyLabel": "Entreprise :",
    "contact.companyValue": "Mariama Thiacry",
    "contact.typeLabel": "Type :",
    "contact.typeValue": "Produits laitiers artisanaux",
    "contact.addressLabel": "Adresse :",
    "contact.addressValue": "Sinchu Sorry, Serrekunda, Gambie",
    "contact.phoneLabel": "Téléphone :",
  "contact.phoneValue": "+220 222 9244",
    "contact.hoursLabel": "Horaires :",
    "contact.hoursValue": "Tous les jours de 09:00 à 19:00",
    "contact.cta": "Commander / Appeler",
    "footer.text": "Mariama Thiacry - Authenticité, qualité artisanale et chaleur humaine."
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.specialties": "Specialties",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.kicker": "Artisanal dairy products in The Gambia",
    "hero.title": "The authentic taste of homemade thiacry and curdled milk",
    "hero.text": "The best homemade thiacry and curdled milk, prepared by Mariama's golden hands. At your service!",
    "hero.call": "Call now",
    "hero.discover": "Discover our services",
    "about.title": "About Mariama Thiacry",
    "about.p1": "Mariama Thiacry is a family business dedicated to traditional dairy products, prepared fresh every day with care.",
    "about.p2": "Our passion: offering authentic recipes, natural flavor, and artisanal quality inspired by Gambian traditions.",
    "about.point1": "100% homemade production",
    "about.point2": "Traditional recipes passed on with love",
    "about.point3": "Artisanal know-how for your events",
    "specialties.title": "Our specialties",
    "specialties.intro": "A homemade selection prepared with care, respecting traditional flavors and artisanal quality.",
    "specialties.milk.title": "Traditional curdled milk",
    "specialties.milk.text": "A fresh, creamy texture prepared every day in our family workshop.",
    "specialties.thiacry.title": "Semolina thiacry",
    "specialties.thiacry.text": "The authentic taste of thiacry, perfectly balanced between fine semolina and quality milk.",
    "specialties.cakes.title": "Homemade sweets",
    "specialties.cakes.text": "Small artisanal treats to accompany your events and celebrations.",
    "services.title": "Our services",
    "services.intro": "We prepare artisanal dairy products for your special moments, with a simple, warm, and personalized approach.",
    "services.weddings.title": "Weddings",
    "services.weddings.text": "Carefully prepared products to make your celebrations even more memorable.",
    "services.baptisms.title": "Baptisms",
    "services.baptisms.text": "A family-oriented and authentic service adapted to your traditions and preferences.",
    "services.events.title": "Events",
    "services.events.text": "For gatherings, celebrations, and special occasions with a unique artisanal touch.",
    "services.custom.title": "Custom orders",
    "services.custom.text": "Tailored orders prepared with care and high quality.",
    "contact.title": "Contact",
    "contact.companyLabel": "Business:",
    "contact.companyValue": "Mariama Thiacry",
    "contact.typeLabel": "Type:",
    "contact.typeValue": "Artisanal dairy products",
    "contact.addressLabel": "Address:",
    "contact.addressValue": "Sinchu Sorry, Serrekunda, The Gambia",
    "contact.phoneLabel": "Phone:",
  "contact.phoneValue": "+220 222 9244",
    "contact.hoursLabel": "Opening hours:",
    "contact.hoursValue": "Every day from 09:00 to 19:00",
    "contact.cta": "Order / Call",
    "footer.text": "Mariama Thiacry - Authenticity, artisanal quality, and human warmth."
  }
};

const langToggleBtn = document.getElementById("langToggle");
const translatableNodes = document.querySelectorAll("[data-i18n]");

function applyLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) {
    return;
  }

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.documentElement.lang = lang;
  langToggleBtn.textContent = lang === "fr" ? "EN" : "FR";
  langToggleBtn.setAttribute(
    "aria-label",
    lang === "fr" ? "Switch to English" : "Passer en français"
  );
  localStorage.setItem("preferredLang", lang);
}

function initLanguage() {
  const storedLang = localStorage.getItem("preferredLang");
  const browserLang = navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
  const lang = storedLang || browserLang || "fr";
  applyLanguage(lang);
}

langToggleBtn.addEventListener("click", () => {
  const currentLang = document.documentElement.lang || "fr";
  const nextLang = currentLang === "fr" ? "en" : "fr";
  applyLanguage(nextLang);
});

initLanguage();
