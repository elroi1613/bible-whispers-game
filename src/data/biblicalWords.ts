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
  },
  {
    name: "Ascendieron al Cielo",
    words: [
      "Jesús",
      "Enoc",
      "Elías"
    ]
  },
  {
    name: "Ángeles y Seres Celestiales",
    words: [
      "Miguel",
      "Gabriel",
      "Querubines",
      "Serafines",
      "Ángel de Jehová",
      "Ejércitos celestiales",
      "Arcángel"
    ]
  },
  {
    name: "Reyes Bíblicos",
    words: [
      "Saúl",
      "David",
      "Salomón",
      "Roboam",
      "Jeroboam",
      "Acab",
      "Ezequías",
      "Josías",
      "Nabucodonosor",
      "Ciro",
      "Herodes",
      "Faraón"
    ]
  },
  {
    name: "Mujeres de la Biblia",
    words: [
      "Eva",
      "Sara",
      "Rebeca",
      "Raquel",
      "Lea",
      "Débora",
      "Rut",
      "Ester",
      "Ana",
      "María",
      "María Magdalena",
      "Elisabet",
      "Priscila"
    ]
  },
  {
    name: "Pecados y Caídas",
    words: [
      "Idolatría",
      "For nicación",
      "Adulterio",
      "Mentira",
      "Soberbia",
      "Rebelión",
      "Codicia",
      "Hechicería",
      "Apostasía",
      "Incredulidad",
      "Hipocresía"
    ]
  },
  {
    name: "Doctrinas Bíblicas",
    words: [
      "Gracia",
      "Fe",
      "Justificación",
      "Santificación",
      "Redención",
      "Expiación",
      "Arrepentimiento",
      "Salvación",
      "Nuevo nacimiento",
      "Vida eterna",
      "Juicio final"
    ]
  },
  {
    name: "Milagros de Jesús",
    words: [
      "Sanidad del ciego",
      "Sanidad del paralítico",
      "Resurrección de Lázaro",
      "Caminar sobre el agua",
      "Multiplicación de panes",
      "Convertir agua en vino",
      "Liberación del endemoniado",
      "Calmar la tempestad"
    ]
  },
  {
    name: "Símbolos Bíblicos",
    words: [
      "Cordero",
      "León de Judá",
      "Vid verdadera",
      "Sal",
      "Luz",
      "Puerta",
      "Roca",
      "Espada del Espíritu",
      "Corona",
      "Sello"
    ]
  },
  {
    name: "Personajes Confusos",
    words: [
      "Melquisedec",
      "Barrabás",
      "Nicodemo",
      "Gamaliel",
      "Simón el Mago",
      "Cornelio",
      "Eunuco etíope",
      "Dimas"
    ]
  },
  {
    name: "Versículos Clave",
    words: [
      "Juan 3:16",
      "Romanos 8:1",
      "Isaías 53",
      "Salmo 23",
      "Mateo 28:19",
      "Efesios 6:12"
    ]
  }
];

export function getRandomWord(): { word: string; category: string } {
  const category = biblicalWords[Math.floor(Math.random() * biblicalWords.length)];
  const word = category.words[Math.floor(Math.random() * category.words.length)];
  return { word, category: category.name };
}
