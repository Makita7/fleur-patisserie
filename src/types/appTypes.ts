

export type Language = "eng" | "spa";

export type NavLink = {
    to: string;
    label: string;
    end?: boolean;
};

export type SectionHash = "#floral-pastries" | "#herb-desserts" | "#seasonal-fruit" | "#drinks";

export type Food = {
    title: string,
    price: number,
    description: string,
}

export type ListFoods = {
    eng: Food[]
    spa: Food[]
}

type VisitContent = {
    title: string,
    textHeader: string,
    titlePlace: string,
    textPlace: string,
    titleSeating: string,
    textSeating: string,
    titleBotanical: string,
    textBotanical: string,
    linkText: string,
    titlePlan: string,
    textPlan: string,
};

export type Garden = {
    title: string,
    textHeader: string,
    titleUnwind: string,
    textUnwind: string,
    titleSeason: string,
    textSeason: string,
    titleVisit: string,
    textVisit: string,
}

export type AboutData = {
    title: string,
    textHeader1: string,
    textHeader2: string,
    titleOurCoffee: string,
    textOurCoffee1: string,
    textOurCoffee2: string,
    titleOurPastries: string,
    textOurPastries1: string,
    textOurPastries2: string,
}

export type VisitDataType = Record<Language, VisitContent>;

export type FooterLabels = {
    subtitle: string;
    hours: string;
    monFri: string;
    satSun: string;
    locations: string;
};

export type ReserveLabel = {
    address: string,
    hours: string,
    monFri: string,
    satSun: string,
    phone: string,
    reserveBtn: string,
}

export type LocationsData = {
    location:string,
    address:string,
    hours: {
        MonFri: string,
        SatSun: string,
    },
    phone: string,
    link: string,
}