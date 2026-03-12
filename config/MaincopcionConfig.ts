import fotoVanillaMain from "@/assets/foto_vanillamain.svg";
import Java_mod1 from "@/assets/Java_mod1.svg";
import Java_mod2 from "@/assets/Java_mod2.svg";
import Java_mod3 from "@/assets/Java_mod3.svg";
import Java_mod4 from "@/assets/Java_mod4.svg";
import Java_plugin1 from "@/assets/Java_plugin1.svg";
import Java_plugin2 from "@/assets/Java_plugin2.svg";
import Java_plugin3 from "@/assets/Java_plugin3.svg";
import Java_plugin4 from "@/assets/Java_plugin4.svg";
import Java_modplugi1 from "@/assets/Java_modplugi1.svg";
import Java_modplugi2 from "@/assets/Java_modplugi2.svg";
import Bedrock_plugin1 from "@/assets/Bedrock_plugin1.svg";
import Bedrock_plugin2 from "@/assets/Bedrock_plugin2.svg";



export type OptionType = "Vanilla" | "Mods" | "Plugins" | "Mods y Plugins";

export interface OptionItem {
  imgSrc: string;
  buttonLabel: string;
}

export interface OptionConfig {
  key: OptionType;
  title: string;
  optitle: string;
  description: string;
  imgSrc?: string;
  buttonLabel?: string;
  items?: OptionItem[];
}

export interface VersionConfig {
  version: "Java" | "Bedrock";
  options: OptionConfig[];
}

export const MaincopcionConfig: VersionConfig[] = [
  {
    version: "Java",
    options: [
      {
        key: "Vanilla",
        optitle: "",
        title: "Vanilla",
        description:
          "El juego original, tal cual y sin posibilidad de cambiar el juego. Si quieres poder jugar Java + Bedrock o agregar mods/plugins, elige otra opción.",
        imgSrc: fotoVanillaMain,
        buttonLabel: " Vanilla",
      },
      {
        key: "Mods",
        title: "Mods",
        optitle: "Mods",
        description: "",
        items: [
          { imgSrc: Java_mod1, buttonLabel: "Forge" },
          { imgSrc: Java_mod2, buttonLabel: "NeoForge" },
          { imgSrc: Java_mod3, buttonLabel: "Fafric" },
          { imgSrc: Java_mod4, buttonLabel: "Quilt" },
        ],
        imgSrc: "",
        buttonLabel: "",
      },
      {
        key: "Plugins",
        title: "Plugins",
        optitle: "Plugins",
        description: "",
        items: [
          { imgSrc: Java_plugin1, buttonLabel: "Bukkit" },
          { imgSrc: Java_plugin2, buttonLabel: "Spigot" },
          { imgSrc: Java_plugin3, buttonLabel: "Paper" },
          { imgSrc: Java_plugin4, buttonLabel: "Purpur" },
        ],
        imgSrc: "",
        buttonLabel: "",
      },
      {
        key: "Mods y Plugins",
        title: "Mods y Plugins",
        optitle: "Mods y Pluginds",
        description: "",
        items: [
          { imgSrc: Java_modplugi1, buttonLabel: "Mohist" },
          { imgSrc: Java_modplugi2, buttonLabel: "Arclight" },
        ],
        imgSrc: "",
        buttonLabel: "",
      },
    ],
  },
  {
    version: "Bedrock",
    options: [
      {
        key: "Vanilla",
        title: "Vanilla",
        optitle: "Bedrock",
        description:
          "El juego original para Bedrock. Si deseas más personalización, prueba Mods o Plugins.",
        imgSrc: fotoVanillaMain,
        buttonLabel: " Vanilla",
      },
      {
        key: "Plugins",
        title: "Plugins",
        optitle: "Plugins",
        description: "",
        items: [
          { imgSrc: Bedrock_plugin1, buttonLabel: "PocketMine-MP" },
          { imgSrc: Bedrock_plugin2, buttonLabel: "LeviLamina(LiteLoaderBDS)" },
        ],
        imgSrc: "",
        buttonLabel: "",
      },
    ],
  },
];
