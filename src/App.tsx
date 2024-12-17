import { NavBar } from './components/organisms';
import '@/utils/i18n'; 
import HeroSection from './features/hero/hero-section/HeroSection';
import ProjectSection from './features/projects/project-section/ProjectSection';

function App() {
  return (
    <main>
      <NavBar/>
      <HeroSection/>
      <ProjectSection/>
    </main>
  );
}

export default App;
