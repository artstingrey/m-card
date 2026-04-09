import { MenuItem } from "./types";

export const mainMenu: MenuItem[] = [
  { href: { pathname: "/", hash: "how-it-work" }, labelKey: "Как это работает", key: "how-it-work"},
  { href: { pathname: "/", hash: "fees" }, labelKey: "Комиссии", key: "fees"},
  { href: { pathname: "/", hash: "faqs" }, labelKey: "FAQs", key: "faqs"},
  { href: { pathname: "/", hash: "partner-program" }, labelKey: "Партнёрская программа", key: "partner-program"}
];
