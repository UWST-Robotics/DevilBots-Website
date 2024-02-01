export interface Event {
    name: string;
    location: string;
    date: string;
    detailsLink?: string;
    streamLink?: string;
}

const UpcomingEvents: Event[] = [
    {
        name: "Purdue VEX-U Regional",
        location: "West Lafayette, IN",
        date: "February 24, 2024",
        detailsLink: "https://www.robotevents.com/robot-competitions/college-competition/RE-VEXU-23-4090.html#general-info",
    },
    // Cancelled due to lack of teams
    /*
    {
        name: "SCTCC VEX-U Regional",
        location: "St. Cloud, MN",
        date: "March 2, 2024",
        detailsLink: "https://www.robotevents.com/robot-competitions/college-competition/RE-VEXU-23-3103.html#general-info",
        streamLink: "https://vexmn.com/livestream-options/"
    },
    */
    {
        name: "VEX-U World Championship",
        location: "Dallas, TX",
        date: "April 28-30, 2024",
        detailsLink: "https://roboticseducation.org/vex-robotics-world-championship/",
        streamLink: "https://www.vexworlds.tv/#/channels/yignzh2p52kbstxrrsl8"
    }
];
export default UpcomingEvents;