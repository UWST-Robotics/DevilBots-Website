export interface Event {
    name: string;
    location: string;
    date: string;
    detailsLink?: string;
    streamLink?: string;
}

const UpcomingEvents: Event[] = [
    {
        name: "VEX-U World Championship",
        location: "Dallas, TX",
        date: "April 28-30, 2024",
        detailsLink: "https://roboticseducation.org/vex-robotics-world-championship/",
        streamLink: "https://www.vexworlds.tv/#/channels/yignzh2p52kbstxrrsl8"
    }
];
export default UpcomingEvents;