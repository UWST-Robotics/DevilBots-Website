import HeroHeader from "./components/sections/Hero/HeroHeader.tsx";
import AboutUs from "./components/sections/AboutUs.tsx";
import JoinTeam from "./components/sections/JoinTeam.tsx";
import Footer from "./components/sections/Footer.tsx";
import EventsPanel from "./components/sections/Events/EventsPanel.tsx";

function App() {
    return (
        <>
            <HeroHeader />
            <AboutUs />
            <EventsPanel />
            <JoinTeam />
            <Footer />
        </>
    )
}

export default App;