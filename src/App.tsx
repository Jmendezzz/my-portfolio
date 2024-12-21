import { NavBar } from './components/organisms';
import '@/utils/i18n'; 
import HeroSection from './features/hero/hero-section/HeroSection';
import ProjectSection from './features/projects/project-section/ProjectSection';
import WorkExperienceSection from './features/work-experience/work-experience-section/WorkExperienceSection';

function App() {
  return (
    <main>
      <NavBar/>
      <HeroSection/>
      <ProjectSection/>
      <WorkExperienceSection/>
    </main>
  );
}

export default App;
