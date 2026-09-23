// ============================================================
// CATÁLOGO SEMILLA — La Esquina del Chicharrón (Miami, FL)
// 13784 SW 177th Ave, Miami, FL 33196 · 786-546-7982
// IG: @laesquinadelchicharron
// Menú real de Miami extraído de su flyer oficial (sep-2026).
// Todos los precios incluyen sales tax. Moneda: USD.
// Fotos: Portal (foodhero-enhanced, recortadas). No generar con IA.
// CATALOG_VERSION: subir para re-sembrar en el servidor.
// ============================================================

const CATALOG_VERSION = 1;

const SEED_CATALOG = {
  departments: [
    {
      id: "clasicos",
      name: "Los Clásicos de la Esquina",
      icon: "🍖",
      iconImg: "chicharron-verdad.jpg",
      categories: [
        {
          id: "clasicos-esquina",
          name: "De la casa",
          items: [
            { id: "canasticas-campesinas", name: "Canasticas Campesinas", price: 20.00, unit: "plato", active: true, image: "hero-chicharron-mojo.jpg",
              desc: "Tres canasticas de plátano rellenas de chicharrón, guacamole y pico de gallo." },
            { id: "bollitos", name: "Bollitos", price: 12.00, unit: "plato", active: true, image: "chicharron-oven.jpg",
              desc: "Servicio de 3 bollitos de yuca rellenos de queso." },
            { id: "crunchy-tacos", name: "Crunchy Tacos", price: 19.99, unit: "plato", active: true, image: "chicharron-verdad.jpg",
              desc: "Servicio de 3 tacos de chicharrón light." },
            { id: "keto-bowl", name: "Keto Bowl", price: 24.00, unit: "plato", active: true, image: "chicharron-tray.jpg",
              desc: "Ensalada de chicharrón, lechuga, tomate, cebolla, pepino y aderezo de la casa." }
          ]
        }
      ]
    },
    {
      id: "combos",
      name: "Combos",
      icon: "🍽️",
      iconImg: "pica-longa.jpg",
      categories: [
        {
          id: "combos-casa",
          name: "Combos",
          items: [
            { id: "combo-chicharron-light", name: "Chicharrón Light", price: 25.99, unit: "combo", active: true, image: "hero-chicharron-mojo.jpg",
              desc: "Chicharrón light 100% al horno, servido con moro, yuquita, tostones o maduro, más pico de gallo y mojito criollo." },
            { id: "combo-longaniza", name: "Longaniza", price: 21.99, unit: "combo", active: true, image: "pica-longa.jpg",
              desc: "Longaniza criolla con moro, yuquita, tostones o maduro, más pico de gallo y mojito criollo." },
            { id: "combo-carnita", name: "Carnita", price: 21.99, unit: "combo", active: true, image: "chicharron-verdad.jpg",
              desc: "Carnita salada con moro, yuquita, tostones o maduro, más pico de gallo y mojito criollo." },
            { id: "pica-longa", name: "Pica Longa", price: 34.99, unit: "combo", active: true, tag: "⭐ La combinación perfecta", image: "pica-longa.jpg",
              desc: "Un mix de todas las carnes + 2 guarniciones a elegir: moro, yuquita, tostones o maduro, más pico de gallo + mojito criollo." }
          ]
        }
      ]
    },
    {
      id: "mofongo",
      name: "Mofongo Dominicano",
      icon: "🍌",
      iconImg: "mofongo-cremoso.jpg",
      categories: [
        {
          id: "mofongo-dominicano",
          name: "Mofongos",
          items: [
            { id: "famoso-combo-1", name: "El Famoso Combo 1", price: 26.99, unit: "plato", active: true, image: "mofongo-box.jpg",
              desc: "2 mofongos medianos acompañados de chicharrón + pico de gallo + mojito." },
            { id: "mofongo-cremoso", name: "Mofongo Cremoso", price: 26.99, unit: "plato", active: true, tag: "⭐ El favorito", image: "mofongo-cremoso.jpg",
              desc: "Mofongo grande bañado en salsa Alfredo, acompañado de chicharrón, topping de tocineta + pico de gallo + mojito criollo." },
            { id: "mofongo-mocano", name: "Mofongo Mocano", price: 26.99, unit: "plato", active: true, image: "mofongo-box.jpg",
              desc: "Mofongo grande bañado en queso fundido, topping de tocineta y acompañado de chicharrón + pico de gallo + mojito criollo." }
          ]
        }
      ]
    },
    {
      id: "bebidas",
      name: "Bebidas",
      icon: "🥤",
      categories: [
        {
          id: "bebidas-frias",
          name: "Frías",
          items: [
            { id: "coca-cola", name: "Coca-Cola / Zero", price: 3.50, unit: "unidad", active: true,
              desc: "Coca-Cola o Coca-Cola Zero, bien fría." },
            { id: "agua", name: "Agua", price: 5.99, unit: "unidad", active: true,
              desc: "Agua embotellada." },
            { id: "jugo-chinola", name: "Jugo de Chinola", price: 5.99, unit: "unidad", active: true,
              desc: "Jugo natural de chinola (maracuyá), hecho en casa." },
            { id: "country-club-rojo", name: "Country Club Rojo", price: 4.50, unit: "unidad", active: true,
              desc: "Refresco dominicano Country Club, sabor rojo." },
            { id: "country-club-merengue", name: "Country Club Merengue", price: 4.50, unit: "unidad", active: true,
              desc: "Refresco dominicano Country Club, sabor merengue." },
            { id: "sprite", name: "Sprite", price: 3.50, unit: "unidad", active: true,
              desc: "Sprite bien frío." }
          ]
        }
      ]
    },
    {
      id: "proteinas",
      name: "Proteínas (por libra)",
      icon: "🥩",
      iconImg: "chicharron-tray.jpg",
      categories: [
        {
          id: "proteinas-libra",
          name: "Por libra",
          items: [
            { id: "prot-chicharron-half", name: "Chicharrón Light · 1/2 lb", price: 12.00, unit: "1/2 lb", active: true, image: "chicharron-verdad.jpg",
              desc: "Media libra de chicharrón light, 100% al horno." },
            { id: "prot-chicharron-lb", name: "Chicharrón Light · 1 lb", price: 22.00, unit: "1 lb", active: true, image: "chicharron-tray.jpg",
              desc: "Una libra de chicharrón light, 100% al horno." },
            { id: "prot-longaniza-half", name: "Longaniza · 1/2 lb", price: 12.00, unit: "1/2 lb", active: true, image: "chicharron-oven.jpg",
              desc: "Media libra de longaniza criolla." },
            { id: "prot-longaniza-lb", name: "Longaniza · 1 lb", price: 22.00, unit: "1 lb", active: true, image: "pica-longa.jpg",
              desc: "Una libra de longaniza criolla." },
            { id: "prot-carnita-half", name: "Carnita · 1/2 lb", price: 12.00, unit: "1/2 lb", active: true, image: "chicharron-oven.jpg",
              desc: "Media libra de carnita salada de cerdo." },
            { id: "prot-carnita-lb", name: "Carnita · 1 lb", price: 22.00, unit: "1 lb", active: true, image: "chicharron-verdad.jpg",
              desc: "Una libra de carnita salada de cerdo." }
          ]
        }
      ]
    },
    {
      id: "guarniciones",
      name: "Guarniciones y Extras",
      icon: "🍌",
      categories: [
        {
          id: "guarniciones-extras",
          name: "Para acompañar",
          items: [
            { id: "guarn-moro", name: "Moro (arroz basmati)", price: 6.99, unit: "porción", active: true,
              desc: "Moro de arroz basmati, como en casa." },
            { id: "guarn-yuquita", name: "Yuquita", price: 6.99, unit: "porción", active: true,
              desc: "Yuquita frita, doradita." },
            { id: "guarn-tostones", name: "Tostones", price: 6.99, unit: "porción", active: true,
              desc: "Tostones de plátano verde." },
            { id: "guarn-maduro", name: "Maduro", price: 6.99, unit: "porción", active: true,
              desc: "Plátano maduro frito." },
            { id: "extra-bacon-bits", name: "Bacon Bits", price: 2.99, unit: "extra", active: true,
              desc: "Tocineta crocante para coronar tu plato." },
            { id: "extra-queso-fundido", name: "Queso Fundido", price: 2.99, unit: "extra", active: true,
              desc: "Queso fundido extra." },
            { id: "extra-pico-gallo", name: "Pico de Gallo", price: 1.99, unit: "extra", active: true,
              desc: "Pico de gallo fresco." },
            { id: "extra-salsa-alfredo", name: "Salsa Alfredo", price: 2.99, unit: "extra", active: true,
              desc: "Salsa Alfredo cremosa." },
            { id: "extra-mojito-criollo", name: "Mojito Criollo", price: 1.99, unit: "extra", active: true,
              desc: "Mojito criollo de la casa." },
            { id: "extra-guacamole", name: "Guacamole", price: 2.99, unit: "extra", active: true,
              desc: "Guacamole fresco." },
            { id: "extra-side", name: "Extra Side (Guarnición)", price: 6.99, unit: "porción", active: true,
              desc: "Una guarnición extra a elegir." }
          ]
        }
      ]
    }
  ]
};

module.exports = { SEED_CATALOG, CATALOG_VERSION };
