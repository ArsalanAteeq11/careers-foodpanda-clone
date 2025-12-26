import ArticlesSection from "../components/HomePage/ArticlesSection";
import BeYourselfSection from "../components/HomePage/BeYourselfSection";
import HeroSection from "../components/HomePage/HeroSection";
import JobRolesSection from "../components/HomePage/JobRolesSection";
import MissionSection from "../components/HomePage/MissionSection";
import StatsSection from "../components/HomePage/StatsSection";
import WeLoveSection from "../components/HomePage/WeLoveSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <WeLoveSection />
      <BeYourselfSection />
      <StatsSection />
      <JobRolesSection />
      <ArticlesSection />
    </>
  );
};

export default Home;
