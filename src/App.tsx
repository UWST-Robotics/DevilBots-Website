import HeroHeader from "./components/sections/HeroHeader.tsx";
import AboutUs from "./components/sections/AboutUs.tsx";
import JoinTeam from "./components/sections/JoinTeam.tsx";
import SponsorBar from "./components/sections/SponsorBar.tsx";
import Footer from "./components/sections/Footer.tsx";

function App() {
    return (
        <>
            <HeroHeader />
            <SponsorBar />
            <AboutUs />
            <JoinTeam />
            <Footer />
        </>
    )
}

export default App;