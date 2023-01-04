import { CustomLinkProps } from "../@types/CustomLink";
import github from "../assets/social-medias-logos/github.svg";
import linkedin from "../assets/social-medias-logos/linkedin.svg";
import download from "../assets/social-medias-logos/download.svg";
import whatsapp from "../assets/social-medias-logos/whatsapp.svg";
import instagram from "../assets/social-medias-logos/instagram.svg";

export const myLinks: CustomLinkProps[] = [
  {
    description: "Github",
    linkUrl: "https://github.com/kauan777",
    iconUrl: github,
  },
  {
    description: "Linkedin",
    linkUrl: "https://www.linkedin.com/in/kauancosta/",
    iconUrl: linkedin,
  },
  {
    description: "Currículo",
    linkUrl: "/kauan.pdf",
    iconUrl: download,
  },
  {
    description: "Whatsapp",
    linkUrl: "https://api.whatsapp.com/send?phone=5511985961895",
    iconUrl: whatsapp,
  },
  {
    description: "Portifólio",
    linkUrl: "https://www.instagram.com/ikauan.costa/",
    iconUrl: instagram,
  },
];
