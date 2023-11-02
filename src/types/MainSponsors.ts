export interface Sponsor {
    id: string;
    href: string;
    isText?: boolean;
}

export const OtherSponsors: Sponsor[] = [];

const MainSponsors: Sponsor[] = [
    { id: "Coex3D", href: "https://coex3d.com/" },
    { id: "Tek Pak", href: "https://www.tekpak.com/" }
];
export default MainSponsors;