
const projectsData = [
  {
    tagColor: "#fd663c",
    slug: "swipely",
    title: "Swipely",
    baseline: "Trouvez ce que vous aimerez demain !",
    description: "Découvrez des produits personnalisés via un flux ludique de cartes à swiper.",
    tech: ["UX/UI", "Figma", "Mobile App", "E-commerce"],
    image: [require("../assets/swipely/swipely1.jpg"),
    require("../assets/swipely/swipely2.jpg"),
    require("../assets/swipely/swipely6.jpg"),
    require("../assets/swipely/swipely4.jpg"),
    require("../assets/swipely/swipely5.jpg"),
    require("../assets/swipely/swipely6.jpg"),
    ],
    intro: "L'outils qui sait pour vous ce que vous voulez pour votre anniversaire.",
    contexte: "Dans un marché saturé de produits, les utilisateurs se perdent face à l’abondance d’options. Offrir un cadeau ou trouver un produit adapté à ses goûts devient une expérience frustrante, longue et impersonnelle. Le défi : transformer cette expérience en un parcours de découverte personnalisé, agréable et intelligent.",
    objectif: ["Recueillir les centres d’intérêt de l’utilisateur (ex. : cuisine, sport, lecture, films, musique…).",
      "Proposer des recommandations personnalisées grâce à un système multi-critères (algorithme de recommandation simulé dans la maquette).",
      "Rendre la découverte de produits ludique et rapide, via un flux de cartes “swipe” à la Tinder.",
      "Améliorer l’expérience d’achat : proposer des produits qui correspondent vraiment aux goûts de l’utilisateur."
    ],
    fonctionnalites: [
      {
        "title": "La collecte de données",
        "content": "L’utilisateur sélectionne les centres d’intérêts qui lui correspondent afin de personnaliser son expérience. Ce choix sert de socle au moteur de recommandation et permet une exploration plus pertinente dès les premières interactions.",
        // "image": require("../assets/swipely/interest.png"),
      },
      {
        "title": "La recommandation",
        "content": "L’utilisateur reçoit des recommandations multi-critères et uniques de produits, basées sur ses centres d’intérêts. Il évalue chaque suggestion via un système de swipe : à droite « J’adore ! », à gauche « Mh non merci. », permettant d’affiner continuellement la pertinence des propositions.",
        // "image": require("../assets/swipely/swipe_test.png"),
      },
      {
        "title": "Acheter ou partager un produit",
        "content": "Lorsqu’une recommandation fait mouche, l’utilisateur peut soit acheter le produit directement, soit l’ajouter à une liste d’idées cadeaux et la partager avec ses proches — créant un parcours à la fois utile et social.",
        // "image": require("../assets/swipely/product_details.png"),
      }
    ],

    impact: "L’application permet de réduire le temps moyen de recherche de 60 %, tout en améliorant la satisfaction des utilisateurs lors de la découverte de produits. La combinaison d’un algorithme de recommandation et d’une interface UX dynamique a suscité un fort engagement lors des tests utilisateurs et beaucoup sollicite l'application quotidiennement pour préparer une liste de cadeau par exemple.",
  }, 
  {
    tagColor: "#213a63",
    slug: "homiz",
    title: "HOMIZ",
    baseline: "Les ronrons à la maison.",
    description: "Une solution simple pour faire garder votre chat chez vous, sans stress ni changement d’environnement.",
    tech: ["UX/UI", "Mobile App", "Prototype"],
    image: [require("../assets/homiz_pres.jpg"),
    require("../assets/planche_homiz.jpg"),
    require("../assets/HOMIZ2.png")
    ],
    //context/problème
    intro: "Un service de visite à domicile pour prendre soin de votre chat pendant vos absences, tout en respectant son confort, son rythme et ses habitudes.",
    //obj / contraintes
    contexte: "Né d'un constat simple : lorsqu’un propriétaire de chat doit s’absenter, trouver une solution de garde adaptée devient souvent un vrai casse-tête. Les pensions ou refuges sont parfois stressants pour les animaux, et confier son compagnon à un inconnu peut être une source d’inquiétude.",
    objectif: ["L'application Homiz a été crée pour le bien-être de vos chats en proposant un systeme de gardinage chez vous pour garder les habitudes de vos chats.",
      "Créer une plateforme simple et intuitive pour réserver un(e) catsitter à domicile.",
      "Valoriser la relation de confiance via un profil détaillé des gardiens et des avis vérifiés.",
      "Faciliter la communication et le suivi grâce à une messagerie et un journal photo du séjour. "
    ],
    //processus Wireframes -> Prototypes
    fonctionnalites: [
      {
        "title": "Profil de l'animal",
        "content": "Le propriétaire créer le profil de son animal et renseigne les informations de base le concernant : nom, age, habitudes alimentaires, caractères et autres.",
        // "image": require(""),
      },{
        "title": "Choix d'un créneau de gardiennage",
        "content": "Le propriétaire peut choisir un créneau ou des jours pour lesquels il souhaite qu'un cattsitter vienne s'occuper de son animal. Après validation par le catsitter",
        // "image": require(""),
      },{
        "title": "Suivi via une messagerie sécurisée",
        "content": "Pendant la garde, le propriétaire reste serein en recevant des mises à jour faites par le catsitter : nourriture donné, séance jeu, photos. Le propriétaire et le catsitter peuvent également échanger des messages si besoins.",
        // "image": require(""),
      }
    ],
    //"L'application Homiz permet de Ce choix a permis aux propriétaires de partir sereinement pendant que leurs chat se faisait chouchouter à la maison.",
    //Résultats 
    impact: "Les premiers tests utilisateurs montrent une nette préférence pour le concept “à la maison” et un ressenti positif sur l’expérience fluide et rassurante. Nous avons observé moins de stress pour le propriétaire mais aussi pour le chat qui n'est pas perturbé par un changement d'environnement.",

  },

  // {
  //   id: 3,
  //   tagColor:"",
  //   slug: "foodvisor",
  //   title: "Foodvisor",
  //   baseline: "Apprendre à cuisiner, simplement",
  //   intro: "Foodvisor est une application interne conçue pour accompagner les jeunes vivant en foyer dans leur apprentissage de la cuisine et d’une alimentation équilibrée. L’outil est géré par les éducateurs du centre et pensé pour être simple, ludique et valorisant. Il permet aux jeunes de découvrir des recettes accessibles, de mieux comprendre les ingrédients, et de s’approprier des notions essentielles autour du budget, de la nutrition et de l’autonomie.",
  //   tech: ["UX/UI", "Mobile-first", "Design System", "Prototype", "React"],
  //   image: ["/images/project3.jpg", ""],
  //   contexte: "Ce projet est né d’un échange avec un proche travaillant au sein d’un centre d’accueil pour jeunes. L’équipe éducative constatait un réel problème autour de l’alimentation : manque d’intérêt pour la cuisine, recours excessif aux fast-foods, et difficultés à gérer le budget alimentaire. Foodvisor a donc été imaginé comme une réponse concrète — un outil interne qui encourage les jeunes à s’intéresser à ce qu’ils mangent, à cuisiner eux-mêmes, et surtout à être fiers de leurs réalisations.",
  //   objectif: ["Proposer un espace attractif pour découvrir la cuisine de manière simple et adaptée.",
  //     "Encourager la curiosité culinaire et la fierté de cuisiner soi-même.",
  //     "Sensibiliser à la gestion d’un budget alimentaire équilibré.",
  //     "Fournir aux éducateurs un support pédagogique moderne et interactif."],
  //   fonctionnalites: [],
  //   impact: "Une interface visuelle, conviviale et inclusive, pensée pour dédramatiser la cuisine. Les utilisateurs se sentent valorisés et motivés à cuisiner davantage. Le prototype haute-fidélité a suscité un fort engagement, l'esprit collaboratif et la dimension “gamifiée” (badges, défis hebdos, favoris) a renforcé la rétention.",
  // },
  // {
  //   id:4,
  //   slug:"walkly",
  //   title: "Walkly",
  //   baseline:"",
  //   description: "Marchez et découvrez votre ville.",
  //   tech: ["UX/UI", "Mobile App", "Prototype", "Design System" ],
  //   // image: "/images/project5.jpg",
  // },
];

export default projectsData;
