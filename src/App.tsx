import HeroHeader from "./components/sections/HeroHeader.tsx";
import AboutUs from "./components/sections/AboutUs.tsx";
import JoinTeam from "./components/sections/JoinTeam.tsx";
import SponsorBar from "./components/sections/Sponsors/SponsorBar.tsx";
import Footer from "./components/sections/Footer.tsx";
import EventsPanel from "./components/sections/EventsPanel.tsx";
import useAnimateOnScroll from "./hooks/AnimateOnScroll.ts";

function App() {
    useAnimateOnScroll();

    return (
        <>
            <HeroHeader />
            <SponsorBar />
            <AboutUs />
            <EventsPanel />
            <JoinTeam />
            <Footer />
        </>
    )
}

export default App;