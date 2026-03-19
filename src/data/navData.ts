import type { Language, NavLink } from "../types/appTypes";

export const navLinks: Record<Language, NavLink[]> = {
    eng: [
        { to: "/", label: "menu", end: true },
        { to: "/garden", label: "garden" },
        { to: "/about", label: "about" },
        { to: "/visit", label: "visit" },
        { to: "/reserve", label: "reserve" },
    ],
    spa: [
        { to: "/", label: "menú", end: true },
        { to: "/garden", label: "jardín" },
        { to: "/about", label: "quiénes somos" },
        { to: "/visit", label: "visitas" },
        { to: "/reserve", label: "reservas" },
    ],
};