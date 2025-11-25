export interface MenuItem {
  id: string
  name: string
  description: string
  tags?: string[]
  spicy?: boolean
  image?: string
}

export interface MenuCategory {
  id: string
  name: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: 'petits-dejeuners',
    name: 'Petits déjeuners',
    items: [
      {
        id: 'petit-dej-beninois',
        name: 'Petit-déj béninois complet',
        description: 'Œufs au plat, beignets de manioc, banane plantain, sauce pimentée en accompagnement.',
        image: '/petit-dej-beninois-complet.jpg',
      },
      {
        id: 'bouillie-mais',
        name: 'Bouillie de maïs (Koko)',
        description: 'Servie chaude avec miel ou lait concentré.',
        tags: ['V', 'GF'],
        image: '/bouillie-mais-koko.jpg',
      },
      {
        id: 'toast-avocat',
        name: 'Toast à l\'avocat & œuf poché',
        description: 'Pain toasté, avocat écrasé, œuf poché, tomate.',
        image: '/toast-avocat-oeuf-poche.jpg',
      },
      {
        id: 'accra-morue',
        name: 'Accra de morue + jus frais',
        description: 'Accras croustillants, sauce tomate douce.',
        image: '/accra-morue-jus-frais.jpg',
      },
      {
        id: 'pain-perdu',
        name: 'Pain perdu à la noix de coco',
        description: 'Pain imbibé, noix de coco râpée, sirop.',
        image: '/pain-perdu-noix-coco.jpg',
      },
      {
        id: 'plateau-continental',
        name: 'Plateau continental',
        description: 'Viennoiseries, fromage, charcuterie, confitures, fruits.',
        image: '/plateau-continental.webp',
      },
      {
        id: 'omelette-herbes',
        name: 'Omelette aux herbes africaines',
        description: 'Omelette maison, oignon, poivron, persil.',
        image: '/omelette-herbes-africaines.jpg',
      },
      {
        id: 'crepes-banane',
        name: 'Crêpes banane-cacao',
        description: 'Servies avec miel ou sirop local.',
        image: '/crepes-banane-cacao.jpeg',
      },
    ],
  },
  {
    id: 'entrees',
    name: 'Entrées & Tapas',
    items: [
      {
        id: 'beignets-poisson',
        name: 'Beignets de poisson',
        description: 'Filet de poisson haché, épices, frits.',
        image: '/beignets-poisson.jpg',
      },
      {
        id: 'brochettes-mixte',
        name: 'Brochettes mixte',
        description: 'Poulet, bœuf ou crevette, marinade maison.',
        image: '/brochettes-mixte.jpg',
      },
      {
        id: 'salade-avocat-mangue',
        name: 'Salade d\'avocat et mangue',
        description: 'Avocat, mangue, citron vert, coriandre.',
        tags: ['V'],
        image: '/salade-avocat-mangue.webp',
      },
      {
        id: 'soupe-arachide',
        name: 'Soupe d\'arachide',
        description: 'Crémeuse, parfumée, parfaite en entrée.',
        tags: ['GF'],
        image: '/soupe-arachide.webp',
      },
      {
        id: 'samoussas',
        name: 'Samoussas',
        description: 'Viande épicée ou légumes.',
        tags: ['V'],
        image: '/samoussas.jpeg',
      },
      {
        id: 'plantain-grille',
        name: 'Plantain grillé',
        description: 'Rondelles de plantain, caramélisées.',
        tags: ['V', 'GF'],
        image: '/plantain-grille.webp',
      },
      {
        id: 'salade-marche',
        name: 'Salade fraîche du marché',
        description: 'Laitue, concombre, tomate, vinaigrette maison.',
        tags: ['V', 'GF'],
        image: '/salade-fraiche-marche.jpg',
      },
      {
        id: 'crin-crin-mini',
        name: 'Mini-portion de crin-crin',
        description: 'Sauce traditionnelle béninoise, servi avec pain ou frites.',
        spicy: true,
        image: '/mini-portion-crin-crin.jpg',
      },
    ],
  },
  {
    id: 'sauces',
    name: 'Sauces typiques',
    items: [
      {
        id: 'crin-crin',
        name: 'Crin-crin (sauce ninnouwi)',
        description: 'Épaisse, tomate et épices, signature.',
        spicy: true,
        image: '/crin-crin-sauce-ninnouwi.jpg',
      },
      {
        id: 'sauce-graine',
        name: 'Sauce graine',
        description: 'À base de pulpe de palme.',
        image: '/sauce-graine.jpg',
      },
      {
        id: 'sauce-arachide',
        name: 'Sauce arachide',
        description: 'Crémeuse et onctueuse.',
        tags: ['GF'],
        image: '/sauce-arachide.jpg',
      },
      {
        id: 'sauce-tomate',
        name: 'Sauce tomate maison',
        description: 'Classique, légère.',
        tags: ['GF'],
        image: '/sauce-tomate-maison.jpg',
      },
      {
        id: 'sauce-piment-douce',
        name: 'Sauce piment douce',
        description: 'Piment local adouci au citron vert.',
        spicy: true,
        image: '/sauce-piment-douce.webp',
      },
      {
        id: 'sauce-gombo',
        name: 'Sauce gombo',
        description: 'Texture veloutée, parfumée.',
        image: '/sauce-gombo.jpg',
      },
    ],
  },
  {
    id: 'plats-principaux',
    name: 'Plats principaux — Viandes & Poissons',
    items: [
      {
        id: 'poulet-braise',
        name: 'Poulet braisé Eden',
        description: 'Poulet mariné, grillé, servi avec sauce maison.',
      },
      {
        id: 'poulet-yassa',
        name: 'Poulet yassa',
        description: 'Poulet mariné au citron et oignons caramélisés.',
      },
      {
        id: 'poulet-mafe',
        name: 'Poulet mafé (sauce arachide)',
        description: 'Poulet tendre dans une sauce d\'arachide.',
      },
      {
        id: 'ragout-boeuf',
        name: 'Ragoût de bœuf',
        description: 'Morceaux mijotés, légumes racines.',
      },
      {
        id: 'poisson-braise',
        name: 'Poisson braisé à la béninoise',
        description: 'Poisson entier mariné, grillé.',
        tags: ['GF'],
      },
      {
        id: 'tilapia-gingembre',
        name: 'Filet de tilapia sauce gingembre-citron',
        description: 'Filet délicat, zesté.',
        tags: ['GF'],
      },
      {
        id: 'crevettes-piment',
        name: 'Crevettes sautées au piment doux',
        description: 'Crevettes flambées, ail.',
        spicy: true,
      },
      {
        id: 'riz-jollof',
        name: 'Riz jollof',
        description: 'Riz parfumé aux tomates et épices, version maison.',
      },
      {
        id: 'riz-gras',
        name: 'Riz au gras (riz béninois)',
        description: 'Riz riche, légumes et protéines au choix.',
      },
      {
        id: 'chevre-sauce',
        name: 'Morceaux de chèvre en sauce',
        description: 'Plat épicé traditionnel.',
      },
      {
        id: 'poisson-frit',
        name: 'Poisson frit & sauce tomate',
        description: 'Filets croustillants, sauce maison.',
      },
      {
        id: 'bifteck',
        name: 'Bifteck grillé',
        description: 'Tranche de bœuf, accompagnements au choix.',
      },
    ],
  },
  {
    id: 'vegetariens',
    name: 'Plats végétariens / véganes',
    items: [
      {
        id: 'ragout-legumes',
        name: 'Ragoût de légumes ivoirien',
        description: 'Aubergine, gombo, tomates.',
        tags: ['VG', 'GF'],
      },
      {
        id: 'mafe-legumes',
        name: 'Mafé légumes',
        description: 'Sauce arachide, légumes racines.',
        tags: ['VG'],
      },
      {
        id: 'tofu-braise',
        name: 'Tofu braisé aux épices africaines',
        description: 'Tofu mariné et grillé.',
        tags: ['VG'],
      },
      {
        id: 'salade-atlantique',
        name: 'Salade de l\'Atlantique',
        description: 'Quinoa/local cereal, légumes croquants.',
        tags: ['VG', 'GF'],
      },
      {
        id: 'poelee-legumes',
        name: 'Poêlée de légumes & plantain',
        description: 'Légumes de saison sautés.',
        tags: ['V', 'VG'],
      },
      {
        id: 'patates-douces',
        name: 'Patates douces rôties',
        description: 'Caramélisées, sauce piment douce.',
        tags: ['V', 'GF'],
      },
    ],
  },
  {
    id: 'accompagnements',
    name: 'Accompagnements',
    items: [
      {
        id: 'frites',
        name: 'Frites maison',
        description: 'Coupées à la main.',
        tags: ['V'],
      },
      {
        id: 'foutou',
        name: 'Foutou / Akassa / Vada',
        description: 'Pâte traditionnelle selon disponibilité.',
      },
      {
        id: 'attieke',
        name: 'Attiéké',
        description: 'Semoule de manioc, texture légère.',
      },
      {
        id: 'igname-pilee',
        name: 'Modalité d\'igname (igname pilée)',
        description: 'Purée ferme, servie à la louche.',
      },
      {
        id: 'riz-blanc',
        name: 'Riz blanc parfumé',
        description: '',
        tags: ['GF'],
      },
      {
        id: 'legumes-sautes',
        name: 'Légumes sautés',
        description: '',
        tags: ['V', 'GF'],
      },
      {
        id: 'banane-plantain',
        name: 'Banane plantain frite',
        description: '',
        tags: ['V', 'GF'],
      },
      {
        id: 'aloko',
        name: 'Aloko (plantain) sauce',
        description: '',
        tags: ['V'],
      },
      {
        id: 'attieke-onions',
        name: 'Attiéké aux oignons et tomates',
        description: '',
        tags: ['V', 'GF'],
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      {
        id: 'beignets-banane',
        name: 'Beignets de banane',
        description: 'Chauds, croustillants à l\'extérieur.',
      },
      {
        id: 'tarte-coco',
        name: 'Tarte à la noix de coco',
        description: 'Pâte sablée, crème coco.',
      },
      {
        id: 'salade-fruits',
        name: 'Salade de fruits tropicaux',
        description: 'Mangue, papaye, ananas.',
        tags: ['V', 'GF'],
      },
      {
        id: 'mousse-chocolat',
        name: 'Mousse au chocolat',
        description: 'Onctueuse, portion individuelle.',
      },
      {
        id: 'creme-caramel',
        name: 'Crème caramel',
        description: 'Douceur classique.',
      },
      {
        id: 'glaces',
        name: 'Glaces artisanales',
        description: 'Vanille, mangue, noix de coco.',
      },
    ],
  },
  {
    id: 'boissons',
    name: 'Boissons & Jus',
    items: [
      {
        id: 'jus-gingembre',
        name: 'Jus de gingembre maison',
        description: 'Punch doux/épicé.',
      },
      {
        id: 'jus-bissap',
        name: 'Jus de bissap (hibiscus)',
        description: 'Rafraîchissant, acidulé.',
        tags: ['V', 'GF'],
      },
      {
        id: 'jus-fruits',
        name: 'Jus de mangue / ananas / papaye',
        description: '',
        tags: ['V', 'GF'],
      },
      {
        id: 'cafe',
        name: 'Café béninois / espresso',
        description: '',
      },
      {
        id: 'the',
        name: 'Thé citron/menthe',
        description: '',
      },
      {
        id: 'sodas',
        name: 'Sodas & eaux',
        description: '',
      },
      {
        id: 'boissons-chaudes',
        name: 'Boissons chaudes locales',
        description: 'Koko, thé au lait parfumé.',
      },
      {
        id: 'cocktails',
        name: 'Cocktails maison',
        description: 'Mojito africain, cocktail mangue (si permis).',
      },
    ],
  },
  {
    id: 'menu-enfant',
    name: 'Menu enfant',
    items: [
      {
        id: 'mini-poulet',
        name: 'Mini poulet rôti + frites',
        description: 'Portion adaptée.',
      },
      {
        id: 'nuggets-poisson',
        name: 'Nuggets de poisson + riz',
        description: 'Doux pour les petits.',
      },
      {
        id: 'pates-fromage',
        name: 'Pâtes au fromage',
        description: 'Portion gourmande.',
      },
      {
        id: 'compote',
        name: 'Compote de fruits maison',
        description: 'Dessert sain.',
      },
    ],
  },
  {
    id: 'formules',
    name: 'Formules & Traiteur',
    items: [
      {
        id: 'formule-midi',
        name: 'Formule midi (rapide)',
        description: 'Plat du jour + boisson + dessert.',
      },
      {
        id: 'formule-familiale',
        name: 'Formule familiale',
        description: 'Plat principal pour 4 + accompagnements + dessert.',
      },
      {
        id: 'pack-traiteur',
        name: 'Pack traiteur (événement)',
        description: 'Buffet chaud/froid sur demande (menu standard ou sur-mesure).',
      },
      {
        id: 'buffet-decouverte',
        name: 'Buffet découverte "Saveurs du Bénin"',
        description: 'Sélection de 6 plats traditionnels + sauces + accompagnements.',
      },
    ],
  },
]
