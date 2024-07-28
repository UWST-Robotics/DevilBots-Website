export interface Event {
    name: string;
    location: string;
    date: string;
    detailsLink?: string;
    streamLink?: string;
}

const UpcomingEvents: Event[] = [
    {
        name: "Backyard Bash",
        location: "UW-Stout (South Lawn)",
        date: "September 3, 2024",
        detailsLink: "https://connect.uwstout.edu/involvement/rsvp_boot?id=2262690"
    },
    {
        name: "VEX-U World Championship",
        location: "Dallas, TX",
        date: "May 6 - 14, 2025",
        detailsLink: "https://www.dallassports.org/2025-vex-robotics-world-championship/"
    }
];
export default UpcomingEvents;