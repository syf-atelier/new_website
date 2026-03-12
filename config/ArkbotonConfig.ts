export type ArkVersion = "Survival Evolved" | "Survival Ascended";

export interface ArkbotonConfigType {
  version: ArkVersion;
  title: string;
  description: string;
  personalizationTitle: string;
  personalizationItems: string[];
}

export const ArkbotonConfig: ArkbotonConfigType[] = [
  {
    version: "Survival Evolved",
    title: "Survival Evolved",
    description:
      "Lanzado en 2015, ARK: Survival Evolved invita a los jugadores a explorar un mundo lleno de dinosaurios y secretos antiguos. Combina supervivencia, construcción y combate en una experiencia personalizable, ideal para jugar en solitario o en grupo.",
    personalizationTitle: "Personalización",
    personalizationItems: [
      "Ajusta la configuración del juego.",
      "Modifica tiempos de cría y experiencia.",
      "Agrega mods y personaliza el servidor.",
      "Sé el dueño absoluto.",
      "Protege el acceso con clave.",
    ],
  },
  {
    version: "Survival Ascended",
    title: "Survival Ascended",
    description:
      "Lanzado en 2015, ARK: Survival Evolved invita a los jugadores a explorar un mundo lleno de dinosaurios y secretos antiguos. Combina supervivencia, construcción y combate en una experiencia personalizable, ideal para jugar en solitario o en grupo.",
    personalizationTitle: "Personalización",
    personalizationItems: [
      "Modifica la configuración del juego a tu gusto.",
      "Ajusta tiempos de cría y experiencia.",
      "Agrega mods y personaliza el servidor.",
      "Eres el dueño y decide las reglas.",
      "Protege el acceso con clave",
    ],
  },
];
