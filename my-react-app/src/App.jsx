import ProfileSection from "./components/ProfileSection.jsx";
import LinksSection from "./components/LinksSection.jsx";
import Particles from './components/Particles.jsx';
import './App.css';

export default function App() {
    return (
        <div className="container">
        <div className="particles-container" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
              <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={90}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            <div className="content" style={{ position: 'relative', zIndex: 1 }}>
                <ProfileSection />
                <LinksSection />
            </div>

        </div>
        </div>
    )
}