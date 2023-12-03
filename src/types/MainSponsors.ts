export interface Sponsor {
    id: string;
    href: string;
    isText?: boolean;
}

export const OtherSponsors: Sponsor[] = [];

const MainSponsors: Sponsor[] = [
    { id: "Coex3D", href: "https://coex3d.com/" },
    { id: "Tek Pak", href: "https://www.tekpak.com/" },
    { id: "IMS", href: "https://innmacspe.com/" },
    { id: "Phillips-Medisize", href: "https://www.phillipsmedisize.com/" },
    { id: "Shape", href: "https://shapeproducts.com/" },
    { id: "StoutBread", href: "https://stoutbread.com/" }
];
export default MainSponsors;