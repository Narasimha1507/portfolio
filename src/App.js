import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Import our fade wrapper
import { FadeInSection } from './components/FadeInSection'; 

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* Each section will fade in as it enters the viewport */}
      <FadeInSection>
        <Banner />
      </FadeInSection>

      <FadeInSection>
        <Skills />
      </FadeInSection>

      <FadeInSection>
        <Projects />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>

      <Footer />
    </div>
  );
}

export default App;
