// Biblical words based on Reina-Valera 1960

export interface WordCategory {
  name: string;
  words: string[];
}

export const biblicalWords: WordCategory[] = [
  {
    name: "Profetas",
    words: [
      "Isaías", "Jeremías", "Ezequiel", "Daniel", "Oseas", "Joel", "Amós",
      "Abdías", "Jonás", "Miqueas", "Nahúm", "Habacuc", "Sofonías", "Hageo",
      "Zacarías", "Malaquías", "Eliseo", "Elías", "Samuel", "Natán"
    ]
  },
  {
    name: "Personajes Bíblicos",
    words: [
      "Abraham", "Isaac", "Jacob", "Moisés", "David", "Salomón", "Noé",
      "José", "Aarón", "Josué", "Sansón", "Rut", "Ester", "María",
      "Pedro", "Pablo", "Juan", "Mateo", "Lucas", "Marcos", "Lázaro",
      "María Magdalena", "Sara", "Rebeca", "Raquel", "Lea", "Débora",
      "Ana", "Elisabet", "Zacarías", "Judas", "Tomás", "Felipe"
    ]
  },
  {
    name: "Libros Bíblicos",
    words: [
      "Génesis", "Éxodo", "Levítico", "Números", "Deuteronomio", "Josué",
      "Jueces", "Rut", "Samuel", "Reyes", "Crónicas", "Esdras", "Nehemías",
      "Ester", "Job", "Salmos", "Proverbios", "Eclesiastés", "Cantares",
      "Isaías", "Apocalipsis", "Romanos", "Corintios", "Gálatas", "Efesios",
      "Filipenses", "Colosenses", "Hebreos", "Santiago", "Judas"
    ]
  },
  {
    name: "Objetos Bíblicos",
    words: [
      "Arca del Pacto", "Tabernáculo", "Candelabro", "Altar", "Incienso",
      "Maná", "Cayado", "Honda", "Arpa", "Trompeta", "Aceite de unción",
      "Pan sin levadura", "Copa", "Vinagre", "Corona de espinas",
      "Cruz", "Túnica", "Manto", "Sandalias", "Vara", "Ánfora",
      "Lámpara", "Pergamino", "Sello", "Piedras preciosas", "Cedro",
      "Olivo", "Viña", "Incensario", "Espada"
    ]
  },
  {
    name: "Lugares Bíblicos",
    words: [
      "Jerusalén", "Belén", "Nazaret", "Egipto", "Babilonia", "Jericó",
      "Galilea", "Samaria", "Jordán", "Monte Sinaí", "Monte Carmelo",
      "Gólgota", "Getsemaní", "Betania", "Caná", "Cafarnaúm", "Damasco",
      "Antioquía", "Corinto", "Roma", "Efeso", "Sodoma", "Gomorra"
    ]
  },
  {
    name: "Eventos Bíblicos",
    words: [
      "Creación", "Diluvio", "Éxodo", "Pascua", "Pentecostés", "Última Cena",
      "Crucifixión", "Resurrección", "Ascensión", "Bautismo", "Transfiguración",
      "Bodas de Caná", "Multiplicación de panes", "División del Mar Rojo",
      "Caída de Jericó", "Batalla de David y Goliat"
    ]
  }
];

export function getRandomWord(): { word: string; category: string } {
  const category = biblicalWords[Math.floor(Math.random() * biblicalWords.length)];
  const word = category.words[Math.floor(Math.random() * category.words.length)];
  return { word, category: category.name };
}
