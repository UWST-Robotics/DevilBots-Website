import HeroHeader from "../sections/Hero/HeroHeader.tsx";
import AboutUs from "../sections/AboutUs.tsx";
import JoinTeam from "../sections/JoinTeam.tsx";
import Footer from "../sections/Footer.tsx";
import ProjectsSection from "../sections/ProjectsSection.tsx";

export default function IndexPage() {
    return (
        <>
            <HeroHeader/>
            <AboutUs/>
            <ProjectsSection/>
            <JoinTeam/>
            <Footer/>
        </>
    )
}