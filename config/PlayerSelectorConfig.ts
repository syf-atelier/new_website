export type PlayerMode = "Vanilla" | "Premium" | "Infinito";

export interface PlayerOptionConfig {
  key: number | "∞"; 
  title: string; 
  imgSrc?: string; 
  description: string; 
  buttonLabel?: string; 
  position: string; 
}

export const positions = [
  "0%",
  "8.5%",
  "17%",
  "25%",
  "33%",
  "41%",
  "50%",
  "58%",
  "66.5%",
  "74%",
  "83%",
  "91%",
  "100%",
];

export const PlayerSelectorConfig: PlayerOptionConfig[] = [
  {
    key: 1,
    title: "Individual",
    imgSrc: "",
    description: "Ideal para partidas pequeñas y estratégicas",
    buttonLabel: "Explorar Individual",
    position: positions[0],
  },
  {
    key: 2,
    title: "Pequeño Grupo",
    imgSrc: "",
    description: "Perfecto para ti y un amigo.",
    buttonLabel: "Unirse al Grupo",
    position: positions[1],
  },
  {
    key: 3,
    title: "Pequeño Grupo",
    imgSrc: "",
    description: "Perfecto para ti y unos amigos.",
    buttonLabel: "Unirse al Grupo",
    position: positions[2],
  },
  {
    key: 4,
    title: "Pequeño Grupo",
    imgSrc: "",
    description: "Perfecto para grupos medianos y dinámicos. ",
    buttonLabel: "Unirse al Grupo",
    position: positions[3],
  },
  {
    key: 5,
    title: "Grupo Mediano",
    imgSrc: "",
    description: "Perfecto para grupos medianos y dinámicos. ",
    buttonLabel: "Jugar en Grupo",
    position: positions[4],
  },
  {
    key: 6,
    title: "Grupo Mediano",
    imgSrc: "",
    description: "Perfecto para grupos medianos y dinámicos. ",
    buttonLabel: "Unirse al Grupo",
    position: positions[5],
  },
  {
    key: 7,
    title: "Grupo Mediano",
    imgSrc: "",
    description: "Perfecto para grupos medianos y dinámicos. ",
    buttonLabel: "Unirse al Grupo",
    position: positions[6],
  },
  {
    key: 8,
    title: "Grupo Grande",
    imgSrc: "",
    description: "Para juegos más intensos y colaborativos.",
    buttonLabel: "Unirse al Grupo",
    position: positions[7],
  },
  {
    key: 9,
    title: "Grupo Grande",
    imgSrc: "",
    description: "Para juegos más intensos y colaborativos.",
    buttonLabel: "Unirse al Grupo",
    position: positions[8],
  },
  {
    key: 10,
    title: "Grupo Grande",
    imgSrc: "",
    description: "Para juegos más intensos y colaborativos.",
    buttonLabel: "Empezar Aventura",
    position: positions[9],
  },
  {
    key: 11,
    title: "Grupo Grande",
    imgSrc: "",
    description: "Para juegos más intensos y colaborativos.",
    buttonLabel: "Empezar Aventura",
    position: positions[10],
  },
  {
    key: 12,
    title: "Grupo Grande",
    imgSrc: "",
    description: "Para juegos más intensos y colaborativos.",
    buttonLabel: "Empezar Aventura",
    position: positions[11], 
  },
  {
    key: "∞",
    title: "Infinito",
    imgSrc: "",
    description: "La mejor opción para eventos y grandes desafíos.",
    buttonLabel: "Explorar Modo Infinito",
    position: positions[12], 
  },
];
