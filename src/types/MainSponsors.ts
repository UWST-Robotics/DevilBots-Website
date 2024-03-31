export interface Sponsor {
    id: string;
    href: string;
    large?: boolean;
}

const MainSponsors: Sponsor[] = [
    { id: "3M", href: "https://www.3m.com/" },
    { id: "Tek Pak", href: "https://www.tekpak.com/" },
    { id: "IMS", href: "https://innmacspe.com/" },
    { id: "Phillips-Medisize", href: "https://www.phillipsmedisize.com/", large: true },
    { id: "Shape", href: "https://shapeproducts.com/", large: true },
    { id: "Coex3D", href: "https://coex3d.com/", large: true },
    { id: "Polymaker", href: "https://www.polymaker.com/", large: true },
    { id: "StoutBread", href: "https://stoutbread.com/" },
];
export default MainSponsors;