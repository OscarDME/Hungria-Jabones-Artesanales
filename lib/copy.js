// lib/copy.js — A landing page teljes látható tartalma.
// Minden szöveges módosítást itt kell elvégezni. A komponensek csak ebből az objektumból olvasnak.

export const copy = {
  metadata: {
    title: "EcoHerbal — Készíts kézműves szappanokat, amik eladják magukat",
    description:
      "Az EcoHerbal kézműves szappan és természetes kozmetikum tanfolyama: tanuld meg elkészíteni a saját natúr szappanjaidat több mint 27 útmutatóval, 500 recepttel és 8 INGYENES bónusszal. Örökös hozzáférés 80% kedvezménnyel.",
    lang: "hu",
  },

  brand: {
    name: "EcoHerbal",
    tagline: "Gyógynövényes öko szépségápolás",
  },

  hero: {
    banner: "EZ AZ AJÁNLAT + AZ INGYENES BÓNUSZOK LEJÁRNAK:",
    timerLabels: { days: "Nap", hours: "Óra", minutes: "Perc", seconds: "Mp" },
    kicker: "Már több mint 2 586 ember készíti a saját termékeit",
    headlinePre: "EGY KOZMETIKAI SZAKÉRTŐ LELERÁNTA A LEPLET:",
    headlineHighlight: "hogyan készíts ellenállhatatlan szappanokat,",
    headlinePost: "amelyek már az első naptól ápolják a bőrödet",
    supporting:
      "Ideális azoknak, akik AZONNAL el akarnak kezdeni valódi pénzt keresni a saját természetes szappanjaikkal.",
    cta: "Kérem a hozzáférést most 🧼",
    imageAlt: "Nő ápolt és ragyogó bőrrel az EcoHerbal természetes kozmetikumainak köszönhetően",
    trustChips: [
      { icon: "⭐", text: "Több mint 2 586 tanuló" },
      { icon: "🎁", text: "8 INGYENES bónusz" },
      { icon: "🛡️", text: "7 nap garancia" },
    ],
  },

  instructorIntro: {
    quote:
      "Kifejezetten neked állítottam össze ezt az exkluzív tanfolyamot – neked, aki szeretsz a két kezeddel alkotni, és szeretnél egy jól jövedelmező tudást elsajátítani.",
  },

  soapCarousel: {
    items: [
      { image: "/carousel/soap-1.webp", alt: "Frissen készült kézműves szappanok" },
      { image: "/carousel/soap-2.webp", alt: "Márványos hatású kézműves szappanok" },
      { image: "/carousel/soap-3.webp", alt: "Dekoratív zöld hullámos szappan" },
      { image: "/carousel/soap-4.webp", alt: "Természetes levendulás szappan" },
      { image: "/carousel/soap-5.webp", alt: "Különféle kézműves szappanok válogatása" },
      { image: "/carousel/soap-6.webp", alt: "Dekoratív szappanok részletei" },
    ],
  },

  benefits: {
    headline:
      "...már KIS KÖLTSÉGVETÉSSEL is belevághatsz, és élvezheted ezeket az ELŐNYÖKET!",
    items: [
      { icon: "Leaf", text: "Használj természetes és biztonságos összetevőket." },
      { icon: "ShieldCheck", text: "Felejtsd el a bőrszárazságot, az irritációt és az allergiát." },
      { icon: "Sparkles", text: "Alkoss meg bármilyen szappant, amit csak elképzelsz." },
      { icon: "TrendingUp", text: "Változtasd a hobbidat valódi bevételre." },
    ],
    checklist: [
      "Nincs több elrontott recept",
      "Nem kell szakértőnek lenned",
      "Kötetlen időbeosztás, zéró stressz",
    ],
    imageAlt: "Frissen készült kézműves szappanokat tartó kezek",
  },

  trending: {
    kicker: "2026-OS TREND",
    headline:
      "pár nap alatt megtanulsz olyan gyönyörű szappanokat készíteni, amik szinte eladják magukat",
    imageAlt: "Kézműves szappanok modern márványos hatással",
  },

  courseContent: {
    headline: "itt mindent megmutatunk lépésről lépésre",
    subheadline: "ismerd meg a teljes tartalmat",
    sectionLabel: "a több mint 27 e-könyvben ezt találod...",
    paragraphs: [
      {
        bold: "Hozzáférés a teljes tudásanyaghoz,",
        rest: " hogy úgy tervezd, készítsd és tárold a natúr szappanaidat, mint egy igazi profi.",
      },
      {
        bold: "Vége a vakon próbálkozásnak:",
        rest:
          " kövess egy bevált, letisztult útmutatót gyakorlati tippekkel, amikkel rengeteg időt és idegeskedést spórolsz meg.",
      },
    ],
  },

  megapack: {
    kicker: "MEGAPAKK",
    headline: "a megapakk tartalma",
    items: [
      { bold: "Teljes lépésről lépésre útmutató", rest: " a kezdőtől a profi szintig" },
      { bold: "500 recept", rest: " minden bőrtípusra" },
      { bold: "Készítsd el a saját", rest: " illóolajaidat" },
      { bold: "Tanuld meg a", rest: " természetes folyékony szappanok készítését" },
    ],
    imageAlt: "Az EcoHerbal kézműves szappan megapakkjának bemutató képe",
  },

  bonuses: {
    kicker: "INGYENES BÓNUSZOK",
    headline: "Ha még ma csatlakozol, 8 INGYENES bónuszt kapsz ajándékba!",
    subheadline: "27 letölthető, digitális útmutató PDF formátumban.",
    badge: "BÓNUSZ #",
    freeLabel: "INGYENES",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Testápoló kozmetikumok", desc: "Természetes receptek a teljes testápoláshoz." },
      { image: "/bonuses/bonus-2.webp", title: "Arcápoló kozmetikumok", desc: "Krémek, szérumok és tonikok a ragyogó bőrért." },
      { image: "/bonuses/bonus-3.webp", title: "Természetes dezodor", desc: "Gyengéd, hatékony formulák kemikáliák nélkül." },
      { image: "/bonuses/bonus-4.webp", title: "Szilárd szájvíz", desc: "Óvd a fogaid egészségét természetes összetevőkkel." },
      { image: "/bonuses/bonus-5.webp", title: "Natúr fogkrém", desc: "Mélytisztítás fluorid és szulfátok nélkül." },
      { image: "/bonuses/bonus-6.webp", title: "Fürdősók", desc: "Kapcsolódj ki házi készítésű illatos fürdősókkal." },
      { image: "/bonuses/bonus-7.webp", title: "Szilárd sampon", desc: "Egészséges haj, műanyag flakonok nélkül." },
      { image: "/bonuses/bonus-8.webp", title: "Kézműves gyertyák", desc: "Teljes bónusz tanfolyam dekoratív gyertyák készítéséhez." },
    ],
    footer: "Minden bónuszt 100%-ban digitálisan, azonnal megkapsz.",
  },

  features: {
    headline: "Minden, amit a csatlakozással kapsz",
    subheadline: "Teljes hozzáférés, letölthető anyagok (PDF) és részvételi tanúsítvány.",
    items: [
      { icon: "Wifi", title: "100% online", desc: "Tanulj bárhonnan, bármikor, amikor csak kedved tartja." },
      { icon: "FolderOpen", title: "Google Drive mappa", desc: "Rendszerezett anyagok, hogy bonyodalmak nélkül haladhass." },
      { icon: "Infinity", title: "Örökös hozzáférés", desc: "Haladj a saját tempódban, mindenféle határidő nélkül." },
      { icon: "BookOpen", title: "Az e-könyvek a tieid", desc: "Töltsd le vagy olvasd őket online, korlátlan ideig." },
      { icon: "Award", title: "Részvételi tanúsítvány", desc: "Igazold a megszerzett tudásodat egy hivatalos elismeréssel." },
      { icon: "ShieldCheck", title: "7 napos garancia", desc: "Ha nem vagy elégedett, 100%-ban visszatérítjük a pénzed." },
    ],
  },

  primaryPricing: {
    discountBadge: "80% KEDVEZMÉNY",
    valuedAtLabel: "A program eredeti értéke",
    regularPrice: "14 950 Ft",
    offerPrice: "2 990 Ft",
    cta: "KÉREM A KEDVEZMÉNYT",
    payInfo: "Egyszeri fizetés, örökös hozzáférés",
    imageAlt: "Az EcoHerbal program bemutatója exkluzív kedvezménnyel",
    socialImageAlt: "Képernyőfotók elégedett tanulók valódi üzeneteiről",
  },

  socialProof: {
    headline: "NE MARADJ LE!",
    subheadlinePre: "Több mint",
    countHighlight: "2 586 ember",
    subheadlinePost: "élvezi már a saját készítésű kozmetikumait!",
  },

  reviewScreenshots: {
    headline: "Valódi üzenetek a tanulóinktól",
    subheadline: "Ilyeneket kapunk mindennap WhatsAppon.",
    onlineLabel: "online",
    typingLabel: "épp ír…",
    items: [
      {
        name: "Réka",
        timeLabel: "10:24",
        messages: [
          { text: "Megcsináltam az első szappanaimat az útmutatód alapján! 🌸" },
          { text: "Gyönyörűek lettek, a bőröm meg pihe-puha tőlük ✨" },
          { text: "Mikor teszel fel új recepteket?" },
        ],
      },
      {
        name: "Lilla",
        timeLabel: "tegnap",
        messages: [
          { text: "Eladtam 12 szappant a szombati kézműves vásáron 😱" },
          { text: "Úgy vitték, mint a cukrot, el sem hittem 🙌" },
          { text: "Tényleg nagyon köszönöm a tanfolyamot ❤️" },
        ],
      },
      {
        name: "Szilvia",
        timeLabel: "12:05",
        messages: [
          { text: "Két hete kezdtem, és már saját márkám van 💕" },
          { text: "A recepteket szuper könnyű követni" },
          { text: "Az INGYENES bónuszok pedig aranyat érnek 🎁" },
        ],
      },
      {
        name: "Veronika",
        timeLabel: "ma",
        messages: [
          { text: "Szia! Csak el akartam újságolni, hogy most kötöttem egy üzletet" },
          { text: "10 szappant vesz egy öko bolt 🌿" },
          { text: "Ezer köszönet, teljesen feldobtad a napom 🌷" },
        ],
      },
    ],
  },

  curriculum: {
    headline: "A tanfolyam tartalma",
    subheadline: "Kattints a lenyíló menükre, és nézd meg, mi mindent kapsz.",
    courses: [
      {
        title: "Tanfolyam | Kézműves szappanok",
        lessons: [
          "EcoHerbal szappanok 1. modul",
          "EcoHerbal szappanok 2. modul",
          "Szappankészítés 1. modul",
          "Szappankészítés 2. modul",
          "Alapvető technikák",
          "Összetevők és folyamatok",
          "Fantasztikus alapanyagok és hatásaik",
        ],
      },
      {
        title: "Tanfolyam | 500 szappanrecept",
        lessons: [
          "E-könyv (PDF) 500 egyedi recepttel.",
          "Útmutató az összetevők helyettesítéséhez és személyre szabásához.",
        ],
      },
      {
        title: "Tanfolyam | Készíts folyékony szappanokat",
        lessons: [
          "Teljes, lépésről lépésre útmutató a saját glicerines folyékony szappanjaid elkészítéséhez.",
        ],
      },
      {
        title: "Tanfolyam | Készítsd el a saját illóolajaidat",
        lessons: [
          "Teljes, lépésről lépésre útmutató a saját illóolajaid otthoni előállításához.",
        ],
      },
      {
        title: "INGYENES BÓNUSZ | Kézműves gyertya tanfolyam",
        lessons: [
          "Gyertyakészítés 1",
          "Gyertyakészítés 2",
          "Méhviasz gyertyák",
          "Szójaviasz gyertyák",
          "Gyertyák díszítése",
          "Útmutató a kézműves gyertyákhoz",
          "Extra: Lávalámpák",
        ],
      },
      {
        title: "INGYENES BÓNUSZ | Természetes kozmetikumok",
        lessons: [
          "INGYENES BÓNUSZ Testápoló kozmetikumok",
          "INGYENES BÓNUSZ Arcápoló kozmetikumok",
          "INGYENES BÓNUSZ Dezodor",
          "INGYENES BÓNUSZ Szilárd szájvíz",
          "INGYENES BÓNUSZ Fogkrém",
          "INGYENES BÓNUSZ Fürdősók",
          "INGYENES BÓNUSZ Szilárd sampon",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "80% KEDVEZMÉNY",
    plus: "+ 8 INGYENES bónusz",
    middle: "a vásárlásodhoz",
    deadline: "DECEMBER 14-IG",
    or: "vagy amíg be nem telik a",
    slots: "26 HELY",
  },

  finalCta: {
    preHeadline: "ITT A TE IDŐD",
    urgencyTop: "80% KEDVEZMÉNY",
    headline: "Vidd el MA az EcoHerbal megapakkját hatalmas kedvezménnyel",
    subUrgency:
      "Több mint 2 586 ember már a saját szappanjait és kozmetikumait készíti. Ma te jössz.",
    bundleList: [
      "Teljes kézműves szappan tanfolyam (4 modul)",
      "500 egyedi recept minden bőrtípusra",
      "Folyékony szappan tanfolyam lépésről lépésre",
      "Illóolaj készítő tanfolyam",
      "BÓNUSZ — Teljes kézműves gyertya tanfolyam",
      "BÓNUSZ — 7 útmutató a természetes kozmetikumokhoz",
      "Örökös hozzáférés (PDF/online) + Részvételi tanúsítvány",
    ],
    guaranteeText:
      "Teljes körű 7 napos garancia. Ha nem tetszik a tanfolyam, 100%-ban visszatérítjük a pénzed, kérdések nélkül.",
    guaranteeImageAlt: "7 napos garancia pecsét",
    regularPriceLabel: "Eredeti ár:",
    regularPrice: "14 950 Ft",
    offerPrice: "2 990 Ft",
    discountBadge: "80% KEDVEZMÉNY",
    urgencyText: "Egyszeri fizetés, örökös hozzáférés",
    bottomUrgency: "Ez az ajánlat lejár, amint a visszaszámláló eléri a nullát.",
    button: "KÉREM A MEGAPAKKOT MOST",
    trustRow: "100% biztonságos fizetés · Azonnali hozzáférés · 7 nap garancia",
  },

  instructorBio: {
    name: "Kovács Katalin",
    title: "Természetes kozmetikumok szakértője",
    bio: "Szia, Katalin vagyok. Már több mint 8 éve foglalkozom természetes kozmetikumokkal és szappankészítéssel. Ami kezdetben csak egy személyes igény volt – hogy vegyszerek nélkül ápoljam a bőrömet –, mára a legnagyobb szenvedélyemmé... és egyben az életmódommá vált. Az évek során tucatnyi saját formulát fejlesztettem ki, és rengeteg hozzád hasonló nőnek segítettem megtenni az első lépéseket ebben a lenyűgöző világban. Attól kezdve, hogy otthoni alapanyagokból megfőzték az első szappanjukat, egészen addig, hogy ezt a művészetet egy nyereséges és fenntartható vállalkozássá alakították. Tudom, milyen a nulláról indulni, tapasztalat nélkül, rettegve a hibáktól, vagy csak simán nem tudva, hol is kezdjem. Ezért ebben a tanfolyamban minden tudásomat megosztom veled – érthetően, gyakorlatiasan és felesleges bonyodalmak nélkül.",
    imageAlt: "Kovács Katalin, természetes kozmetikumok és kézműves szappanok szakértője",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Katalin által készített kézműves szappanok",
      "Munka közben a természetes kozmetikum műhelyben",
      "Eladásra előkészített, kész termékek",
    ],
    yearsLabel: "Több mint 8 év",
    yearsText: "tapasztalat természetes kozmetikumok készítésében",
    studentsLabel: "Több mint 2 586",
    studentsText: "képzett tanuló",
  },

  testimonials: {
    headline: "Ezenkívül igényelheted a saját tanúsítványodat is",
    subheadline: "Nézd meg, mit mondanak azok, akik már elvégezték az EcoHerbal tanfolyamot.",
    productLabel: "EcoHerbal — Kézműves szappan tanfolyam",
    reviewedLabel: "értékelte:",
    actions: { like: "Tetszik", comment: "Hozzászólás", share: "Megosztás" },
    items: [
      {
        name: "Tóth Janka",
        handle: "@janka_t",
        text: "Nagyon tetszett a tanfolyam. Mindent pontosan úgy csináltam, ahogy az oktató tanította, és kevesebb mint egy hónap alatt sikerült elindítanom a saját kis vállalkozásomat, és meglettek az első eladásaim is. Egyre több szappant készítek, és már azon gondolkodom, hogy nyitok egy saját webshopot. Hálás vagyok ezért a tanfolyamért, tényleg minden pénzt megért.",
      },
      {
        name: "Nagy Maja",
        handle: "",
        text: "Egy hete fejeztem be a képzést, és egyszerűen imádom. Már meg is csináltam az első szappanjaimat, itthon leteszteltük, és a család teljesen odáig van értük. Most készítek elő mindent az árusításhoz, pont úgy, ahogy a tanfolyamban tanultuk. Pár ismerősöm ismerőse már most vásárolni akar tőlem. Nagyon köszönöm ezt a lehetőséget. Minden fillért megért.",
      },
      {
        name: "Horváth Szonja",
        handle: "",
        text: "Azért hagyom itt ezt a kommentet, mert nemrég végeztem el a tanfolyamot, és utána egyből belevágtam az üzletépítésbe. Őszintén szólva nagyon jól beindultak a dolgok, tegnap pedig leszerződtem egy márkával, hogy forgalmazzák néhány termékemet. Soha nem gondoltam volna, hogy idáig eljutok, úgyhogy KÖSZÖNÖM. Ez a kurzus az egyik legjobb befektetésem volt.",
      },
      {
        name: "Varga Dániel",
        handle: "@daniel_v",
        text: "Zseniális anyag, nagyon érthető és profi. Az ajándék bónuszok... ha tehetitek, mindenképp szerezzétek be őket. Óriási érték van bennük. Jó egészséget kívánok, és hálásan köszönöm, hogy átadtátok ezt a tudást az elinduláshoz.",
      },
    ],
    cta: "MA AKAROM ELKEZDENI",
  },

  closingProof: {
    headlinePre: "A tanulóink már",
    headlineHighlight: "kevesebb mint 3 nap alatt",
    headlinePost: "elkészítik a saját termékeiket. Te mire vársz?",
    ctaLabel: "KEZDD EL MA",
  },

  guarantee: {
    badgeLabel: "7 NAP GARANCIA",
    headline: "NE AGGÓDJ, MI VÁLLALJUK A KOCKÁZATOT HELYETTED.",
    text: "Egy teljes heted lesz arra, hogy teszteld a tanfolyamot, és ha nem tetszik, vagy nem hozza azt, amit vártál, 100%-ban visszafizetjük a pénzedet.",
    badgeAlt: "EcoHerbal 7 napos garancia pecsét",
    certs: [
      { icon: "Award", label: "Hivatalos tanúsítvány" },
      { icon: "ShieldCheck", label: "100% biztonságos fizetés" },
      { icon: "Lock", label: "Védett adatok" },
      { icon: "BadgeCheck", label: "Ellenőrzött minőség" },
    ],
  },

  faq: {
    headline: "Gyakran Ismételt Kérdések",
    subheadline: "Minden, amit tudnod kell, mielőtt belevágsz.",
    items: [
      {
        q: "Biztonságos a fizetés?",
        a: "Igen, a fizetés a Hotmarton keresztül történik, amely a világ egyik legbiztonságosabb és legelismertebb, több mint 160 országban működő digitális platformja. A legmodernebb biztonsági tanúsítványokkal rendelkezik, így a fizetési adataid teljes mértékben védve vannak és 100%-ig bizalmasak, garantálva a biztonságos és megbízható vásárlást.",
      },
      {
        q: "El tudom végezni a tanfolyamot akkor is, ha semmit sem tudok a témáról?",
        a: "Hogyne! Minden e-könyvünk rendkívül részletes, és valójában csak elszántságra van szükséged. Az egész folyamat nagyon egyszerű, és rengeteg jól használható, gyakorlatias tippet kapsz.",
      },
      {
        q: "Bármilyen eszközről elérem a tanfolyamot?",
        a: "Igen, a tanfolyamhoz bármilyen eszközről hozzáférhetsz! Legyél asztali gépen, tableten vagy mobilon, operációs rendszertől függetlenül (Windows, macOS, iOS vagy Android) gond nélkül élvezheted a tartalmat. Ráadásul letöltheted a Hotmart applikációt is, hogy mobilon még kényelmesebb legyen a tanulás.",
      },
      {
        q: "Sokba kerül az indulás?",
        a: "Nem! A természetes kozmetikumok készítése nagyon alacsony kezdeti befektetést igényel, mi pedig megtanítunk arra, hogyan használj könnyen beszerezhető, megfizethető alapanyagokat, hogy felesleges kiadások nélkül tudj kezdeni.",
      },
      {
        q: "Mikor kezdődik a tanfolyam?",
        a: "A vásárlás után azonnal kapsz egy hozzáférési linket (és a digitális PDF könyveket), így azonnal beléphetsz a platformra, és akkor haladsz a tananyaggal, amikor csak szeretnél. Életed végéig a tiéd marad.",
      },
      {
        q: "Mit tartalmaz a tanfolyam?",
        a: "A tanfolyam tartalmazza az örökös hozzáférést, a lépésről lépésre haladó e-könyveket, a letölthető anyagokat (PDF), a technikai támogatást és a tanúsítványt a kurzus elvégzése után.",
      },
      {
        q: "Adtok igazolást vagy tanúsítványt?",
        a: "Természetesen! Miután befejezted az anyagot, csak írj nekünk egy e-mailt, és már küldjük is a nevedre szóló tanúsítványt.",
      },
    ],
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "Ez a weboldal nem része a Facebook weboldalának vagy a Facebook Inc.-nek. Továbbá, ezt az oldalt a Facebook semmilyen formában NEM támogatja és nem szponzorálja.",
    trademark: "A FACEBOOK a FACEBOOK, Inc. bejegyzett védjegye.",
  },
};