import Section from './components/atoms/section/Section';
import { NavBar } from './components/organisms';
import '@/utils/i18n'; 
import HeroSection from './features/hero/hero-section/HeroSection';

function App() {
  return (
    <main>
      <NavBar/>
      <HeroSection/>
    </main>
  );
}

export default App;
